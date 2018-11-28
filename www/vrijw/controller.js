class Controller
{
    constructor() 
    {
        this.m = new Model(this);
        this.v = new View();
    }
    
    /**
     * Renders main page with tasks from current location
     */
    renderMainPage()
    {
        this.v.showHeader("#body");
        this.m.getTasksFromLoc();
    }

    retrieveTasks()
    {
        var tasks = this.m.getTasks();

        this.v.showOfferedTasks("#body", tasks);
    }

    renderPopupTask(id)
    {
        var task = this.m.getTask(id);

        this.v.showPopupTask();

    }

}
