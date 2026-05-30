# Personal Portfolio

Portfolio site for Resche Balaganesh, built with React and deployed on AWS.

**Live site:** [portfolio.rescheportfolio.com](https://portfolio.rescheportfolio.com)

## Structure

```
website/          React frontend
Infrastructure/   AWS CDK stack
```

**`website/`** — Create React App project. Components live in `src/components/` (Hero, About, Experience, Projects, etc.). Styles are in `App.css`. Static assets like the resume and project images go in `public/assets/`.

**`Infrastructure/`** — CDK stack that provisions S3, CloudFront, Route 53, and deploys the React build to the bucket on `cdk deploy`.

## Local development

```bash
cd website
npm install
npm start
```

## Deploy

```bash
cd website
npm run build

cd ../Infrastructure
npx cdk deploy
```

The stack uploads `website/build` to S3 and serves it through CloudFront at `portfolio.rescheportfolio.com`.

## Stack

- **Frontend:** React, CSS
- **AWS:** S3, CloudFront, Route 53, ACM, CDK
