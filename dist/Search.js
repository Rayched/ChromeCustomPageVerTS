"use strict";
//검색창 logic

const SearchInput = document.getElementById("Search_Input");

const ShowSearchResult = () => {
    if (!SearchInput) return; //null guard (TypeScript 용)
    let SearchWord = SearchInput.value;

    window.location.href = `https://www.google.com/search?q={SearchWord}`;
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
