$(document).ready(function(){
    var logged_in = false;

    // get user data
    $.post(SERVER_URL + "/json/auth/user",
    {
        name: LOCAL_USER,
        pass: LOCAL_PASS,
    },
    function(data, status) {
        console.log(status);
        if(status=='success') {
            result = data;
            logged_in = true;
        }

        $("#userName").html(result.username);
        $("#userEmail").html(result.email);

        if(logged_in) {
            // get orders
            $.post(SERVER_URL + "/json/get/orders",
            {
                name: LOCAL_USER,
                pass: LOCAL_PASS,
            },
            function(data, status) {
                console.log(data);
            });
        }
    });
});

