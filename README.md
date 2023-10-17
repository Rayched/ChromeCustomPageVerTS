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
<h4>현재 시간을 가져오는 getNowTime 함수 생성, 기본 틀 작성</h4>

- 현재 시간을 가져오는 **getNowTime** 함수를 생성 <br/>
  Date 객체에서 가져온 현재 시간 정보를 console에 출력 시도 <br/>
  정상적으로 출력되는 것을 확인하였음. <br/>
  추가적으로 TypeScript 컴파일러 설정을 변경하였다. <br/>

<hr/>
<h4>현재 시간을 웹 페이지에 출력하기</h4>

- getNowTime 함수로 가져온 현재 시간 정보를 <br/>
  HTML 문서 상에 출력하는 **setNowTime** 함수 생성 <br/>

- 한 자릿수 숫자를 두 자릿수로 바꿔서 출력하는 modifyNumber 함수는 <br/>
  인자로 전달된 값이 한 자릿수면 두 자릿수 숫자로 변환한다. <br/>
  단, 이때 변환되는 숫자는 number가 아니라 string이다. <br/>

- 따라서 외부에서 setNowTime을 호출할 때 <br/>
  매개변수가 number 단일 타입이면 Type 불일치 issue가 발생하므로 <br/>
  매개변수의 Data Type을 **number|string** 인 **union type**으로 설정하였다.

- 추가적으로 **timeElement 객체**가 null 이외의 type이란 것을 알리기 위해서 <br/>
  **setNowTime 함수** 상단에 null을 걸러내는 logic을 추가하였다. 
<hr/>
<h4>웹 페이지에 css style Setting</h4>

- 오늘의 날짜와 현재 시간을 웹 페이지에 출력하는 단계를 마치고 <br/>
  이후 웹 페이지에 CSS Style을 적용하였다. <br/>
  CSS Code를 작성 후 확인해보니 예제와 달리 <br/>
  **날짜와 시간 요소가 겹쳐서 나오는 issue 발생** <br/>

- font 설정을 건드려봐도 문제가 해결되지 않아서 낙심하다가 <br/>
  혹시나해서 margin 영역의 top 부분의 크기를 조정하는 코드를 수정 시도 <br/>
  **'margin-top: -35px;'** 속성 값을 조금씩 조정하다보니 두 요소가 겹치지 않게됨 <br/> 이후 해당 속성을 삭제해도 문제가 없다는 것을 알게됐다.

- 나름대로 CSS Style을 분석해보니 **margin-top: -35px;** 이 추가된 이유를 알게됐다. <br/>
  예제에서 날짜 요소의 font size는 large, 시간 요소는 xlarge로 설정을 하고 <br/>
  시간 요소의 margin-top 영역을 -35px 만큼 줄이는 코드를 추가했는데 <br/><br/>
  그 이유가 시간 요소의 font size가 날짜 요소의 font size보다 약 3배정도 크기때문에 <br/>
  그대로 두면 두 요소 간의 간격이 지나치게 벌어지게된다. <br/>
  이는 원하는 형태가 아니므로 시간 요소의 margin-top 크기를 조정함으로써 <br/>
  두 요소 간의 간격을 줄였다.

- 단, 내가 작성한 CSS 코드에서 날짜와 시간 요소의 font-size의 크기 차이는 <br/>
  그렇게까지 크지는 않기 때문에 그대로 똑같이 CSS Style을 적용시키면 <br/>
  날짜, 시간 두 요소가 겹쳐서 출력되는 issue가 발생하게된다. <br/><br/>
  물론 이것도 내가 원하는 형태는 아니기도 하고, margin-top 속성을 통해서 <br/>
  두 요소 간 간격을 조정할 정도도 아니기 때문에 해당 속성을 삭제하는 것으로 <br/>
  날짜, 시간 요소가 겹쳐서 나오는 issue를 해결할 수 있었다.
  <hr/>

<h4>시계 logic 수정, 실시간 시간 변화</h4>

- 지금까지 작성한 Clock.ts(Clock.js)의 시계 logic의 시간은 새로고침을 해야만 <br/>
  현재 시간이 될 수 있었다. (실시간으로 변환이 되지 않았던 상태)

