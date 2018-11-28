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
                let result = JSON.parse(data);
                sessionStorage.setItem("token", result.token);
                window.open('vrijw.html', '_self');
            },
            error: function() {

            }
        });
    }
}
