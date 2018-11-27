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
        console.log(this.c);
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
                console.log(this.model);
                this.model.c.retrieveTasks(data);
            },
            error: function() {

            }
        });

        // get location

        // remove those not from current location 

    
    }

    getTasksAccepted()
    {

    }
}
