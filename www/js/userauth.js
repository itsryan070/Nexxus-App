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
                var table = "";
                console.log(data.orders);
                $.each(data.orders, function(index, value) {
                    table += "<tr>";
                    table += "<td>"+value.orderNr+"</td>";
                    table += "<td>"+value.location+"</td>";
                    table += "<td>"+value.pickUpDate+" "+ value.pickUpTime+"</td>";
                    console.log(index +": "+value.orderNr);
                    $(".orderList").html(table);
                });
            });
        }
    });
});

