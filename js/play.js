let flag = false;
const audio = document.querySelector("audio");
const title = document.querySelector(".title");
document.querySelector("button")?.
    addEventListener("click", () => {
        if (!flag) {
            setTimeout(() => {
                audio?.play();
                title?.setHTMLUnsafe("Stop Music");
            }, 50)
        } else {
            setTimeout(() => {
                audio?.pause();
                title?.setHTMLUnsafe("Play Music");
            }, 50)
        }
        flag = !flag;
    })