- 이를 JS의 내장 함수인 **setIntervel()** 함수를 활용해서 해결할 수 있었다. <br/>
  (매개변수로 전달된 함수를 지정한 시간 간격으로 반복해서 실행한다.) <br/>
  
- 현재 시간을 가져오는 **getNowTime()** 함수를 인자로 전달하고 <br/>
  시간 간격을 1초 (1000)으로 설정하였다. <br/>

 - 이제 setInterval() 함수는 getNowTime() 함수를 1초 간격으로 반복해서 호출하게된다.<br/>
  그리고 이를 통해서 웹 페이지의 시계또한 실시간으로 시간 변화가 가능해졌다. <br/>
  즉, 매번 새로고침을 할 필요없이 웹 페이지에 현재 시간이 반영된다.
  <hr/><br/>

  # 2023.09.30 토요일 ~ 2023.10.01 일요일

  <h3>2023.09.30 토요일 (출발 전)</h3>

  <h4>1. 검색창 구현하기 </h4>
  
  - 구글 검색창을 구현하고, 검색어를 입력하면 <br/>
    해당 검색어의 구글 탐색 결과를 보여준다.

  - Input 요소를 참조하는 객체인 SearchInput <br/>
    SearchWord 변수에서 SearchInput의 Value Property를 참조하지 못하는 Error 발생 <br/> 해결법은 일요일 복귀 후에 탐색할 예정 <br/>
<hr/>

<h3>2023.10.01 일요일 (복귀 후)</h3>

<h4>검색창 동작 logic 구현 및 CSS 스타일 지정</h4>

- 검색창이 동작할 logic인 **Search.ts**의 기본적인 코드를 작성하였다. <br/>
  단, 시간적인 이슈와 피로도가 누적된 것도 있기 때문에 TypeScript 코드만 작성해두고 <br/>
  현재 발생한 Error인 **ts2339 Error**는 내일 해결하는 것으로 결정하였다.

- 기본적인 logic(TypeScript로 코드짜는 중)과 CSS Style 지정까지 완료하였음. <br/>
  Error를 해결한 후에 Search.ts를 js 파일로 컴파일하고 <br/>
  검색창이 원하는대로 정상적으로 동작하는 지를 확인한 다음<br/>
  문제가 없으면 그대로 Git Repository에 Upload할 것 <br/>
  (작업과정 중간중간에 계속해서 Github에 업로드하기는 할 것이다.)
<hr/><br/>

# 2023.10.02 월요일

<h4>TS2339 Error 해결</h4>

- **TS2339(property does not exist on type)** Error를 해결하였음. <br/>
  Index.html의 '.Search_Input'이라는 class를 가진 Input 요소를 참조하는 <br/>
  상수 **SearchInput**의 타입을 **HTMLInputElement**으로 단언하는 방법을 통해 <br/>
  검색 결과로 넘어가는 기능을 하는 함수 ShowSearchResult의 지역 변수인 SearchWord가 <br/> SearchInput 객체의 value property를 참조하지 못하는 문제를 해결하였음. <br/>

- EnterKey 함수의 매개변수로 들어간 event의 타입을 Event로 명시한 상태에서 <br/>
  event 객체의 code property와 관련된 이슈가 발생하였음. <br/>
  다른 변수를 선언하고, 이중 표명으로 이벤트 타입을 명시하는 방법을 사용해봐도 <br/>Error가 해결되지 않다가 event의 타입을 KeyboardEvent로 명시하니 해결됐다. <br/>

- **TS2339(property does not exist on type)** Error를 해결하기는 했지만 <br/>
  이게 왜 어떤 원리로 문제가 해결됐는 지를 이해하지는 못했다. <br/>
  어떤 원리로 Error가 해결됐는지를 알아야만 비로소 내 것이라고 할 수 있다. <br/>
  해결된 이유를 알지 못하면 다음에 같은 Issue가 발생해도 <br/> 
  내 힘으로 해결하는 것이 쉽지 않을 것이다. <br/>
  그리고 그런 상황을 미연에 방지하기 위해서 Error가 해결된 이유를 알아야만 한다.

