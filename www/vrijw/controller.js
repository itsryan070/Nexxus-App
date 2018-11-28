class Controller
{
    constructor() 
    {
        this.m = new Model(this);
        this.v = new View();

        this.m.getTasksFromServer();
        this.offeredTasks = this.m.getTasks();
        this.acceptedTasks = this.m.getTasks();
    }
    
    /**
     * Renders main page with tasks from current location
     */
    renderTaskList()
    {
        this.v.showHeader("#header");

        $("#content").html("");
        $("#content").append("<div id='tasklist'>");
        this.v.showTasklist("#tasklist", this.offeredTasks);
    }
    
    /**
     * Renders main page with tasks from current location
     */
    renderAcceptedTaskList()
    {
        this.v.showHeader("#header");

        $("#content").html("");
        $("#content").append("<div id='tasklist'>");
        this.v.showTasklist("#tasklist", this.acceptedTasks);
    }

    renderPopupTask(id)
    {
        var task = this.m.getTaskInfo(id);

        this.v.showPopupTask("#order-current", task);
    }

}
