class VrijView 
{
    constructor() 
    {
      
    }

    showHeader(div)
    {
        $(div).html("<div data-role='header' data-position='fixed' role='banner' class='ui-header ui-bar-inherit ui-header-fixed slidedown'>"
              + "<h1 class='ui-title' role='heading' aria-level='1'>Nexxus</h1>"
              + "</div>"
        );
    }
    
    showFooterOffered(div)
    {
         $(div).html("<a id='btn-submit' onClick='loginc.handleLogout()' class='ui-btn-half ui-rood ui-link ui-btn ui-shadow ui-corner-all' data-role='button' role='button'>Uitloggen</a>"
            + '<a onClick="c.renderAcceptedTaskList()" name="accepted-tasks"; class="ui-btn-half ui-green ui-link ui-btn ui-shadow ui-corner-all" data-role="button" role="button"><img src="include/css/images/icons-png/bullets-white.png"> Geaccepteerde Taken</a>');
    }

    showFooterAccepted(div)
    {
         $(div).html("<a id='btn-submit' onClick='loginc.handleLogout()' class='ui-btn-half ui-rood ui-link ui-btn ui-shadow ui-corner-all' data-role='button' role='button'>Uitloggen</a>"
            + '<a onClick="c.renderOfferedTaskList()" name="accepted-tasks"; class="ui-btn-half ui-green ui-link ui-btn ui-shadow ui-corner-all" data-role="button" role="button"><img src="include/css/images/icons-png/bullets-white.png"> Aangeboden Taken</a>');
    }

    showTasklist(div, title, tasks)
    {
        var html = "";

        /* body */
        html  += "<div class='ui-resize ui-content' data-role='content' data-theme='a'>"
                + "<h3 style='margin:0;margin-left:2vw; margin-top:1vh;'>" + title + "</h3>";

        /* table */
        html += "<div  data-role='content' data-theme='a'>"
              + "<table id='table-offered-tasks' data-role='table' class='ui-responsive ui-table ui-table-reflow'>"
              + "<tbody id='title'>"
              + "<tr>"
              +   "<td><b>Datum</b></td>"
              +   "<td><b>Hoeveelheid</b></td>"
              +   "<td><b>Stad</b></td>"
              + "</tr>"

        /* table rows */
        if(Array.isArray(tasks) && tasks.length > 0)
        {
            for(var i=0; i < tasks.length; i++) 
            {
                // count products
                var relations = tasks[i]['product_relations'];
                var totalproducts = 0;

                for(var pr=0; pr < relations.length; pr++)
                {
                    totalproducts += relations[pr]['quantity'];
                }

                var location = tasks[i]['location']['name'];

                html += "<tr onClick='c.renderPopupTask(" + tasks[i]['id'] + ")'"
                            + "data-priority='1' id='title"+i+"'>";

                html += "<td>" + this.parseTSDate(tasks[i]['order_date']) + "</td>";

                if(totalproducts == 1) 
                {
                    html += "<td>" + totalproducts + " product</td>";
                } else {
                    html += "<td>" + totalproducts + " producten</td>";
                }

                html +=   "<td>" + location + "</td>"; 

                html +=  "</tr>";
            }	
        } else { html += "<tr><td colspan=3>Geen taken gevonden</td></tr>"; }
        html += "</tbody>";

        $(div).html(html);
    }
    
