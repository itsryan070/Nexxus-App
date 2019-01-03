class FinalizeModel
{
    constructor() 
    {
        this.url        = userConfig.api;
        this.token      = sessionStorage.getItem("token");
    }

    getFinalItem()
    {
        return sessionStorage.getItem("finalitem");
    }

    setOrderStatusDone(id)
    {

    }

    submitFinalizeForm(status)
    {

        switch(status)
        {
            case 'request':
                // ...
                break;
            case 'done': // on callback success, redirect 
                break;
            default:
                break;
        }
    }
}
