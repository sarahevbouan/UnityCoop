let notifs = document.querySelectorAll(".notif");

notifs.forEach(notif => {
    notif.addEventListener("click", (e) => {
        if(e.target.classList.contains("notf-close-btn")){
            notif.parentElement.removeChild(notif);        }
    });
});