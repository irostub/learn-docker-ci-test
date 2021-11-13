# Docker CI 환경 테스트

## [learn-docker](https://github.com/irostub/learn-docker) repository 의 [04-docker-fullstack-app](https://github.com/irostub/learn-docker/tree/master/04-docker-fullstack-app) Directory 에서 파생되었습니다.

<br>

## CI 환경 구성

- Repository - Github
- Continuous Integeration Tool - Travis CI
- Production Server - AWS EB  
  <br>

## 테스트 & 배포 과정

1. Github repository 에 소스코드를 push
2. Travis CI 에서 소스코드를 동기화
3. 가져온 소스코드의 테스트 코드를 .travis.yml 에 작성한 스크립트 대로 실행
4. 테스트 성공 시 운영환경 이미지를 .travis.yml 에 작성한 after_success 를 참조하여 빌드
5. 빌드 된 이미지를 Docker Hub 로 전송 .travis.yml after_success 참조
6. AWS EB 에서 Docker Hub 의 이미지를 가져온 후 실행
