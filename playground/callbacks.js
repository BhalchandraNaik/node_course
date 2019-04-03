const names = ['hello', 'world']
const shortName = names.filter((name)=>{
    return name.length <=4
})

// const geocode = (address, callback)=>{
//     setTimeout(() => {
//         const data = {
//             latitude : 0,
//             longitude:0
//         }
//         callback(data)
//     }, 2000);
// }

// const data = geocode('Philadelphia', (data)=>{
//     console.log(data)
// })

const add = (a,b,callback)=>{
    setTimeout(() => {
        const result = a+b
        callback(result)
    }, 2000);
}

const data = add(2,5,(result)=>{
    console.log(result);
})