// async function playerStart(){
//     const firstMove = await movePlayer(100,"Left") //Pause
//     const second = await movePlayer(400,"Left") // Pause
//     await movePlayer(10,"Right") // Pause
//     await movePlayer(330,"Left") // Pause
// }

// real scenario
fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(console.log())

async function fetchUsers(){
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await users.json()
    console.log(data)
}

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

const getData = async function(){
    try{
        const [users,posts, albums] = await Promise.all(urls.map(url => 
            fetch(url).then(resp => resp.json())
        ))
        console.log("users",users)
        console.log("posts",posts)
        console.log("albums",albums)
    }catch(err){
        console.log("Oooopppss!!!")
        console.log(err)
    }
}

// ECScript 9
// .finally .catch when using promises

// for await of
const loopThroughURLs = url => {
    for(url of urls){
        console.log(url)
    }
}

const getData2 = async function(){
    const arrayOfPromises = urls.map(url => fetch(url))
    for await (let request of arrayOfPromises){
        const data = await request.json()
        console.log(data)
    }
}

getData2()