"use strict";
const newBookmarkForm = document.getElementById("Bookmark_Item_InputForm");
const BookmarkItemList = document.getElementById("Bookmark_List");
let BookmarkList = [];
if (localStorage.getItem("BookmarkList")) {
    BookmarkList = JSON.parse(localStorage.getItem("BookmarkList"));
}
else {
    localStorage.setItem("BookmarkList", JSON.stringify(BookmarkList));
}
const newBookmarkToggle = () => {
    isAddBtnClick = !isAddBtnClick;
    isAddBtnClick ? (newBookmarkForm.style.display = "block") :
        (newBookmarkForm.style.display = "none");
};
const BookmarkItem_Delete = (id) => {
    const isDelete = window.confirm("북마크를 삭제하시겠습니까?");
    if (isDelete) {
        let BookmarkList = JSON.parse(localStorage.getItem("BookmarkList"));
        let NowBookmarkList = BookmarkList.filter((elm) => elm.CreateAt !== id);
        localStorage.setItem("BookmarkList", JSON.stringify(NowBookmarkList));
        const BookmarkItem_GetById = document.getElementById(`Bookmark_Item-${id}`);
        BookmarkItem_GetById.remove();
    }
};
const addBookmarkItem = () => {
    let BookmarkList = [];
    if (localStorage.getItem("BookmarkList")) {
        BookmarkList = JSON.parse(localStorage.getItem("BookmarkList"));
    }
    const NewBookmarkName = document.getElementById("NewBookmarkNameInput");
    const NewBookmarkURL = document.getElementById("NewBookmarkUrlInput");
    let name = NewBookmarkName.value;
    let url = NewBookmarkURL.value;
    let CreateAt = Date.now();
    BookmarkList.push({
        name: name,
        url: url,
        CreateAt: CreateAt
    });
    localStorage.setItem("BookmarkList", JSON.stringify(BookmarkList));
    NewBookmarkName.value = "";
    NewBookmarkURL.value = "";
    newBookmarkToggle();
    setBookmarkItem({ name: name, url: url, CreateAt: CreateAt });
};
const setBookmarkItem = (item) => {
    const Bookmark_Item = document.createElement("div");
    Bookmark_Item.classList.add("Bookmark_Item");
    Bookmark_Item.id = `Bookmark_Item-${item.CreateAt}`;
    const Bookmark_Info = document.createElement("div");
    Bookmark_Info.classList.add("Bookmark_Info");
    const Bookmark_URL = document.createElement("a");
    Bookmark_URL.classList.add("Bookmark_URL");
    Bookmark_URL.href = item.url;
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
    BookmarkList.forEach((item) => {
        setBookmarkItem(item);
    });
};
let isAddBtnClick = false;
newBookmarkForm.style.display = "none";
const AddBtn_isClick = document.getElementById("Bookmark_Item_Add_Btn");
AddBtn_isClick.addEventListener("click", newBookmarkToggle);
const BookmarkAddBtn = document.getElementById("AddBtn");
BookmarkAddBtn.addEventListener("click", addBookmarkItem);
const BookmarkCancelBtn = document.getElementById("CancelBtn");
BookmarkCancelBtn.addEventListener("click", newBookmarkToggle);
setBookmarkList();
