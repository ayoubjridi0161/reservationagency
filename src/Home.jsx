import React from 'react'
import SearchBar from './components/SearchBar'
const Home = () => {
  return (
    <main >
        <section className="flex flex-col justify-center items-center min-h-dvh leading-[75.22px] bg-cover bg-[url('./assets/hero.jpg')]" >
            <p className='font-lalezar font-normal text-5xl text-white'>Latest reviews. Lowest prices.</p>
            <SearchBar/>
        </section>
    </main>
  )
}

export default Home