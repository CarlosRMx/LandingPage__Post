const bntShare = document.querySelector('#bntShare');
const shareContainer = document.querySelector(".post__left");
const shareContainerLeft=document.querySelector(".post__share");
const iconsContainer = document.querySelector(".post__icons");

bntShare.addEventListener('click',rebuild);

function eliminarSeccion(){
    while(shareContainer.firstChild){
        shareContainer.removeChild(shareContainer.firstChild);
    }
}

function eliminarContainer(){
    while(shareContainerLeft.firstChild){
        shareContainerLeft.removeChild(shareContainerLeft.firstChild);
    }
}

function rebuild(){
    iconsContainer.classList.add("display");
    eliminarSeccion();
    eliminarContainer();
    setTimeout(() => {
        iconsContainer.classList.remove("display");
        const divAux=document.createElement("div");
        const btnAux=document.createElement("div");
        divAux.innerHTML += `
            <div class="post__left" >
                <span class="post__profile"></span>
                <div>
                    <p class="post_author">Michelle Appleton</p>
                    <p class="post__date">28 Junio 2022</p>
                </div>
            </div>
        `;
        const btnAuxContainer = document.createElement("div");
        btnAuxContainer.classList.add("post__btn");
        
        const btnShareAux=document.createElement("span")
        btnShareAux.setAttribute("id","bntShare");
        btnShareAux.addEventListener('click',rebuild)
       
        btnAuxContainer.appendChild(btnShareAux);

        btnAux.appendChild(btnAuxContainer);
        shareContainerLeft.appendChild(divAux);
        shareContainerLeft.appendChild(btnAux);
    }, 3000);
}