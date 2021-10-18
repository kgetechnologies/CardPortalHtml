function isMaxLength(val) {
    var Len = val.getAttribute('maxlength');
    var ValueLen = val.value.length;
    if (ValueLen >= Len) { parseJson(); }
}

function clearDiv() {
    const divNode = document.getElementById("textInputCity");
    divNode.innerHTML = '';
}

function addLi(array) {
    var c1 = document.createElement("OPTION");
    var text = document.createTextNode(array[0]);
    var text2 = document.getElementById("textInputState");
    var text3 = document.getElementById("textInputDistrict");

    text2.value = array[3];
    text3.value = array[1];

    console.log('text array0' + array[0]);

    c1.appendChild(text);
    document.getElementById("textInputCity").appendChild(c1);
}


function parseJson() {
    clearDiv();
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