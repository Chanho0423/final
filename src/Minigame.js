import React,{useState} from 'react'
import "./Home.css";

function Minigame() {
const [status, setStatus] = useState('1~100 사이의 숫자를 맞춰보세요!');
const [answer, setAnswer] = useState(0);
const [rightAnswer, setRightAnser] = useState(Math.ceil(Math.random()*100));


function returnFunc(e){

  e.preventDefault();
  if(+answer === rightAnswer){
    console.log(answer)
    setStatus("정답!!!")
    setTimeout(function(){
      resetFunc();
    }, 2000)

  }else if(answer < rightAnswer){
    setStatus("업 ▲")
  }else{
    setStatus("다운 ▼")
  }
}

// 게임 리셋 후 또 다른 렌덤 숫자 생성, 
// 텍스트 상태 변경
// 현재 input 초기값 설정
function resetFunc(){
  setRightAnser(Math.ceil(Math.random()*100))
  setStatus("한번더! 1~100 사이의 숫자를 맞춰보세요!")
  setAnswer(0);
}


// input 값을 가져올수 있는 함수
function changeAnswer(e){
  setAnswer(e.target.value);
}
  return (
    <body>
      <div class="searchbox">
        <form onSubmit={returnFunc}>

          <div class="header">
            <h1>Up and Down</h1>
          </div>

          <div class="container">
            
            <p>{status}</p>

            <input 
            id="value_number"
            type="number"  max="100" min="1"
            value={answer} onChange={changeAnswer} />

            <button id="value_button">확인</button>

            <p> </p>
          </div>
        </form>
      </div>
    </body>
  );
}

export default Minigame;