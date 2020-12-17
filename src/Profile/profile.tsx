import React from "react";
import '../App.css';
export default function Profile(){
    return(<div >
        <aside className='aside'>
            <div className='fonPage'>
                <img  src={'https://i1.wallbox.ru/wallpapers/main/201522/1644fde2217f9fa.jpg'}/>

            </div>
            <div className='about'>
                <div className='ava'>
                    <img src={'https://avatanplus.com/files/resources/original/5830a866169da1587e11cecd.png'}/>
                </div>

                <div className='info'>
                    <div>Anton Kliachonak</div>
                    <div>
                        <span>Date of brithday:</span>
                        <span>28.10.1993</span>
                    </div>
                    <div>
                        <span>City:</span>
                        <span>Borisov</span>
                    </div>
                    <div>
                        <span>Education:</span>
                        <span>Junior Developer</span>
                    </div>
                </div>
            </div>
            <div className='posts'>
                Posts
            </div>
        </aside>
    </div>)
}