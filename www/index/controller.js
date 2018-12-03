class IndexController
{
    constructor() 
    {
        this.m = new IndexModel();
        this.v = new IndexView();
    }
    
    redirectLogin()
    {
        window.open('login.html', '_self');
    }
}
