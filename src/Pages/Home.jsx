import React, { useEffect } from 'react'
import Loader from '../utils/Loader'
import SearchBar from '../components/SearchBar'
import Header from '../components/Header'
import BoxConatainer from '../components/BoxConatainer'
import image2 from '../assets/atm-card-protection.jpg'
import image1 from '../assets/wallet.jpg'
import image3 from '../assets/centreDappel.jpg'
import HotelBox from '../components/HotelBox'
import Footer from '../components/Footer'
import { NavCard } from '../components/NavCard'
import axios from 'axios'
import { getHotels , getHotel } from '../utils/apiFolder'
import { getHotelsForHomePage } from '../utils/apifolder2'
//https://65d64740f6967ba8e3bdd970.mockapi.io/api/hotel/hotels
const Home = () => {
  const [hotels, setHotels] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    async function fetchData() {
      const data = await getHotelsForHomePage();
      setHotels(data)
    }

    fetchData()
    setIsLoading(false)
  }, [])
  console.log(hotels)

  
  return (
    <>
    <Header />
    {/*<Header/>*/}
    <main className=' mx-auto hide-scrollbar overflow-y-hidden overflow-x-hidden '>
      {/* Hero section */}
        <section className="flex flex-col justify-center gap-4 items-center min-h-dvh leading-[75.22px] bg-cover bg-[url('./assets/426244962_1448528972364125_962454034354804131_n.jpg')]" >
            <p className ='font-lalezar font-normal text-5xl text-white cursor-default'>Latest reviews. Lowest prices.</p>
            <SearchBar/>  
        </section>
      {/* 2nd section */}
        <section className='min-h-screen flex flex-col items-center'>
          <h2 className='font-lalezar text-3xl text-center mt-36'>Why should you trust us ...</h2>
          <div className='mt-20 grid grid-cols-3 gap-20 justify-between mx-36 px-32'>
            <BoxConatainer image={image1} width={92} title='Best prices' description='Hotels, Journey, Tickets...'/>
            <BoxConatainer image={image2} width={118} title='Secure Payment' description='100% security'/>
            <BoxConatainer image={image3} width={130} title='clients service' description='whilst listening to your needs'/>
          </div>
          <div className='mx-auto w-2/3 mt-24'>
            <h2 className=' font-lalezar text-3xl'>Travelers’ Choice: Top hotels <span>
          <NavCard nav="view all" />
          </span>
          </h2>
            <div className='grid grid-cols-3 mt-7 grid-flow-row gap-10 items-center'>
              {isLoading ? <div className='h-screen w-screen grid place-items-center'><Loader/></div> : hotels?.map(hotel => {
                return <HotelBox key={hotel.id} image={hotel.image} name={hotel.name} stars={Math.ceil(hotel.stars) } location={hotel.location} id={hotel.id} />
              })}
              </div>
          </div>
          <div className='md:w-1/3 w-4/5  mb-1 mt-16'>
          <p className='font-halant text-center text-gray-500 text-[11px]'>Tunisia boasts breathtaking beaches, the legendary Sahara Desert, vibrant souks, historical sites, and much more, making it an enticing destination for travelers. With our services, planning a trip to this remarkable country has become effortless. You can confidently reserve your accommodations at competitive prices, ensuring a secure and enjoyable journey.</p>
          </div>
        </section>

    </main>
    <Footer />
  </>
  )
}

export default Home