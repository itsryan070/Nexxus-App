config = new Config();

loginc = new LoginController();

if(!loginc.checkForToken())
{
    loginc.redirectToLogin();
}

c = new VrijController();

c.renderOfferedTaskList();

