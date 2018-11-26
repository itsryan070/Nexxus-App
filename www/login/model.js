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

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": this.url + this.login,
            "method": "POST",
            "headers": {},
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form,
            success: function(data){
                sessionStorage.setItem("token", data);
                console.log("Success!"+data);
                window.open('test.html', '_self');
            },
            error: function() {

            }
        });
    }
}
