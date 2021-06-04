prediction_1 = "";
prediction_2 = "";

Webcam.set(
{
    width: 350,
    height: 300,
    image_format: 'png',
png_quality: 90

}
);

Webcam.attach("#Camera")


function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='capture_img' src=" + data_uri +" >";
    });
};

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/a68PiY82F/model.json", modelloaded);

function modelloaded(){
    console.log("Model Loaded")
}

function speak(){
    var snyth = window.SpeechSynthesis;
speak_data1 = "First Prediction Is " + prediction_1;
speak_data2 = " And second Prediction Is " + prediction_2;
var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
snyth.speak(utterThis);
}