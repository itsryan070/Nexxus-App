var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        console.log("Status: " + xhr.status);
        console.log(xhr.response);

        var user = JSON.parse(xhr.response);

        console.log(typeof(user));
        console.log(user["name"]);

        $("#userName").html(user["name"]);
    }
}

xhr.open("GET", "http://localhost:8000/json/get/user", true, "testadmin", "test123");
xhr.send();

function connectJson() {

}

function getUserInfo() {

}