    showPopupTask(div, task)
    {
        var html = "";
      
        var sup = task.supplier;
        console.log(sup);
 
        var popup = "";

        popup += '<div class="ui-popup-screen ui-overlay-inherit in" id="reden-screen"></div> '

        popup += "<div data-role='popup' id='reden' data-dismissible='false' style='max-width:400px; min-width: 300px'>";
            popup += "<div role='main' class='ui-content'>";
                popup += "<a onclick='window.history.back();' style='position:relative; float: right;margin:0' data-role='button'"
                           + " class='ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-right ui-rood' ></a>";
                popup += "<br>";
                popup += "<h3>Reden weigering</h3>";
                popup += "<form>";
                    popup += "<label class='ui-radio-pop'>Ziek";
                        popup += "<input class=' mc-text-center' type='radio'name='radio-choice' id='radio-choice-1' value='choice-1' checked='checked'> ";
                    popup += "</label>";
                    popup += "<label class='ui-radio-pop'>";
                        popup += "<input type='radio' name='radio-choice' id='radio-choice-2' value='choice-2'> Tijdgebrek";
                    popup += "</label>";
                    popup += "<label class='ui-radio-pop mc-text-center'>";
                        popup += "<input type='radio' name='radio-choice' id='radio-choice-3' value='choice-3'> Overig";
                    popup += "</label>";
                popup += "</form>";
                popup += "<div onclick='controller.Geaccepteerd()' class='ui-green mc-text-center'>";
                popup += "<a href='#' data-rel='back' class='ui-btn ui-corner-all ui-shadow ui-btn-b mc-top-margin-1-5' data-disabled='false'>Bevestig</a></div>";
            popup += "</div>"
        popup += "</div>";

        $( ".visibility").remove();
        // undo nulls
        sup.city = this.checkNullValue(sup.city, "n/a");
        sup.street = this.checkNullValue(sup.street, "n/a");
        sup.name = this.checkNullValue(sup.name, "n/a");
        sup.phone = this.checkNullValue(sup.phone, "n/a");

        var relations = task['product_relations'];
        var totalproducts = 0;

        for(var pr=0; pr < relations.length; pr++)
        {
            totalproducts += relations[pr]['quantity'];
        }

        html += "<div class='visibility ui-content ui-body-a' id='data' data-role='content' data-theme='a' role='main'>"
          + "<a onclick='c.closingPopup()' style='position:relative; float: right;margin:0'  data-role='button'  class='ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-right ui-rood' ></a>"
               +"<h3 style='margin:0;margin-left:2vw; margin-top:1vh;'> Info</h3>"
               +" <table id='info' data-role='table' class='ui-responsive table-stroke ui-table ui-table-reflow'>"
                    + "<tbody >"
                        + "<tr>"  
                            + "<td id='stad' ><b class='ui-table-cell-label'> Stad: </b></td><td class='ui-width'>" + sup.city + "</td>"
                        + "</tr>"
                        + "<tr>" 
                            +" <td id='straat'><b class='ui-table-cell-label' > Straat: </b></td><td class='ui-width'>" + sup.street + "</td>"
                        +"</tr>"
                        +"<tr> "
                            +"<td id='datum'><b class='ui-table-cell-label' > Datum: </b></td><td class='ui-width'>" + this.parseTSDate(task.order_date) + "</td>"
                        +"</tr>"
                        + "<tr>" 
                            + "<td id='wat'><b class='ui-table-cell-label' > Hoeveelheid: </b> </td><td class='ui-width'>"+ totalproducts + "</td>"
                        +"</tr>"
                            +"<tr><td id='tijd'><b class='ui-table-cell-label'  > Tijd: </b></td><td class='ui-width'>"+ this.parseTSTime(task.order_date) +"</td>"
                        +"</tr>"
                        +"<tr>"
                            +"<td id='contact'><b class='ui-table-cell-label' > Contact: </b></td><td class='ui-width'>"+ sup.name +" </td>"
                        +"</tr>"
                        +"<tr>"
                            +"<td id='tel'><b class='ui-table-cell-label' > Telefoon: </b></td><td class='ui-width'>"+ sup.phone +" </td>"
                        + "</tr>"
                    +"</tbody>"; 
                +"</table> "
        +"</div>";
 
        var keuze = "";
        keuze += "<br><div class='ui-center'>";
        keuze += "<a onClick='c.renderRefuse()' href='#reden' data-rel='popup' data-transition='pop' data-position-to='window' id='btn-submit' class='ui-btn ui-options ui-rood'>Weigeren  <img src='include/css/images/icons-png/delete-white.png'></a>"
        keuze += "<a onClick='c.postAcceptedTask(" + task['id'] + ", false)' id='btn-submit' class='ui-btn ui-options ui-green'>Accepteren <img src='include/css/images/icons-png/check-white.png'></a>";

        $(".visibility").remove();
        $(".ui-resize").after(html);
        $("#info").after(keuze);
        this.switch = true;
    }

    renderRefuse()
    {
        var popup = "";

        popup += "<div class='ui-popup-screen ui-overlay-inherit in' id='reden-screen'></div> "
                + "<div class='ui-popup-container pop in ui-popup-activ' id='reden-popup' style='max-width: 330px; top: 171px; left: 29px;'>"
                    + "<div class='ui-popup ui-body-inherit ui-overlay-shadow ui-corner-all' data-role='popup' id='reden' data-dismissible='false' style='max-width:400px; min-width: 300px'>"
                    + "<div role='main' class='ui-content'>"
                    + "<a onclick='c.closingPopup()' style='position:relative; float: right;margin:0'  data-role='button'  class='ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-right ui-rood' ></a>"
                    + "<br>"
                    + "<h3 >Reden weigering</h3>"
                    + "<form>"
                        +"<div class='ui-radio'>"
                            +"<label class='ui-radio-pop ui-btn ui-corner-all ui-btn-inherit ui-btn-icon-left'>"
                            + "Ziek"
                            +"</label>"
                            +"<input data-cacheval='false' class=' mc-text-center' type='radio' name='radio-choice' id='radio-choice-1' value='choice-1'>"
                        +"</div>"
                        +"<div class='ui-radio'>"
                            +"<label class='ui-radio-pop ui-btn ui-corner-all ui-btn-inherit ui-btn-icon-left'>"
                            +"Tijdgebrek"
                            +"</label>"
                            +"<input data-cacheval='false' type='radio' name='radio-choice' id='radio-choice-2 value='choice-2'>"
                        +"</div>"
                        +"<div class='ui-radio'>"
                            +"<label class='ui-radio-pop mc-text-center ui-btn ui-corner-all ui-btn-inherit ui-btn-icon-left '>"
                            +"Overig"
                            +"</label><input data-cacheval='false' type='radio' name='radio-choice' id='radio-choice-3' value='choice-3'>"
                        +"</div>"
                    +"</form>"
                    + "<div onclick='controller.Geaccepteerd()'' class='ui-green mc-text-center'><a href='#' data-rel='back' class='ui-btn ui-corner-all ui-shadow ui-btn-b mc-top-margin-1-5' data-disabled='false'>Bevestig</a></div>"
                 + "</div>"
            +"</div>"
        + "</div>"

        $("#footer").after(popup);

    }

    closePopup()
    {
        $( ".visibility" ).remove();
        $( '#reden-screen' ).remove();
        $( '#reden-popup' ).remove();
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
