import axios from 'axios'
const BASE_URL = 'http://localhost:5171' 
//function that returns the searchResult in an array with the hotels having the same keyword${BASE_URL}/api/hotel/hotels/${pageIndex}https://65d64740f6967ba8e3bdd970.mockapi.io/api/hotel/hotels
export const searchHotels = async (params) => { 
    try {
        const {response} = await axios.get(`${BASE_URL}/hotels/${params}`)
        return response.data
    } catch (error) {
        console.error("error: ",error)
    }
}
export const getHotels = async (pageIndex) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/hotel/hotels/${pageIndex}`)
        const data = response.data
        return data
    } catch (error) {
        console.error("error = " , error)
    }
}
export const getHotel = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/hotel/findById/${id}`)
        const data = response.data
        return data
    } catch (error) {
        console.error(error)
    }
}
