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

//오늘 날짜, 요일을 계산하는 함수
const getNowDate = () => {
    const nowDate = new Date();

    //우리가 사용할 요일을 담아두는 array 변수
    const week: string[] = [
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
}

getNowDate();