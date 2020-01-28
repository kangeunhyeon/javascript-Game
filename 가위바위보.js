var 이미지좌표 = '0';
var 딕셔너리 = {//딕셔너리 자료구조 
	바위:'0',
	가위:'-131px',
	보:'-155px'
};
function 컴퓨터의선택(이미지좌표){
	return Object.entries(딕셔너리).find(function(v){
		return v[1] === 이미지좌표;
	})[0];
}
//비동기
var 인터벌;
function 인터벌메이커(){
	인터벌 = setInterval(function(){
	if(이미지좌표 === 딕셔너리.바위){
	 이미지좌표 = 딕셔너리.가위;
	}
	else if(이미지좌표 === 딕셔너리.가위){
	 이미지좌표 = 딕셔너리.보;
	}
	else if(이미지좌표 === 딕셔너리.보){
	 이미지좌표 = 딕셔너리.바위;
	}
	document.querySelector('#computer').style.background =
	'url(https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F13045F404D7C365D23)'+ 이미지좌표 + ' 0';},100);
}
인터벌메이커();
var 점수표 = {
	바위 : 0,
	가위 : 1,
	보 : 2,
};
document.querySelectorAll('.btn').forEach(function(btn){
btn.addEventListener('click',function(){
	clearInterval(인터벌); 
	setTimeout(function(){
		인터벌메이커();
	},2000);
	var 나의선택 = this.textContent;
	var 나의점수 = 점수표[나의선택];
	var 컴퓨터점수 = 점수표[컴퓨터의선택(이미지좌표)];
	var 점수차 = 나의점수 - 컴퓨터점수;
	if(점수차 === 0){ 
		console.log('비겼습니다');
	}else if([2,-1].includes(점수차)){
		console.log('이겼습니다!!!!')
	}else if([1,-2].includes(점수차)){
		console.log('졌습니다ㅠㅠ')
	}	
	});                                        
});

                                                          
                                                                 