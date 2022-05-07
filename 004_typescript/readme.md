## typescript express 만들기

https://www.pullrequest.com/blog/intro-to-using-typescript-in-a-nodejs-express-project/

> npm init -y  
> npm install express  
> npm install typescript ts-node @types/node @types/express --save-dev
> npx tsc --init

```
outDir : vanilla javascript 경로
rootDir : typescript file 경로
esModuleInterop : common js로된 object도 import할 수 있게 해줌
```

js로 변환 명령어

> npx tsc --project ./

ts로 바로 실행 명령어

> npx ts-node ./index.ts

## nodemon 연동

nodemon.json 생성

```
{
"watch": ["**/*.ts"],
"ignore": ["**/*.spec.ts"],
"exec": "npx ts-node ./index.ts"
}
```

명령어 추가

```
"build": "tsc --project ./",
"start": "nodemon"
```
