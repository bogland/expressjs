## 환경 구성

- tsoa + sequelize + expressjs

  > yarn add body-parser express multer swagger-ui-express tsoa  
  > yarn add nodemon ts-node typescript concurrently @types/body-parser @types/express @types/multer @types/node @types/swagger-ui-express -D

  > npx tsc --init

```
tsconfig.json 변경
  "experimentalDecorators": true,
  "outDir": "build",
  "resolveJsonModule": true,
```

```
package.json 추가
  "dev": "concurrently \"nodemon\" \"nodemon -x tsoa spec-and-routes\"",
  "build": "tsoa spec-and-routes && tsc",
  "start": "node build/src/server.js"
```

### DB설정 추가

> yarn add mysql2 sequelize
> yarn add sequelize-cli sequelize-auto-migrations-v2 -D
> cd src
> npx sequelize init

### src/models/model.js 파일 추가

```
module.exports = (sequelize, Sequelize) => {
  const Board = sequelize.define("board", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
    },
  });

  return Board;
};
```

### src/models/board.js 파일 추가

```
module.exports = (sequelize, Sequelize) => {
  const Board = sequelize.define("board", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
    },
  });

  return Board;
};
```

### DB 생성

> node ../node_modules/sequelize-auto-migrations-v2/bin/makemigration --name "init"
> npx sequelize db:migrate --env development

## sequelize join 방법

```
Figure.findAll({
     include: [
        {
          model: Drawing,
          attributes: ['title', 'description']
        }
     ],
     where: {figure 테이블에서 찾고자 원하는 조건을 넣어줬다},
});

```

## transaction 주의

- Insert Update뿐만 아니라 Select 할때도 해주자

```
 models.sequelize.transaction(t => {
           return models.User.create(userData, {transaction: t}))
          .then(user => {

            // 추가된 User가 속한 Group 정보 조회
            modles.Group.findOne({
                id: user.GroupId,
                transaction: t
            }))
                .then(group => {

                  // 응답
                  return res.json({
                    user: user,
                    group: group
                  });
                });
          });
     }
```
