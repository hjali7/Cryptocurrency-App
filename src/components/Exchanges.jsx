import React from 'react'
import { useGetCryptoExchangeQuery } from '../services/cryptoExchangeApi'
import { Collapse , Row , Col , Typography, Avatar } from 'antd'
import millify from 'millify'
import HTMLReactParser from 'html-react-parser'
import Loading from './Loading'

const {Title , Text} = Typography

const Exchanges = () => {
  const {data , isFetching} = useGetCryptoExchangeQuery() 

  const items = data?.map((item , i) => ({
    key : i , 
    label : (
      <Row key={item.id}>
        <Col span={8}>
        <Text>{i + 1}</Text>
        <Avatar src={item.image} className='exchange-image' />
        <Text>{item.name}</Text>
        </Col>
        <Col span={5}>
        <Text>{millify(item.trade_volume_24h_btc_normalized)}</Text>
        </Col>
        <Col span={5}>
        <Text>{item.trust_score}</Text>
        </Col>
        <Col span={6}>
        <Text>{item.country}</Text>
        </Col>
      </Row>
    ),
    children : (
      <>
        <Title level={4}>{item.name}</Title>
        <Text>Trade Volume 24h Normalized: {millify(item.trade_volume_24h_btc_normalized)}</Text>
        <br />
        <Text>YearEstablished : {item.year_established} </Text>
        <br />
        <Text>{item.description? <span style={{color:'#4883e8'}}>{ HTMLReactParser(item.description)}</span> : ""}</Text>
        <br />
        <Text>read more : {<a target='_blank'>Link To {item.name} page</a>}</Text>
      </>
    ) ,
  }))

  if(isFetching && !data) return <Loading />
  return (
    <>
        <Row style={{marginBottom:'10px'}}>
          <Col span={8}>Exchange</Col>
          <Col span={5}>24h Trade Volume</Col>
          <Col span={5}>TrustScore</Col>
          <Col span={6}>Country</Col>
        </Row>
        <Collapse accordion bordered={false} size='large' items={items}  />
    </>
  )
}

export default Exchanges