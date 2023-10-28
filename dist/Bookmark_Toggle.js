"use strict";
const BookmarkBar = document.getElementById("Bookmark_Bar");
const BookmarkOpen = document.getElementById("Bookmark_Open");
const BookmarkClose = document.getElementById("Bookmark_Close");
const BookmarkOpenBtn = document.getElementById("Bookmark_Open_Btn");
const BookmarkCloseBtn = document.getElementById("Bookmark_Close_Btn");
const isBookmarkBarOpen = localStorage.getItem("isBookmarkBarOpen");
if (isBookmarkBarOpen === "close") {
    BookmarkBar.style.display = "none";
    BookmarkOpen.style.display = "none";
    BookmarkClose.style.display = "flex";
}
else {
    BookmarkBar.style.display = "block";
    BookmarkOpen.style.display = "flex";
    BookmarkClose.style.display = "none";
}
const BookmarkBarToggle = () => {
    let isBookmarkBarOpen = localStorage.getItem("isBookmarkBarOpen");
    if (isBookmarkBarOpen === "close") {
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
