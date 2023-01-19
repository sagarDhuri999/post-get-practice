console.log('om');



async function zen() {

    let x = "https://official-joke-api.appspot.com/random_joke"

    // let y = await fetch(`https://official-joke-api.appspot.com/random_joke`)

    let y = await fetch(x)

    let z = await y.json()

    console.log('done,', z);
    swage(z)



}


zen()






function swage(we) {

    const la = document.querySelector(".so").innerHTML = ` <h2> ${we.setup} </h2>

     <strong> ${we.punchline} </strong>
    `

    console.log('g', la);
}

//   post request





async function demo() {

    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name1: "Disha",
            age: "30",
            id: 8,

        }),



    }

    let api = await fetch("https://jsonplaceholder.typicode.com/posts", options)

    let api1 = await api.json()

    console.log('api', api1);




}

demo()




