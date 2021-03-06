class FinalizeModel 
{
    constructor(controller) 
    {
        this.url = userConfig.api;
        this.token = sessionStorage.getItem("token");
    
        this.c = controller;

        this.tasks = [];
        this.productTypes = [];

        this.acceptedTasks = JSON.parse(sessionStorage.getItem("acceptedTasks"));

        this.current = 1;
        this.createDummy();
        this.createDummyTypes();
    }

    getFinalItem() 
    {
        return sessionStorage.getItem("finalitem");
    }
  
    setOrderStatusDone(id) 
    {
        $.ajax({
            async: true,
            crossDomain: true,
            model: this,
            url:
                this.url +
                "/purchaseorderstatus?bearer=" +
                this.token +
                "&purchaseOrderId=" +
                id +
                "&statusId=3",
            method: "PUT",
            headers: {},
            processData: false,
            contentType: false,
            mimeType: "multipart/form-data",
            success: function(data) 
            {
                this.model.c.submitForm(true);
            },
            error: function() {
            }
        });
    }
  
    // dummy content
    createDummy() 
    {
        for (var x = 1; x <= 3; x++) 
        {
            this.tasks[x] = [x];
            for (var y = 0; y < 3; y++) 
            {
                this.tasks[x][y] = 0;
            }
        }
    
        this.tasks[1][1] = "Breedstraat 128";
        this.tasks[1][2] = "2543";
        this.tasks[1][3] = "29-2-2019";
        this.tasks[1][4] = "13";
        this.tasks[1][5] = "12:00";
        this.tasks[1][6] = "jan";
        this.tasks[1][7] = "06876543";
    
        this.tasks[2][1] = "Sirtemastraat 177";
        this.tasks[2][2] = "2544";
        this.tasks[2][3] = "28-3-2019";
        this.tasks[2][4] = "15";
        this.tasks[2][5] = "13:00";
        this.tasks[2][6] = "jan";
        this.tasks[2][7] = "06876542";
    
        this.tasks[3][1] = "Zwaardvegersgaarde";
        this.tasks[3][2] = "2445";
        this.tasks[3][3] = "27-4-2019";
        this.tasks[3][4] = "17";
        this.tasks[3][5] = "14:00";
        this.tasks[3][6] = "jan";
        this.tasks[3][7] = "06876541";
    }
    createDummyTypes()
    {
        for (var x = 0; x <= 2; x++) 
        {
            this.productTypes[x] = [x];
            for (var y = 0; y <= 2; y++) 
            {
                this.productTypes[x][y] = 0;
            }
        }

        this.productTypes[0][1] = "Computer";
        this.productTypes[0][2] = "4";

        this.productTypes[1][1] = "laptops";
        this.productTypes[1][2] = "3";

        this.productTypes[2][1] = "Monitors";
        this.productTypes[2][2] = "4";
    }
    getTypes()
    {
        return this.productTypes;
    }
    // returns the number of the current task
    getCurrentTask() 
    {
        return this.current;
    }
  
    // returns an array with the details about the current task
    getTasks() 
    {
        return this.tasks;
    }
  
    // changes the current task to the next
    setNextTask() 
    {
        if (this.current < this.tasks.length - 1) 
        {
            this.current++;
        } else {
            window.open("vrij.html", "_self");
        }
    }

  /*submitFinalizeForm(status)
    {

        switch(status)
        {
            case 100:
                // send images
                var form = new FormData();
                form.append("productId", 0);
                form.append("attributeId", 0);
                form.append("attachment", "");

                $.ajax({
                    "url": this.url + "/productattachment?bearer=" +this.token,
                    "method": "POST",
                    "headers": {},
                    "processData": false,
                    "contentType": false,
                    "mimeType": "multipart/form-data",
                    "model": this,
                    "data": form,
                    success: function(data)
                    {
                        this.submitFinalizeForm(200);
                    },
                    error: function() {

                    }
                });
                break;
            case 200: // on callback success, change order status
                break;
            case 404:
            default:
                break;
        }
    }*/
}
