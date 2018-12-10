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

        var quantity = $("#itemQuantity").val();

        if(quantity>999) { quantity = 999; }

        var htmlfoto = "";

        for(var i=0;i<quantity;i++) 
        {
            var imageOption = ""; 
            imageOption += "<td><div class='image-upload'>";
                imageOption += "<label for='file-input'>";
                imageOption += "<h4>Foto #" + i + "</h4>";
                imageOption += "<img src='include/img/plus.png' class='ui-plus'/>";
                imageOption += "</label>";

                imageOption += "<input id='file-input' class='foto-input' type='file'/>";
            imageOption += "</div></td>";
            
            switch(i % 2) 
            {
                case 0:
                    imageOption = "<tr>" + imageOption; 
                    break;
                case 1:
                    imageOption = imageOption + "</tr>"; 
                    break;
            }
            htmlfoto += imageOption;
        }
        $("#foto-icons").html(htmlfoto);

        $("#foto-form").fadeIn();
    }


}