- 검색어를 입력하고, Enter를 눌러도 원하는 검색 결과가 나오지 않은 Issue 발생 <br/>
  (**'{SearchWord}'를 검색한 결과가 나오고, 원하는 검색 결과는 나오지 않음**) <br/>

  입력한 검색어를 저장하는 변수 **SearchWord**의 값(url)을 확인해보니 <br/>
  '**${SearchWord}**'가 아니라 **{SearchWord}** 로 된 상태이기 때문에 발생한 Issue로<br/> 

  SearchWord의 값(url)을 수정하고, 검색어를 입력하고 Enter 키를 누르니 <br/> 
  입력한 검색어의 구글 검색 결과가 나오는 것을 확인할 수 있었다. <br/>
  ts2339 Error 해결과정은 티스토리 블로그에 정리해뒀다.
  아래 링크를 참고하길 바란다.

  <b>해결 과정: <a href="https://rclogstorage.tistory.com/117">타입 단언 (Type Assertion)</a></b>
  <hr/><br/>


  # 2023.10.07 토요일

  **작업 내용: 북마크 작업 시작**

  <h4>북마크 요소를 만들고, CSS Style 설정 완료</h4>

  - 북마크를 열고, 닫는 기능을 하는 **[북마크 열기]**, **[북마크 닫기]** 버튼과 <br/>
    웹 페이지에서 추가한 북마크를 출력하는 Part인 북마크 바 본체를 구현하였다. <br/>
    
    단, CSS 스타일만 적용한 상태이기 때문에 아직 동작하지는 않는다. <br/>
    (Interaction을 구현하지 않은 상태)


  <h4>북마크 바 열기/닫기 기능 '일단은' 구현 완료</h4>

  - **[북마크 열기]** 버튼을 클릭하면, 북마크 바가 열리고 <br/>
    **[북마크 닫기]** 버튼을 클릭하면, 북마크 바가 닫히는 기능을 구현하였다. 
  
  - 일단은 기능 구현을 완료하였고, 컴파일도 문제없이 진행은 된 상태이다. <br/>
    (Bookmark_Toggle.js 파일 참고) <br/>

    하지만 TypeScript로 작성한 코드와 ts Compliler를 통해서 컴파일된 <br/>
    js file의 코드를 비교해보니, 소스코드가 다소 이질적인 형태로 변환된 상태 <br/>
    (일단 동작은 하지만, 컴파일된 소스코드를 내가 이해하지 못하기에 의미는 없다.)

  - 아마도 원본 소스코드를 이상하게 작성했기 때문에 이런 문제가 발생한 것 같다. <br/>
   북마크 바 버튼 Toggle 부분에서 issue가 있기 때문에 <br/>
   이 부분을 아예 새로운 형태로 구현을 해야할 필요성이 있을 것 같다. <br/>

  - 버튼 toggle 부분 logic을 새로 구현하기 전에 JavaScript의 Event에 대해 <br/>
    공부를 해두고 버튼 toggle logic을 구현해야할 것 같다. <br/>
    **이번에는 정답지가 없는 소스코드 구현이다.**

  <h4>컴파일 관련 issue 해결</h4>

  - index.html의 북마크 열기, 닫기 버튼 객체를 가져오고, <br/>
    addEventLisner()를 실행하는 Code에서 issue가 있었고 <br/>
    이러한 issue는 간단한 수정을 통해서 해결할 수 있었다.

  - TypeScript는 타입 체크를 엄격하게 하는 언어로 <br/>
    강의에서 제시된 코드를 그대로 적용을 해도 문제는 생기지 않지만 <br/>
    컴파일을 했을 때 문제가 발생하였다. <br/>
    (코드가 동작은 하지만, 동작되는 이유를 파악하기 힘들었던 상태)

  - 이는 북마크 열기, 닫기 버튼 객체를 임의의 변수에 저장을 하고 <br/>
    해당 변수의 타입을 HTMLElement라고 단언은 했기 때문에 <br/>
    null일지도 모른다는 경고는 더이상 발생하지 않게됐으며 <br/>

    두 변수에 저장된 객체의 addEventLisner() 함수를 실행시키는 형태로 <br/>
    약간 우회하는 형태로 코드를 작성하고, 컴파일을 해보니 <br/>
    TypeScript로 작성한 일부 코드가 컴파일된 JavaScript 파일에서 <br/>
    다소 이질적인 형태로 변환되지 않고, 거의 동일하게 변환된 것을 확인할 수 있었다.

  - 이에 관한 내용은 티스토리 블로그에 정리해뒀다. <br/>
    <a href="https://rclogstorage.tistory.com/117">[TypeScript] 타입 단언 (개인 티스토리 블로그)</a>
    <hr/><br/>

