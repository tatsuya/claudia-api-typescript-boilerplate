# claudia-api-typescript-boilerplate

[TypeScript](https://www.typescriptlang.org/) boilerplate to create AWS API Gateway Web interfaces and their underlying Lambda projects using [Claudia API Builder](https://claudiajs.com/claudia-api-builder.html).

Install dependencies:

```
npm install
```

Install Claudia.js in your global path:

```
npm install -g claudia
```

Run the TypeScript build:

```
npm run build
```

Create the initial AWS Lambda function:

```
claudia create --region us-east-1 --api-module dist/index
```

Deploy a new version of the AWS Lambda function:

```
claudia update
```
