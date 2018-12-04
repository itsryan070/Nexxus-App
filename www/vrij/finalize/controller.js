class FinalizeController
{
    constructor() 
    {
        this.m = new FinalizeModel();
        this.v = new FinalizeView();
    }

    renderFinalForm()
    {
        indexc.v.showHeader("#header");

        $("#quantity-form").show();
        $("#foto-form").hide();

        var id = this.m.getFinalItem();
    }
}
