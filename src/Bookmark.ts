//북마크 바에 북마크를 추가할 수 있는 기능 logic
//북마크 추가 (이름, url 입력), 삭제 기능

const newBookmarkForm = document.getElementById("Bookmark_Item_InputForm") as HTMLElement;
const BookmarkItemList = document.getElementById("Bookmark_List") as HTMLElement;


//웹 페이지에서 추가해둔 북마크 아이템들이
//재접속 시 그대로 남아있으려면 localstorage에 저장돼야한다.
let BookmarkList: string[] = []; 
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

if (localStorage.getItem("BookmarkList")){
    BookmarkList = JSON.parse(localStorage.getItem("BookmarkList") as string);
    //localstorage의 key, value 모두 string이다.
    //localstorage의 Item을 가져오는 getItem() 메서드의 return 값과 관련해서 타입 issue 발생

} else {
    localStorage.setItem("BookmarkList", JSON.stringify(BookmarkList));
}

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

//local Storage의 북마크 아이템을 삭제하는 함수 BookmarkItem_Delete
const BookmarkItem_Delete = (id: any) => {
    const isDelete = window.confirm("북마크를 삭제하시겠습니까?");
    
    if(isDelete){
        let BookmarkList = JSON.parse(localStorage.getItem("BookmarkList") as string);
        let NowBookmarkList = BookmarkList.filter((elm: any) => elm.CreateAt !== id);
        localStorage.setItem("BookmarkList", JSON.stringify(NowBookmarkList));
        const BookmarkItem_GetById = document.getElementById(`Bookmark_Item-${id}`) as HTMLElement;
        BookmarkItem_GetById.remove();
    }
};

//북마크 추가 logic
const addBookmarkItem = () => {
    let BookmarkList = [];
    if(localStorage.getItem("BookmarkList")){
        BookmarkList = JSON.parse(localStorage.getItem("BookmarkList") as any);
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
    /* 
    BookmarkList 배열에 
    name(북마크 이름), url(북마크 주소), CreateAt(북마크 추가 일)을
    Property로 가진 객체를 저장한다.

    그리고 이렇게 추가한 값을 localStorage에 저장한다.
    */

    localStorage.setItem("BookmarkList", JSON.stringify(BookmarkList));

    NewBookmarkName.value = "";
    NewBookmarkURL.value = "";

    newBookmarkToggle();

    setBookmarkItem({name: name, url: url, CreateAt: CreateAt});
    //인자로 전달받은 북마크 객체, 북마크 아이템 정보를
    //북마크 아이템을 북마크 바에 표시하는
    //함수 setBookmarkItem에 전달한다.
    //setBookmarkItem 함수는 입력한 정보를 참조해서
    //하나의 북마크 아이템 요소를 만들어서 웹 페이지에 표시한다.
}

const setBookmarkItem = (item: any) => {
    //추가한 북마크 아이템을 북마크 바에 추가하는 logic
    //북마크 정보를 입력하고, 추가하면
    //북마크 정보가 담긴 요소들이 추가되는 구조
    //아래 요소가 하나로 모여서 북마크 아이템이 된다.

    //북마크 아이템 요소
    const Bookmark_Item = document.createElement("div");
    Bookmark_Item.classList.add("Bookmark_Item");
    Bookmark_Item.id = `Bookmark_Item-${item.CreateAt}`;

    //북마크 이름
    const Bookmark_Info = document.createElement("div");
    Bookmark_Info.classList.add("Bookmark_Info");

    //북마크 주소
    const Bookmark_URL = document.createElement("a");
    Bookmark_URL.classList.add("Bookmark_URL");
    Bookmark_URL.href = item.url;

    //아이콘 (북마크 이름 앞에 표시)
    const Bookmark_Icon = document.createElement("div");
    Bookmark_Icon.classList.add("Bookmark_Icon");

    const Bookmark_IconImage = document.createElement("img");
    Bookmark_IconImage.src = `https://www.google.com/s2/favicons?domain_url=${item.url}`;
    
    const nameElement = document.createElement("div");
    nameElement.classList.add("Bookmark_Name");
    nameElement.textContent = item.name;

    const Bookmark_DelBtn = document.createElement("div");
    Bookmark_DelBtn.textContent = "삭제";
    Bookmark_DelBtn.classList.add("DelBtn");
    Bookmark_DelBtn.addEventListener("click", () => {
        BookmarkItem_Delete(item.CreateAt);
    });

    Bookmark_Item.appendChild(Bookmark_Info);
    Bookmark_Item.appendChild(Bookmark_DelBtn);

    Bookmark_Info.appendChild(Bookmark_URL);

    Bookmark_URL.appendChild(Bookmark_Icon);
    Bookmark_URL.appendChild(nameElement);

    Bookmark_Icon.append(Bookmark_IconImage);

    BookmarkItemList.appendChild(Bookmark_Item);
};

const setBookmarkList = () => {
    //BookmarkList 배열에 저장된 북마크 아이템 정보를
    //배열 함수인 forEach()를 통해서 하나씩 꺼내온다.

    BookmarkList.forEach((item) => {
        setBookmarkItem(item);
    });
};

let isAddBtnClick: boolean = false;
newBookmarkForm.style.display = "none";
//북마크 입력 form이 안보이도록 변경 (기본값)

const AddBtn_isClick = document.getElementById("Bookmark_Item_Add_Btn") as HTMLElement;
AddBtn_isClick.addEventListener("click", newBookmarkToggle);

const BookmarkAddBtn = document.getElementById("AddBtn") as HTMLElement;
BookmarkAddBtn.addEventListener("click", addBookmarkItem);
//북마크 input 상태에서 [추가]를 누르면 북마크를 추가하는 함수 실행

const BookmarkCancelBtn = document.getElementById("CancelBtn") as HTMLElement;
BookmarkCancelBtn.addEventListener("click", newBookmarkToggle);
//북마크 input 상태에서 [취소] 버튼을 누르면
//북마크 입력 form을 띄우는 함수 실행

setBookmarkList();