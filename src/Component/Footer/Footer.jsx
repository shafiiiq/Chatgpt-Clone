import React, { useState } from 'react'
import '../../cssHelper/helper.css'
import './Footer.css'
import { promptContext } from '../../Context/Context'

function Footer() {

    const [prompt, setPrompt] = useState('')


    const sendPrompt = (event) => {
        event.preventDefault();
        const prompt = document.getElementById('prompt-engine').value
        setPrompt(prompt)
    }

    // console.log(prompt);

    return (
        <div className='Footer w-full flex j-center a-center text-1'>
            <div className="prompt-egine relative flex">
                <form onSubmit={sendPrompt} className="size-full r-vh">
                    <input type="text" className="prompt-input r-vh size-full text-1 pl-3 font-sm" autoFocus placeholder='Message ChatGPT' id='prompt-engine' />
                    <span class="material-symbols-rounded attach-file absolute abs-mid-y pointer">
                        attach_file
                    </span>
                    <div className="send-prompt absolute abs-mid-y r-50 flex a-center j-center pointer">
                        <span class="material-symbols-rounded">
                            arrow_upward
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Footer
