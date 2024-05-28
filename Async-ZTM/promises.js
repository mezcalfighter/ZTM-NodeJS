/*
*   Promise: A promise is an object that may produce a single value some time in
*            the future either a resolved value, or a reason that its not resolved
*            (rejected)
*/  
            

const promise = new Promise((resolve, reject) => {
    if(true){
        resolve("Stuff worked");
    }else{
        reject("Error, it broke")
    }
})

promise
    .then(result => console.log(result))
    .then(result2 => {
        throw Error
        console.log(result2)
    })
    .catch((err) => console.log("Error!!!"))
    .finally(()=>{
        console.log("Termine!!")
    })

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/albums",
    "https://jsonplaceholder.typicode.com/posts"
]

Promise.all(urls.map((url)=>{
    return fetch(url).then(resp => resp.json())
})).then(results =>{
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch((err)=>console.log(err))