var 바디 = document.body;

숫자후보 = [1,2,3,4,5,6,7,8,9];
숫자배열 = [];

숫자후보 = [1,2,3,4,5,6,7,8,9];
숫자배열 = [];
for (var i=0;i<4;i+=1){
	var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9-i)),1)[0];
	숫자배열.push(뽑은것);//배열추가
}

console.log(숫자배열);

var 결과 = document.createElement('h1');
바디.append(결과);
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
입력창.type = 'number'
입력창.maxLength = 4;
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
폼.append(버튼);


var 틀린횟수=0;
폼.addEventListener('submit', function 비동기(이벤트){
//언제실행될지 모르니까 비동기
	이벤트.preventDefault();
	var 답 = 입력창.value;
	if(답 === 숫자배열.join('')) {   //답이 맞으면
		결과.textContent = '홈런';
		입력창.value='';
		입력창.focus();
		숫자후보 = [1,2,3,4,5,6,7,8,9];
		숫자배열 = [];
		for (var i=0;i<4;i+=1){
			var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9-i)),1)[0];
			숫자배열.push(뽑은것);
		}
		틀린횟수 = 0;
	}else{   //답이 틀리면
		var 답배열 = 답.split('');
		var 스트라이크 =0;
		var 볼 =0;
		틀린횟수+=1;
		if(틀린횟수>4){
		 결과.textContent = '10번 넘게 틀려서 실패! 답은' + 숫자배열.join(',')+'였습니다!';
		입력창.value='';
		입력창.focus();
		숫자후보 = [1,2,3,4,5,6,7,8,9];
		숫자배열 = [];
		for (var i=0;i<4;i+=1){
			var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9-i)),1)[0];
			숫자배열.push(뽑은것);
			}
		틀린횟수 = 0;
   		} 
		else{
			for(var i=0;i<3;i+=1){
				if(Number(답배열[i]) === 숫자배열[i]){//같은자리확인
					스트라이크 +=1;
				}else if(숫자배열.indexOf(Number(답배열[i]))>-1){//같은자리x숫자확인
					볼+=1;
				}
			}
			결과.textContent = 스트라이크 + '스트라이크' + 볼 + '볼입니다';
			입력창.value='';
			입력창.focus();
		}
	}
});
   		