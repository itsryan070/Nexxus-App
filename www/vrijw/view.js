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
              + "<table id='table-offered-tasks' data-role='table' class='ui-responsive ui-table ui-table-reflow'>"
              + "<tbody id='title'>"
              + "<tr>"
              +   "<td><b>Datum</b></td>"
              +   "<td><b>Hoeveelheid</b></td>"
              +   "<td><b>Stad</b></td>"
              + "</tr>"

        /* table rows */
        if(tasks!=0)
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
        } else { html += "</tbody>Geen taken gevonden"; }
        html += "</tbody>";

        $(div).html(html);
    }

    showPopupTask(div, task)
    {
        var html = "";
        console.log(task);
        var sup = task.supplier;

        // in case not set, show n/a instead of undefined
        sup.city = sup.city || "n/a";
        sup.street = sup.street || "n/a";

        html += "Stad: "   + sup.city;
        html += "Straat: " + sup.street;
        html += "Datum: "  + this.parseTSDate(task.order_date);

        /* buttons */
        html += "<br>";
        html += "<button onClick='c.renderAcceptedTaskList()' name='accept-task'>Accepteren</button>";
        html += "<button onClick='c.renderAcceptedTaskList()' name='weigeren-task'>Weigeren</button>";


        $(div).html(html);
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
