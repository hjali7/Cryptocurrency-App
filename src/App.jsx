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
          <div className="footer">
              <Typography.Title level={5} style={{color: 'white' , textAlign:'center'}}>
                Made with ❤️ by @HajAliDev
                <br />
                All Rights Reserved
              </Typography.Title>
              <Space>
                <Link to='/'>Home</Link>
                <Link to='/exchanges'>Exchanges</Link>
                <Link to='/news'>News</Link>
              </Space>
          </div>
        </div>
    </div>
  )
}

export default App