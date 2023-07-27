import React, { useEffect, useState } from 'react'
import { useGetCoinsListQuery } from '../services/cryptoApi'
import { Col , Row , Input , Card , Typography } from 'antd'
import { Link } from 'react-router-dom'
import millify from 'millify'
import Loading from './Loading'
import { AudioOutlined } from '@ant-design/icons';
const  {Text} = Typography
const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100
  const {data , isFetching} = useGetCoinsListQuery(count)
  const [Cryptos , SetCryptos] = useState([])
  const [Term , setTerm] = useState('')
  useEffect(()=>{
    const filteredcoin = data?.data?.coins.filter(coin => coin.name.toLowerCase().includes(Term.toLowerCase()))
    SetCryptos(filteredcoin)
  },[data , Term])

  
  if(isFetching && !data) {
    return(<Loading/>);
  }

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input.Search allowClear suffix={<AudioOutlined style={{color: '#1677ff'}} />} size='middle' placeholder='search coin ...' enterButton='search' onChange={e => setTerm(e.target.value)}/>
        </div>
      )}
      <Row className='crypto-card-container' gutter={[32,32]}>
        {Cryptos?.map(crypto => (
          <Col className='crypto-card' xs={24} sm={12} lg={6} key={crypto.uuid}>
            <Link to={`/cryptocurrencies/${crypto.uuid}`} >
              <Card title={`${crypto.rank} . ${crypto.name}`} extra={<img className='crypto-image' src={crypto.iconUrl} />} hoverable={true}>
                  <Typography>
                    <Text>Price : {millify(crypto.price)}</Text>
                    <br />
                    <Text>MarketCap : {millify(crypto.marketCap)}</Text>
                    <br />
                    <Text>Daily Change : {millify(crypto.change)}%</Text>
                  </Typography>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies 