import React , {useEffect, useState}  from 'react'
import HTMLReactParser from 'html-react-parser'
import {Col , Row , Typography , Select} from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons'; 
import millify from 'millify';
import { useParams } from 'react-router';
import { useGetCryptoDetailsQuery , useGetCryptoHistoryQuery } from '../services/cryptoApi';
import Loading from './Loading'
import LineChart from './LineChart';

const {Title , Text } = Typography
const {Option} = Select

const CryptoDetails = () => {
  const {coinId} = useParams()
  const {data , isFetching} = useGetCryptoDetailsQuery(coinId)
  const [TimePeriod , setTimePeriod] = useState('7d')

  const {data: coinHistory} = useGetCryptoHistoryQuery({coinId , timeperiod :TimePeriod})
  const cryptoDetails = data?.data?.coin

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: 'BTC price', value: ` ${cryptoDetails?.btcPrice
 && millify(cryptoDetails?.btcPrice
)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];
  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];

  if(isFetching && !coinHistory ) return <Loading />
  
  return (
    <Col className='coin-detail-container'>
      <Col className='coin-heading-container'>
        <Title className='coin-name' level={2}>{cryptoDetails.name} ({cryptoDetails.symbol}) Price</Title>
        <p>
          {cryptoDetails.name} live price in US Dollars.
          Vie value Statistics , market cap and supply .
        </p>
      </Col>
      <Select placeholder='Select Time Period' onChange={value => setTimePeriod(value)} className='select-timeperiod' defaultValue='7d'>
        {time.map(data => (
          <Option key={data}>{data}</Option>
        ))}
      </Select>
      <LineChart coinHistory={coinHistory} coinName={cryptoDetails?.name} currentPrice={millify(cryptoDetails?.price)} />
      <Col className='stats-container'>
        <Col className='coin-value-statistics'>
          <Col className='coin-value-statistics-heading'>
            <Title level={3} className='coin-details'> {cryptoDetails.name} Value Statistics </Title>
            <p>An overview showing the stats of {cryptoDetails.name}</p>
          </Col>
          {stats.map(({title , value , icon }, index)=>(
            <Col className='coin-stats' key={index}>
              <Col className='coin-stats-name'>
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Col className='stats'>{value}</Col>
            </Col>
          ))}
        </Col>
        <Col className='other-stats-info'>
          <Col className='coin-value-statistics-heading'>
            <Title level={3} className='coin-details'> Other Statistics </Title>
            <p>An overview showing the stats of all cryptocurrencies</p>
          </Col>
          {genericStats.map(({title , value , icon} , index)=>(
            <Col className='coin-stats' key={index}>
              <Col className='coin-stats-name'>
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Col className='stats'>{value}</Col>
            </Col>
          ))}
        </Col>
      </Col>
      <Col className='coin-desc-link'>
          <Row className='coin-desc'>
               <Title level={3} className="coin-details-heading">What is {cryptoDetails.name}?</Title>
                {HTMLReactParser(cryptoDetails.description)}
          </Row>
          <Col className='coin-links'>
            <Title level={3} className='coin-details-heading'>{cryptoDetails.name}?</Title>
            {cryptoDetails.links.map((link , index) => (
              <Row className='coin-link' key={index}>
                <Title level={5} className='link-name'>{link.type}</Title>
                <a href={link.url} target='_blank' rel='noreferrer'>{link.name}</a>
              </Row>
            ))}
          </Col>
        </Col>
    </Col>
  )
}

export default CryptoDetails