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

## Join을 위한 Model 관계 정의

https://c3epmos.tistory.com/59  
참조 당하는 테이블에 hasMany, sourcekey로 정의  
참조를 하는 테이블에 belongsTo, targetkey로 정의

```
  Member.associate = function (models) {
    Member.hasMany(models.board, {
      foreignKey: "userId",
      sourcekey: "id",
    });
  };

  Board.associate = function (models) {
    Board.belongsTo(models.user, {
      foreignKey: "userId",
      targetkey: "id",
    });
  };
```

## sequelize join 방법

```
  const res = await Model.user.findAll({
    include: [
        {
          model: Model.board,
          attributes: ['userId']
        }
    ],
    where: {id},
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
