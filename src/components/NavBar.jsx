import React from 'react'
import { Link } from 'react-router-dom'
import { Button , Menu , Typography , Avatar } from 'antd'
import { HomeOutlined , MoneyCollectOutlined ,BulbOutlined , FundOutlined , MenuOutlined } from '@ant-design/icons'
import icon from '../assets/cryptocurrency.png'
const NavBar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size='large'  />
            <Typography.Title level={2} className='logo'>
                <Link to='/'>Crytoverse</Link>
            </Typography.Title>
            <Button className='menu-control-container'>
              
            </Button>
        </div>
    </div>
  )
}

export default NavBar