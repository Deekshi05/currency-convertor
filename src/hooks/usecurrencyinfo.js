import { useEffect,useState } from "react";
function usecurrencyinfo(currency){
    const [data,setdata]=useState({});
    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`).then(
            (res)=>res.json()
        ).then((res)=>setdata(res[currency]))
        .catch((err)=>{console.log("error")})
    },[currency])
    return data
}
export default usecurrencyinfo;