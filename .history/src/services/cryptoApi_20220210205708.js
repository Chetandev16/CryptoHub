import  {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'


var options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    tiers: "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
  headers: {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "b3b7866363msh864a8c01f794eafp10cdb3jsn70a852e201ad",
  },
};
