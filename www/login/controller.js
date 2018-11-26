class Controller
{
    constructor() 
    {
        this.m = new Model();
        this.v = new View();
    }

    renderLoginForm()
    {
        this.v.showLoginForm("#body");
    }

    getCredentials()
    {
        var form = {};

        form.user = $("#username").val(); 
        form.pass = $("#password").val(); 

        return form;
    }

    // Handles request, stores token in session
    handleRequest()
    {
        if(typeof this.getCredentials() !== 'undefined') {
            var form = this.getCredentials();
        }

        console.log("handle request");

        this.m.getLoginToken(form.user, form.pass);
    }

}



