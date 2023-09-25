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
      출력되는 값 또한 해당 요일이 저장된 배열 칸의 번호가 나온다. (0번부터 Start)<br/><br/>

 - **두번째 Commit ("month, date를 좀 더 깔끔하게 출력하도록 Code 수정")** <br/>
   => 오늘 날짜와 요일이 <b>'9 12 2'</b>와 같은 형식으로 출력됐었다. <br/>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   이런 식으로 출력을 해도 상관은 없지만 좀 더 보기 깔끔하게 <br/>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   숫자 10 미만의 월月, 일日의 값에 0을 붙여서 출력하도록 코드를 수정했다. <br/><br/>

   => <b>modifyNumber</b>라는 임의의 함수를 만들고 <br/>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   매개변수 num에 전달된 값이 10보다 작으면 <b>"0"</b>을 붙여서 반환하고 <br/>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   전달된 값이 10보다 크면 그냥 그대로 <b>num의 값</b>을 반환하는 기능을 추가했다. <br/><br/>
  
   => 이후에 오늘 날짜와 요일을 표시하는 <b>getNowDate 함수</b> 내부의 <br/>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   현재 월, 일을 반환하는 Date 객체의 getMonth와 getDate 메서드의 반환값을 <br/>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   modifyNumber 함수의 인자 값으로 전달하도록 코드를 수정하였다. <br/><br/>

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   이후 프로그램을 실행해서 현재 날짜와 요일이 <br/>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   아래와 같은 형태로 출력되는 것을 확인할 수 있었다. <br/>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **출력 값: 09 12 2**
<hr/><br/><br/>

# 2023.09.20 수요일
<h4>"dateElement 객체 null 경고 issue 발생 (해결방안 탐색 중)"</h4>

 - **getNowDate()** 함수로 가져온 오늘 날짜 정보를 <br/>
   웹 페이지의 날짜를 표시하는 요소에 반영하는 **setNowDate()** 함수 추가 <br/>

 - getNowDate() 함수에서 호출했을 때 <br/>
      setNowDate()의 매개변수와 인자간 타입 불일치 error 발생 <br/>

      오늘 날짜 정보를 가져오는 date 객체의 method's return 값을 <br/>
      항상 숫자로 표시하기 위해서 추가한 modifyNumber() 함수가 문제였기에 <br/>
      해당 함수를 지우니 타입 불일치 문제가 해결됐다. <br/><hr/>

<h4>"'object' is possibly 'null' 문제 해결"</h4>

 - const로 선언한 변수 **'dateElement'** 가 null일 수도 있다는 경고 발생함. <br/>
   해결법을 찾기 위해서 구글링을 하면서 다른 개발자 분들이 개인 블로그에 정리한 <br/>글을 몇개 읽어봤지만 정리해둔 내용을 이해하기 힘들어서 포기할까 하다가 <br/>우연히 보게된 다른 개발자 분이 Github 블로그에 정리해둔 글에서 해결법을 찾았고 <br/>이를 내가 작성한 코드에 적용을 하니 문제가 해결됐다. <br/>
   해결과정 <a href="https://rclogstorage.tistory.com/116">'object' is possibly 'null' 문제 해결하기</a>
<hr/>

<h4>"setNowDate 함수의 매개변수 month, date 타입 불일치 문제 해결"</h4>

- **setNowDate** 함수의 매개변수 month, date의 타입을 number 단일에서 <br/>
  union 타입으로 변경하니 해결됐다. (**number** => **number | String** )
<hr/><br/>

# 2023.09.25 월요일
<h4>크롬 시작화면 - 시계 Part 완성</h4>
