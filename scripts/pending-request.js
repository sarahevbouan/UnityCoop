const fileDetails = document.querySelectorAll(".file-details");
const reqActions = document.querySelectorAll(".req-actions");


let shiftingElement;

//Setting the initial position of Request Action elements for smaller screen sizes
if(window.matchMedia("(max-width: 480px)").matches){
    fileDetails.forEach(fileDetail => {
        shiftingElement = fileDetail.parentElement.nextElementSibling;
        fileDetail.appendChild(shiftingElement);
    });
}

//Function to change the positions of Request Action elements in the DOM tree on window resize
let windowResize = () => {
    if(window.matchMedia("(max-width: 480px)").matches){
        fileDetails.forEach(fileDetail => {
            if(fileDetail.parentElement.nextElementSibling !== null && fileDetail.parentElement.nextElementSibling.classList.contains("req-actions")){
                shiftingElement = fileDetail.parentElement.nextElementSibling;
                fileDetail.appendChild(shiftingElement);
            }
        });
    }

    else {
        fileDetails.forEach(fileDetail => {
        if(fileDetail.lastElementChild.classList.contains("req-actions")){
            fileDetail.parentElement.insertAdjacentElement("afterend", fileDetail.lastElementChild);
        }
        });
    }
}

window.addEventListener("resize", windowResize);


let main = document.querySelector("main");
let popUp;
let modalCloseBtn;
let modalOpen;
window.addEventListener("click", (e) => {
    if(modalOpen && !e.target.classList.contains("modal-close-btn")){
        e.preventDefault();
    }

    else{
        if(e.target.classList.contains("user-photo")){
            popUp = document.createElement("div");
            modalCloseBtn = document.createElement("span");
            let userName = document.createElement("h3");
            let userPhoto = document.createElement("img");
            let actionBtns = document.createElement("div");
            let acceptBtn = document.createElement("button");
            let declineBtn = document.createElement("button");

            modalCloseBtn.textContent = "X";
            modalCloseBtn.classList.add("modal-close-btn");
            userName.innerHTML = `${e.target.nextElementSibling.firstElementChild.textContent} <br> <span>wants to sign up</span>`;

            userPhoto.src = e.target.src;

            acceptBtn.classList.add("popup-accept-btn");
            declineBtn.classList.add("popup-decline-btn");
            acceptBtn.textContent = "Accept";
            declineBtn.textContent = "Decline";
            actionBtns.append(acceptBtn, declineBtn);

            popUp.append(modalCloseBtn, userName, userPhoto, actionBtns);

            

           
            popUp.classList.add("user-popup");
           
            document.body.appendChild(popUp);
            document.body.style.overflow = "hidden";
            modalOpen = true;
            
        }

        if(e.target.classList.contains("modal-close-btn")){
            document.body.removeChild(popUp);
            document.body.style.overflow = "auto";
            modalOpen = false;
            console.log(document.body.style.overflow);
        }
    }
});
