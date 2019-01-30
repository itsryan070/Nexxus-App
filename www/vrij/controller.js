class VrijController
{
    constructor(loginc) 
    {
        this.m = new VrijModel(this, loginc);
        this.v = new VrijView();

        this.offeredTasks = [];
        this.acceptedTasks = [];

        this.currentList = "offered";
    }

    reloadTasklist(callback)
    {
        // request tasks
        if(!callback) 
        {
            this.m.loadTasks(false, 0);
        }
        else
        {
            this.m.storeAllTasks();
            this.loadCurrentList();
        }
    }

    loadCurrentList()
    {
        console.log("Loading current list..");
        switch(this.currentList)
        {
            case "offered":
                this.renderOfferedTaskList()

                break;
            case "accepted":
                this.renderAcceptedTaskList()
                break;
            default:
        }
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

        this.v.showTasklist('#tasklist', 'Aangeboden Taken', this.offeredTasks);
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

        this.v.showTasklist('#tasklist', 'Geaccepteerde Taken', this.acceptedTasks);
    }

    postAcceptedTask(id, callback)
    {
        if(!callback)
        {
            this.m.sendAcceptTask(id);
        } else 
        {
            this.currentList = "accepted";
            this.reloadTasklist(false);
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
