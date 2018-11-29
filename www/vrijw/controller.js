class Controller
{
    constructor() 
    {
        this.m = new Model(this);
        this.v = new View();

        this.m.getTasksFromServer();
        this.offeredTasks = this.m.getOfferedTasks();
        this.acceptedTasks = this.m.getAcceptedTasks();
    }
    
    /**
     * Renders main page with tasks from current location
     */
    renderOfferedTaskList()
    {
        this.v.showHeader("#header");

        $("#content").html("");
        $("#content").append("<div id='tasklist'>");
        this.v.showTasklist("#tasklist", "Aangeboden Taken", this.offeredTasks);
    }
    
    /**
     * Renders main page with tasks from current location
     */
    renderAcceptedTaskList()
    {
        this.v.showHeader("#header");

        $("#content").html("");
        $("#content").append("<div id='tasklist'>");
        this.v.showTasklist("#tasklist", "Geaccepteerde Taken", this.acceptedTasks);
    }

    renderPopupTask(id)
    {
        var task = this.m.getTaskInfo(id);

        this.v.showPopupTask("#order-current", task);
    }

}