# 2023.10.10 화요일

#### 작업 내용: 북마크 바에 아이템을 추가하는 기능 구현하기 (1차)
 - 강의에서 나온 코드를 거의 그대로 클론 코딩하는 것이기 때문에 <br/>
 코드 작성에는 문제가 없지만, 타입 관련된 부분에서 시간을 다소 잡아먹었다.

 - 이 과정에서 localstorage의 key, value 모두 string 타입이라는 것을 알게됐다.<br/>

#### issue가 났던 부분 정리
 - 배열 BookmarkItemList 타입 명시하지 않음. <br/>

  ``` ts
  //Type issue 발생
  let BookmarkItemList = [];
  /* Variable 'BookmarkItemList' implicitly has type 
   * 'any[]' in some locations where its type cannot be determined.
   * 변수 BookmarkItemList의 타입을 명시해달라고 한다.
  */

  let BookmarkItemList: string[] = [];
  //BookmarkItemList를 string 배열로 타입을 선언하는 것으로 해결
  ```
  <br/>

  - localstorage의 Item을 가져오는 getItem() 메서드 <br/>
    return 값의 타입이 string 혹은 null일지도 모른다는 경고 발생
  
  ``` ts
  if (localStorage.getItem("BookmarkItemList")){

    BookmarkItemList = JSON.parse(localStorage.getItem("BookmarkItemList"));
    //issue난 part

  } else {
    localStorage.setItem("BookmarkItemList", JSON.stringify(BookmarkItemList));
  }
  /*
    Argument of type 'string | null' is not assignable 
    to parameter of type 'string'.
    Type 'null' is not assignable to type 'string'.
  
    JSON.parse() 메서드에 인자로 들어갈 수 있는 값의 타입은 string이다.
    그리고 여기서 인자로 전달된 localStorage.getItem() 메서드의 return 값은
    string 혹은 null이다. (Item이 있다면 string, 없으면 null return)

    localStorage에서 BookmarkItemList라는 Item을 가져올 때
    key와 value 모두 string 타입이기도 하고, 없을 경우 else문이 실행되는 구조이므로
    null을 return할 일은 없을테니 getItem() 메서드의 return 값의 타입이
    string이라고 단언해주는 것으로 해결하였음.
  */

  if (localStorage.getItem("BookmarkItemList")){

    BookmarkItemList = JSON.parse(localStorage.getItem("BookmarkItemList") as String);
    //localStorage.getItem() 메서드의 return 값의 타입이 string이라고 단언
    //JSON.parse()의 인자로 전달되는 값의 타입에서 error나는 것을 해결함.

  } else {
    localStorage.setItem("BookmarkItemList", JSON.stringify(BookmarkItemList));
  }
  ```

---
<br/>

# 📆 2023.10.16 월요일 작업일지

### 💻 북마크 바 아이템 추가 기능 작업 (2차)

> TS 파일을 JS 파일로 컴파일할 때, 주석 삭제되도록 컴파일 설정 변경

> [북마크 추가] 버튼을 눌러야만, 북마크 input form이 나오는 logic 구현

> 북마크 아이템을 추가할 수 있는 logic 구현

---
<br/>

### 작업 중 발생한 issue

#### 🚫 [북마크 추가] 버튼을 눌러도 북마크 입력 form이 안나오는 issue 발생
- 북마크 아이템 추가 관련된 logic을 구현하는 Bookmark.ts의 소스코드는 문제가 없음.
- index.html을 확인해보니 **'북마크 추가'** 요소의 id가 입력되지 않은 것을 확인 <br/> id 값을 추가하니 정상적으로 동작하는 것을 확인할 수 있었다. <br/>

 ``` html
  <!-- Before -->
  <div class="Bookmark_Item_Add_Btn">
                북마크 추가
  </div>

  <!-- After -->
  <div class="Bookmark_Item_Add_Btn" id="Bookmark_Item_Add_Btn">
                북마크 추가
  </div>
```

