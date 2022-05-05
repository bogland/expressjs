### nodemon 폴더 감시

"start":"nodemon --watch index.js --watch app"

### mysql 유저 생성 및 권한 부여

```
select user, host from user;

CREATE USER '아이디'@'%' IDENTIFIED BY '비밀번호';
grant all privileges on 스키마명.* to '아이디'@'%' WITH GRANT OPTION;
```

### sequelize migration

yarn add sequelize-auto-migrations-v2 사용
yarn add mysql2

```
cd app
npx sequelize init
node ../node_modules/sequelize-auto-migrations-v2/bin/makemigration --name "init2"
npx sequelize db:migrate --env development
```

### sequlize model 접근시 주의사항

model에 정의된 이름으로 접근해야함

```
-- models/member.js
module.exports = (sequelize, Sequelize) => {
    const Member = sequelize.define("member", {

> member로 정의되어 있으므로 controller에서 member로 빼내야함
const Member = require("../models").member;
```
