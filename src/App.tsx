import React from 'react'
import ModalContext from './context/ModalContext'
import Home from './pages/Home'

const App = () => {
  return (
    <ModalContext>
      <div className='h-screen w-screen flex flex-col overflow-x-hidden md:overflow-hidden p-2 bg-gray-300'>
        <header className='text-center font-serif text-2xl font-semibold'>Wai Yan</header>
        <Home />
        <footer className='text-center opacity-60'>Developed by Wai Yan Min Lwin and codes reserved to him copyright 2023 © </footer>
      </div>
    </ModalContext>
  )
}

export default App