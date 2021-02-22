const express = require('express');
const app = express();
const fetch = require('node-fetch')
// const bodyParser = require('body-parser');
const taapi = require("taapi");

// Setup client with authentication
app.listen(process.env.PORT || 3000, () => { console.log("its runnning 2...") })
let binanceArray = []
let bolingerBand = []
var coin;
var coinNames = ["DREP/BTC", "NAV/BTC", "SKY/BTC", "DODO/BTC"]
var binanceCoin = ["DREPBTC", "NAVBTC", "SKYBTC", "DODOBTC"]
function getTapiData() {
    for (let i = 0; i <= coinNames.length - 1; i++) {


        const client = taapi.client("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByaW1lc3VyZ2V0ZWNobm9sb2dpZXNAZ21haWwuY29tIiwiaWF0IjoxNjEzOTc3NDc4LCJleHAiOjc5MjExNzc0Nzh9.QH5HHLjzHsZdK1IYZuguDYyKyYYcjgpV_h9lNnHxhaY");


        client.getIndicator("bbands2", "binance", coinNames[i], "5m").then(function (result) {
            console.log("Result: ", result);
            try {
                bolingerBand.push({ coinNmae: coinNames[i], valueUpperBand: result.valueUpperBand, valueMiddleBand: result.valueMiddleBand, valueLowerBand: result.valueLowerBand })
                console.log("Result: ", bolingerBand);

            }
            catch (e) {
                console.log("Data Not Returned: ", e)

            }

        });
    }
return bolingerBand
}

app.get("/binance", (req, res, next) => {
    res.status(200).json(getTapiData());
});



// https://api.binance.com/api/v3/avgPrice?symbol=NAVBTC

async function getDataAsync() {

    for (let j = 0; j <= binanceCoin.length - 1; j++) {
        // console.log("coin name of btc",coinNames[i])

        var request = 'https://api.binance.com/api/v3/avgPrice?symbol=' + binanceCoin[j]


        console.log("request of login task:", binanceCoin[j]);

        // Api call method configuration
        let details = {
            method: 'GET',
        }

        response = await fetch(request, details)
        data = await response.json()
        console.log("request of login task:", data);
        binanceArray.push({ coinName: binanceCoin[j], averagePrice: data.price })
        // console.log("binance api", binanceArray)

    }
    return binanceArray

}


// for ( var k=0;k<=coinNames.length;k++)
// {
//     console.log("avergae price :")

// }
// getTapiData().then(getDataAsync).then(function () {
//     for (let k = 0; k <= coinNames.length; k++) {
//         console.log("avergae price of get api data:", binanceArray[k].averagePrice, bolingerBand[k].valueLowerBand)

//     }
// })
app.get("/api", (req, res, next) => {
    res.status(200).json(getDataAsync());
});


