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
        imageOption += "<td><div class='image-upload'>";
            imageOption += "<label for='file-input'>";
            imageOption += "<img src='include/img/plus.png' class='ui-plus'/>";
            imageOption += "</label>";

            imageOption += "<input id='file-input' class='foto-input' type='file'/>";
        imageOption += "</div></td>";

        var quantity = $("#itemQuantity").val();

        if(quantity>999) { quantity = 999; }

        var htmlfoto = "";

        for(var i=0;i<quantity;i++) 
        {
            var input = "";
            switch(i % 2) 
            {
                case 0:
                    input = "<tr>" + imageOption; 
                    break;
                case 1:
                    input = imageOption + "</tr>"; 
                    break;
            }
            htmlfoto += input;
        }
        $("#foto-icons").html(htmlfoto);

        $("#foto-form").fadeIn();
    }


}
