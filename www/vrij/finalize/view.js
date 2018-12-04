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

            imageOption += "<input id='file-input' type='file'/>";
        imageOption += "</div>";

        var quantity = $("#itemQuantity").val();
        for(var i=0;i<quantity;i++) 
        {
            $("#foto-form").append(imageOption);
        }
        var html = "<br><br><input type='submit' name='submit'>";
        $("#foto-form").append(html);
        $("#foto-form").fadeIn();
    }


}
