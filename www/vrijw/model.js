class Model
{
    constructor(controller) 
    {
        this.url        = config.api;
        this.token      = sessionStorage.getItem("token");

        this.storeAllTasks();

        this.c          = controller;
    }

    /**
     * Saves tasks in session upon success
     */
    requestTasks(status, item)
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
            "data":{"item":item},
            success: function(data)
            {
                if(data==undefined)
                { 
                    data = 0;
                }
                    this.model.loadTasks(true, data, item, 0)

            },
            error: function() {

            }
        });
    }

    loadTasks(callback, data, item, status) 
    {
        if(callback) {
            sessionStorage.setItem("offeredTasks", data);
        } else {
            this.requestTasks(status, item);

        }
    }
    
    storeAllTasks()
    {
        this.loadTasks(false, "offeredTasks", false,  2);
        this.loadTasks(false, "acceptedTasks", false, 300);

        var allTasks = [];
        allTasks = allTasks.concat(
            this.getSessionData("offeredTasks"),
            this.getSessionData("offeredTasks")
        );

        sessionStorage.setItem("allTasks", JSON.stringify(allTasks));

        return true;
    }

    getSessionData(item)
    {
        var item = sessionStorage.getItem(item);
        if(item != "undefined") 
        {
            return JSON.parse(item);
        }
        else {
            return 0;
        }
    }

    /**
     * Returns task by ID (array) 
     */
    getTaskInfo(id)
    {
        var tasks = this.getAllTasks();

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
        var tasks = this.getSessionData("offeredTasks");

        return tasks;

    }

    getAcceptedTasks()
    {
        var tasks = this.getSessionData("acceptedTasks");

        return tasks;

    }

    getAllTasks()
    {
        var tasks = this.getSessionData("allTasks");

        return tasks;

    }
}
