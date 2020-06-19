// here we install the package module so that we get the access of requesting any APIs
const request = require('request');
// this is the syntax of making the request error occured if site is not load or any other problems

console.log("Sunrise in huwai is :: ")
request('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today', function (error, response, body) {
    // locus package just stop the code at that point and we got the access of all variable and we 
    // can use it to see what it is returning eg: we can se that what error is printing...
    // eval(require('locus')); use this to decode
    // response have certain no in it which tell us that whether the info is correctly came or not by 200
    if(!error && response.statusCode == 200)
    {
        // we cant direct treat body as js file bcz it came as string so to get that we want to change it in 
        // Json file also we can check that by using typeof.. 
        const parsedData= JSON.parse(body);
        // now treat parsedData as object and access whatever you want
        console.log(parsedData.results.sunrise);
    }
});