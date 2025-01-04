import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3Deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as certificateManager from 'aws-cdk-lib/aws-certificatemanager';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as targets from 'aws-cdk-lib/aws-route53-targets';


export class PersonalWebsiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //create s3 bucket
    const bucket = new s3.Bucket(this, 'PersonalWebsiteBucket', {
      bucketName: "personal-website-resche",
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html",
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      blockPublicAccess: {
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false,
      }
    });
    
    //upload code to bucket
    new s3Deploy.BucketDeployment(this, 'PersonalWebsiteDeploymnt',{
      sources: [s3Deploy.Source.asset("./build")],
      destinationBucket: bucket,
      //role: deploymentRole, // Specify the IAM role with necessary permissions
    })

    const domainName = 'rescheportfolio.com';
    const subDomain = 'portfolio.rescheportfolio.com'

    const zone = route53.HostedZone.fromLookup(this,'zone',{
      domainName: domainName
    })

    const identity = new cloudfront.OriginAccessIdentity(this, 'id')

    bucket.addToResourcePolicy(new iam.PolicyStatement({
      actions: ["s3:GetObject"],
      resources: [bucket.arnForObjects("*")],
      principals: [new iam.CanonicalUserPrincipal(identity.cloudFrontOriginAccessIdentityS3CanonicalUserId)]
  }))

    const distribution = new cloudfront.CloudFrontWebDistribution(this,'cloudfront',{
      originConfigs:[{
        s3OriginSource:{
          s3BucketSource: bucket,
          originAccessIdentity: identity
        },
        behaviors: [{
          viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          allowedMethods: cloudfront.CloudFrontAllowedMethods.GET_HEAD,
          compress: true,
          isDefaultBehavior: true
        }]
      }],
      viewerCertificate: cloudfront.ViewerCertificate.fromAcmCertificate(
        certificateManager.Certificate.fromCertificateArn(this, "my_cert", "arn:aws:acm:us-east-1:905418307151:certificate/08c05c4b-d07a-4771-8969-3ebb75be6dcc"),
        {aliases: ['portfolio.rescheportfolio.com']} 
        ),
    defaultRootObject:"index.html",
    
    })

    new route53.ARecord(this,'a-record',{
      recordName: subDomain,
      zone,
      target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution))

    }).node.addDependency(distribution)
  }
}










