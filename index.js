const express = require('express');
const app = express();
const fetch = require('node-fetch')
const taapi = require("taapi");
const cors = require('cors')
app.use(cors())
app.listen(process.env.PORT || 3001, () => { console.log("Server Started") })
var coins = require('./names')


let data = {
    "1INCH":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "AAVE":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ADA":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ADX":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "AERGO":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "AGI":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "AION":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "AKRO":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ALGO":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ALPHA":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "AMB":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ANKR":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ANT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "APPC":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ARDR":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ARK":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ARPA":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ASR":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "AST":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ATM":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ATOM":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "AUDIO":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "AVA":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "AVAX":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "AXS":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "BAL":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "BAND":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "BAT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "BCD":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "BCH":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "BEAM":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "BEL":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "BLZ":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "BNB":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "BNT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "BOT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "BQX":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "BRD":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "BTCST":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "BTG":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "BTS":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "BZRX":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "CAKE":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "CDT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "CELO":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "CELR":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "CHR":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "CHZ":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "CKB":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "CND":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "COMP":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "COS":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "COTI":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "CRV":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "CTK":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "CTSI":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "CTXC":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "CVC":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "DASH":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "DATA":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "DCR":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "DGB":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "DIA":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "DLT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "DNT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "DOCK":{
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
    "DOGE":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "DOT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "DREP":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "DUSK":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "EASY":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "EGLD":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ELF":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ENJ":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "EOS":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ETC":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ETH":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "EVX":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "FET":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "FIL":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "FIO":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "FIRO":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "FLM":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "FOR":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "FRONT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "FTM":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "FTT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "FUN":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "FXS":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "GAS":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "GLM":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "GO":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "GRS":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "GRT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "GTO":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "GVT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "GXS":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "HARD":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "HBAR":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "HIVE":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "HNT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ICX":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "IDEX":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "INJ":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "IOST":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "IOTA":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "IOTX":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "IRIS":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "JST":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "JUV":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "KAVA":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "KMD":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "KNC":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "KSM":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "LINK":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "LIT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "LOOM":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "LRC":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "LSK":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "LTC":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "LTO":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "LUNA":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "MANA":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "MATIC":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "MDA":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "MDT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "MITH":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "MKR":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "MTH":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "MTL":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "NANO":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "NAS":{
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
    "NBS":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "NEAR":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "NEBL":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "NEO":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "NKN":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "NMR":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "NULS":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "NXS":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "OAX":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "OCEAN":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "OG":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "OGN":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "OMG":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ONE":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ONG":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ONT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ORN":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "OST":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "OXT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "PAXG":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "PERL":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "PHB":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "PIVX":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "PNT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "POA":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "POLY":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "POWR":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "PPT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "PSG":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "QKC":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "QLC":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "QSP":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "QTUM":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "RCN":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "RDN":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "REEF":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "REN":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "RENBTC":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "REP":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "REQ":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "RIF":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "RLC":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ROSE":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "RSR":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "RUNE":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "RVN":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "SAND":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "SC":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "SCRT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "SFP":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "SKL":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "SKY":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "SNGLS":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "SNM":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "SNT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "SNX":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "SOL":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "SRM":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "STEEM":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "STMX":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "STORJ":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "STPT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "STRAX":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "STX":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "SUN":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "SUSD":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "SUSHI":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "SXP":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "SYS":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "TCT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "TFUEL":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "THETA":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "TOMO":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "TRB":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "TROY":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "TRU":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "TRX":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "TWT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "UMA":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "UNFI":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "UNI":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "UTK":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "VET":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "VIA":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "VIB":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "VIDT":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "VITE":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "WABI":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "WAN":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "WAVES":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "WBTC":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "WING":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "WNXM":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "WPR":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "WRX":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "WTC":{
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
    },
    "XLM":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "XMR":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "XRP":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "XTZ":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "XVG":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "XVS":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "YFI":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "YFII":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "YOYO":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ZEC":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ZEN":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ZIL":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
    },
    "ZRX":{
        avgPrice:0,
        bollUpper:0,
        bollMiddle:0,
        bollLower:0
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
    globalCount === 244 ? globalCount = 0 : globalCount++
}, 200)


app.get("/data", (req, res, next) => {
    res.status(200).json(data);
});