class FinalizeController {
  constructor() {
    this.m = new FinalizeModel(this);
    this.v = new FinalizeView();

    this.id = this.m.getFinalItem();
  }

  renderFinalForm() {
    indexc.v.showHeader("#header");

    this.v.showQuantityForm();

    var id = this.m.getFinalItem();
  }

  renderPhotoForm() {
    this.v.showPhotoForm();
  }

  submitForm(callback) {
    // fade out form, show loading

    // send photos to handle
    //this.m.submitFinalizeForm();

    if (!callback) {
      this.m.setOrderStatusDone(this.id);
    } else {
      alert("Ophaaldienst afgerond!");
      this.goBack();
    }
  }
  renderAccept() {
    this.v.showWheel;
  }
  renderCancel() {
    this.v.showWheel;
  }
  goBack() {
    window.open("vrij.html", "_self");
  }
}
