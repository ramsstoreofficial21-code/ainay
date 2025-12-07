import { metaai } from "../../metaai.js"

const ai = new metaai()

export default async function handler(req,res){
    if(req.method!=="POST") return res.status(405).json({error:"Method not allowed"})
    const { message } = req.body
    if(!message) return res.json({error:"Pesan kosong"})
    try{
        const reply = await ai.scrape(message)
        res.json({reply})
    }catch(e){
        res.json({error:e.message})
    }
          }
