enum Type {
    Plus = "+",
    Minus = "-"
}

type typesButtun = Type.Plus | Type.Minus

function types(type:typesButtun){
    console.log(type)
    const body = JSON.stringify({sing:type})
    fetch("http//localhost:3000/type", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: body
    })
}