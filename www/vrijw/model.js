class Model
{
    constructor(controller) 
    {
        this.url        = config.api;
        this.getPorder  = "/purchaseorders/1?bearer=";
        this.token      = sessionStorage.getItem("token");

        this.c          = controller;
    }

    /**
     * Saves tasks in session upon success
     */
    getTasksFromServer()
    {
        // get orders
        $.ajax({
            "async": true,
            "crossDomain": true,
            "model": this,
            "url": this.url + this.getPorder + this.token,
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
    
    /**
     * Saves tasks in session upon success
     */
    getAcceptedTasksFromServer()
    {
        // get orders
        $.ajax({
            "async": true,
            "crossDomain": true,
            "model": this,
            "url": this.url + this.getPorder + this.token,
            "method": "GET",
            "headers": {},
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            success: function(data)
            {

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

    storeTaskSession(data)
    {
        var result = JSON.parse(data);

        return result;

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

    getTasksAccepted()
    {

    }

    parseDateFromTimestamp(ts)
    {
        return ts.substring(0,ts.indexOf('T'));
    }

    parseTimeFromTimestamp(ts)
    {
        return ts.substring(ts.indexOf('T'));
    }
}
