class FinalizeController
{
    constructor() 
    {
        this.m = new FinalizeModel();
        this.v = new FinalizeView();
    }

    renderFinalForm()
    {
        var id = this.m.getFinalItem();
        this.v.showFinalForm("#content", id);
    }
}
