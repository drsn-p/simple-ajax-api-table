$(document).ready(function () {
    $("table").hide();
    $(".btn2").hide();
    $('.btn-show').hover(function () {  
        $(this).html('SHOW DATA')
    }, function() {
        $(this).html("CLICK HERE")
    });
    $(".btn-show").click(function () {
        $(this).hide();
        $('.heading p').hide();
        $('.btn2').show();
        setTimeout(() => {
            $(this).hide();
            $("table").show(); 
            $('.btn2').hide()
        }, 2000);
        $.ajax({
            type: "get",
            url: "https://api.publicapis.org/entries",
            dataType: "json",
            success: function (response) {
                let fetchdata = "";
                response.entries.forEach((ele) => {
                    fetchdata +=
                        `<tr><td>` +
                        ele.API +
                        `</td><td>` +
                        ele.Description +
                        `</td><td>` +
                        ele.Auth +
                        `</td><td>` +
                        ele.Cors +
                        `</td><td><a href="` +ele.Link +`" target="_blank">` +
                        ele.Link + `</a>`+
                        `</td><td>` +
                        ele.Category +
                        `</td></tr>`;
                });
                $("table").append(fetchdata);
                $('table tbody').paginathing();
                
            },
        });
    });
});
