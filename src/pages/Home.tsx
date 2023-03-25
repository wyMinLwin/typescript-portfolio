import React from 'react'
import Skill from '../components/Skill'
import Welcome from '../components/Welcome'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center my-2 md:my-0'>
        <header className='text-center '>Wai Yan</header>
        <div className='w-full sm:w-10/12 md:h-4/5 lg:w-8/12 my-2 grow bg-comic-red border-4 border-black rounded-3xl p-3'>
            <div className='grid sm:grid-cols-2 grid-flow-row gap-2'>
                <div className='grid grid-cols-1 grid-flow-row gap-y-2'>
                <Welcome /><Skill />
                </div>
                <div className='grid grid-cols-1 grid-flow-row gap-y-2'>
                <Welcome /><Welcome />
                </div>
                
            </div>
        </div>
        <footer className='text-center opacity-30'>Developed by Wai Yan Min Lwin and codes reserved to him copyright 2023 © </footer>
    </div>
  )
}

export default Home