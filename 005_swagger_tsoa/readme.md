### tsoa 환경 설정

https://tsoa-community.github.io/docs/getting-started.html

### nodemon, ts-node

https://tsoa-community.github.io/docs/live-reloading.html#reloading-code

> yarn add -D nodemon ts-node concurrently

```
nodemon.json 생성
{
  "exec": "ts-node src/server.ts",
  "watch": ["src"],
  "ext": "ts"
}
```

- concurrently 모듈
  -> package.json scripts 명령어 여러개를 좀더 간결하게 만들어줌

```
ex)
npm run watch-js & npm run watch-css
-> "concurrently \"watch-js\" \"watch-cs\""
```

```
"scripts": {
    "dev": "concurrently \"nodemon\" \"nodemon -x tsoa spec-and-routes\"",
    "build": "tsoa spec-and-routes && tsc",
    "start": "node build/src/server.js"
}
```

### Swagger 연동

```
import express, { Response as ExResponse, Request as ExRequest } from "express";
import swaggerUi from "swagger-ui-express";

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import("../build/swagger.json"))
  );
});
```

- dynamic json load option
  런타임상에서 json을 load할 수 있도록

```
tsconfig.json상에서 선언
"resolveJsonModule": true,
```
