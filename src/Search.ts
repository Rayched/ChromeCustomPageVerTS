//검색창 logic

const SearchInput = document.getElementById("Search_Input") as HTMLElement;

const ShowSearchResult = () => {
    if(!SearchInput) return;
    let SearchWord = SearchInput.value;
    //SearchInput 객체에서 'value'라는 property 참조하지 못하는 error 발생
    
    window.location.href=`https://www.google.com/search?q={SearchWord}`;
    SearchWord = "";
};

const EnterKey = (event: Event) => {
    if(event.code === "Enter"){
        ShowSearchResult();
    }
};

SearchInput.addEventListener("keypress", (event: Event) => {
    EnterKey(event);
});