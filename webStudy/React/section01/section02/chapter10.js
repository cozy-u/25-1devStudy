//1. Date 객체를 생성하는 방법
//현재 시간
let date1 = new Date(); //생성자
console.log(date1);
//날짜 및 시간 지정
//대쉬(-), 콤마(,), 슬래시(/)를 사용하여 문자열로 날짜를 표기한 뒤, / 시간을 표기
let date2 = new Date("2002-08-06/10:10:10");
console.log(date2);
//또는 문자열을 사용하지 않고 콤마(,)로만 구분하여 표기해도 됨
let date3 = new Date(2021,3,2,8,30,0);
console.log(date3);

//2. 타임스탬프: getTime()
//특정 시간이 협정세계시(UTC)인 "1970.01.01 00시 00분 00초"로부터 몇 ms가 지났는지를 의미하는 숫자 값

let ts1 = date1.getTime();
console.log(ts1);

//타임 스탬프에 해당하는 시간으로 데이트 객체가 생성됨
let date4 = new Date(ts1);
console.log(date4);

//3. 시간 요소들을 추출
//getMonth()의 경우 0부터 시작하기 때문에 항상 1을 더해주기기
let year = date1.getFullYear();
let month = date1.getMonth()+1;
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();

console.log(year, month, date, hour, minute, second);

//4. 시간 수정하기
date1.setFullYear(2024);
date1.setMonth(2);
date1.setDate(1);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(30);

console.log(date1);

//5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString()); //우리나라 현지 포맷으로 시간 출력