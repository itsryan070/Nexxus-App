class FinalizeView 
{
    constructor() 
    {

    }

    showQuantityForm()
    {
        $("#quantity-form") .show();
        $("#foto-form")     .hide();
    }

    showFotoForm()
    {
        $("#quantity-form") .hide();
        // add images according to amount
        var imageOption = ""; 
        imageOption += "<div class='image-upload'>";
            imageOption += "<label for='file-input'>";
            imageOption += "<img src='include/img/plus.png' class='ui-plus'/>";
            imageOption += "</label>";

            imageOption += "<input id='file-input' class='foto-input' type='file'/>";
        imageOption += "</div>";

        var quantity = $("#itemQuantity").val();
        for(var i=0;i<quantity;i++) 
        {
            $("#foto-icons").append(imageOption);
        }

        $("#foto-form").fadeIn();
    }


}
