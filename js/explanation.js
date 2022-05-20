
const explanations = [
    {explanation: '"Todo List로 하루 일정을 정리해보세요"'},
    {explanation: '"생산성을 높이거나 여유를 갖고 싶을 때 Todo List를 작성하여 일상을 관리해 보세요"'},
    {explanation: '"하루에 한 번, 좋은 습관. 내 것으로 만들고 싶은 습관을 적어보세요"'},
    {explanation: '"오늘의 할 일은 무엇인가요?"'}
];

// const explanations2 = [
//     {explanation: '"꾸준한 명상수련이 신경계를 안정시키고, 마음의 평온을 가져다줍니다 "'},
//     {explanation: '"명상을 시작하기 전에 잠시 시간을 내어서 몸을 편안하게 해주세요 "'},
//     {explanation: '"반듯하게 눕거나 편하게 기댄 상태에서 명상을 시작합니다"'}
// ];

// const explanations3 = [
//     {explanation: '"꾸준한 명상수련이 신경계를 안정시키고, 마음의 평온을 가져다줍니다 "'},
//     {explanation: '"명상은 우리의 수면을 방해하는 경직된 사고방식을 내려놓도록 도와줍니다"'},
//     {explanation: '"명상을 시작하기 전에 잠시 시간을 내어서 몸을 편안하게 해주세요 "'},
//     {explanation: '"반듯하게 눕거나 편하게 기댄 상태에서 명상을 시작합니다"'},
//     {explanation: '"호흡이 느껴지는 부분에 집중하세요"'},
//     {explanation: '"넷을 셀 동안 숨을 깊이 들이마시고, 넷을 셀 동안 멈춘 후 여섯을 셀 동안 숨을 내쉽니다"'}
// ];



const explanation = document.querySelector("#explanation span");
// const explanation2 = document.querySelector("#explanation2 span");
// const explanation3 = document.querySelector("#explanation3 span");





// 메인화면
const explanationList = explanations[Math.round(Math.random() * explanations.length)];
explanation.innerText = explanationList.explanation;

// // 호흡명상
// const explanationList2 = explanations2[Math.round(Math.random() * explanations2.length)];
// explanation2.innerText = explanationList2.explanation;


// // 이완명상
// const explanationList3 = explanations3[Math.round(Math.random() * explanations3.length)];
// explanation3.innerText = explanationList3.explanation;