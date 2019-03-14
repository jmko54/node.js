var member = ['Joo', 'Dong', 'Hoya']//Array

console.log(member[2]);
//Array는 대괄호 사용. Array는 순서대로 번호가 정해짐
//순서는 0부터 시작
i = 0;
while(i < 3){
  console.log(member[i]);
  i = i + 1;
}

var roles = {
  'programer' : 'Dong',
  'designer' : 'Joo',
  'maneger' : 'Hoya'
}//Object

//Object는 줄바꿈이 가능, 각자 element에 고유의 이름을 정한다.(?)
console.log(roles.designer);

for(var k in roles){
  console.log(k, roles[k]);
}
