function display(data){
    console.log(data);
}
const futureData = fetch("launch.json");
futureData.then(display);
console.log("Me first");