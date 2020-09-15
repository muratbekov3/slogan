import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Css/index.css'
import Logo  from './img/logo.png'
import slogan from './img/slogan.png'


export default class Menu extends Component {
    render() {
        return (
            <div>
                <div className='logo'>
               <img src={Logo} alt='Logo'/>
               <img  src={slogan}  alt='slogan'/>
                </div>
                <div className='header'>
                <header>
                <Link className='nav' to=''><p>Home</p></Link> 
                <Link className='nav' to='/about'><p>about</p></Link>
                <Link className='nav' to='/products'><p>download</p></Link>
                <Link className='nav' to='/Project'><p>project</p></Link>
                <Link className='nav' to='/Contacts'><p>contacts</p></Link>
               </header>
               </div>
            </div>
        )
    }
}