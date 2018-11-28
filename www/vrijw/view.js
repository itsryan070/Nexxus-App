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
        html  += "<div class='ui-resize' data-role='content' data-theme='a'>"
                + "<h3 style='margin:0;margin-left:2vw; margin-top:1vh;'> Aangeboden taken </h3>";

        /* table */
        html += "<table id='table-offered-tasks' data-role='table' class='ui-responsive ui-table ui-table-reflow'>"
            + "<tbody id='title'>"
            + "<tr>"
            +   "<td><b>Datum</b></td>"
            +   "<td><b>Hoeveelheid</b></td>"
            +   "<td><b>Stad</b></td>"
            + "</tr>"

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
        var html = "";
        console.log(task);
        var sup = task.supplier;
        
        html += "Stad: "   + sup.city;
        html += "Straat: " + sup.street;
        html += "Datum: "  + sup.date

        $(div).html(html);
    }
}
