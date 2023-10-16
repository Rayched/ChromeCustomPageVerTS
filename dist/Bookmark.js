"use strict";
const newBookmarkForm = document.getElementById("Bookmark_Item_InputForm");
let BookmarkItemList = [];
if (localStorage.getItem("BookmarkItemList")) {
    BookmarkItemList = JSON.parse(localStorage.getItem("BookmarkItemList"));
}
else {
    localStorage.setItem("BookmarkItemList", JSON.stringify(BookmarkItemList));
}
let isAddBtnClick = false;
newBookmarkForm.style.display = "none";

const newBookmarkToggle = () => {
    isAddBtnClick = !isAddBtnClick;
    isAddBtnClick ? (newBookmarkForm.style.display = "block") :
        (newBookmarkForm.style.display = "none");
};

const AddBtnClick = document.getElementById("Bookmark_Item_Add_Btn");
AddBtnClick.addEventListener("click", newBookmarkToggle);
