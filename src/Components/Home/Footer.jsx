import React from 'react';
import style from '../../Style/Footer.module.css'

import Instagram from '../../assets/svg/instagram.svg'
import Telegram from '../../assets/svg/telegram.svg'
import Whatsapp from '../../assets/svg/whatsapp.svg'

const Footer = () => {
  return (
    <>
    <div className={style.footer}>
     
     <div className={style.link_sec}>
        <a href='#' alt=''>О компании</a>
        <a href='#' alt=''>Доставка и оплата</a>
        <a href='#' alt=''>Лента материалов</a>
        <a href='#' alt=''>Политика возврата</a>
     </div>
    
     <div className={style.number_messenger}>
        <div className={style.number_sec}> 
            <span >Введите номер</span>
            <span className={style.num}>+996 (__) ___ __ __</span>
        </div>

        <div className={style.messenger_sec}>
            <span>Выберите удобный мессенджер для общения</span>
            <div className={style.icons}>
                <img src={Whatsapp} className={style.whatsapp}/>
                <img src={Telegram}/>
                <img src={Instagram}/>
            </div>
        </div>
     </div>
        
     <div className={style.phone}>
        <span>Тел:+996 705 188 955 </span>
        <span>Тел:+996 555 188 955 </span>
        <span>Адрес:Бакаева 126</span>
     </div>
     
     
    </div>
    </>
  )
}

export default Footer