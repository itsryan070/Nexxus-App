class FinalizeView 
{
    constructor() 
    {

    }

    showFinalForm(div, id)
    {
        var html = "";
        html += "Afronden #" + id + "<br>";
        html += "<h3>Afrond formulier</h3>"
              + "Stap 1: Maak foto's van alle producten"
              + "";
            
        $(div).html(html);
    }
}
