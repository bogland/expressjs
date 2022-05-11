```
Figure.findAll({
     include: [
        {
          model: Drawing,
          attributes: ['title', 'description']
        }
     ],
     where: {figure 테이블에서 찾고자 원하는 조건을 넣어줬다},
     transaction
     // transaction을 적용했는데, 적용을 안하고자 한다면 이 부분은 빼면 된다.
});
```
