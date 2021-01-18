import React from "react";
import s from '../Preloader/preloader.module.css'
import preloader from '../../Img/tms-loading.gif'
const Preloader = ()=>{
    return<>
    <img className={s.preloader}  alt='Preloader' src={preloader}/>
    </>
}
export default Preloader;