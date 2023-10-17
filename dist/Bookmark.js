"use strict";
const newBookmarkForm = document.getElementById("Bookmark_Item_InputForm");
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
    console.log(BookmarkList);
    localStorage.setItem("BookmarkList", JSON.stringify(BookmarkList));
    NewBookmarkName.value = "";
    NewBookmarkURL.value = "";
    newBookmarkToggle();
};
let isAddBtnClick = false;
newBookmarkForm.style.display = "none";

const AddBtn_isClick = document.getElementById("Bookmark_Item_Add_Btn");
AddBtn_isClick.addEventListener("click", newBookmarkToggle);

const BookmarkAddBtn = document.getElementById("AddBtn");
BookmarkAddBtn.addEventListener("click", addBookmarkItem);

const BookmarkCancelBtn = document.getElementById("CancelBtn");
BookmarkCancelBtn.addEventListener("click", newBookmarkToggle);
