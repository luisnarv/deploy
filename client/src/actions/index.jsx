import axios from "axios";


 const url = "http://localhost:3001/";

export function GetCountries() {
    return async function (dispatch) {
        try {
            const res = await axios.get(`/countries`) 
            return dispatch({
                type: "GET_COUNTRIES",
                payload: res.data 
                
            })
        } catch (error) {
            return dispatch({
                type: "FAILURE",
                payload: error.response.data.msg 
            
            }
            )
        }
    }
}



// export function GetCountries() {
//     return async function (dispatch) {
//             var res = await axios.get("http://localhost:3001/countries");
//             return dispatch({
//                 type: "GET_COUNTRIES",
//                 payload:  res.data
//             })
//         }
//     }


//continentFilter
    export function filContinent(payload){
        return {type: "FILTER_CONTINENT",
        payload
    }}

//PopulatioFilter
    export function filPopulation(payload) {
        return {type: "FILTER_POPULATION",
            payload
        }}

//A-ZFilter
export function AzFilter(payload){
    return {type: "FILTER_AZ", 
           payload
}}

    
//SearchCountry
export function SearchCountry(name) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`/countries?name=${name}`)
            return dispatch({
                type: "SearCountry",
                payload: res.data
            })
        } catch (error) {
            return dispatch({
                type: "FAILURE",
                payload: error.response.data.msg
                && alert("Not Found")
            }) 
        }
    }
}

//GetActivity
// export function GetActivity() {
//     return async function (dispatch) {
//         try {
//             const res = await axios.get("http://localhost:3001/activity");
//             return dispatch({
//                 type: "GET_ACTIVITY",
//                 payload: res.data
//             })
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }
export function GetActivity() {
        return async function (dispatch) {
            var res =  await axios.get("/activities",{

            });
            return dispatch({ type: "GET_ACTIVITY",
        payload: res.data});
    }}




    //PostACtivity

export function PostACtivity(payload){
    return async function (dispatch){
        const res = await axios.post("/activities", payload);
        return res;
    }
}


//GetDetail
export function GetDetail(id){
    return async function (dispatch){
        try {let res= await axios("/countries/" + id);
    return dispatch ({
        type: "GET_DETAIL",
        payload: res.data
    })
} catch(error){
    console.log(error)
}
    }
}