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

    showTasklist(div, title, tasks)
    {
        var html = "";

        /* table */
        html += "<div class='ui-resize' data-role='content' data-theme='a'>"
              + "<button name='uitloggen'>Uitloggen</button>"
              + "<button onClick='c.renderOfferedTaskList()' name='offered-tasks'>Aangeboden Taken</button>"
              + "<button onClick='c.renderAcceptedTaskList()' name='accepted-tasks'>Geaccepteerde Taken</button>"
              + "<h3 style='margin:0;margin-left:2vw; margin-top:1vh;'>"+title+"</h3>"
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

                html += "<td>" + this.parseDateFromTimestamp(tasks[i]['order_date']) + "</td>";

            if(totalproducts == 1) 
            {
                html += "<td>" + totalproducts + " product</td>";
            } else {
                html += "<td>" + totalproducts + " producten</td>";
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
        console.log(task);
        var sup = task.supplier;
        
        html += "Stad: "   + sup.city;
        html += "Straat: " + sup.street;
        html += "Datum: "  + sup.date

        $(div).html(html);
    }
    
    parseDateFromTimestamp(ts)
    {
        return ts.substring(0,ts.indexOf('T'));
    }

    parseTimeFromTimestamp(ts)
    {
        return ts.substring(ts.indexOf('T'));
    }
}
