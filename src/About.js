import React, { Component } from 'react'
import first from './img/img/rawpixel-196464-unsplash.png'
import second from './img/img/rawpixel-196464-unsplash.png'
import third from './img/img/rawpixel-196464-unsplash.png'
import './Css/about.css'
import fourth from './img/img/rawpixel-559744-unsplash.png'
import left from './img/img/left-arrow (1).png'
import coins from './img/img/coins-2.png'
import akyl from './img/img/akyl.png'
import chat from './img/img/chat (1).png'
import home  from './img/img/home (1).png'
import settings  from './img/img/settings.png'



export default class Contacts extends Component {
   
    render() {
        return ( 
        <div>
<div className="foto">

<div>
    <img src={first} alt="first"/>
    <p>Часто ли вы опаздываете на работу (учебу)?</p>
 </div>

  <div>
     <img src={second} alt="second"/>
      <p>Часто ли вы опаздываете на работу (учебу)?</p>
  </div>

  <div>
     <img src={third} alt="third"/>
     <p>Часто ли вы опаздываете на работу (учебу)?</p>
  </div>

</div>

    <h1 className='h1'> О приложении</h1>
    <div className="section">
        <img src={fourth} className="img" alt="fourth"/>  
    </div>




    <div className="middleAk">
<div className="middle">
  <div className="middle1"> 
      <a href=""><img src={left} className="arrow" alt=""/></a>
      <a href=""><h3>Главная</h3></a>
      <a href=""><img src={coins}  className="coins" alt=""/></a> 
</div>

   <div className="foto1">
       <img src={akyl} alt=""/>
       <p><a href="">Использования мобильных устройств</a></p>
   </div>

   <div className="border">
   <a href=""> <p>16%</p></a>
   </div>
   
   <div className="q">
       <h3>Сколько часов в день Вы пользуетесь своими мобильными устройствами?</h3>
   </div>

   <div className="answer">
       <div>
           <a href=""><button></button></a>
           <a href=""><button></button></a>
           <a href=""><button></button></a>
       </div>
       <div>
           <li><a href=""> 6+</a></li>
           <li><a href="">3-5</a></li>
           <li><a href="">1-3</a></li>
       </div>
       <div className="dalee">
           <a href=""><button>Далее</button></a>
       </div>

       <div className="m">
           <a href=""><img src={chat} alt=""/></a>
           <a href=""><img src={home} alt=""/></a>
           <a href=""><img src={settings} alt=""/></a>
       </div>


   </div>


  </div>



 
  <div className="sait1">
    <div className="middle1"> 
        <a href=""><img src={left} className="arrow" alt=""/></a>
        <a href=""><h3>Главная</h3></a>
        <a href=""><img src={coins}  className="coins" alt=""/></a> 
  </div>

     <div className="foto1">
         <img src={akyl} alt=""/>
         <p><a href="">Использования мобильных устройств</a></p>
     </div>

     <div className="border">
     <a href=""> <p>16%</p></a>
     </div>
     
     <div className="q">
         <h3>Сколько часов в день Вы пользуетесь своими мобильными устройствами?</h3>
     </div>

     <div className="answer">
         <div>
             <a href=""><button></button></a>
             <a href=""><button></button></a>
             <a href=""><button></button></a>
         </div>
         <div>
             <li><a href=""> 6+</a></li>
             <li><a href="">3-5</a></li>
             <li><a href="">1-3</a></li>
         </div>
         <div className="dalee">
             <a href=""><button>Далее</button></a>
         </div>

         <div className="m">
             <a href=""><img src={chat} alt=""/></a>
             <a href=""><img src={home} alt=""/></a>
             <a href=""><img src={settings} alt=""/></a>
         </div>


     </div>


    </div>






    <div className="sait2">
        <div className="middle1"> 
            <a href=""><img src={left} className="arrow" alt=""/></a>
            <a href=""><h3>Главная</h3></a>
            <a href=""><img src={coins}  className="coins" alt=""/></a> 
      </div>
  
         <div className="foto1">
             <img src={akyl} alt=""/>
             <p><a href="">Использования мобильных устройств</a></p>
         </div>
  
         <div className="border">
         <a href=""> <p>16%</p></a>
         </div>
         
         <div className="q">
             <h3>Сколько часов в день Вы пользуетесь своими мобильными устройствами?</h3>
         </div>
  
         <div className="answer">
             <div>
                 <a href=""><button></button></a>
                 <a href=""><button></button></a>
                 <a href=""><button></button></a>
             </div>
             <div>
                 <li><a href=""> 6+</a></li>
                 <li><a href="">3-5</a></li>
                 <li><a href="">1-3</a></li>
             </div>
             <div className="dalee">
                 <a href=""><button>Далее</button></a>
             </div>
  
             <div className="m">
                 <a href=""><img src={chat} alt=""/></a>
                 <a href=""><img src={home} alt=""/></a>
                 <a href=""><img src={settings} alt=""/></a>
             </div>
  
  
         </div>
  
  
        </div>
  


  
  
 
        <div className="sait3">
            <div className="middle1"> 
                <a href=""><img src={left} className="arrow" alt=""/></a>
                <a href=""><h3>Главная</h3></a>
                <a href=""><img src={coins}  className="coins" alt=""/></a> 
          </div>
      
             <div className="foto1">
                 <img src={akyl} alt=""/>
                 <p><a href="">Использования мобильных устройств</a></p>
             </div>
      
             <div className="border">
             <a href=""> <p>16%</p></a>
             </div>
             
             <div className="q">
                 <h3>Сколько часов в день Вы пользуетесь своими мобильными устройствами?</h3>
             </div>
      
             <div className="answer">
                 <div>
                     <a href=""><button></button></a>
                     <a href=""><button></button></a>
                     <a href=""><button></button></a>
                 </div>
                 <div>
                     <li><a href=""> 6+</a></li>
                     <li><a href="">3-5</a></li>
                     <li><a href="">1-3</a></li>
                 </div>
                 <div className="dalee">
                     <a href=""><button>Далее</button></a>
                 </div>
      
                 <div className="m">
                     <a href=""><img src={chat} alt=""/></a>
                     <a href=""><img src={home} alt=""/></a>
                     <a href=""><img src={settings} alt=""/></a>
                 </div>
      
      
             </div>
      
      
            </div>
      

      
      
            <div className="sait4">
                <div className="middle1"> 
                    <a href=""><img src={left} className="arrow" alt=""/></a>
                    <a href=""><h3>Главная</h3></a>
                    <a href=""><img src={coins}  className="coins" alt=""/></a> 
              </div>
          
                 <div className="foto1">
                     <img src={akyl} alt=""/>
                     <p><a href="">Использования мобильных устройств</a></p>
                 </div>
          
                 <div className="border">
                 <a href=""> <p>16%</p></a>
                 </div>
                 
                 <div className="q">
                     <h3>Сколько часов в день Вы пользуетесь своими мобильными устройствами?</h3>
                 </div>
          
                 <div className="answer">
                     <div>
                         <a href=""><button></button></a>
                         <a href=""><button></button></a>
                         <a href=""><button></button></a>
                     </div>
                     <div>
                         <li><a href=""> 6+</a></li>
                         <li><a href="">3-5</a></li>
                         <li><a href="">1-3</a></li>
                     </div>
                     <div className="dalee">
                         <a href=""><button>Далее</button></a>
                     </div>
          
                     <div className="m">
                         <a href=""><img src={chat} alt=""/></a>
                         <a href=""><img src={home} alt=""/></a>
                         <a href=""><img src={settings} alt=""/></a>
                     </div>
          
          
                 </div>
    </div>
</div>


        </div>
        )
    }
}