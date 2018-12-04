class FinalizeView 
{
    constructor() 
    {

    }

    showQuantityForm()
    {
        $("#quantity-form") .show();
        $("#foto-form")     .hide();
    }

    showFotoForm()
    {
        $("#quantity-form") .hide();
        $("#foto-form")     .fadeIn();
    }
}
