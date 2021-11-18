var json = []
fetch("http://localhost:8000/assets/json/JobList.json").then(response => json = response.json())
console.log(json);
function openNav() {
  document.getElementById("mySidenav").style.width = "500px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function showJobs() {

}

function parseJson() {
    
}