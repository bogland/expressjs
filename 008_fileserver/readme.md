- 비인증 회원도 특정 폴더는 접근 가능
- 인증 회원만 특정 폴더 url로 접근
- 공유 url을 통해서 비인증 회원도 접근 가능
- 파일 업로드 & 다운로드 서버 분리
- 대용량 업로드 가능

## multer 기본 사용법

https://www.a-mean-blog.com/ko/blog/%EB%8B%A8%ED%8E%B8%EA%B0%95%EC%A2%8C/_/Node-JS-Multer%EB%A1%9C-%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C

## 싱글, 멀티 파일 전송

> yarn add multer

```
익명 파일 업로드시
var upload = multer({ dest: "uploadedFiles/" });

router.post("/uploadFile", upload.single("attachment"), function (req, res) {
  res.render("confirmation", { file: req.file, files: null });
});

router.post("/uploadFiles", upload.array("attachments"), function (req, res) {
  res.render("confirmation", { file: null, files: req.files });
});
```

```
파일 이름 지정 업로드
var storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploadedFiles/");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}__${file.originalname}`);
  },
});

var uploadWithOriginal = multer({ storage: storage });

router.post(
  "/uploadOriginals",
  uploadWithOriginal.single("attachment"),
  function (req, res) {
    res.render("confirmation", { file: req.file, files: null });
  }
);

router.post(
  "/uploadOriginals",
  uploadWithOriginal.array("attachments"),
  function (req, res) {
    res.render("confirmation", { file: null, files: req.files });
  }
);
```

## 클라이언트 멀티 전송시

```
<form action="/uploadFiles" enctype="multipart/form-data" method="post">
  <input type="file" name="attachments" multiple>
  <button type="submit" class="btn btn-primary">Upload</button>
</form>
```
