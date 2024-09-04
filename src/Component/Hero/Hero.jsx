import React, { useContext, useState } from 'react'
import '../../cssHelper/helper.css'
import './Hero.css'
import Header from '../Header/Header'
import Index from '../Index/Index'
import Prompt from '../Prompt/Prompt'

function Hero() {

    const [prompt, setPrompt] = useState([])

    const formatTime = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };

    const sendPrompt = (event) => {
        event.preventDefault();
        const promptEngine = document.getElementById('prompt-engine')
        const prompt = promptEngine.value

        if (prompt.trim() === '') {
            return;
        }

        const promptTime = formatTime(new Date())

        setPrompt((prevPrompt) => [
            ...prevPrompt,
            { promptData: prompt, promptTime: promptTime }
        ]);

        promptEngine.value = ''
    }

    return (
        <div className='Hero flex flex-col'>
            <Header />
            <Prompt prompt={prompt.length > 0 ? { prompt } : ''} />
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
        </div>
    )
}

export default Hero
