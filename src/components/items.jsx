import React from "react"
import { Link } from "react-router-dom"
import { HomeOutlined , MoneyCollectOutlined ,BulbOutlined , FundOutlined} from '@ant-design/icons'
export const items = [
  {
    label : (<Link to='/'>Home</Link>),
    key : 'home',
    icon : <HomeOutlined /> ,
  } ,
  {
    label : (<Link to='/cryptocurrencies'>Cryptocurrencies</Link>),
    key: "crypto",
    icon : <FundOutlined /> , 
  },
  {
    label:(<Link to='/exchanges'>Exchanges</Link>),
    key:"exchangers",
    icon : <MoneyCollectOutlined /> ,
  },
  {
    label:<Link to="/news" >News</Link>,
    key:'news',
    icon : <BulbOutlined/>,
  }
]