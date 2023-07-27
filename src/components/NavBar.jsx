import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button , Menu , Typography , Avatar } from 'antd'
import { MenuOutlined , CloseOutlined } from '@ant-design/icons'
import icon from '../assets/cryptocurrency.png'
import { items } from './items'
const NavBar = () => {
  const [current , SetCurrent] = useState('home')
  const handlerMenu = e => {
    SetCurrent(e.key)
  }
  const [screenSize , setScreenSize] = useState(null)
  const [activeMenu , setActiveMenu] = useState(true)
  useEffect(()=>{
    const handleSize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize' , handleSize)
    handleSize()
    return window.removeEventListener('resize' , handleSize)
  } ,[])

  useEffect(()=>{
    switch (screenSize)   {
      case screenSize < 768 :
        setActiveMenu(false)
        break
      case screenSize > 768 :
        setActiveMenu(true)
        break
    }
  },[screenSize])
  
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size='large'  />
            <Typography.Title level={2} className='logo'>
                <Link to='/'>Crytoverse</Link>
            </Typography.Title>
            <div className="menu-control-container">
              <Button type='primary' size='large' className='menu-control-container' onClick={()=>setActiveMenu(!activeMenu)} shape='circle'>
              {activeMenu ? <CloseOutlined /> : <MenuOutlined />}
            </Button>
            </div>
        </div>
        {activeMenu && (
          <Menu mode='vertical' items={items} theme='dark' selectedKeys={current} onClick={handlerMenu} />
        )}
    </div>
  )
}

export default NavBar 

