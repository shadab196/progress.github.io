const progressBar = document.getElementById("progressBar");
const content = document.querySelector(".content");

function updateProgressBar() {
    const scrollTop =  document.documentElement.scrollTop;  //jitne pixal oopar chale gaye


    const totalHeight = document.documentElement.scrollHeight - window.innerHeight; //poori vertical height - beech ka jo dikh raha


    const progress = (scrollTop / totalHeight) * 100;    //percentage

    progressBar.style.width = `${progress}%`;
}

// Attach the scroll event listener
document.addEventListener("scroll", updateProgressBar);
