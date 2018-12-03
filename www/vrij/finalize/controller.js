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

        var id = this.m.getFinalItem();
        this.v.showFinalForm("#content", id);
    }
}
