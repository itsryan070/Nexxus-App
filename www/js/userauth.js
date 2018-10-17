$(document).ready(function(){
    var result = null;

    $.ajaxSetup({async:false});

    $.post(SERVER_URL + "/json/auth/user",
    {
        name: SERVER_USER,
        pass: SERVER_PASS,
    },
    function(data, status) {
        //console.log(data);
        result = data;
    });
    $.ajaxSetup({async:true});


    $("#userName").html(result.name);
    $("#userEmail").html(result.email);
    console.log(result);
});

