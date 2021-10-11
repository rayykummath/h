Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function Captr_object(){
    Webcam.snap(function(Img){
        document.getElementById("result").innerHTML="<img id='Picture' src='"+Img+"'>";
    });
}

console.log("Ml5 version= ", ml5.version);

cla=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2ZaHAF8UC/model.json", Modal_loded);

function Modal_loded(){
    console.log("MOOOOOOOOOOODDDDDDDDAAAAAAAAAAALLLLLLLLL LLLLLLLLOOOOOOOODDDDDDDDDDDEEEEEEDDDDDDDDDDDDDD");
}