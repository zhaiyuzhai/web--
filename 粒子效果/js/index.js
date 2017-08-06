$(function () {
    var c=document.createElement("canvas");
    $(c).css({
        margin:"0px auto"
    });
    var width=c.width=400;
    var height=c.height=200;
    $(document.body).append(c);
    var ctx=c.getContext("2d");
    var particles=[];
    var particles_num=8;
    function rest(){
        ctx.fillStyle="#444";
        ctx.fillRect(0,0,width,height);
        ctx.fillStyle="#111";
        ctx.fillRect(25,80,350,25);
    }
    // rest();
    // 进度条的构造函数
    function progress() {
        this.widths=0;
        this.hue=0;
    }
    progress.prototype.draw=function(){
        ctx.fillStyle="hsla("+this.hue+",100%,40%,1)";
        ctx.fillRect(25,80,this.widths,25);
    }
    // 实例化进度条
    var bar=new progress();

    // 构造粒子的发方法
    function particle() {
        this.x=23+bar.widths;
        this.y=82;
        this.vx=Math.random();
        this.g=Math.random()*4;
    }
    particle.prototype.draw=function () {
        ctx.fillStyle="hsla("+bar.hue+",100%,40%,1)";
        ctx.fillRect(this.x,this.y,2,2);
    }
    function update() {
        for(var i=0;i<particles_num;i++){
            particles.push(new particle());
        }
        for(var i=0;i<particles.length;i++){
            var p=particles[i];
            p.x-=p.vx;
            p.y-=p.g;
            p.g-=0.1;
            p.draw();
        }
    }
    // 绘制的函数
    function draw() {
        rest();
        bar.hue+=0.7;
        bar.widths+=2;
        for(var i=0;i<particles_num;i++){
            particles.push(new particle());
        }
        // console.log(particles[0].draw);
        bar.draw();
        update();
    }
    // draw();

    // 启用requestAnimationFram动画
    var requestId=0;
    (function () {
        requestId=window.requestAnimationFrame(arguments.callee);
        draw();
        if(bar.widths>350){
            window.cancelAnimationFrame(requestId);
            bar.hue=120;
            bar.widths=350;
            rest();
            bar.draw();
        }
    })();
})