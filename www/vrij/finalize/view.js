class FinalizeView 
{
    constructor() 
    {

    }

    showQuantityForm(div, id)
    {
        var html = "";
        html += "Afronden #" + id + "<br>";
        html += "<h3> Ophaal informatie </h3>";
        html += "<form>";
            html += "<label> Noteer de hoeveelheid ontvangen fietsen. </label>";
            html += "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input class='inputnum' type='number' value='4'></div> ";
    html += "";
            html += "<label> Heeft u de fietsen afgeleverd in [locatie]. </label>";
            html += "<div class='ui-center'>";
                html += "<a onclick='#' id='btn-submit' class='ui-btn ui-options ui-rood'> Nee  <img src='include/css/images/icons-png/delete-white.png'></a>";
                html += "<a onclick='#' id='btn-submit' class='ui-btn ui-options ui-green '> Ja <img src='include/css/images/icons-png/check-white.png'></a>";
            html += "</div>";
        html += "</form>";
            
        $(div).html(html);
    }
}
