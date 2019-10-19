$(document).ready(function() {


    //set global variables
    let searchTerms = 




    //functions







    // run code - onclicks
    // onclick for search command
    $('#search').on('click', function(event) {
        event.preventDefault();

        //set var for api search
        //set queryURL
        //let queryURL = 

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {
            //set call back fucntion


        })

    });







})



//API key: NEKLRMc4YggFyq7Dq9JmmHAGoQX3VCBI