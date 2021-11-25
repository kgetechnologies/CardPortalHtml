const json = [];
parseJson();
showJobs();
clickButton();

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
    listItem.setAttribute("onclick","showInJobsCol2(this);changeHover(this);"); //onclick function
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
    p4.innerText = timePosted(createdOn);

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
  var canApply;
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "../assets/json/JobId" + itemId + ".json", false);
  xhttp.send(null);

  var object2 = JSON.parse(xhttp.responseText);
  console.log(object2);
  if (object2.CanApply === true) { canApply = 'Can Apply!' } else { canApply = 'Applications Closed.' }

  //begin replacing items in jobsCol2
  col.querySelector("h6").innerText = object2.EmployerType;
  col.querySelector("#jobsCol2SecondHeading").innerText = object2.CompanyName + " • " + object2.City + " • " + object2.CreatedOn + " • " + object2.AppliedCount + " applied";

  col.querySelector(".col-md-7-list li:nth-child(1)").innerHTML = '<img src="./../assets/images/icons/l1.jpg" width=40px>' + object2.JobType; //logo list 1
  col.querySelector(".col-md-7-list li:nth-child(2)").innerHTML = '<img src="./../assets/images/icons/l2.jpg" width=40px>' + object2.EmployeeCount; //logo list 2
  col.querySelector(".col-md-7-list li:nth-child(4)").innerHTML = '<img src="./../assets/images/icons/l4.jpg" width=40px>' + canApply; //logo list 4

  col.querySelector("#jobsCol2JobDescription p:nth-child(1)").innerText = object2.CompanyDetails;   //company details
  col.querySelector("#jobsCol2JobDescription p:nth-child(2)").innerText = object2["Job Description"];   //job description

  col.querySelector("#jobsCol2Salary li").innerText = "Pay Range: " + object2.SalaryRange + " ₹"; //salary

  col.querySelector("#jobsCol2AboutCompany .col-md-7 p:nth-child(1)").innerText = object2.CompanyName; //bottom company details part with company logo
  col.querySelector("#jobsCol2AboutCompany .col-md-7 p:nth-child(2)").innerText = object2.Followers;

  col.querySelector("#jobsCol2EmployeeDetails p:nth-child(1)").innerText = object2.EmployerType + " • " + object2.EmployeeCount + " employess" + " • " + object2.AppliedCount + " applications";
}

function changeHover(item) {
  var x = document.getElementById("jobListLeft");
  //x.querySelectorAll(".list-group-item").setAttribute("style"," ");

  x.querySelectorAll(".list-group-item").forEach((function(y){ y.setAttribute("style","border: 0px");}))

  item.setAttribute("style","border: 2.5px solid #3a57e8;");
}

function clickButton() {
  var z = document.getElementById("jobListLeft");
  click_event = new CustomEvent('click');
  btn_element = z.querySelector("li:nth-child(1)");
  btn_element.dispatchEvent(click_event);
}

function timePosted(datePosted) {
  var date = new Date()
  var day = date.getDate();
  var month = date.getMonth()+1;
  var year = date.getFullYear();

  var date2 = month + "/" + day + "/" + year;//`${day}/${month}/${year}`;
  var date3 = new Date(date2);

  
  var dateP = datePosted.replace(/(\d{4})\-(\d\d)\-(\d\d)/, "$2/$3/$1");
  var dateP2 = new Date(dateP);

  var diffTime = Math.abs(dateP2 - date3);
  var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

  return diffDays + " days ago"; // this format- 03/07/2016
}