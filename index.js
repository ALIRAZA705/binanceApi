const express = require('express');
const app = express();
const fetch = require('node-fetch')
const taapi = require("taapi");
const cors = require('cors')
app.use(cors())
app.listen(process.env.PORT || 3001, () => { console.log("Server Started") })
var coins = require('./names')


let data = {
    "1INCH": {
        avgPrice: 0,
        bollUpper: 0,
        bollMiddle: 0,
        bollLower: 0
    },
    "AAVE": {
        avgPrice: 0,
        bollUpper: 0,
        bollMiddle: 0,
        bollLower: 0
    },
    "ADA": {
        avgPrice: 0,
        bollUpper: 0,
        bollMiddle: 0,
        bollLower: 0
    }
}

var globalCount = 0
let requestDetails = {method: 'GET'}

function taapiData(coin) {
    const client = taapi.client("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByaW1lc3VyZ2V0ZWNobm9sb2dpZXNAZ21haWwuY29tIiwiaWF0IjoxNjEzOTc3NDc4LCJleHAiOjc5MjExNzc0Nzh9.QH5HHLjzHsZdK1IYZuguDYyKyYYcjgpV_h9lNnHxhaY");
    client.getIndicator("bbands2", "binance", `${coin}/BTC`, "5m").then(function (result) {
        try {
            data[coin]["bollMiddle"] = parseFloat(result.valueMiddleBand).toFixed(8)
        }
        catch (e) {
            console.log("Data Not Returned: ", e)
        }
    });
}


async function binanceData(coin) {

        var request = `https://api.binance.com/api/v3/avgPrice?symbol=` + `${coin}BTC`

        response = await fetch(request, requestDetails)
        responseJson = await response.json()
       
        data[coin]["avgPrice"] = responseJson.price;

}

setInterval(() => {
    taapiData(coins.coinNames[globalCount])
    binanceData(coins.coinNames[globalCount])
    console.log('Coin Count:', globalCount);
    console.log('Data:', data);
    globalCount === 2 ? globalCount = 0 : globalCount++
}, 1000)


app.get("/data", (req, res, next) => {
    res.status(200).json(data);
});