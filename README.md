<h3>MyCustomPage</h3>
<hr/>
<h4>여는 말</h4>

**나만의 크롬 시작화면 만들기** 프로젝트의 logic을 **Javascript** 대신 <br/>
**TypeScript**를 사용해서 개발하는 과정을 담은 Git Repository입니다. <br/><br/>
원래도 이 프로젝트를 끝마치고 다음 단계로 넘어가려고 했지만 <br/>
현재 목표가 **"2024년 안에 신입 프론트엔드 개발자로 취업하기"** 라는 점과 <br/> TypeScript라는 언어에 조금이라도 빨리 익숙해지고 싶은 마음에 <br/>
이 프로젝트를 진행하게 되었습니다. <br/><br/>
이전에 작업하던 프로젝트의 Git Repository 주소는 바로 아래 줄에 첨부했습니다.<br/>
이 외에도 개인적으로 개발 공부 내용을 정리해두는 블로그 주소도 같이 첨부하겠습니다.
<br/><hr/>

<h4>Reference</h4>

**참고한 강의**: &nbsp;<a href="https://inf.run/sJzt">웹 프론트엔드를 위한 자바스크립트 첫 걸음 (인프런)</a><br/>

**이전 작업물 Git 주소**: &nbsp; <a href="https://github.com/Rayched/ChromeCustomPage">나만의 크롬 시작화면 만들기 (2023.07.29 ~ 2023.08.29)(중단)</a>

**개인 블로그**: <a href="https://rclogstorage.tistory.com/">개발 공부 노트 (티스토리)</a>
<hr/><br/>

# 2023.09.11 월요일 작업 내용
 - 프로젝트 Git 주소 연결, TypeScript 관련 세팅
 - npm run 명령어와 관련된 내용 정리해서 블로그에 업로드 (현재 비공개 처리 중)
 - ts 파일 정상적으로 컴파일이 되는 지 Test 진행 (Hello World 출력하기) (성공)
<hr/><br/><br/>

# 2023.09.12 화요일 작업 내용
 - **첫번째 Commit("오늘 날짜와 요일을 Console에 출력")** <br/>
   => 현재 날짜와 요일을 console에 출력하는 Code 작성<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      오늘 날짜와 요일이 Chrome 개발자 도구에 출력되는 것을 확인했다. <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      (출력 값: 9 12 2) <br/><br/>
   => 여기서 <b>'9', '12'</b>는 오늘 날짜를, <b>'2'</b>는 요일을 뜻한다. <br/>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Week라는 배열에 <b>'화요일'</b>이라는 문자 값이 week 배열 2번 칸에 저장됐기 때문에 <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      출력되는 값 또한 해당 요일이 저장된 배열 칸의 번호가 나온다. (0번부터 Start)
<hr/><br/><br/>
