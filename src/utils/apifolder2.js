import axios from 'axios';
const apiKey = '4c4fd72ad5mshdcade9086f993bbp18512ejsne80243d49b0f'
const apiSecret = '9T6cjnFfx21pWRQx'
export const gethotels = async (page , stars = 0)=>{

    const options = {
        method: 'GET',
        url: 'https://hotels-com-provider.p.rapidapi.com/v2/hotels/search',
        params: {
          region_id: '2872',
          locale: 'en_GB',
          checkin_date: '2024-09-25',
          sort_order: 'REVIEW',
          adults_number: '1',
          domain: 'AE',
          checkout_date: '2024-09-27',
          children_ages: '4,0,15',
          lodging_type: 'HOTEL,HOSTEL,APART_HOTEL',
          price_min: '10',
          star_rating_ids: '3,4,5',
          meal_plan: 'FREE_BREAKFAST',
          page_number: '1',
          price_max: '500',
          amenities: 'WIFI,PARKING',
          payment_type: 'PAY_LATER,FREE_CANCELLATION',
          guest_rating_min: '8',
          available_filter: 'SHOW_AVAILABLE_ONLY'
        },
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          switch (stars) {
              case 0:
                  
                  break;
              case 3:
                  response.data.properties = response.data.properties.filter(hotel => hotel.star === 3);
                  break;
              case 4:
                  response.data.properties = response.data.properties.filter(hotel => hotel.star === 4);
                  break;
              case 5:
                  response.data.properties = response.data.properties.filter(hotel => hotel.star === 5);
                  break;
              default:
                  break; 
          } 
            const pages = Math.ceil(response.data.properties.length/9);
            const hotels = response.data.properties.slice((page-1)*9,page*9).map(hotel => {
                return {
                    id : hotel.id,
                    name: hotel.name,
                    image: hotel.propertyImage.image.url,
                    location: hotel.neighborhood.name,
                    stars: hotel.star
                }
            })
            console.log(hotels);
            return {hotels, pages};
        } catch (error) {
          console.error(error);
      }
}
export const getHotelDetails = async (id) => {


const options = {
  method: 'GET',
  url: 'https://hotels-com-provider.p.rapidapi.com/v2/hotels/summary',
  params: {
    domain: 'AE',
    hotel_id: id,
    locale: 'en_GB'
  },
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	//console.log(response.data);
    const hotelDetails = {
        name: response.data.summary.name,
        location: response.data.summary.location.address.addressLine,
        starRating: response.data.summary.overview.propertyRating.rating,
        description: response.data.summary.tagline,
        services: response.data.summary.amenities.topAmenities.items.map(i => i.text),
        images: response.data.propertyGallery.images.slice(0,3).map(i => i.image.url)
    }
    //console.log(hotelDetails);
    return hotelDetails;
} catch (error) {
	console.error(error);
}}
export const getSuggestedHotels = async () => {
  const options = {
    method: 'GET',
    url: 'https://hotels-com-provider.p.rapidapi.com/v2/hotels/search',
    params: {
      region_id: '2872',
      locale: 'en_GB',
      checkin_date: '2024-09-25',
      sort_order: 'DISTANCE',
      adults_number: '1',
      domain: 'AE',
      checkout_date: '2024-09-27',
      children_ages: '4,0,15',
      lodging_type: 'HOTEL,HOSTEL,APART_HOTEL',
      price_min: '10',
      star_rating_ids: '3,4,5',
      meal_plan: 'FREE_BREAKFAST',
      page_number: '1',
      price_max: '500',
      amenities: 'WIFI,PARKING',
      payment_type: 'PAY_LATER,FREE_CANCELLATION',
      guest_rating_min: '8',
      available_filter: 'SHOW_AVAILABLE_ONLY'
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
    }
  }
  try {
    const {data} = await axios.request(options);
    const hotels = data.properties.slice(0,3).map(hotel => {
      return {
        id : hotel.id,
        name: hotel.name,
        image: hotel.propertyImage.image.url,
        location: hotel.neighborhood.name,
        stars: hotel.star
      }
    })
    return hotels;
  }catch(err){
    console.error(err);
  }
}
export const getHotelsForHomePage = async () => {
  const options = {
    method: 'GET',
    url: 'https://hotels-com-provider.p.rapidapi.com/v2/hotels/search',
    params: {
      region_id: '2872',
      locale: 'en_GB',
      checkin_date: '2024-09-25',
      sort_order: 'REVIEW',
      adults_number: '1',
      domain: 'AE',
      checkout_date: '2024-09-27',
      children_ages: '4,0,15',
      lodging_type: 'HOTEL,HOSTEL,APART_HOTEL',
      price_min: '10',
      star_rating_ids: '3,4,5',
      meal_plan: 'FREE_BREAKFAST',
      page_number: '1',
      price_max: '500',
      amenities: 'WIFI,PARKING',
      payment_type: 'PAY_LATER,FREE_CANCELLATION',
      guest_rating_min: '8',
      available_filter: 'SHOW_AVAILABLE_ONLY'
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
    }
  }
  try {
    const {data} = await axios.request(options);
    const hotels = data.properties.slice(0,6).map(hotel => {
      return {
        id : hotel.id,
        name: hotel.name,
        image: hotel.propertyImage.image.url,
        location: hotel.neighborhood.name,
        stars: hotel.star
      }
    })
    console.log(hotels)
    return hotels;
  }catch(err){
    console.error(err);
  }
}