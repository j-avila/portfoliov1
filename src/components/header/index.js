import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './header.scss'
import Logo from '../shared/logo'
import { useDispatch, useSelector } from 'react-redux'
import { switchMode } from '../../store/actions'

const navItems = [
  { name: 'trabajos', route: '/' },
  { name: 'experiencia', route: '/about' },
]
const cleanName = (str) => str.replace(/[^a-zA-Z ]/g, '')

export const Header = (props) => {
  const location = useLocation()
  const dispatch = useDispatch()
  const colorMode = useSelector((state) => state.mode)

  let routeName =
    cleanName(location.pathname) !== ''
      ? cleanName(location.pathname)
      : 'frontend developer'

  const handleMode = (param) => {
    dispatch(switchMode(param))
  }

  return (
    <header>
      <Helmet>
        <title>{`jose avila - ${routeName}`}</title>
      </Helmet>
      <span className='separator'></span>
      <nav>
        <div className='brand'>
          <Logo type={routeName === 'about' ? 'letter' : 'mug'} />
        </div>
        <ul>
          {navItems &&
            navItems.length > 1 &&
            navItems.map((item) => (
              <li
                key={item.name}
                className={location.pathname === item.route ? 'active' : ''}
              >
                <Link to={item.route}>{item.name}</Link>
              </li>
            ))}
        </ul>
      </nav>
      <div className='switch-mode'>
        <span className={`switch ${colorMode.mode ? 'darkon' : ''}`}>
          <i className='fa fa-sun' onClick={() => handleMode(false)}></i>
          <i
            className='fa fa-moon'
            onClick={() => {
              handleMode(true)
            }}
          ></i>
        </span>
      </div>
    </header>
  )
}
