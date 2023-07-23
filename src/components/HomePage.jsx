import React from 'react'
import { Link } from 'react-router-dom'
import { Typography , Row , Col , Statistic } from 'antd'
import millify from 'millify'
import { useGetCoinsListQuery } from '../services/cryptoApi'
import {News , Cryptocurrencies} from '../components/import'
import Loading from './Loading'
const HomePage = () => {
  const {data , isFetching} = useGetCoinsListQuery(10)
  const GlobalStats = data?.data?.stats

  if(isFetching && !data) {
    return(<Loading/>);
  }

  return (
    <>
      <Typography.Title level={2} className='heading'>Global Crypto Statics</Typography.Title>
      <Row>
        <Col span={12}><Statistic title='Total Cryptocurrencies' value={GlobalStats.total} /></Col>
        <Col span={12}><Statistic title='Total Exchanges' value={millify(GlobalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title='Total Market Cap' value={millify(GlobalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title='Total 24h Volume' value={millify(GlobalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title='Total Markets' value={millify(GlobalStats.totalMarkets)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Typography.Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Typography.Title>
        <Typography.Title level={3} className='show-more'>
          <Link to='/cryptocurrencies'>show more</Link>
        </Typography.Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Typography.Title level={2} className='home-title'>Latest Crypto News</Typography.Title>
        <Typography.Title level={3} className='show-more'>
          <Link to='/news'>show more</Link>
        </Typography.Title>
      </div>
      <News simplified />
    </>
  )
}

export default HomePage