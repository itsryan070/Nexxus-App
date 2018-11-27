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

    showOfferedTasks(div, tasks)
    {
        var html = "";
        /* body */
        html  += "<div class='ui-resize' data-role='content' data-theme='a'>"
                + "<h3 style='margin:0;margin-left:2vw; margin-top:1vh;'> Aangeboden taken </h3>";

        /* table */
        html += "<table id='table-offered-tasks' data-role='table' class='ui-responsive ui-table ui-table-reflow'>"
            + "<tbody id='title'><tr>"
            +   "<td><b>Datum</b></td>"
            +   "<td><b>Hoeveelheid</b></td>"
            +   "<td><b>Stad</b></td>"
            + "</tr>";

        /* table rows */
		for(var i=0; i < tasks.length; i++) 
        {
			html += "<tr onclick='' data-priority='1' id='title"+i+"'>"
                +   "<td>" + tasks[i]['date'] + "</td>" 
                +   "<td>" + tasks[i]['quantity'] + "</td>" 
                +   "<td>" + tasks[i]['location']['name'] + "</td>" 
                + "</tr>";
            console.log(tasks[i]);
		}	
        html += "</tbody>";

        $(div).append(html);
    }

    showAcceptedTasks()
    {
    
    }

    showPopupTask()
    {

    }
}
