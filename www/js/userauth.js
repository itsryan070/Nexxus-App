function getUserCred() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() 
    {
        if(this.readyState == 4 && this.status == 200) 
        {
        }
    }

    xhr.open("GET", "http://localhost:8000/jsonlogin", true, "testadmin", "test123");
    xhr.send();
}
