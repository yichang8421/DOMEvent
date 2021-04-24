const level1 = document.querySelector('.level1')
const level2 = document.querySelector('.level2')
const level3 = document.querySelector('.level3')
const level4 = document.querySelector('.level4')
const level5 = document.querySelector('.level5')
const level6 = document.querySelector('.level6')
const level7 = document.querySelector('.level7')

let n = 1;
const removeX = (e)=>{
  const t = e.currentTarget;
  setTimeout(()=>{
    t.classList.remove('x');
  },n*500);
  n+=1
};
const addX =(e)=>{
  const t = e.currentTarget;
  setTimeout(()=>{
    t.classList.add('x');
  },n*500);
  n+=1
};

// 在第四个div阻止冒泡
level4.addEventListener('click',(e)=>{
  e.stopPropagation();
});

// 在第四个div阻止捕获
// level4.addEventListener('click',(e)=>{
//     e.stopPropagation();
//   },true);

$('div').each((i, e) => {
    e.addEventListener('click', addX,);
});

$('div').each((i,e)=>{
  e.addEventListener('click',removeX,true);
});


// level1.addEventListener('click',f1,true);
// level1.addEventListener('click', f2,);
// level2.addEventListener('click',f1,true);
// level2.addEventListener('click', f2,);
// level3.addEventListener('click',f1,true);
// level3.addEventListener('click', f2,);
// level4.addEventListener('click',f1,true);
// level4.addEventListener('click', f2,);
// level5.addEventListener('click',f1,true);
// level5.addEventListener('click', f2,);
// level6.addEventListener('click',f1,true);
// level6.addEventListener('click', f2,);

// level7.addEventListener('click',()=>{
//   console.log(1);
// }); //冒泡

// level7.addEventListener('click', ()=>{
//   console.log(2);
// },true);  //捕获




                        