<br/>

  ``` ts
  const AddBtn_Click = document.getElementById("Bookmark_Item_Add_Btn") as HTMLElement;
  //Bookmark_Item_Add_Btn이라는 id 값을 가진 HTML 요소가 없는 상태 
  //(null을 return)
  //getElementById()의 return 값을 string이라고 단언했기에
  //Error issue가 발생하지 않았던 것이다.

  AddBtn_Click.addEventListener("click", newBookmarkToggle);
  ```
---
<br/>

#### 🚫 추가한 북마크가 localStorage에 저장되지 않는 issue 발생

``` ts
const addBookmarkItem = () => {
  let BookmarkList = [];
  if(localStorage.getItem("BookmarkList")){
       BookmarkList = JSON.parse(localStorage.getItem("BoookmarkList") as string);
  }

  const NewBookmarkName = document.getElementById("NewBookmarkNameInput") as HTMLInputElement;
  const NewBookmarkURL = document.getElementById("NewBookmarkUrlInput") as HTMLInputElement;

  let name = NewBookmarkName.value;
  let url = NewBookmarkURL.value;
  let CreateAt = Date.now();

  BookmarkList.push({
      name: name, 
      url: url, 
      CreateAt: CreateAt
  });

  localStorage.setItem("BookmarkList", JSON.stringify(BookmarkList));

  name = NewBookmarkName.value = "";
  url = NewBookmarkURL.value = "";


  newBookmarkToggle();
}
```
- [북마크 추가] 버튼을 누르면 북마크 정보를 입력하는 입력 form이 나온다.

- 북마크 이름, url을 입력하고 [추가] 버튼을 누르면 <br/>
입력한 정보가 객체의 형태로 localStorage에 저장되야하지만 <br/>
실제로 확인해보면 입력한 북마크 정보가 localStorage에 저장되지 않았음. <br/>

- 북마크 입력 상태에서 [추가] 버튼을 누르면, 북마크 입력 form이 사라지고 <br/>
  다시 [북마크 추가] 버튼을 누르면 북마크 정보를 입력할 수 있는 form이 나오는데 <br/>여기서 이전에 입력한 정보는 남아있으면 안되지만 <br/>
  실제로 확인해보면 이전에 입력한 정보가 그대로 남아있는 것을 확인하였다. <br/>

- 북마크 정보를 객체로 만드는 과정과 초기화하는 과정을 구현한 코드에 <br/>
error가 있는 것 같다. (컴파일 시 문제는 발생하지 않았던 상태)

- **예상 작업기간: 미지수**

---
<br>

# 📆 2023.10.17 화요일 작업 일지

### 💻 금일 작업 내용
> 북마크 정보가 localStorage에 저장되지 않는 issue 해결 작업 (해결 완료)

> 북마크 입력 form Style 변경 (추가, 취소 버튼 테두리 추가, 배치 변경)

---

#### 🚫 북마크 정보가 localStorage에 저장되지 않은 문제 해결

- 문제의 원인은 Bookmark.ts의 코드에 있던 것이 아니라 <br>
  **index.html**에서 북마크 input form의 '추가', '취소' 버튼의 id 값이 <br>
  반대로 설정됐던 것이 원인이었다. <br/>

- 북마크 정보 입력 창에서 [추가] 버튼을 누르면 <br/>
  북마크 정보가 localStorage에 저장되지 않고, [취소] 버튼을 눌렀을 때 <br/>
  북마크 정보가 localStorage에 저장된 것을 확인하고나서 알게된 일이다.

``` html
<!-- Before -->
<div class="Bookmark_Item_Input_Btn">
  <div class="CancelBtn" id="CancelBtn">추가</div>
  <div class="AddBtn" id="AddBtn">취소</div>
</div>

<!-- After -->
<div class="Bookmark_Item_Input_Btn">
  <div class="AddBtn" id="AddBtn">추가</div>
  <div class="Cancel" id="CancelBtn">취소</div>
</div>
```

- TypeScript로 작성한 Bookmark.ts의 소스코드는 큰 문제가 없었고 <br>
  (localStorage에 추가되는 Property가 <br>
  bookmarkItemList, BookmarkList로 나눠지는 부분 수정) <br/>
  HTML의 '추가'와 '취소'버튼의 id 값이 바뀐 상태였기에 <br/>
  Bookmark.js 자체는 정상적으로 동작한 것이었다.
  
---