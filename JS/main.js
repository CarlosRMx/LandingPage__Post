const btnCompartir= document.querySelector('#share');
const socialMedia=document.querySelector('.card__socialMedia');
console.log(socialMedia);
btnCompartir.addEventListener('click',()=>{
    socialMedia.classList.add("display");
    setTimeout(() => {
        socialMedia.classList.remove("display");
    }, 3000);
});