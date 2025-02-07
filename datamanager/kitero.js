const sum = (a,b)=>{
    const result = a+b 
    return result
}
console.log(sum(4,5))
const obj = {

}
obj.calculate1 = sum
console.log(obj.calculate1(4,4))
obj.calculate2=(cb)=>{
    const res = cb(4,8)
    return res
}
const result1=obj.calculate2((a,b)=>{
const szam3=a+b
return szam3
})

console.log(result1)
const result2=obj.calculate2((a,b)=>{
    const szam3=a-b
    return szam3
    })
    console.log(result2)


obj.calculate3= (a,b,cb)=>{
    const szam3 =cb(a,b)
    return szam3
}
const result3 =obj.calculate3(5,7,(a,b)=>{return a+b})
console.log(result3)

const theFunction=()=>{
    const szam10=10
    const finalresult=obj.calculate3(5,7,(a,b)=>{return a*szam10+b})
    console.log(finalresult)
    }
theFunction()
