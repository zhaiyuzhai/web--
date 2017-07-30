$(function () {
    // alert(1);
    var box=$("#box");
    var page1=$(".page1");
    var front=$(".front");
    var back=$(".back");
    var page2=$(".page2");
    // var box=$("#box");
    now=0;
    box.on("click",function () {
        page1.css("transition","all 1s linear");
        page1.css("transform","rotateY(-180deg)");
        now++;
    });
    page1.on("transitionend",function () {
        box.css("background-image","url(img/"+(now+1)%4+".jpg)");
        page1.css("transition","none");
        page1.css("transform","rotateY(0deg)");
        front.css("background-image","url(img/"+(now+1)%4+".jpg)");
        back.css("background-image","url(img/"+(now+2)%4+".jpg)");
        page2.css("background-image","url(img/"+(now+2)%4+".jpg)");
    });
    setInterval(function () {
        box.click();
    },2000);
});