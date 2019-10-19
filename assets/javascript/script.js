$(document).ready(function() {


    //set global variables
    let pubYear = '&pub_year=startYear-endYear'



    //functions







    // run code - onclicks
    // onclick for search command
    $('#search').on('click', function(event) {
        event.preventDefault();

        //set var for api search
        let searchTerms = 'elections'
        let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.jsonq?=${searchTerms}&api-key=NEKLRMc4YggFyq7Dq9JmmHAGoQX3VCBI${pubYear}`;

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {
            //set call back fucntion


        })

    });







})



//API key: NEKLRMc4YggFyq7Dq9JmmHAGoQX3VCBI