import React from 'react'
import Navbar from '../../components/Navbar'
import Categories from './components/Categories'
import Banner from './components/Banner'
import Space from '../../components/Space'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Categories/>
        <Space>
        <Banner/>
        </Space>
    </div>
  )
}

export default Home