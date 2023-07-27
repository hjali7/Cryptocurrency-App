import React , { useState } from 'react'
import { Select , Card , Typography , Row , Col , Avatar } from 'antd'
import moment from 'moment/moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import Loading from './Loading'
import { useGetCoinsListQuery } from '../services/cryptoApi'

const {Title , Text } = Typography
const {Option} = Select

const News = ({simplified}) => {
  const [NewsCategory, setNewsCategory] = useState('Cryptocurrency')
  const {data} = useGetCryptoNewsQuery({newsCategory: NewsCategory, count :  simplified ? 6 : 12 })
  const {data: coindata} = useGetCoinsListQuery(100)
  const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
  
  if(!data?.value) return <Loading />

  return (
    <Row gutter={[24,24]}>
      {!simplified && (
        <Col span={24}>
          <Select placeholder='Select a Crypto' className='select-news' showSearch optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} onChange={value => setNewsCategory(value)}>
            <Option value='Cryptocurrency'>Cryptocurrency</Option>
            {coindata?.data?.coins.map(coin => <Option key={coin.name} value={coin.name}>{coin.name}</Option>)}
          </Select>
        </Col>
      )}
      {data.value.map((news , i) => (
        <Col key={i} sx={24} sm={12} lg={6}>
          <Card hoverable={true} className='news-card'>
            <a href={news.url} target='_blank' rel='noreferrer'>
              <div className="news-image-container">
                <Title level={5} className='news-title'>{news.name}</Title>
                <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="newsImage" style={{maxWidth: '200px', maxHeight:'100px'}} />
              </div>
              <p>
                {news.description.length > 50 ? `${news.description.substring(0,50)}...` : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt='author'/>
                  <Text className='provider-name'>{news.provider[0]?.name}</Text>
                </div>
                <div>
                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News