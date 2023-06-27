import express,{Request,Response} from "express";
const app = express()


enum Type {
    Plus = "+",
    Minus = "-"
}

type typesButtun = Type.Plus | Type.Minus

app.use(express.static("./public"))
app.use(express.json())

app.post("/type", (req,res)=>{
    const sign: typesButtun = req.body.sign
    console.log(sign)
    return res.send({
        ok: true
    })
})
app.listen(3000, () => {
    console.log('http://localhost:3000')
})