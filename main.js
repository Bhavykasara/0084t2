canvas=document.getElementById("mc");
ctx=canvas.getContext("2d");

car1_image="https://i.postimg.cc/YqdnnNX1/car1.png";
background_image="https://previews.123rf.com/images/eriksvoboda/eriksvoboda1411/eriksvoboda141100035/33498304-asphalt-road-texture-with-white-and-yellow-stripes.jpg";
car2_image="https://th.bing.com/th/id/Re0648010c35060a617fef051af3cf5a5?rik=n1WXXnelCThTtQ&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fo%2fq%2fB%2f1%2fw%2fW%2fred-car-top-view.svg.hi.png&ehk=78eRUd2S9YfDFkaVU%2b1md6%2bay1TRwxhk3e5EW2fMRyA%3d&risl=&pid=ImgRaw";

car1_width=100;
car1_height=90;

car2_width=100;
car2_height=90;

car1_x=10;
car1_y=110;

car2_x=10;
car2_y=400;

function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadr;
    car1_imgTag.src=car1_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_image;
}


function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadr() {
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);

}

function uploadcar2() {
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed)
    
    if (keyPressed=='38') {
        up();
        console.log("up");
    }

    if (keyPressed=='40') {
        down();
        console.log("down");
    }

    if (keyPressed=='37') {
        left();
        console.log("left");
    }

    if (keyPressed=='39') {
        right();
        console.log("right");
    }

    if (keyPressed=='87') {
        up2();
        console.log("up");
    }

    if (keyPressed=='83') {
        down2();
        console.log("down");
    }

    if (keyPressed=='65') {
        left2();
        console.log("left");
    }

    if (keyPressed=='68') {
        right2();
        console.log("right");
    }
}

function up() {

   if (car1_y>0) {
       car1_y=car1_y-10;
       uploadBackground();
       uploadr();
   }
}
   
function down() {

    if (car1_y<500) {
        car1_y=car1_y+10;
        uploadBackground();
        uploadr();
    }

}

function left() {

    if (car1_x>0) {
        car1_x=car1_x-10;
        uploadBackground();
        uploadr();
    }

}

function right() {

    if (car1_x<700) {
        car1_x=car1_x+10;
        uploadBackground();
        uploadr();
    }

}

function up2() {

    if (car2_y>0) {
        car2_y=car2_y-10;
        uploadBackground();
        uploadcar2();
    }
 }
    
 function down2() {
 
     if (car2_y<500) {
         car2_y=car2_y+10;
         uploadBackground();
         uploadcar2();
     }
 
 }
 
 function left2() {
 
     if (car2_x>0) {
         car2_x=car2_x-10;
         uploadBackground();
         uploadcar2();
     }
 
 }
 
 function right2() {
 
     if (car2_x<700) {
         car2_x=car2_x+10;
         uploadBackground();
         uploadcar2();
     }
 
 }