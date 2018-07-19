$("document").ready(function () {

    getData();
    $('#getQuote').click(function () {
        getData();
    });

    //function to get data from api
    function getData() {

        $.ajax({
            url: 'https://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            },
            success: function (data) {
                console.log(data);
                var currentQuote = data.quoteText;
                var currentAuthor = data.quoteAuthor;
                $("#quotes").html(currentQuote);
                $("#author").html(currentAuthor);

            }
        });
    }

    // Sharing the Tweet
    $("#tweet").on("click", function () {
        window.open("https://twitter.com/intent/tweet?text=" + $('#quotes').text() + " - " + $('#author').text(), "_blank");
    });

});