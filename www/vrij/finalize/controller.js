class FinalizeController 
{
    constructor() 
    {
        this.m = new FinalizeModel(this);
        this.v = new FinalizeView();
    
        this.id = this.m.getFinalItem();
    }
  
    renderFinalForm(i) 
    {
        console.log("Rendering final form...");
        indexc.v.showHeader("#header");
        
        // retrieve tasks
        var tasks = this.m.acceptedTasks;

        // render page
        this.v.showWheel(i, tasks);
        this.v.showCurrentTask(i, tasks.length - 1, tasks);

        // if this isn't the first entry
        if(i>0)
        {
            this.v.showAfrondPopup(this.m.getTypes());
        }
    }
  
    renderPhotoForm() 
    {
        this.v.showPhotoForm(this.m.getTypes());
    }
  
    submitForm(callback) 
    {
        if (!callback) 
        {
            this.m.setOrderStatusDone(this.id);
        } else 
        {
            this.closePopup();
        }
    }

    closePopup()
    {
        this.v.closePopup();
    }
  
    renderAccept() 
    {
        this.m.setNextTask();
        this.v.showCurrentTask(
            this.m.getCurrentTask(),
            this.m.getTasks().length - 1,
            this.m.getTasks()
        );
        this.v.showWheel(this.m.getCurrentTask(), this.m.getTasks());
    }
  
    renderCancel() 
    {
        this.m.setNextTask();
        this.v.showCurrentTask(
          this.m.getCurrentTask(),
          this.m.getTasks().length - 1,
          this.m.getTasks()
        );
        this.v.showWheel(this.m.getCurrentTask(), this.m.getTasks());
    }
  
    goBack() 
    {
        window.open("vrij.html", "_self");
    }
}
