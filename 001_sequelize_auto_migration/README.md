# expressjs

expressjs , mysql , sequelize orm 연습

### orm auto migration 링크

sequelize-cli를 설치해야 cli상에서 sequelize 명령어를 사용 가능  
yarn add sequelize-cli -g

초기 DB 스키마를 모델 가져오는 방법  
https://inpa.tistory.com/entry/ORM-%F0%9F%93%9A-%EC%8B%9C%ED%80%84%EB%9D%BC%EC%9D%B4%EC%A6%88-%EC%9E%90%EB%8F%99-%EC%83%9D%EC%84%B1-sequelize-auto-%EB%AA%A8%EB%93%88-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

Model 변경 사항을 자동으로 감지해서 migration 해주는 방법  
https://code-examples.net/ko/q/1a8bd99

적용 실패... 모델 변경했음에도 "no change" 뜸  
yarn add sequelize-auto-migrations-v2 사용
yarn add mysql2

```
cd app
npx sequelize init
node ../node_modules/sequelize-auto-migrations-v2/bin/makemigration --name "init2"
node ..\node_modules\sequelize-auto-migrations-v2\bin\runmigration
```

runmigration에선 에러 뜸  
npx sequelize db:migrate --env development 명령어로 마이그레이션 처리 완료
