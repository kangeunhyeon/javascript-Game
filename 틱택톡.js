var 바디 = document.body;
var 테이블 = document.createElement('table');//createElement 요소를 만든다 테이블 만들기
var 줄들 = [];
var 칸들 = [];
var 턴 ='X';
var 결과 = document.createElement('div');
var 비동기콜백 = function(이벤트){
	console.log(이벤트.target);//칸
	console.log(이벤트.target.parentNode);//줄
	console.log(이벤트.target.parentNode.parentNode);//테이블

	var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
	console.log('몇줄', 몇줄);
	var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
	console.log('몇칸', 몇칸);

	if(칸들[몇줄][몇칸].textContent  !==''){
	 console.log('빈칸아닙니다.');
	} else{
  	 console.log('빈칸입니다');
  	칸들[몇줄][몇칸].textContent = 턴;
  	//세칸 다 채워졌나?
  	var 다참 = false;
  	//가로줄 검사
  	if(
		칸들[몇줄][0].textContent===턴 &&
		칸들[몇줄][1].textContent===턴 && 
		칸들[몇줄][2].textContent===턴
   	){
		다참 = true;
   	}
  	//세로줄 검사
  	if(칸들[0][몇칸].textContent===턴 &&
		칸들[1][몇칸].textContent===턴 && 
		칸들[2][몇칸].textContent===턴
   	){
		다참 = true;
	}
  	//대각선 검사
  	if(몇줄 - 몇칸 === 0){	
	 if(칸들[0][0].textContent === 턴 &&
		칸들[1][1].textContent === 턴 &&
		칸들[2][2].textContent === 턴) {
		다참 = true;
		}
	}
	if(Math.abs(몇줄-몇칸)===2){	
	 if(칸들[0][2].textContent === 턴 &&
		칸들[1][1].textContent === 턴 &&
		칸들[2][0].textContent === 턴) {
		다참 = true;
		}
	}
	//다 찼으면
	if(다참){
	 결과.textContent =턴 + '님이 승리!';//값을 제공
 	 턴='X';
	 칸들.forEach(function (줄){//for문 대체
	   줄.forEach(function (칸){
 		 칸.textContent ='';
	   });
	 });
	}else{
	 	if(턴==='X'){
	    턴 ='O';
	    }else{
  	    턴 = 'X';
	    }
	  }
    }
};


for(var i =1; i<=3;i+=1){
	var 줄 =document.createElement('tr');
	줄들.push(줄);
	칸들.push([]);//초기화
	for(var j=1;j<=3;j+=1){
		var 칸 =document.createElement('td');
		칸.addEventListener('click', 비동기콜백)//이벤트 등록 이벤트 리스너
		칸들[i-1].push(칸);
		줄.appendChild(칸);
	}
	테이블.appendChild(줄);
}
바디.appendChild(테이블);
바디.appendChild(결과);//appendChild 선택한 요소 안에 자식요소를 추가

console.log('줄들', 줄들,'칸들', 칸들,);
/* <style>
td{
	border: 1px solid black;
	width: 50px;
	height: 50px;
	text-align : center;
	font-weight: vold;
	font-size: 35px;
}
</style>
</head>
<body>
<!-- <table>
<tr>
	<td></td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td></td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td></td>
	<td></td>
	<td></td>
</tr>
</table>-->
<script src = "틱택톡.js"></script> */