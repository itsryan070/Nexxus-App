class Controller
{
    constructor() 
    {
        this.m = new Model(this);
        this.v = new View();
    }
    
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

}
