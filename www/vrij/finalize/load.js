userConfig  = new UserConfig();
loginc  = new LoginController();

if(!loginc.checkForToken()) { loginc.redirectToLogin(); }

indexc = new VrijController(loginc);

c = new FinalizeController(indexc);

c.renderFinalForm();
