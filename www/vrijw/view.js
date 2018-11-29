class View 
{
    constructor() 
    {
      
    }

    showHeader(div)
    {
        $(div).append("<div data-role='header' data-position='fixed' role='banner' class='ui-header ui-bar-inherit ui-header-fixed slidedown'>"
              + "<h1 class='ui-title' role='heading' aria-level='1'>Nexxus</h1>");
    }

    showTasklist(div, tasks)
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

        /* table rows */
		for(var i=0; i < tasks.length; i++) 
        {
            // parse date
            var date = tasks[i]['order_date'];
            date = date.substring(0,date.indexOf('T'));

            // count products
            var relations = tasks[i]['product_relations'];
            var totalproducts = 0;

            for(var pr=0; pr < relations.length; pr++)
            {
                totalproducts += relations[pr]['quantity'];
            }

            var location = tasks[i]['location']['name'];

			html += "<tr onClick='c.renderPopupTask(" + tasks[i]['id'] + ")' data-priority='1' id='title"+i+"'>";
            html +=   "<td>" + date + "</td>";
            if(totalproducts==1) {
                html +=   "<td>" + totalproducts + " product</td>";
            } else {
                html +=   "<td>" + totalproducts + " producten</td>";
            }
            html +=   "<td>" + location + "</td>"; 
            html +=  "</tr>";
		}	
        html += "</tbody>";

        $(div).append(html);
    }

    showAcceptedTasks()
    {
    
    }
    
    showPopupTask(div, task)
    {
        var text = "";
      
        var sup = task.supplier;
        console.log(sup.date);

        text = '<div class="visability ui-content ui-body-a" id="data" data-role="content" data-theme="a" role="main">'
          + '<a onclick="c.closingPopup()" style="position:relative; float: right;margin:0"  data-role="button"  class="ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-right ui-rood" ></a>'
               +'<h3 style="margin:0;margin-left:2vw; margin-top:1vh;"> Info</h3>'
               +' <table data-role="table" class="ui-responsive table-stroke ui-table ui-table-reflow">'
                    + '<tbody id="info">'
                        + '<tr>'  
                            + '<td id="stad" ><b class="ui-table-cell-label" style="width: 30vw;"> Stad: </b></td><td style="max-width:40vw">' + sup.city + '</td>'
                        + '</tr>'
                        + '<tr>' 
                            +' <td id="straat"><b class="ui-table-cell-label"  style="width: 20vw;"> Straat: </b></td><td style="width:50vw">' + sup.street + '</td>'
                        +'</tr>'
                        +'<tr> '
                            +'<td id="datum"><b class="ui-table-cell-label" style="width: 30vw;"> Datum: </b></td><td style="max-width:40vw">' + sup.date + '</td>'
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
                        + ' </tr>'
                    +'</tbody>'; 
                +'</table> '
        +'</div>';

        $( ".visability").remove();
        $(".ui-resize").after(text);
        $('.ui-resize').animate({height:'30vh'});
        this.switch = true;
    }
    closePopup(){
        $( '.visability' ).remove();
        $('.ui-resize').animate({height:'70vh'});
    }
}
