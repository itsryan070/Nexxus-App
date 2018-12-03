class FinalizeView 
{
    constructor() 
    {

    }

    showFinalForm(div, id)
    {
        var html = "";
        html += "Final #" + id;
            
        $(div).html(html);
    }
}
