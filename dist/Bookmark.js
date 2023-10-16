"use strict";
const newBookmarkForm = document.getElementById("Bookmark_Item_InputForm");
let BookmarkItemList = [];
if (localStorage.getItem("BookmarkItemList")) {
    BookmarkItemList = JSON.parse(localStorage.getItem("BookmarkItemList"));
}
else {
    localStorage.setItem("BookmarkItemList", JSON.stringify(BookmarkItemList));
}
