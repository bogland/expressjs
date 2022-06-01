# expressjs s3 연동
aws-sdk 와 multer-s3 버전 맞춰야함(2면 2, 3이면 3)  
https://donghunee.github.io/study/2019/08/02/node/
https://velog.io/@sangeun-jo/NodeJS-AWS-S3-%EB%B2%84%ED%82%B7-%EC%97%B0%EB%8F%99

## s3 설정  
s3 버킷 만들고 public으로 권한 설정 해야함  
https://velog.io/@jinseoit/AWS-S3-bucket

## s3 awsconfig.json 설정
accessKeyId 및 secretAccessKey 발급  
https://supsystic.com/documentation/id-secret-access-key-amazon-s3/  

## 에러
> The request signature we calculated does not match the signature you provide

accesskeyId 및 secretAccessKey 다시 발급

> Access Denied

IAM - 사용자 - 권한 추가 - 그룹에 사용자 추가 - AmazonS3FullAccess

>The bucket does not allow ACLs  

s3 - 버킷 - 권한 - 객체 소유권 - 편집 - ACL 활성화됨
https://velog.io/@developerjhp/s3-%EB%B0%B0%ED%8F%AC%EC%9E%90%EB%8F%99%ED%99%94%EC%8B%9C-The-bucket-does-not-allow-ACLs