//북마크 바 버튼 관련 logic
//[북마크 열기] 버튼을 클릭하면 북마크 바가 열리고
//[북마크 닫기] 버튼을 클릭하면 북마크 바가 닫혀야한다.

/* 북마크와 관련된 logic을 구현하려면 
 * index.html에서 구현한 북마크 관련 요소들인
 * id가 Bookmark_Bar, Bookmark_Open, Bookmark_Close인 요소들을
 * DOM 객체로 가져와야한다.
*/

const BookmarkBar = document.getElementById("Bookmark_Bar");
const BookmarkOpen = document.getElementById("Bookmark_Open");
const BookmarkClose = document.getElementById("Bookmark_Close");

const BookmarkOpenBtn = document.getElementById("Bookmark_Open_Btn") as HTMLElement;
const BookmarkCloseBtn = document.getElementById("Bookmark_Close_Btn") as HTMLElement;

/*
    const BookmarkOpenBtn: HTMLElement = document.getElementById("Bookmark_Open_Btn"); 
    => 'BookmarkOpenBtn' is possibly 'null' 경고 발생
    이게 안되는 이유에 대한 나름대로의 고찰

    const BookmarkOpenBtn: HTMLElement = document.getElementById("Bookmark_Open_Btn") as HTMLElement;
    => 이거는 된다.
    => getElementById(id: string) 메서드의 return 값의 타입을 HTMLElement라고 단언을 내렸기에
       HTMLElement 타입으로 선언한 변수 BookmarkOpenBtn에 할당을 해도 문제가 안생김
       근데 이건 너무 빡빡한 느낌이다.
       그냥 타입 단언만 해두자.
*/

//getElementById(Id: string)
//문자열 id 요소가 인자로 전달되면
//해당 메서드는 HTMLElement 또는 null을 return하게된다.
//즉, 변수 타입을 HTMLElement로 선언을 해도
//전달되는 값인 getElementById(Id: string)의 return이 
//HTMLElement 외에 null을 반환할 수도 있기에
//경고가 발생하게된다.
//(id 값과 일치하는 HTML 요소가 있다면 HTMLElement를, 없다면 null을 return 하게된다.)
//컴파일러 입장에서는 해당 id 값을 가진 요소가 있을지 없을지를 판단하지는 못하기에
//이거 null일수도 있다는 경고를 띄우게된다.
//그렇기에 해당 id 값을 가진 요소가 있다는 것을 우리는 알고있기 때문에
//'as'를 사용해서 return 값이 HTMLElement라고 단언을 해줘야한다.
//즉, 컴파일러한테 이 놈이 HTMLElement 타입이라는 것을 내가 보증한다는 형태의 정보를 넘겨주는 것이다.
//그리고 그 정보를 넘겨받은 컴파일러가 이걸 가지고 걸고 넘어지지 않게되는 것이다.


/*
    * [북마크 열기]를 클릭하면, 북마크 바를 열고
      [북마크 닫기]를 클릭하면, 북마크 바를 닫는 동작을 수행하는
      BookmarkBarToggle 함수
*/

const BookmarkBarToggle = () => {
    if(!BookmarkBar) return;
    if(!BookmarkOpen) return;
    if(!BookmarkClose) return;
    //북마크 바를 열어놓은 상태에서 웹 페이지를 나갔다면
    //다음에 접속했을 때, 북마크 바가 열려있는 상태를 유지하고
    //북마크 바를 닫아놓은 상태에서 웹 페이지를 나갔다면
    //다음에 접속했을 때, 북마크 바가 닫혀있는 상태를 유지해야한다..?
    //굳이..?
    //강의에서는 이렇게 구현을 했지만
    //나는 북마크 바를 열어놓은 상태로 종료해도
    //다음에 접속하면 북마크 바가 닫혀있는 상태를 유지하는 형태로
    //구현을 진행하였다.
    //Default 값 == 북마크 닫힘 상태

    const isBookmarkBarOpen = localStorage.getItem("isBookmarkBarOpen");

    if(isBookmarkBarOpen === "open"){
        localStorage.setItem("isBookmarkBarOpen", "close");
        BookmarkBar.style.display = "none";
        BookmarkOpen.style.display = "none";
        BookmarkClose.style.display = "flex";
    } 
    else {
        localStorage.setItem("isBookmarkBarOpen", "open");
        BookmarkBar.style.display = "block";
        BookmarkOpen.style.display = "flex";
        BookmarkClose.style.display = "none";
    }
};

BookmarkOpenBtn.addEventListener("click", BookmarkBarToggle);
BookmarkCloseBtn.addEventListener("click", BookmarkBarToggle);