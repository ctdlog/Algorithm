const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = +input[0];

console.log('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.');

let tmp = 0;
function solution(n) {
  // Write your code
  const underbar = '____'.repeat(tmp);
  const 재귀 = `${underbar}"재귀함수가 뭔가요?"
${underbar}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.
${underbar}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.
${underbar}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`;
  if (n == 0) {
    console.log(`${underbar}"재귀함수가 뭔가요?"
${underbar}"재귀함수는 자기 자신을 호출하는 함수라네"`);
    while (tmp !== 0) {
      let tmp2 = tmp;
      const underbar2 = '____'.repeat(tmp2);
      console.log(`${underbar2}라고 답변하였지.`);
      tmp--;
    }
    console.log('라고 답변하였지.');
    return;
  }

  console.log(재귀);
  tmp++;
  return solution(n - 1);
}

solution(input);
