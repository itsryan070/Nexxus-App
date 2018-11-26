class Model
{
    constructor() 
    {
        this.url = "http://copiatek.com/application/api";
        this.login = "/login_check";
    }

    getLoginToken(user, pass)
    {
        var form = new FormData();
        form.append("_username", user);
        form.append("_password", pass);

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": this.url + this.login,
            "method": "POST",
            "headers": {},
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        }

        console.log("before ajax call");

        $.ajax(settings).done(function (response) {
            console.log(response);
            sessionStorage.setItem("token", response);
            console.log("Token set!");
            console.log(sessionStorage.getItem("token"));

            window.open('test.html', '_self');
        });
    }
}
