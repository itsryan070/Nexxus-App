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

        this.v.showQuantityForm();

        var id = this.m.getFinalItem();
    }

    renderFotoForm()
    {
        this.v.showFotoForm();
    }

    goBack()
    {
        window.open('vrij.html', '_self');
    }
}
