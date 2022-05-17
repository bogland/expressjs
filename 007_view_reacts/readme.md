## jsx views 설치

yarn add express-react-views react react-dom express

```
app.set("views", \_\_dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.get("/", require("./routes").index);
```

views 폴더에 index.js 추가

```
var React = require('react');

function HelloMessage(props) {
  return <div>This is JSX Style Html {props.name}</div>;
}

module.exports = HelloMessage;
```

routes 폴더에 index.js 추가

```
exports.index = function (req, res) {
  res.render("index", { name: "John" });
};
```

### props 넘기기

res.render("index", { name: "John" });

### props 처리

<div>This is JSX Style Html {props.name}</div>;
