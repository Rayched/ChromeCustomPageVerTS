//북마크 바 버튼 관련 logic
//[북마크 열기] 버튼을 클릭하면 북마크 바가 열리고
//[북마크 닫기] 버튼을 클릭하면 북마크 바가 닫혀야한다.

/* 북마크와 관련된 logic을 구현하려면 
 * index.html에서 구현한 북마크 관련 요소들인
 * id가 Bookmark_Bar, Bookmark_Open, Bookmark_Close인 요소들을
 * DOM 객체로 가져와야한다.
*/

const BookmarkBar = document.getElementById("Bookmark_Bar") as HTMLElement;
const BookmarkOpen = document.getElementById("Bookmark_Open") as HTMLElement;
const BookmarkClose = document.getElementById("Bookmark_Close") as HTMLElement;
//북마크 바와 관련된 변수 3개의 타입을 HTMLElement로 단언
//이를 통해서 해당 변수에 저장된 객체가 null일지도 모른다는 경고 발생 X

const BookmarkOpenBtn = document.getElementById("Bookmark_Open_Btn") as HTMLElement;
const BookmarkCloseBtn = document.getElementById("Bookmark_Close_Btn") as HTMLElement;

//북마크 열림/닫힘 상태를 저장해두는 logic

const isBookmarkBarOpen = localStorage.getItem("isBookmarkBarOpen");

if (isBookmarkBarOpen === "close"){
    //localStorage에 저장된 isBookmarkBarOpen의 value가 'close'라면
    //북마크 닫힘 상태 유지
    BookmarkBar.style.display = "none";
    BookmarkOpen.style.display = "none";
    BookmarkClose.style.display = "flex";
} else {
    //isBookmarkBarOpen의 value가 'open' 이라면
    //북마크 열림 상태 유지
    BookmarkBar.style.display = "block";
    BookmarkOpen.style.display = "flex";
    BookmarkClose.style.display = "none";
}
/*
    * [북마크 열기]를 클릭하면, 북마크 바를 열고
      [북마크 닫기]를 클릭하면, 북마크 바를 닫는 동작을 수행하는
      BookmarkBarToggle 함수
*/

const BookmarkBarToggle = () => {
    let isBookmarkBarOpen = localStorage.getItem("isBookmarkBarOpen");

    if (isBookmarkBarOpen === "close"){
        localStorage.setItem("isBookmarkBarOpen", "open");
        BookmarkBar.style.display = "block";
        BookmarkOpen.style.display = "flex";
        BookmarkClose.style.display = "none";
        return;
    }

    localStorage.setItem("isBookmarkBarOpen", "close");
    BookmarkBar.style.display = "none";
    BookmarkOpen.style.display = "none";
    BookmarkClose.style.display = "flex";
};

BookmarkOpenBtn.addEventListener("click", BookmarkBarToggle);
BookmarkCloseBtn.addEventListener("click", BookmarkBarToggle);