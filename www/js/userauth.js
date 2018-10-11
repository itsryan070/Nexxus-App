$(document).ready(function(){
    var result;

    $.post(url + "/json/get/user",
    {
        name: user,
        pass: pass,
    },
    function(data, status) {
        console.log(data);
        result = data;
        console.log("Data: " + data + "\nStatus: " + status);
    });
    
    console.log(result);
});
