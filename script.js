add.addEventListener("click", function() {

    if(vardas.value, pavarde.value, amzius.value > 0){
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var row = document.createElement("tr");

    td1.innerHTML = document.getElementById("vardas").value;
    td2.innerHTML = document.getElementById("pavarde").value;
    td3.innerHTML = document.getElementById("amzius").value;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    tableBody.appendChild(row);

    vardas.value =""
    pavarde.value =""
    amzius.value = ""
    } else {
        alert("Įveskite duomenis")  
}})

removeFirst.addEventListener("click", function() {
    var row = document.getElementsByTagName("tr")
    if (row.length > 1){
        row[1].remove()
    } else {
        alert("Nebėra ką trinti")
}})

removeLast.addEventListener("click", function() {
    var row = document.getElementsByTagName("tr")
    if (row.length > 1){
        row[row.length -1].remove()
    } else {
        alert("Nebėra ką trinti")
}})
