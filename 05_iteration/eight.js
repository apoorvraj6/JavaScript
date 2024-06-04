// reduce 

const nums = [1, 2, 3];

const initialvalue = 0;
// const newnums=nums.reduce( function(acc,currval){
//     console.log(`acc: ${acc} and currval : ${currval}`)
//     return acc+currval
// },0)

const newnums = nums.reduce((acc, curr) => acc + curr, 0)

console.log(newnums)

const shoppingcart = [{
    itemname: "js course",
    price: 2999
}, {
    itemname:"python",
    price:1999
}, {
        itemname:"c++",
        price:4999
}, {
        itemname:"java",
        price:4999
}]

const res=shoppingcart.reduce( (acc,curr) => acc+curr.price,0)
console.log(res)