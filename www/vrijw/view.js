class View 
{
    constructor() 
    {

    }

    showHeader(div)
    {
        $(div).append("<div data-role='header' data-position='fixed'>"
			+ "<h1 >Nexxus</h1>"
		+ "</div>"
		+ "<div class='ui-resize'data-role='content' data-theme='a'>"
			+ "<h3 style='margin:0;margin-left:2vw; margin-top:1vh;'> Aangeboden taken </h3>"
			+ "<table data-role='table' class='ui-responsive ui-table ui-table-reflow'>"
   				+ "<tbody id='title'>"
				+ "</tbody>"
   			+ "</table> "
		+ "</div>");
    }

    showOfferedTasks(div, tasks)
    {
        $(div).append("<div id='offered-tasks'><table id='table-offered-tasks'></table>");
		$("#table-offered-tasks").append("<tr>"
            +   "<td><b>Datum</b></td>"
            +   "<td><b>Hoeveelheid</b></td>"
            +   "<td><b>Stad</b></td>"
            + "</tr>"
        );
		for(var x=0; x < tasks.length; x++){
			$("#offered-tasks").append("<tr onclick=" + "controller.Setinfoselected('"+(x+1)+"')" + " data-priority='1' id='title"+x+"'>" + tasks[x] +  "</tr>");
		}	
    }

    showAcceptedTasks()
    {
    
    }

    showPopupTask()
    {

    }
}
