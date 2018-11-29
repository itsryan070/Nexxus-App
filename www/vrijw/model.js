class Model
{
    constructor(controller) 
    {
        this.url        = config.api;
        this.token      = sessionStorage.getItem("token");

        this.c          = controller;
    }

    /**
     * Saves tasks in session upon success
     */
    getTasksFromServer(status)
    {
        // get orders
        $.ajax({
            "async": true,
            "crossDomain": true,
            "model": this,
            "url": this.url + "/purchaseorders/" + status + "?bearer=" +this.token,
            "method": "GET",
            "headers": {},
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            success: function(data)
            {
                this.model.setTasks(JSON.parse(data));
            },
            error: function() {

            }
        });
    }
    
    setTasks(array)
    {
        sessionStorage.setItem("tasks", JSON.stringify(array));

        return 0;
    }

    getTasks()
    {
        return JSON.parse(sessionStorage.getItem("tasks"));
    }

    /**
     * Returns task by ID (array) 
     */
    getTaskInfo(id)
    {
        var tasks = this.getTasks();

        var task = "";

        for(var i=0; i < tasks.length; i++)
        {
            if(tasks[i]['id']==id)
            {
                 task = tasks[i];
            }
        }
        return task;
    }

    getOfferedTasks()
    {
        this.getTasksFromServer(2)

        var tasks = this.getTasks();

        return tasks;
    }

    getAcceptedTasks()
    {
        this.getTasksFromServer(300)

        var tasks = this.getTasks();

        return tasks;
    }

}
