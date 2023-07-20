import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button , Menu , Typography , Avatar } from 'antd'

import icon from '../assets/cryptocurrency.png'
import { items } from './items'
const NavBar = () => {
  const [current , SetCurrent] = useState('home')
  const handlerMenu = e => {
    SetCurrent(e.key)
  }
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size='large'  />
            <Typography.Title level={2} className='logo'>
                <Link to='/'>Crytoverse</Link>
            </Typography.Title>
        </div>
        <Menu mode='vertical' items={items} theme='dark' selectedKeys={current} onClick={handlerMenu} />
    </div>
  )
}

export default NavBar

