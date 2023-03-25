import React from 'react'
import { Route } from 'react-router-dom'
import Header from './layouts/Header/Header'

export default function HomeTemplate(props) {
    const {Component, ...restProps} = props
  return (
    <Route {...restProps} render = {(propsRoute) =>{
        return <><Header />
        <Component {...propsRoute}/>
        </>
    }}>

    </Route>
  )
}
