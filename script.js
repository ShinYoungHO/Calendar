let datesP = document.querySelectorAll('p');
let dateButton = document.querySelector('.dates').querySelectorAll('button');
//년,월,일,요일 을 받아와서 달력에 뿌려주는 함수
function dateSpread(Year, month, tDate, Day, cur){
    document.querySelector('.month__current').textContent = `${Year} ${days[month]}`
    // console.log(days[month])
    let luOrNotLu = null;
    
    if(Year%4!==0){
        luOrNotLu = Lu.slice();
    }else if(Year%4===0){
        luOrNotLu = notLu.slice();
    }
    let standard = tDate%7;
    let first = 1;
    let firstDay = (Day+7-standard+1)%7
    for(let i = firstDay; i < firstDay+luOrNotLu[month]; i++){//현재 날짜
        // console.log(i)
        datesP[i].textContent = first;
        first++;
    }
    if(cur){
        dateButton[tDate+firstDay-1].classList.add('cur')
    }
}

function remover(){
    let datesP = document.querySelectorAll('p')
    for(let i = 0; i < 42; i++){
        datesP[i].textContent = '';
    }
}


function yearMonthCurrent(val){//다음 혹은 이전 년도와 달 가져옴
    let Selected = document.querySelector('.month__current').textContent.split(' ')
    let curYear = Selected[0]/1;
    let curMonthName =  Selected[1];
    let curMonthIdx = days.indexOf(curMonthName);
    if(val === 'n'){
        return curMonthIdx === 11 ? [curYear+1, 0] : [curYear, curMonthIdx + 1];
    }
    else if(val === 'p'){
        return curMonthIdx === 0 ? [curYear-1,11] : [curYear, curMonthIdx-1];
    }

}
// let datesP = document.querySelectorAll('p');
// dateSpread(Year, Month, tDate, Day, cur)

function nextOrPrevStart(val){
    let yearAndMonth = null;
    if(val === 'n'){//next
        yearAndMonth = yearMonthCurrent('n')//[2021,11]-2021년 12월
        let count = 0;
        for(let i = 41; i >= 0; i-- ){
            if( !datesP[i].textContent ){ count++ }
            else{ break }
        }
        // console.log(yearAndMonth[0]);
        // console.log(yearAndMonth[1])
        remover()
        dateSpread(yearAndMonth[0], yearAndMonth[1], 1, 7-count%7);

    }
    else if(val === 'p'){
        yearAndMonth = yearMonthCurrent('p');
        let count = 0;
        for(let i = 0; i <7; i++ ){
            if( !datesP[i].textContent ){ count++ }
            else{ break }
        }
        // yearAndMonth[1] 을 가지고 전달의 1일을 알거나 마지막일과 요일을 넣어주면 된다.
        // 전 달의 마지막일자부터 count한 것은 요일을 의미
        // Lu[yearAndMonth[1]]//마지막 날짜
        remover()
        if(yearAndMonth[0]%4 !== 0 || yearAndMonth[1] !== 1){//윤년 아니거나 윤년이여도 2월이 아니면 그대로
            dateSpread(yearAndMonth[0], yearAndMonth[1], Lu[yearAndMonth[1]], (6+count)%7);
        }
        else{//윤년이면서 
            dateSpread(yearAndMonth[0], yearAndMonth[1], notLu[yearAndMonth[1]], (6+count)%7);
        }
    }
}


//날짜 버튼들을 누르면 todoList가 튀어나오게 
function todosearch(){
    let temp = document.querySelector('.todo');
    temp.classList.remove('hid')
}

//버튼에 todoList event를 연결
for(let i = 0; i < 35; i++){
    dateButton[i].onclick = todosearch;
}

let topButtonParent = document.querySelector('.topView__month');
// let topButton = topButtonParent.querySelectorAll('button')
topButtonParent.addEventListener('click', function(event){
    let what = event.target.classList[0]
    if(what === 'month__prev'){nextOrPrevStart('p')}
    if(what === 'month__next'){nextOrPrevStart('n')}
    if(what === 'month__current'){}
})

dateSpread(Year, Month, tDate, Day, true);
//2000년 1월1일 토요일, 윤년//2024년 윤년
//31,29,31,30,31,30,31,31,30,31,30,31
//31,28,31,30,31,30,31,31,30,31,30,31