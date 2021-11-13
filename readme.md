# Docker CI 환경 테스트

[learn-docker](https://github.com/irostub/learn-docker) repository 에서 파생되었습니다.

Travis CI 를 통해 CI 환경을 구성하였습니다.

1. Github repository 에 소스코드를 push
2. Travis CI 에서 소스코드를 가져옴
3. 가져온 소스코드의 테스트 코드를 .travis.yml 에 작성한 스크립트 대로 실행
4. 테스트 성공 시 운영환경 이미지를 .travis.yml 에 작성한 after_success 를 참조하여 빌드
5. 빌드 된 이미지를 Docker Hub 로 전송 .travis.yml after_success 참조
6. AWS EB 에서 Docker Hub 의 이미지를 가져온 후 실행
