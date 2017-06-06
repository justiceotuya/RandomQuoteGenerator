$("document").ready(function () {
    
    getData();
    $('#getQuote').click(function () {
            getData();
        })

    //function to get data from api
    function getData() {
        $.ajax({
            headers: {
                "X-Mashape-Key": "qE3MI8W9blmshBknrl29bjS7Bh9Bp1KZZ70jsnnW7EgiCqP2EN"
                , Accept: "application/json"
            }
            , url: 'https://andruxnet-random-famous-quotes.p.mashape.com/'
            , type: "GET"
            , dataType: "json", //data: {}
            success: function (data) {
                console.log(data);
                var currentQuote = data.quote;
                var currentAuthor = data.author;
                $("#quotes").html(currentQuote);
                $("#author").html(currentAuthor);
                
            }
        })
    }

    // Sharing the Tweet
    $("#tweet").on("click", function () {
       window.open("https://twitter.com/intent/tweet?text=" + $('#quotes').text() + " - " + $('#author').text(), "_blank");
    });
    
});