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
    showFooter(div){
         $(div).html("<a id='btn-submit'id='btn-submit' class='ui-btn-half ui-rood ui-link ui-btn ui-shadow ui-corner-all' data-role='button' role='button'>Uitloggen</a>"
            + '<a onClick="c.renderAcceptedTaskList()" name="accepted-tasks"; class="ui-btn-half ui-green ui-link ui-btn ui-shadow ui-corner-all" data-role="button" role="button"><img src="include/css/images/icons-png/bullets-white.png"> Geaccepteerde Taken</a>');
    }

    showTasklist(div, title, tasks)
    {
        var html = "";

        /* body */
        html  += "<div class='ui-resize ui-content' data-role='content' data-theme='a'>"
                + "<h3 style='margin:0;margin-left:2vw; margin-top:1vh;'> Aangeboden taken </h3>";

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
                html += "<td>" + totalproducts + " product</td>";
            }

            html +=   "<td>" + location + "</td>"; 

            html +=  "</tr>";
		}	
        html += "</tbody>";

        $(div).html(html);
    }
    
    showPopupTask(div, task)
    {
        var html = "";
      
        var sup = task.supplier;

        html += '<div class="visibility ui-content ui-body-a" id="data" data-role="content" data-theme="a" role="main">'
          + '<a onclick="c.closingPopup()" style="position:relative; float: right;margin:0"  data-role="button"  class="ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-right ui-rood" ></a>'
               +'<h3 style="margin:0;margin-left:2vw; margin-top:1vh;"> Info</h3>'
               +' <table id="info" data-role="table" class="ui-responsive table-stroke ui-table ui-table-reflow">'
                    + '<tbody >'
                        + '<tr>'  
                            + '<td id="stad" ><b class="ui-table-cell-label" style="width: 30vw;"> Stad: </b></td><td style="max-width:40vw">' + sup.city + '</td>'
                        + '</tr>'
                        + '<tr>' 
                            +' <td id="straat"><b class="ui-table-cell-label"  style="width: 20vw;"> Straat: </b></td><td style="width:50vw">' + sup.street + '</td>'
                        +'</tr>'
                        +'<tr> '
                            +'<td id="datum"><b class="ui-table-cell-label" style="width: 30vw;"> Datum: </b></td><td style="max-width:40vw">' + this.parseTSDate(task.order_date) + '</td>'
                        +'</tr>'
                        + '<tr>' 
                            + '<td id="wat"><b class="ui-table-cell-label"  style="width: 30vw;"> Hoeveelheid: </b> </td><td style="max-width:40vw">'+ 'wat' + '</td>'
                        +'</tr>'
                            +'<tr><td id="tijd"><b class="ui-table-cell-label"  style="width: 30vw;"> Tijd: </b></td><td style="max-width:40vw">'+ 'tijd' +'</td>'
                        +'</tr>'
                        +'<tr>'
                            +'<td id="contact"><b class="ui-table-cell-label"  style="width: 30vw;"> Contact: </b></td><td style="max-width:40vw">'+ 'contact' +' </td>'
                        +'</tr>'
                        +'<tr>'
                            +'<td id="tel"><b class="ui-table-cell-label" style="width: 30vw;"> Telefoon: </b></td><td style="max-width:40vw">'+ 'tel' +' </td>'
                        + '</tr>'
                    +'</tbody>'; 
                +'</table> '
        +'</div>';
 
        var keuze = '';
        keuze += "<br><div class='ui-center'>"
        keuze += '<a onClick="c.renderRefuse()" href="#reden" data-rel="popup" data-transition="pop" data-position-to="window" id="btn-submit" class="ui-btn ui-options ui-rood">Weigeren  <img src="include/css/images/icons-png/delete-white.png"></a>'
        keuze += '<a onClick="c.renderAccept()" id="btn-submit" class="ui-btn ui-options ui-green">Accepteren <img src="include/css/images/icons-png/check-white.png"></a>';
        
        var popup = "";

        popup += '<div class="ui-popup-screen ui-overlay-inherit in" id="reden-screen"></div> '
                + '<div data-role="popup" id="reden" data-dismissible="false" style="max-width:400px; min-width: 300px">'
                + '<div role="main" class="ui-content">'
                + '<a onclick="window.history.back();" style="position:relative; float: right;margin:0"  data-role="button"  class="ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-right ui-rood" ></a>'
                + '<br>'
                + '<h3 >Reden weigering</h3>'
                + '<form>'
                    + '<label class="ui-radio-pop">Ziek'
                        + '<input class=" mc-text-center" type="radio"name="radio-choice" id="radio-choice-1" value="choice-1" checked="checked"> '
                    + '</label>'
                    + '<label class="ui-radio-pop">'
                        + '<input type="radio" name="radio-choice" id="radio-choice-2" value="choice-2"> Tijdgebrek'
                    + '</label>'
                    + '<label class="ui-radio-pop mc-text-center">'
                        + '<input type="radio" name="radio-choice" id="radio-choice-3" value="choice-3"> Overig'
                    + '</label>'
                + '</form>'
                + '<div onclick="controller.Geaccepteerd()" class="ui-green mc-text-center"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-b mc-top-margin-1-5" data-disabled="false">Bevestig</a></div>'
            +'</div>'
        + '</div>';

        $( ".visibility").remove();
        $(".ui-resize").after(html);
        $("#info").after(keuze);
        this.switch = true;
    }
    showPopupRe(){
         var popup = "";

        popup += '<div class="ui-popup-screen ui-overlay-inherit in" id="reden-screen"></div> '
                + '<div class="ui-popup-container pop in ui-popup-active ui-body-inherit" id="reden-popup" style="max-width: 330px; top: 171px; left: 29px;">'
                    + '<div data-role="popup" id="reden" data-dismissible="false" style="max-width:400px; min-width: 300px">'
                    + '<div role="main" class="ui-content">'
                    + '<a onclick="window.history.back();" style="position:relative; float: right;margin:0"  data-role="button"  class="ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-right ui-rood" ></a>'
                    + '<br>'
                    + '<h3 >Reden weigering</h3>'
                    + '<form>'
                        +' <div class="ui-radio">'
                        + '<label class=" ui-btn ui-corner-all ui-btn-inherit ui-btn-icon-left ui-radio-on">'
                            + '<input class=" mc-text-center" type="radio"name="radio-choice" id="radio-choice-1" value="choice-1" checked="checked"> Ziek'
                        + '</label>'
                        + '<label class=" ui-btn ui-corner-all ui-btn-inherit ui-btn-icon-left ui-radio-on">>'
                            + '<input type="radio" name="radio-choice" id="radio-choice-2" value="choice-2"> Tijdgebrek'
                        + '</label>'
                        + '<label class=" ui-btn ui-corner-all ui-btn-inherit ui-btn-icon-left ui-radio-on">>'
                            + '<input type="radio" name="radio-choice" id="radio-choice-3" value="choice-3"> Overig'
                        + '</label>'
                    + '</form>'
                    + '<div onclick="controller.Geaccepteerd()" class="ui-green mc-text-center"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-b mc-top-margin-1-5" data-disabled="false">Bevestig</a></div>'
                    +'</div>'
                 + '</div>'
            +'</div>'
        + '</div>';

           $(".ui-center").after(popup);
    }
    closePopup(){
        $( '.visibility' ).remove();
    }
    parseTSDate(ts)
    {
        return ts.substring(0,ts.indexOf('T'));
    }

    parseTSTime(ts)
    {
        return ts.substring(ts.indexOf('T'));
    }
}
