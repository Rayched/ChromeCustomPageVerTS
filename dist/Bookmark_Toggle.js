"use strict";
const BookmarkBar = document.getElementById("Bookmark_Bar");
const BookmarkOpen = document.getElementById("Bookmark_Open");
const BookmarkClose = document.getElementById("Bookmark_Close");
const BookmarkOpenBtn = document.getElementById("Bookmark_Open_Btn");
const BookmarkCloseBtn = document.getElementById("Bookmark_Close_Btn");

const BookmarkBarToggle = () => {
    if (!BookmarkBar)
        return;
    if (!BookmarkOpen)
        return;
    if (!BookmarkClose)
        return;
    const isBookmarkBarOpen = localStorage.getItem("isBookmarkBarOpen");
    if (isBookmarkBarOpen === "open") {
        localStorage.setItem("isBookmarkBarOpen", "close");
        BookmarkBar.style.display = "none";
        BookmarkOpen.style.display = "none";
        BookmarkClose.style.display = "flex";
    }
    else {
        localStorage.setItem("isBookmarkBarOpen", "open");
        BookmarkBar.style.display = "block";
        BookmarkOpen.style.display = "flex";
        BookmarkClose.style.display = "none";
    }
};
BookmarkOpenBtn.addEventListener("click", BookmarkBarToggle);
BookmarkCloseBtn.addEventListener("click", BookmarkBarToggle);
