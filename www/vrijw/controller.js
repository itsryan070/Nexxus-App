class Controller
{
    constructor() 
    {
        this.m = new Model(this);
        this.v = new View();

        this.m.getTasksFromServer();
        this.tasklist = this.m.getTasks();
    }
    
    /**
     * Renders main page with tasks from current location
     */
    renderMainPage()
    {
        this.v.showHeader("#body");

        this.v.showTasklist("#body", this.tasklist);
    }

    retrieveOfferedTasks()
    {
        this.v.showTasklist("#body", this.tasklist);
    }

    renderPopupTask(id)
    {
        var task = this.m.getTaskInfo(id);

        this.v.showPopupTask("#order-current", task);
    }

}
