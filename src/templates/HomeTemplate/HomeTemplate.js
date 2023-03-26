import React from 'react'
import { Route } from 'react-router-dom'
import Header from './layouts/Header/Header'
import HomeCarousel from './layouts/HomeCarousel/HomeCarousel'

export default function HomeTemplate(props) {
    const {Component, ...restProps} = props
  return (
    <Route {...restProps} render = {(propsRoute) =>{
        return <><Header />
        <HomeCarousel />
        <Component {...propsRoute}/>
        </>
    }}>

    </Route>
  )
}
