class Controller
{
    constructor() 
    {
        this.m = new Model();
        this.v = new View();
    }
    
    redirectLogin()
    {
        window.open('login.html', '_self');
    }
}
