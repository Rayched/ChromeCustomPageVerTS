"use strict";
const SearchInput = document.getElementById("Search_Input");
const ShowSearchResult = () => {
    if (!SearchInput)
        return;
    let SearchWord = SearchInput.value;
    window.location.href = `https://www.google.com/search?q=${SearchWord}`;
    SearchWord = "";
};
const EnterKey = (event) => {
    if (event.code === "Enter") {
        ShowSearchResult();
    }
};
SearchInput.addEventListener("keypress", (event) => {
    EnterKey(event);
});
