

//promises

// fetch ("https://fakestoreapi.com/products")
// .then(response => response.json())

// .then(data => console.log(data))

// .catch(err => console.log(err))



// async await 

console.log("////////////////////////////////////////////////////////////////////////////////////////////////")


async function FetchData(){

    try{

        const response = await fetch("https://fakestoreapi.com/products");

        const data = await response.json()

        console.log(data)

    } catch(err){
        console.log(err)
    }

    
}

FetchData()