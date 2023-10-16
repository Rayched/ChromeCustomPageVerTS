"use strict";
const newBookmarkForm = document.getElementById("Bookmark_Item_InputForm");
let BookmarkItemList = [];

if (localStorage.getItem("BookmarkItemList")) {
    BookmarkItemList = JSON.parse(localStorage.getItem("BookmarkItemList"));
}
else {
    localStorage.setItem("BookmarkItemList", JSON.stringify(BookmarkItemList));
}

const addBookmarkItem = () => {
    let BookmarkList = [];

    if (localStorage.getItem("BookmarkList")) {
        BookmarkList = JSON.parse(localStorage.getItem("BoookmarkList"));
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

    name = NewBookmarkName.value = "";
    url = NewBookmarkURL.value = "";

    newBookmarkToggle();
};

let isAddBtnClick = false;
newBookmarkForm.style.display = "none";

const newBookmarkToggle = () => {
    isAddBtnClick = !isAddBtnClick;
    isAddBtnClick ? (newBookmarkForm.style.display = "block") :
        (newBookmarkForm.style.display = "none");
};

const AddBtn_isClick = document.getElementById("Bookmark_Item_Add_Btn");
AddBtn_isClick.addEventListener("click", newBookmarkToggle);

const BookmarkAddBtn = document.getElementById("AddBtn");
const BookmarkCancelBtn = document.getElementById("CancelBtn");

BookmarkAddBtn.addEventListener("click", addBookmarkItem);
BookmarkCancelBtn.addEventListener("click", newBookmarkToggle);
