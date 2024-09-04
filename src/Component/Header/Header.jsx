import React from 'react'
import '../../cssHelper/helper.css'
import './Header.css'


function Header() {
    return (
        <div className='Header w-full flex p-inline-1 j-between a-center text-1'>
            <div className="app-name flex gap-05 ease-4 a-center r-8 pointer p-inline-1">
                <p className="font-md bold-500 text-clr">
                    ChatGpt
                </p>
                <span class="material-symbols-rounded">
                    keyboard_arrow_down
                </span>
            </div>
            <div className="user-account r-50 flex a-center j-center">
                SH
            </div>
        </div>
    )
}

export default Header
