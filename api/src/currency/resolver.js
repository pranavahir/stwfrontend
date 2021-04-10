import loadCurrency from "./data";

const CurrencyResolver = {
    Query :{
        currency: (root, args, context, info) => loadCurrency,   
        }
    }


module.exports = CurrencyResolver