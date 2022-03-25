// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import * as fs from "fs";
import path from "path";

type Data = {
    name: string
}
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const delaySeconds = Number(req.query['delay-seconds']||0)
    const fontName = req.query['font-name']
    //读取响应的字体文件
    //注意，这里的__dirname 是打包后的脚本所处的位置，而不是源代码所处的位置
    console.log(__dirname)
    const absolutePath = path.join(__dirname, `../../../../assets/roboto_new/${fontName}`)
    const str = fs.readFileSync(absolutePath) as any
    //延迟返回字体
    setTimeout(() => {
        res.status(200).send(str)
    }, delaySeconds * 1000)
}
