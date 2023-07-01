const card=document.querySelectorAll('.inner-container');

console.log(card);

function removeActive(){
  card.forEach((card)=>{
    card.classList.remove('active');
  });
}


card.forEach((card)=>{
  card.addEventListener('click',()=>{
    console.log("Clicked");
    removeActive();

    card.classList.add('active');
    // card.classList.add('act')
  });
});