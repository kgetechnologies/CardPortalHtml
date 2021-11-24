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
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "../assets/json/JobList.json", false);
    xhttp.send(null);

    var object1 = JSON.parse(xhttp.responseText);

    object1['Jobs'].forEach(addToArray);
    //console.log(json);
}

function showJobs() {
  var listNode = document.getElementById("jobListLeft");
  listNode.innerHTML = '';

  function tempfunc(item) {
    //console.log(item);
    showJobItems(item.ID,item.JobId,item.LogoPath,item.CompanyName,item.City,item.State,item.CreatedOn,item.AppliedCount);
  }
  json.forEach(tempfunc);
}



function showJobItems(id,jobId,imgUrl,companyName,city,state,createdOn,appliedCount) {
    var listNode = document.getElementById("jobListLeft");
    var listItem = document.createElement("LI");
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

    listItem.setAttribute("class","list-group-item");
    listItem.setAttribute("onclick","showInJobsCol2(this)"); //onclick function
    div1.setAttribute("class","container");
    div2.setAttribute("class","row");
    div3.setAttribute("class","col-md-2");
    div4.setAttribute("class","col-md-10");
    img.setAttribute("src",imgUrl);
    img.setAttribute("width",'100%');
    h6.innerText = jobId;
    h6.setAttribute("id","listItemId");
    p1.innerText = companyName;
    p2.innerText = city;
    p3.innerText = 'Your profile matches this job';
    p4.innerText = createdOn;

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

function showInJobsCol2(item){
  var itemId = item.querySelector("#listItemId").innerText; //get item id to fetch the json file
  var col = document.getElementById("jobsCol2");
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "../assets/json/JobId" + itemId + ".json", false);
  xhttp.send(null);

  var object2 = JSON.parse(xhttp.responseText);
  console.log(object2);

  //begin replacing items in jobsCol2
  col.querySelector("h6").innerText = object2.JobType;
  col.querySelector("#jobsCol2SecondHeading").innerText = object2.CompanyName + " • " + object2.City + " • " + object2.CreatedOn + " • " + object2.AppliedCount + " applied";

}