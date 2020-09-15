import React, { Component } from 'react'
import vk from './img/img/vk.png'
import insta from './img/img/instagram (1).png'
import face from './img/img/facebook.png'
import './Css/contacts.css'



export default class Contacts extends Component {
   
    render() {
        return ( 
            <div>
                <footer>
                <h1><a href="">SOME</a></h1>

<div className="footer">
    
    <a href=""><img src={vk} className="im"  alt=""/></a>
    <a href=""><img src={insta} className="im1" alt=""/></a>
    <a href=""><img src={face} className="im2" alt=""/></a>

</div>

<div className="contact">
  <div className="contact0">
<h3>Контакты</h3>
<p>Tel.: +996 (312) 915000 + </p>
<p>Ext.</p>
<p>Fax: +996 (312) 915 028</p>

  </div>
  <div className="contact1">
<h3>Адреса</h3>
<p>American University of Central Asia</p>
<p>7/6 Aaly Tokombaev Street</p>
<p>Bishkek, Kyrgyz Republic 720060</p>
  </div>
  <div className="contact2">
 <h3>Помошь</h3>
 <p><a href=""> Помошь</a></p>
 <p><a href=""> Помошь</a></p>
 <p><a href=""> Помошь</a></p>
  </div>
</div>
</footer>
            </div>
        )
    }
}