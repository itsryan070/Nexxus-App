function getUserInfo() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() 
    {
        if(this.readyState == 4 && this.status == 200) 
        {
            var user = JSON.parse(xhr.response);
            console.log(user);
            $("#userName").html(user['name']);
            $("#userEmail").html(user['email']);
        }
    }

    xhr.open("GET", "http://localhost:8000/json/get/user", true, "testadmin", "test123");
    xhr.send();
}

getUserInfo();
