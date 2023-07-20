import React from 'react'
import { Route , Link , Routes} from 'react-router-dom'
import { Layout , Typography , Space } from 'antd'
import {NavBar , Exchanges ,Cryptocurrencies ,CryptoDetails , News , HomePage} from './components/import'
import "./App.css"
function App() {
  return (
    <div className="app">
        <div className="navbar">
            <NavBar />
        </div>
        <div className="main">
            <Layout>
              <div className="routes">
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/exchanges' element={<Exchanges />} />
                  <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
                  <Route path='/cryptocurrencies/:coinId' element={<CryptoDetails />} />
                  <Route path='/news' element={<News />} />
                </Routes>
              </div>
            </Layout>
        </div>
        <div className="footer">

        </div>
    </div>
  )
}

export default App