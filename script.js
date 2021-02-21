
let newDate = new Date()
let Year = newDate.getFullYear();
let Month = newDate.getMonth();
let tDate = newDate.getDate();
let Day = newDate.getDay();

// let Year = 2024
// let Month = 1
// let tDate = 1
// let Day = 4

// console.log(Year)
// console.log(Month)
// console.log(tDate);
// console.log(Day)
let datesP = document.querySelectorAll('p');
let dateButton = document.querySelector('.dates').querySelectorAll('button');
console.log(dateButton)
//년,월,일,요일 을 받아와서 달력에 뿌려주는 함수
function dateSpread(Year, Month, tDate, Day){
    let days = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOW','DEC']
    let notLu = [31,29,31,30,31,30,31,31,30,31,30,31];
    let Lu = [31,28,31,30,31,30,31,31,30,31,30,31];
    document.querySelector('.month__current').textContent = `${Year} ${days[Month]}`

    if(Year%4===0){
        Lu = notLu
    }
    let standard = tDate%7;
    let first = 1;
    let firstDay = (Day+7-standard+1)%7
    for(let i = firstDay; i < firstDay+Lu[Month]; i++){//현재 날짜
        // console.log(i)
        datesP[i].textContent = first;
        first++;
    }
    dateButton[tDate+firstDay-1].classList.add('cur')
}

function todosearch(){
    let temp = document.querySelector('.todo');
    temp.classList.remove('hid')

}
//버튼에 todoList event를 연결
for(let i = 0; i < 35; i++){
    dateButton[i].onclick = todosearch;
}

dateSpread(Year, Month, tDate, Day);
//2000년 1월1일 토요일, 윤년//2024년 윤년
//31,29,31,30,31,30,31,31,30,31,30,31
//31,28,31,30,31,30,31,31,30,31,30,31