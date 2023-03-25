import React from 'react'
import About from '../components/About'
import Profile from '../components/Profile'
import RecentWork from '../components/RecentWork'
import Setting from '../components/Setting'
import Skill from '../components/Skill'
import Welcome from '../components/Welcome'

const Home = () => {
  return (
    <>     
        <div className='w-full sm:h-10/12 overflow-y-scroll mx-auto  md:w-11/12 my-2 grow bg-comic-black border-4 border-black rounded-3xl p-3'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                <div className='flex flex-col gap-2'>
                <Welcome />
                <Skill />
                <About />
                </div>
                <div className='flex flex-col gap-2'>
                <Setting />
                <Profile />
                <RecentWork />
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Home