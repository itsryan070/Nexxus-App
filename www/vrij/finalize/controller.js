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

    renderPhotoForm()
    {
        this.v.showPhotoForm();
    }

    submitForm()
    {

    }

    goBack()
    {
        window.open('vrij.html', '_self');
    }
}
