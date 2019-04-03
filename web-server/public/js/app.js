console.log('This is client-side js file')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data)=>{
        console.log(data)
    })
})


fetch("http://localhost:3000/weather?lat=39.9991&long=40.1").then((response) => {
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data.temperature)
            console.log(data.summary)
        }
    })
})