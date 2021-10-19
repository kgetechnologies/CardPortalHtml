function isMaxLength(val) {
    var Len = val.getAttribute('maxlength');
    var ValueLen = val.value.length;
    if (ValueLen == Len) { parseJson(1); }
    else { parseJson(0); }
}

function addOp() {
    var o1 = document.createElement("OPTION");
    var o2 = document.createElement("OPTION");
    var text = document.createTextNode("Please select...");
    var text2 = document.createTextNode("...");

    const divNode = document.getElementById("textInputArea");
    divNode.innerHTML = '';

    o1.appendChild(text);
    o2.appendChild(text2);
    
    o1.setAttribute("selected", "");
    o1.setAttribute("disabled", "");
    o1.setAttribute("value", "");

    document.getElementById("textInputArea").appendChild(o1);
    document.getElementById("textInputArea").appendChild(o2);
}

function clearDiv() {
    var text2 = document.getElementById("textInputState");
    var text3 = document.getElementById("textInputDistrict");
    var text4 = document.getElementById("textInputCity");

    const divNode = document.getElementById("textInputArea");
    divNode.innerHTML = '';
    
    text2.value = '';
    text3.value = '';
    text4.value = '';

    addOp();
}

function addLi(array) {
    var c1 = document.createElement("OPTION");
    var text = document.createTextNode(array[0]);
    var text2 = document.getElementById("textInputState");
    var text3 = document.getElementById("textInputDistrict");
    var text4 = document.getElementById("textInputCity");

    text2.value = array[3];
    text3.value = array[1];
    text4.value = array[2];

    c1.appendChild(text);
    document.getElementById("textInputArea").appendChild(c1);
}


function parseJson(toEmpty) {
    if (toEmpty == 0) {
        clearDiv();
        return;
    };
    const divNode = document.getElementById("textInputArea");
    divNode.innerHTML = '';
    
    var pinValue = document.getElementById("textInputPincode").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var myArr = JSON.parse(this.responseText);

            var myArray = myArr[0]['PostOffice'];
            var arrayLength = myArray.length;
            var arr = []

            for (var i = 0; i < arrayLength; i++) {
                //create array to push to function
                arr.push(myArr[0]['PostOffice'][i]['Name']);
                arr.push(myArr[0]['PostOffice'][i]['District']);
                arr.push(myArr[0]['PostOffice'][i]['Region']);
                arr.push(myArr[0]['PostOffice'][i]['State']);
                arr.push(myArr[0]['PostOffice'][i]['Country']);
                arr.push(myArr[0]['PostOffice'][i]['Pincode']);

                addLi(arr);
                arr.length = 0;
            }

        }
    };
    xhttp.open("GET", "https://api.postalpincode.in/pincode/" + pinValue, true);
    xhttp.send();

}