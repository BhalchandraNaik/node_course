const name = 'Bhalchandra'
const userage = 23

const user = {
    name,
    age:userage,
    location:'Boulder'
}

console.log(user)

const product = {
    label:'Red notebook',
    price:3,
    stock:3,
    salePrice:undefined
}

const {label:productLabel, stock} = product

console.log(productLabel)