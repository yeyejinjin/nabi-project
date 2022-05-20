const explanations = [
    {explanation: '"꾸준한 명상수련이 신경계를 안정시키고, 마음의 평온을 가져다줍니다 "'},
    {explanation: '"명상을 시작하기 전에 잠시 시간을 내어서 몸을 편안하게 해주세요 "'},
    {explanation: '"반듯하게 눕거나 편하게 기댄 상태에서 명상을 시작합니다"'}
];



const explanation = document.querySelector("#explanation2 span");






// 메인화면
const explanationList = explanations[Math.round(Math.random() * explanations.length)];
explanation.innerText = explanationList.explanation;

