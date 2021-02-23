const express = require('express');
const app = express();
const fetch = require('node-fetch')
// const bodyParser = require('body-parser');
const taapi = require("taapi");
const cors=require('cors')
// Setup client with authentication
app.use(cors())
app.listen(process.env.PORT || 3001, () => { console.log("its runnning 2...") })
let binanceArray = []
// let bolingerBand = []
var coin;
var coinNames = ["DREP", "NAV",  "DODO","XEM"]

let bolingerBand={
	"DREP":{
	avgPrice:0,
	bollUpper:0,
	bollMiddle:0,
	bollLower:0
	},
	"NAV":{
	avgPrice:0,
	bollUpper:0,
	bollMiddle:0,
	bollLower:0
	},
	"DODO":{
	avgPrice:0,
	bollUpper:0,
	bollMiddle:0,
	bollLower:0
	},
	"XEM":{
		avgPrice:0,
		bollUpper:0,
		bollMiddle:0,
		bollLower:0
		}
	}
var binanceCoin = ["DREPBTC", "NAVBTC",  "DODOBTC"]
function getTapiData() {
	let name;

	for (let i = 0; i <= coinNames.length-1 ; i++) {


		const client = taapi.client("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByaW1lc3VyZ2V0ZWNobm9sb2dpZXNAZ21haWwuY29tIiwiaWF0IjoxNjEzOTc3NDc4LCJleHAiOjc5MjExNzc0Nzh9.QH5HHLjzHsZdK1IYZuguDYyKyYYcjgpV_h9lNnHxhaY");


		client.getIndicator("bbands2", "binance", `${coinNames[i]}/BTC`, "5m").then(function (result) {
			try {
		
 name=coinNames[i]
 bolingerBand[name]["bollMiddle"]=result.valueMiddleBand,

 console.log("name",name)
				console.log("Result: ",bolingerBand[name]);

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


async function getDataAsync() {
let name1
	for (let j = 0; j <= coinNames.length-1 ; j++) {
		// console.log("coin name of btc",coinNames[i])

		var request = `https://api.binance.com/api/v3/avgPrice?symbol=`+ `${coinNames[j]}BTC`


		// console.log("request of login task:", binanceCoin[j]);

		// Api call method configuration
		let details = {
			method: 'GET',
		}

		response = await fetch(request, details)
		data = await response.json()
		name1=coinNames[j]
		// binanceArray.push({ coinName: binanceCoin[j], averagePrice: data.price })
		bolingerBand[name1]["avgPrice"]=data.price;

	}
	return bolingerBand

}




	getDataAsync().then(bolingerBand => {
		console.log('function asdf retunred', bolingerBand);
		let data=getTapiData()
		let difference=[]
		let array=[]
		let name2;
		// if(data.length>0)
		// {
		for ( let k=0;k<=coinNames.length-1;k++)
		// console.log("avg avg avg :",element[k],data[k])
{
	name2=coinNames[k]
	console.log(`iterator${k}`,data[name2]["bollMiddle"]==0)
	if(data[name2]["bollMiddle"]!==0)
	{
console.log("true if ")


	
    // console.log("avergae price :",element[k].averagePrice,data[k].valueMiddleBand)
difference=data[name2]["avgPrice"]-data[name2]["bollMiddle"];
console.log("avergae price :",difference,data[name2]["avgPrice"],data[name2]["bollMiddle"])
// perdifference=(difference/data[k].valueMiddleBand)*100;
// console.log(`percentage differnece in ${ coinNames[k]}`,element[k].averagePrice,data[k].valueMiddleBand)
// array.push({coin:coinNames[k],avgDifference:perdifference})

}
else{
	data=getTapiData()
}
}
		// }		
	});

// app.get("/api", (req, res, next) => {

// 	getDataAsync().then(element => {
// 		console.log('function asdf retunred', element);
// 		let data=getTapiData()
// 		let difference=[]
// 		let array=[]
// 		if(data.length>0)
// 		{
// 		for ( let k=0;k<=coinNames.length-1;k++)
// 		console.log("avg avg avg :",element[k],data[k])
// {
//     console.log("avergae price :",element[k].averagePrice,data[k].valueMiddleBand)
// difference=element[k].averagePrice-data[k].valueMiddleBand;
// perdifference=(difference/data[k].valueMiddleBand)*100;
// console.log(`percentage differnece in ${ coinNames[k]}`,element[k].averagePrice,data[k].valueMiddleBand)
// array.push({coin:coinNames[k],avgDifference:perdifference})

// }
// 		res.status(200).json("ii");
// }
// else {
// 	res.status(200).json("data  is loading");
// 	getTapiData()

// }
// 	});


// });

