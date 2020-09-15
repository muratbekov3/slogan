import React, { Component } from 'react'
import android from './img/img/android.png'
import icon  from './img/img/icon.png'
import './Css/product.css'




export default class Contacts extends Component {
   
    render() {
        return ( 
            <div>
                <div className="download">

<h1><a href="">Скачать</a></h1>

<div className='flex'>
<img src={android}  className="andrid" alt=""/>
<img src={icon} className="andrid1" alt=""/>
</div>


<p>Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации.</p>

</div>


            </div>
        )
    }
}