const json = [];
parseJson();
showJobs();

function openNav() {
  document.getElementById("mySidenav").style.width = "500px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function addToArray(arr) {
    json.push(arr);
}

function parseJson() {
    fetch("http://localhost:8000/assets/json/JobList.json")
    .then(response => {
       return response.json();
    })
    .then(data => data['Jobs'].forEach(addToArray));
    console.log(json);
}

function showJobs() {
    var listNode = document.getElementById("jobListLeft");
    var listItem = document.createElement("LIST")
    var text = document.createTextNode("Hello");

    listNode.innerHTML = '';
    listItem.setAttribute("class","list-group-item");

    listItem.appendChild(text);
    listNode.appendChild(listItem);
}