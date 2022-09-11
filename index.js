const theMain = document.getElementById("main");
theMain.remove();
const newHeader = document.createElement("h1");
newHeader.id = 'victory';
newHeader.innerHTML = "Kimber is the champion";
document.body.append(newHeader);