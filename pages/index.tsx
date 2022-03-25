import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useMemo, useState} from "react";

const Home: NextPage = () => {
    const [fontDelaySeconds,setFontDelaySeconds] = useState<number>(0)
    const [fontDisplay,setFontDisplay] = useState<'auto'|'block'|'swap'|'fallback'|'optional'>('auto')
    const iframeSrc = useMemo(()=>{
        return `/font-display?font-display=${fontDisplay}&delay-seconds=${fontDelaySeconds}`
    },[fontDelaySeconds,fontDisplay])
    return (
        <div>
            <div>
                <h3>设置字体加载延迟</h3>
                <input onInput={(e)=>{
                    const target = e.target as any
                    target.value = parseFloat(target.value) || 0
                    setFontDelaySeconds(target.value)
                }}/>
            </div>
            <div>
                <h3>修改font-display属性</h3>
                <button onClick={()=>setFontDisplay('block')}>block</button>
                <button onClick={()=>setFontDisplay('swap')}>swap</button>
                <button onClick={()=>setFontDisplay('fallback')}>fallback</button>
                <button onClick={()=>setFontDisplay('optional')}>optional</button>
                <button onClick={()=>setFontDisplay('auto')}>auto</button>
            </div>
            <div>
                <p>字体加载延迟：{fontDelaySeconds}s</p>
                <p>
                    font-display值：{fontDisplay}
                </p>
            </div>
            <div style={{marginTop:'10px'}}>
                <iframe style={{width:'500px'}} src={iframeSrc}/>
            </div>
        </div>
    )
}

export default Home
