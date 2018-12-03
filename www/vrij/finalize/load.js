userConfig  = new UserConfig();
loginc  = new LoginController();

indexc = new VrijController();

c = new FinalizeController();

indexc.v.showHeader("#header");
c.renderFinalForm();
