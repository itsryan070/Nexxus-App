class FinalizeModel
{
    constructor(controller) 
    {
        this.url        = userConfig.api;
        this.token      = sessionStorage.getItem("token");

        this.c = controller;
    }

    getFinalItem()
    {
        return sessionStorage.getItem("finalitem");
    }

    setOrderStatusDone(id)
    {
        $.ajax({
            "async": true,
            "crossDomain": true,
            "model": this,
            "url": this.url + "/purchaseorderstatus?bearer=" +this.token
                    + "&purchaseOrderId=" + id 
                    + "&statusId=300",
            "method": "PUT",
            "headers": {},
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            success: function(data)
            {
                this.model.c.postAcceptedTask(0, true);
            },
            error: function() {

            }
        });

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
