userConfig  = new UserConfig();
loginc  = new LoginController();

if(!loginc.checkForToken()) { loginc.redirectToLogin(); }

indexc = new VrijController();

c = new FinalizeController();

c.renderFinalForm();
