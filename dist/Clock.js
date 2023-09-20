"use strict";
//나만의 크롬 시작화면 만들기 프로젝트
//오늘 날짜와 시계를 표시하는 logic
//npm run build를 입력해서 js 파일로 컴파일할 것
//참고 자료
/* 시계 Part div's Element
   'class' Attribute Value
    => Today_Info

 * 날짜 및 요일 div Element
   'class', 'id' Attribute Value
    => Today_Date (속성 값은 동일함)

 * 현재 시간 표시 div Element
   'class', 'id' Attribute Value
    => Now_Time (속성 값은 동일함)
*/
//현재 날짜와 시간을 나타내는 HTML 요소를 참조하는 변수's
const dateElement = document.getElementById("Today_Date");
const timeElement = document.getElementById("Now_Time");
//날짜에서 월(month) 출력을 좀 더 깔끔하게
//'09'와 같은 형식으로 출력하기 위해서
//month 값을 수정하는 함수
const modifyNumber = (num) => {
    //num의 값이 10 미만의 값이라면
    //전달받은 숫자 값 앞에 0을 붙여서 반환한다.
    if (num < 10) {
        return "0" + String(num);
    }
    else {
        return num;
    }
};
//오늘 날짜, 요일을 계산하는 함수
const getNowDate = () => {
    const nowDate = new Date();
    //우리가 사용할 요일을 담아두는 array 변수
    const week = [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일"
    ];
    let month = nowDate.getMonth() + 1; //월
    //getMonth method는 0 ~ 11까지의 값을 반환하기 때문에
    //우리가 원하는 형태로 출력하기 위해서 '1'을 더하는 것으로
    //getMonth() method의 return 값을 1 ~ 12로 출력할 수 있다.
    let date = nowDate.getDate(); //일
    let day = nowDate.getDay(); //요일
    console.log(month, date, day);
    setNowDate(month, date, week[day]);
    //modifyNumber() 함수를 삭제하니
    //일단은 문제가 해결됐다.
    //그래서 modifyNumber() 함수는 뭘까..?
    //구글링을 해도 답이 안나오는데....
};
//getNowDate 함수로 가져온 오늘 날짜를
//"Today_Info" 요소에 반영하는 함수
const setNowDate = (month, date, day) => {
    if (!dateElement)
        return; //해결..?
    dateElement.textContent = `${month}월 ${date}일 ${day}`;
    //dateElement가 null일 수도 있다고 한다.
};
getNowDate();
