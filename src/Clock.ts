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
//그냥 10 미만의 숫자를 두 자릿수로 변환하는 함수
const modifyNumber = (num: number) => {
    //num의 값이 10 미만의 값이라면
    //전달받은 숫자 값 앞에 0을 붙여서 반환한다.
    if (num < 10) {
        return "0" + String(num);
    } else {
        return num;
    }
};

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

    let month = modifyNumber(nowDate.getMonth() + 1); //월
    //getMonth method는 0 ~ 11까지의 값을 반환하기 때문에
    //우리가 원하는 형태로 출력하기 위해서 '1'을 더하는 것으로
    //getMonth() method의 return 값을 1 ~ 12로 출력할 수 있다.

    let date = modifyNumber(nowDate.getDate()); //일

    //modifyNumber 함수는 앞에서 선언한 사용자 정의 함수다.
    //10 미만의 숫자를 '0n'의 형태로 출력하는 함수
    //단, 10 미만의 숫자는 문자열로 형변환된다.

    let day = nowDate.getDay(); //요일
    console.log(month, date, day);
    setNowDate(month, date, week[day]);
};

//getNowDate 함수로 가져온 오늘 날짜를
//"Today_Info" 요소에 반영하는 함수
const setNowDate = (month: number|string, date: number|string, day: string) => {
    //한 자릿수를 두 자릿수로 바꾸는 modifyNumber 함수에서
    //두 자릿수로 변경할 때, 인자로 전달된 값을 문자열로 형변환하는
    //logic이 존재한다.
    //따라서 매개변수의 type이 숫자, 문자열 두 가지여야만
    //문제가 안 생기기 때문에 각 매개변수의 type을
    //'number|string', union type으로 설정하였다.

    if(!dateElement) return;
    dateElement.textContent = `${month}월 ${date}일 ${day}`;
};

//현재 시간을 가져오는 함수 getNowTime
const getNowTime = () => {
    const nowDate = new Date();
    //Date 객체 생성, nowDate 변수(상수)에 저장

    let hour = modifyNumber(nowDate.getHours());
    let minute = modifyNumber(nowDate.getMinutes());

    setNowTime(hour, minute);
};

//getNowTime으로 가져온 시간 정보를
//HTML 요소에 반영하는 함수 setNowTime
const setNowTime = (hour: number|string, minute: number|string) => {
    if(!timeElement) return; //null guard
    timeElement.textContent = `${hour}시 ${minute}분`;
};

getNowDate();
getNowTime();
setInterval(getNowTime, 1000); //1초마다 getNowTime 함수 실행
//기존 코드는 새로고침을 해야 시간이 변화됐는데
//위의 함수를 추가하는 것으로 그럴 필요가 없어졌다.