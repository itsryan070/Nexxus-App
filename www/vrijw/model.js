class Model
{
    constructor(controller) 
    {
        this.url        = "http://copiatek.com/application/api";
        this.getPorder  = "/purchaseorders/1?bearer=";
        this.token      = sessionStorage.getItem("token");

        this.c          = controller;
    }

    getTasksFromLoc()
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
            success: function(data){
                this.model.c.retrieveTasks(JSON.parse(data));
            },
            error: function() {

            }
        });

    }

    getTasksAccepted()
    {

    }
}
