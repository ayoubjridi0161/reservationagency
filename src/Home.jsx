import React from 'react'
import SearchBar from './components/SearchBar'
import Header from './components/Header'
import BoxConatainer from './components/BoxConatainer'
import image2 from './assets/atm-card-protection.jpg'
import image1 from './assets/wallet.jpg'
import image3 from './assets/centreDappel.jpg'
import HotelBox from './components/HotelBox'

const Home = () => {
  return (
    <>
    {/*<Header/>*/}
    <main className='overflow-y-hidden overflow-x-hidden '>
      {/* Hero section */}
        <section className="flex flex-col justify-center gap-4 items-center min-h-dvh leading-[75.22px] bg-cover bg-[url('./assets/hero.jpg')]" >
            <p className ='font-lalezar font-normal text-5xl text-white cursor-default'>Latest reviews. Lowest prices.</p>
            <SearchBar/>  
        </section>
      {/* 2nd section */}
        <section className='min-h-screen'>
          <h2 className='font-lalezar text-3xl text-center mt-36'>Why should you trust us ...</h2>
          <div className='mt-20 grid grid-cols-3 gap-20 justify-between mx-36 px-32'>
            <BoxConatainer image={image1} width={92} title='Best prices' description='Hotels, Journey, Tickets...'/>
            <BoxConatainer image={image2} width={118} title='Secure Payment' description='100% security'/>
            <BoxConatainer image={image3} width={130} title='clients service' description='whilst listening to your needs'/>
          </div>

          <div className='mx-48 mt-24'>
            <h2 className=' font-lalezar text-3xl'>Travelers’ Choice: Top hotels</h2>
            <div className='grid grid-cols-3 grid-flow-row gap-10 items-center'>
              <HotelBox image='https://th.bing.com/th/id/OIP.XoPWAKPsQU1ib1_fKgKeDgHaE8?rs=1&pid=ImgDetMain' hotel='Relais Saint-Jacques' stars={5}/>
              <HotelBox image='https://th.bing.com/th/id/OIP.XoPWAKPsQU1ib1_fKgKeDgHaE8?rs=1&pid=ImgDetMain' hotel='Relais Saint-Jacques' stars={5}/>
              <HotelBox image='https://th.bing.com/th/id/OIP.XoPWAKPsQU1ib1_fKgKeDgHaE8?rs=1&pid=ImgDetMain' hotel='Relais Saint-Jacques' stars={5}/>
              <HotelBox image='https://th.bing.com/th/id/OIP.XoPWAKPsQU1ib1_fKgKeDgHaE8?rs=1&pid=ImgDetMain' hotel='Relais Saint-Jacques' stars={5}/>
              <HotelBox image='https://th.bing.com/th/id/OIP.XoPWAKPsQU1ib1_fKgKeDgHaE8?rs=1&pid=ImgDetMain' hotel='Relais Saint-Jacques' stars={5}/>

            </div>
          </div>

        </section>
    </main>
  </>
  )
}

export default Home