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

        this.v.showTasklist("#body", tasks);
    }

    renderPopupTask(id)
    {
        var task = this.m.getTaskInfo(id);

        this.v.showPopupTask("#order-current", task);
    }
    closingPopup(){
        this.v.closePopup();
        
    }
}
