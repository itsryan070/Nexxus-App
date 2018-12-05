class Controller
{
    constructor() 
    {
        this.m = new Model(this);
        this.v = new View();

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

    closingPopup(){
        this.v.closePopup();
    }

    renderRefuse(){
        this.v.renderRefuse()
    }

    renderCancel(){

    }

    renderAccept(){
        this.renderAcceptedTaskList();
    }

}
