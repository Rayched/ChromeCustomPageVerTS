"use strict";
const dateElement = document.getElementById("Today_Date");
const timeElement = document.getElementById("Now_Time");
const modifyNumber = (num) => {
    if (num < 10) {
        return "0" + String(num);
    }
    else {
        return num;
    }
};
const getNowDate = () => {
    const nowDate = new Date();
    const week = [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일"
    ];
    let month = modifyNumber(nowDate.getMonth() + 1);
    let date = modifyNumber(nowDate.getDate());
    let day = nowDate.getDay();
    setNowDate(month, date, week[day]);
};
const setNowDate = (month, date, day) => {
    if (!dateElement)
        return;
    dateElement.textContent = `${month}월 ${date}일 ${day}`;
};
const getNowTime = () => {
    const nowDate = new Date();
    let hour = modifyNumber(nowDate.getHours());
    let minute = modifyNumber(nowDate.getMinutes());
    setNowTime(hour, minute);
};
const setNowTime = (hour, minute) => {
    if (!timeElement)
        return;
    timeElement.textContent = `${hour}시 ${minute}분`;
};
getNowDate();
getNowTime();
setInterval(getNowTime, 1000);
