class FinalizeView 
{
    constructor(taken) 
    {
    
    }

    showCurrentTask(current, last, task) 
    {
        var sup = task[current]['supplier'];
        
        sup.city = this.checkNullValue(sup.city, "n/a");
        sup.street = this.checkNullValue(sup.street, "n/a");
        sup.name = this.checkNullValue(sup.name, "n/a");
        sup.phone = this.checkNullValue(sup.phone, "n/a");

        // title
        var currentTask = "<h3 class='details'> Details: </h3>";
    
        // details current task
        currentTask += "<table id='info' data-role='table' class='ui-responsive table-stroke ui-table ui-table-reflow'>"
              + "<tbody>"
                + "<tr>"
                    + "<td id='stad' ><b > Stad: </b></td><td class='ui-width'>"
                    + sup.city
                    + "</td>"
                + "</tr>"
                + "<tr>"
                    + "<td id='straat'><b class='ui-table-cell-label'> Straat: </b></td>"
                    + "<td class='ui-width'>" + sup.street + "</td>"
                + "</tr>"
                + "<tr>"
                    + "<td id='datum'><b class='ui-table-cell-label'> Uiterste Datum: </b></td>"
                    + "<td class='ui-width'>"
                    + this.parseTSDate(task[current]['order_date'])
                    + "</td>"
                + "</tr>"
                + "<tr><td id='tijd'><b class='ui-table-cell-label'> Tijd: </b></td>"
                    + "<td class='ui-width'>"
                    + this.parseTSTime(task[current]['order_date'])
                    + "</td>"
                + "</tr>"
                + "<tr>"
                    + "<td id='contact'><b class='ui-table-cell-label' > Contact: </b></td>"
                    + "<td class='ui-width'>"
                    + sup.name
                    + "</td>"
                + "</tr>"
                + "<tr>"
                    + "<td id='tel'><b class='ui-table-cell-label' > Telefoon: </b></td>"
                    + "<td class='ui-width'>"
                    + sup.phone
                    + "</td>"
                + "</tr>"
                + "</tbody>"
          +  "</table> ";
    
        // load options
        currentTask +=
          "<div class='ui-center'>" +
          "<a onClick='c.renderAccept()' data-rel='popup' data-transition='pop' data-position-to='window' id='btn-submit' class='ui-btn ui-options ui-red'>Annuleren  <img src='include/css/images/icons-png/delete-white.png'></a>"; 
        if(current == task.length-1) {
          currentTask += "<a onClick='c.goBack()' class='ui-btn ui-options ui-green'>Afronden <img src='include/css/images/icons-png/check-white.png'></a></div>";
        } else {
          currentTask += "<a onClick='c.renderFinalForm("+(current + 1)+")' class='ui-btn ui-options ui-green'>Afronden <img src='include/css/images/icons-png/check-white.png'></a></div>";

        }
    
        $("#content").html(currentTask);
    }
  
    showWheel(current, tasks) 
    {
        $("#wheel").remove();
        $("#header").after("<div id='wheel'></div>");

        console.log(tasks);
        console.log(tasks[current]);

        var html = ""
                    + "<p class='previous'>"
                        + "<span id='previous-index'>0</span>.&nbsp;"
                        + "<span id='previous-label'>Geen taken voltooid</span>"
                    + "</p>"
                    + "<p class='current'>"
                        + "<span id='current-index'>1</span>.&nbsp;"
                        + "<span id='current-label'></span>"
                    + "</p>"
                    + "<p class='next'>"
                        + "<span id='next-index'>2</span>.&nbsp;"
                        + "<span id='next-label'></span>"
                    + "</p>"
            $("#wheel").html(html);

        console.log("current task: "+current);
        console.log("task length: "+tasks.length);

        if(current == 0)
        {
            $("#previous-label").html("Geen taken voltooid");
        } else {
            $("#previous-index").html(current);
            $("#previous-label").html(tasks[current-1]['supplier']['street']);
        }

        if (current == tasks.length-1) 
        {
            $("#next-index").html(tasks.length+1);
            $("#next-label").html("Einde rit");
        }
        else 
        {
            $("#next-index").html(current + 2);
            $("#next-label").html(tasks[current+1]['supplier']['street']);
        }

        $("#current-index").html(current + 1);
        $("#current-label").html(tasks[current]['supplier']['street']);
    }
  
    showQuantityForm() 
    {
        $("#quantity-form").show();
        $("#photo-form").hide();
    }
  
    showPhotoForm() 
    {
        $("#quantity-form").hide();
    
        // add images according to amount
    
        var quantity = $("#itemQuantity").val();
    
        (quantity > 999 ? quantity = 999 : 0) 
    
        var htmlphoto = "";
    
        for (var i = 0; i < quantity; i++) 
        {
            var imageOption = "" +
                + "<td>"
                    + "<div class='image-upload'>";
                        + "<label for='file-input-" + i + "'>"
                            + "<h4>Foto #" + (i + 1) + "</h4>"
                            + "<img id='file-input-img-" + i + "' src='include/img/plus.png' class='ui-plus' max-width='50%' />"
                        + "</label>";
  
                        + "<input id='file-input-" + i + "' class='photo-input' type='file' onChange='c.v.changePhotoIconToSolved(" + i + ")' />"
                    + "</div>" 
                + "</td>";
      
            switch (i % 2) 
            {
                case 0:
                  imageOption = "<tr>" + imageOption;
                  break;
                case 1:
                  imageOption = imageOption + "</tr>";
                  break;
                default:
            }
            htmlphoto += imageOption;
        }

        $("#photo-icons").html(htmlphoto);
    
        $("#photo-form").fadeIn();
    }
  
    changePhotoIconToSolved(i) 
    {
        // check if file is an image
        var allowed_types = ["image/jpg", "image/jpeg", "image/png", "image/bmp"];
    
        var img = $("#file-input-" + i).prop("files");
        var imgtype = img[0]["type"];
    
        if (allowed_types.indexOf(imgtype) >= 0) 
        {
          $("#file-input-img-" + i).attr("src", "include/img/checkmark.png");
        } else {
          $("#file-input-img-" + i).attr("src", "include/img/crossmark.png");
        }
    }

    parseTSDate(ts)
    {
        return ts.substring(0,ts.indexOf('T'));
    }

    parseTSTime(ts)
    {
        return ts.substring(ts.indexOf('T')+1,ts.indexOf('+')-3);
    }

    checkNullValue(value, replacement)
    {
        if(typeof(value) == 'undefined')
        {
            value = replacement
        }

        return value
    }
}
