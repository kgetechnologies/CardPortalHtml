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
    //console.log(json);
}

function showJobs() {
  var url = "https://image.shutterstock.com/image-vector/connect-logo-600w-444774109.jpg"
  showJobItems(url);
  //console.log(json);
  json.forEach(tempfunc);
}

function tempfunc(item, index) {
  console.log(item + "" + index);
}

function showJobItems(imgUrl) {
    var listNode = document.getElementById("jobListLeft");
    var listItem = document.createElement("LIST");
    var div1 = document.createElement("DIV");
    var div2 = document.createElement("DIV");
    var div3 = document.createElement("DIV");
    var div4 = document.createElement("DIV");
    var h6 = document.createElement("H6");
    var p1 = document.createElement("P");
    var p2 = document.createElement("P");
    var p3 = document.createElement("P");
    var p4 = document.createElement("P");
    var img = document.createElement("IMG");

    listNode.innerHTML = '';

    listItem.setAttribute("class","list-group-item");
    div1.setAttribute("class","container");
    div2.setAttribute("class","row");
    div3.setAttribute("class","col-md-2");
    div4.setAttribute("class","col-md-10");
    img.setAttribute("src",imgUrl);
    img.setAttribute("width",'100%');
    h6.innerText = 'ID';
    p1.innerText = 'Company Name';
    p2.innerText = 'City';
    p3.innerText = 'Your profile matches this job';
    p4.innerText = 'Time posted';

    listItem.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(div3);
    div3.appendChild(img);  //get URL from function
    div2.appendChild(div4);
    div4.appendChild(h6);
    div4.appendChild(p1);
    div4.appendChild(p2);
    div4.appendChild(p3);
    div4.appendChild(p4);


    listNode.appendChild(listItem);
}