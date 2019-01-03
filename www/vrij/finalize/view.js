class FinalizeView 
{
    constructor() 
    {

    }

    showQuantityForm()
    {
        $("#quantity-form") .show();
        $("#photo-form")     .hide();
    }

    showPhotoForm()
    {
        $("#quantity-form") .hide();

        // add images according to amount

        var quantity = $("#itemQuantity").val();

        if(quantity>999) { quantity = 999; }

        var htmlphoto = "";

        for(var i=0;i<quantity;i++) 
        {
            var imageOption = ""; 
            imageOption += "<td><div class='image-upload'>";
                imageOption += "<label for='file-input-"+i+"'>";
                imageOption += "<h4>Foto #" + i + "</h4>";
                imageOption += "<img id='file-input-img-"+i+"' src='include/img/plus.png' class='ui-plus' max-width='50%' />";
                imageOption += "</label>";

                imageOption += "<input id='file-input-"+i+"' class='photo-input' type='file' onChange=\"c.v.changePhotoIconToSolved('#file-input-img-"+i+"')\" />";
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
            htmlphoto += imageOption;
        }
        $("#photo-icons").html(htmlphoto);

        $("#photo-form").fadeIn();
    }

    changePhotoIconToSolved(img)
    {
        //alert(window.location.pathname);
        $(img).attr("src", "include/img/checkmark.png"); 
    }
}
