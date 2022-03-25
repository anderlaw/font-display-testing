import {useEffect, useState} from "react";
import {router} from "next/client";
import {useRouter} from "next/router";

export default () => {
    const [content, setContent] = useState<string>('')
    const router = useRouter()
    useEffect(() => {
        const fontDisplayValue = router.query['font-display']
        const delaySeconds = router.query['delay-seconds']
        if(fontDisplayValue){
            setContent(`
            <style>
                @font-face {
                  font-family: 'Roboto';
                  font-style: normal;
                  font-weight: 400;
                  font-display: ${fontDisplayValue};
                  src: url('/api/font?font-name=Roboto-Regular.ttf&delay-seconds=${delaySeconds}');
                  /* we may need set a unicode-range in the future since GTV is a Big international Inc */
                  /*unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;*/
                }
            </style>
            <p>
                A piece of writing included with others in a newspaper, magazine, or other publication.
                "an article about middle-aged executives"
            </p>
        `)
        }
    },[router])
    return <div style={{fontSize: '20px', margin:'20px',fontFamily: 'Roboto'}}>
        <div dangerouslySetInnerHTML={{__html: content}}/>
    </div>
}