import axios from 'axios';
const BASE_URL = 'http://localhost:3000/';
export function getHomePageHotels (){
    try {
    const response = axios.get(`${BASE_URL}api/home`)
    return response.data;
    }catch(err){
        console.log("error is"+err);
    }
    
}
export function getHotels(page,stars,loc){
    try {
        const response = axios.get(`${BASE_URL}api/hotels`,{pageIndex:page,starRating:stars,destination:loc})
        return response.data;
 // data{totalPages:number ,result:[] }
    }catch(err){
        console.log("error is"+err);
    }
}
export function getHotelDetails(id){
    try {
        const response = axios.get(`${BASE_URL}api/hotel/${id}`)
        return response.data;
    }catch(err){
        console.log("error is"+err);
    }
}
export function getSearchResults(keyword){
    try {
        const response = axios.get(`${BASE_URL}api/search/${keyword}`)
        return response.data;
    }catch(err){
        console.log("error is"+err);
    }
}
export function sendContactForm(sentData){
    try {
        const response = axios.post(`${BASE_URL}api/contact`,sentData)
        return response.status;
    }catch(err){
        console.log("error is"+err);
    }
}
export function sendSelection (sentData){
    try {
        const response = axios.post(`${BASE_URL}api/checkout`,sentData)
        return response.data.result;
    }catch(err){
        console.log("error is"+err);
    }
}