"use strict";
//검색창 logic
const SearchInput = document.getElementById("Search_Input");
//SearchInput의 타입을 HTMLInputElement로 단언하였음.
//as => Type Assertion (타입 단언) 
const ShowSearchResult = () => {
    if (!SearchInput)
        return;
    let SearchWord = SearchInput.value;
    //SearchInput 객체에서 'value'라는 property 참조하지 못하는 error 발생
    window.location.href = `https://www.google.com/search?q=${SearchWord}`;
    SearchWord = "";
};
const EnterKey = (event) => {
    //'event'의 타입을 'Event'에서 'KeyboardEvent'로 변경하니
    //Error가 해결되었음.
    if (event.code === "Enter") {
        ShowSearchResult();
    }
};
SearchInput.addEventListener("keypress", (event) => {
    EnterKey(event);
});
