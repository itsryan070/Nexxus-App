class VrijController
{
    constructor(loginc) 
    {
        this.m = new VrijModel(this, loginc);
        this.v = new VrijView();
    }
    
    /**
     * Renders main page with tasks from current location
     */
    renderOfferedTaskList(callback)
    {
        this.v.showHeader("#header");
        this.v.showFooterOffered("#footer");

        $("#content").html("");
        $("#content").append("<div id='tasklist'>");

        this.updateTasklist(false, 1);
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

        this.updateTasklist(false, 2);
    }

    updateTasklist(callback, type)
    {
        if(!callback)
        {
            this.

        }
        else if(type != null)
        {
            switch(type) 
            {
                case 1: // offered
                    this.v.showTasklist("#tasklist", "Geaccepteerde Taken", tasks);
                break;
                case 2: // accepted
                    this.v.showTasklist(
                    this.v.showTasklist("#tasklist", "Geaccepteerde Taken", tasks);
                break;
            }

        }

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

    renderRefuse()
    {
        this.v.renderRefuse()
    }

    renderCancel()
    {
        this.v.renderCancel();
    }

    renderAccept()
    {
        this.renderAcceptedTaskList();
    }

}
