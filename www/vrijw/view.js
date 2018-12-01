class View 
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
         $(div).html("<a id='btn-submit'id='btn-submit' class='ui-btn-half ui-rood ui-link ui-btn ui-shadow ui-corner-all' data-role='button' role='button'>Uitloggen</a>"
            + '<a onClick="c.renderAcceptedTaskList()" name="accepted-tasks"; class="ui-btn-half ui-green ui-link ui-btn ui-shadow ui-corner-all" data-role="button" role="button"><img src="include/css/images/icons-png/bullets-white.png"> Geaccepteerde Taken</a>');
    }

    showFooterAccepted(div)
    {
         $(div).html("<a id='btn-submit'id='btn-submit' class='ui-btn-half ui-rood ui-link ui-btn ui-shadow ui-corner-all' data-role='button' role='button'>Uitloggen</a>"
            + '<a onClick="c.renderOfferedTaskList()" name="accepted-tasks"; class="ui-btn-half ui-green ui-link ui-btn ui-shadow ui-corner-all" data-role="button" role="button"><img src="include/css/images/icons-png/bullets-white.png"> Aangeboden Taken</a>');
    }

    showTasklist(div, title, tasks)
    {
        var html = "";

        /* body */
        html  += "<div class='ui-resize ui-content' data-role='content' data-theme='a'>"
                + "<h3 style='margin:0;margin-left:2vw; margin-top:1vh;'>" + title + "</h3>";

        /* table */
        html += "<table id='table-offered-tasks' data-role='table' class='ui-responsive ui-table ui-table-reflow'>";
            + "<tbody id='title'><tr>";
            +   "<td><b>Datum</b></td>";
            +   "<td><b>Hoeveelheid</b></td>";
            +   "<td><b>Stad</b></td>";
            + "</tr>";
 

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
        if(Array.isArray(tasks))
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

        html += "<div class='visability ui-content ui-body-a' id='data' data-role='content' data-theme='a' role='main'>"
          + "<a onclick='c.closingPopup()' style='position:relative; float: right;margin:0'  data-role='button'  class='ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-right ui-rood' ></a>"
               +"<h3 style='margin:0;margin-left:2vw; margin-top:1vh;'> Info</h3>"
               +" <table id='info' data-role='table' class='ui-responsive table-stroke ui-table ui-table-reflow'>"
                    + "<tbody >"
                        + "<tr>"  
                            + "<td id='stad' ><b class='ui-table-cell-label' style='width: 30vw;'> Stad: </b></td><td style='max-width:40vw'>" + sup.city + "</td>"
                        + "</tr>"
                        + "<tr>" 
                            +" <td id='straat'><b class='ui-table-cell-label'  style='width: 20vw;'> Straat: </b></td><td style='width:50vw'>" + sup.street + "</td>"
                        +"</tr>"
                        +"<tr> "
                            +"<td id='datum'><b class='ui-table-cell-label' style='width: 30vw;'> Datum: </b></td><td style='max-width:40vw'>" + this.parseTSDate(task.order_date) + "</td>"
                        +"</tr>"
                        + "<tr>" 
                            + "<td id='wat'><b class='ui-table-cell-label'  style='width: 30vw;'> Hoeveelheid: </b> </td><td style='max-width:40vw'>"+ totalproducts + "</td>"
                        +"</tr>"
                            +"<tr><td id='tijd'><b class='ui-table-cell-label'  style='width: 30vw;'> Tijd: </b></td><td style='max-width:40vw'>"+ this.parseTSTime(task.order_date) +"</td>"
                        +"</tr>"
                        +"<tr>"
                            +"<td id='contact'><b class='ui-table-cell-label'  style='width: 30vw;'> Contact: </b></td><td style='max-width:40vw'>"+ sup.name +" </td>"
                        +"</tr>"
                        +"<tr>"
                            +"<td id='tel'><b class='ui-table-cell-label' style='width: 30vw;'> Telefoon: </b></td><td style='max-width:40vw'>"+ sup.phone +" </td>"
                        + "</tr>"
                    +"</tbody>"; 
                +"</table> "
        +"</div>";
 
        var keuze = "";
        keuze += "<br><div class='ui-center'>";
        keuze += "<a onClick='c.renderAcceptedTaskList()' data-rel='popup' data-transition='pop' data-position-to='window' id='btn-submit' class='ui-btn ui-options ui-rood'>Weigeren  <img src='include/css/images/icons-png/delete-white.png'></a>"
        keuze += "<a onClick='c.postAcceptedTask(" + task['id'] + ", false)' id='btn-submit' class='ui-btn ui-options ui-green'>Accepteren <img src='include/css/images/icons-png/check-white.png'></a>";

        $(".visability").remove();
        $(".ui-resize").after(html);
        $("#info").after(keuze);
        this.switch = true;
    }
  
    closePopup()
    {
        $( ".visability" ).remove();
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
