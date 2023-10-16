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

    BookmarkItemList 배열에 저장되는 값은 string이기 때문에 
    (localstorage key, value 모두 string)
    string[]로 타입을 선언하였음.

    이후 문제가 생긴다면 string[]으로 단언하는 형태로 수정해보자.
*/

if (localStorage.getItem("BookmarkItemList")){
    BookmarkItemList = JSON.parse(localStorage.getItem("BookmarkItemList") as string);
    //localstorage의 key, value 모두 string이다.
    //localstorage의 Item을 가져오는 getItem() 메서드의 return 값과 관련해서 타입 issue 발생

} else {
    localStorage.setItem("BookmarkItemList", JSON.stringify(BookmarkItemList));
}

//[북마크 추가] 버튼을 눌러야만 북마크 input form이 나오는 logic 구현

let isAddBtnClick: boolean = false;
newBookmarkForm.style.display = "none";
//북마크 입력 form이 안보이도록 변경 (기본값)

const newBookmarkToggle = () => {
    isAddBtnClick = !isAddBtnClick; 
    //isAddBtnClick의 값을 true로 변경
    //isAddBtnClick = !(false) = true

    /*
    if, else 문으로 작성한 코드가 의도한대로 동작하지 않는다.
    삼항 연산자를 활용한 형태로 변경
    if (isAddBtnClick == true){
        newBookmarkForm.style.display = "block";
    } else {
        newBookmarkForm.style.display = "none";
    }
    */

    isAddBtnClick ? (newBookmarkForm.style.display = "block") : 
    (newBookmarkForm.style.display = "none");
};

const AddBtn_Click = document.getElementById("Bookmark_Item_Add_Btn") as HTMLElement;
AddBtn_Click.addEventListener("click", newBookmarkToggle);