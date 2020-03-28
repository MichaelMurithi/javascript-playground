//this is the object that provides the destructuring pattern
var defaults ={
    topic:"javascript",
    format:"live",
    slides:{
        start:0,
        end:100
    }
};

//function to do destructuring
function handleResponce({
    topic = "javascript",
    format = "live",
    slides:{
        start = 0,
        end = 100
    } = {}
} ={}){
    TestCase({
        topic, format,slides:{
            start,end
        }
    });
}
handleResponce()
function TestCase(data){
    console.log(
        data.topic == "Js Recent Parts" &&
        data.format == "Live" &&
        data.slides.start === 0 &&
        data.slides.end == 77)
    }