let topBtn = document.getElementById("topBtn");

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};
try {
    topBtn.onclick = () => {
        console.log("going back to top");
        document.documentElement.scrollTop = 0;
    };
} catch (TypeError) {
    console.log("A \"back to top\" button does not exist on this page.");
}