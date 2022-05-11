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
