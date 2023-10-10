//북마크 바에 북마크를 추가할 수 있는 기능 logic
//북마크 추가 (이름, url 입력), 삭제 기능

const newBookmarkForm = document.getElementById("Bookmark_Item_InputForm") as HTMLElement;

//웹 페이지에서 추가해둔 북마크 아이템들이
//재접속 시 그대로 남아있으려면 localstorage에 저장돼야한다.
let BookmarkItemList: string[] = []; 
/*
    BookmarkItemList 배열을 string[]로 선언해도
    문제없이 동작할 수 있을까?
    작업이 어느정도 진행되고나서 문제가 생기면
    string[]로 선언하지 않고, 단언하는 형태로 바꿔야겠다.
    타입 단언에 너무 의지하는 느낌이 들지만 말이다...
*/

if (localStorage.getItem("BookmarkItemList")){
    BookmarkItemList = JSON.parse(localStorage.getItem("BookmarkItemList") as string);
    //localstorage의 key, value 모두 string이다.
    //타입을 string으로 단언하니, 일단 해결된 것 같다..
} else {
    localStorage.setItem("BookmarkItemList", JSON.stringify(BookmarkItemList));
}

