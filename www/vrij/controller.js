class VrijController
{
    constructor() 
    {
        this.m = new VrijModel(this);
        this.v = new VrijView();

        this.offeredTasks = this.m.getOfferedTasks();
        this.acceptedTasks = this.m.getAcceptedTasks();
    }
    
    /**
     * Renders main page with tasks from current location
     */
    renderOfferedTaskList()
    {
        this.v.showHeader("#header");
        this.v.showFooterOffered("#footer");

        $("#content").html("");
        $("#content").append("<div id='tasklist'>");
        this.v.showTasklist("#tasklist", "Aangeboden Taken", this.m.getOfferedTasks());
    }
    
    /**
     * Renders main page with tasks from current location
     */
    renderAcceptedTaskList()
    {
        this.v.showHeader("#header");
        this.v.showFooterAccepted("#footer");

        $("#content").html("");
        $("#content").append("<div id='tasklist'>");
        this.v.showTasklist("#tasklist", "Geaccepteerde Taken", this.m.getAcceptedTasks());
    }

    postAcceptedTask(id, callback)
    {
        if(!callback)
        {
            this.m.sendAcceptTask(id)
        } else 
        {
            this.renderAcceptedTaskList();
        }

    }

    renderPopupTask(id)
    {
        var task = this.m.getTaskInfo(id);

        this.v.showPopupTask("#order-current", task);
    }

    sendToFinalForm(id)
    {
        sessionStorage.setItem("finalitem", id);
        window.open('vrij_finalize.html', '_self');
    }
  
    closingPopup()
    {
        this.v.closePopup();   
    }
}
