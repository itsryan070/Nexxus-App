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
		+ "<div class='ui-resize' data-role='content' data-theme='a'>"
			+ "<h3 style='margin:0;margin-left:2vw; margin-top:1vh;'> Aangeboden taken </h3>"
		
    }

    showOfferedTasks(div, tasks)
    {
        $(div).append("<div class='ui-resize ui-content ui-body-a' data-role='content' data-theme='a' role='main'>"
            + "<table id='table-offered-tasks' data-role='table' class='ui-responsive ui-table ui-table-reflow'>");

		$("#table-offered-tasks").append(""
            + "<tbody id='title'><tr>"
            +   "<td><b>Datum</b></td>"
            +   "<td><b>Hoeveelheid</b></td>"
            +   "<td><b>Stad</b></td>"
            + "</tr>"
        );
        // return rows
		for(var i=0; i < tasks.length; i++){
			$("#table-offered-tasks").append("<tr onclick=" 
                + "controller.Setinfoselected('"+i+"') data-priority='1' id='title"+i+"'>"
                +   "<td>Test</td>" 
                + "</tr>"
            );
            console.log(tasks[i]);
		}	
		$("#table-offered-tasks").append("</tbody>");
    }

    showAcceptedTasks()
    {
    
    }

    showPopupTask()
    {

    }
}
