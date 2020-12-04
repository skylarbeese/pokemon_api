const pokenDiv = document.querySelector('.poke-div')
const first = document.querySelector('.first')


async function getApi(url) {
  try{
     const responce = await fetch(url)
     const data = await responce.json()
     return data

  } catch(error) {
          console.log('error')
  }

}

function onload() {

   getApi('https://pokeapi.co/api/v2/pokemon/?limit=400&offset=0').then
   (async (data) => {
     for(const pokemon of data.results) {
       await getApi(pokemon.url).then((pokeData) => {
          populatePoke(pokeData)
        //  const maleCharactors = pokemon.filter(person => person.id === 1 && person.id === 3)
        /*  first.addEventListener('click', () => {
            populatePoke(maleCharactors)
           }) */
       })
     }
   })
}


/*async function onLoad() {
  const responce = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const data = await responce.json()
  populatePoke(data)
}
 */


    
  



    


   

function populatePoke(pokeCards) {
 
 let cardDiv = document.createElement('div') //front
 let card =  document.createElement('div')
 //let front = document.createElement('div') //front
 let back = document.createElement('div') //back
 //let grad = document.createElement('div') //fornot
 //let pokeNum = document.createElement('h2') //front
 //let pokeName = document.createElement('h2') //front
 //let pokeImg = document.createElement('img') //front
// let imgBox = document.createElement('div') //front
 //pokeImg.src = `../pokemon.json/images/${pokeNumber(pokeCards)}.png` //front

 let pokeMoves = document.createElement('h2') //back
 //let frontSlide = document.createElement('div') //front
 //let sliderText = document.createElement('div') //front
 //let textFront = document.createElement('div') //front
 //let name = document.createElement('h2') //front

 //let type = document.createElement('h2')
 //type.setAttribute('class', 'type')

 //let type1 = document.createElement('h2')
 //type1.setAttribute('class', 'type')

 card.addEventListener('click', function() {
 // console.log("woring")
   if(!card.classList.contains("front-active")) {
      card.classList.remove("back-active");
      card.classList.add("front-active");
      
  } 
   else {
      card.classList.remove("front-active");
      card.classList.add("back-active");
    
  } 
 })
 //name.setAttribute('class', 'name') //front
// frontSlide.setAttribute('class', 'slide-card') //front
//pokeImg.setAttribute('class', 'poke-img') //front
//textFront.setAttribute('class', 'text-front')  //front
pokeMoves.setAttribute('class', 'moves') //back
//pokeName.textContent = pokeCards.name //front
//type.textContent = pokeCards.types[0].type.name
//type1.textContent = pokeCards.types[1].type.name
// pokeNum.textContent = pokeCards.id //back
 //name.textContent = pokeCards.name //front
 pokeMoves.textContent = `${pokeCards.moves.length}moves`//back

 pokeMoves.addEventListener('click', () => {
    
    back.appendChild(getMoves(pokeCards))

 })  //back


 cardDiv.setAttribute('class', 'card-div') //front
 card.setAttribute('class', 'card')
// front.setAttribute('class', 'front') //front
// back.setAttribute('class', 'back') //back
// grad.setAttribute('class', 'grad') //front
// sliderText.setAttribute('class', 'text-div') //front
// imgBox.setAttribute('class', 'box')  //front
 card.appendChild(cardFrontPop(pokeCards))
// front.appendChild(frontSlide)  ///front
// sliderText.appendChild(textFront)  //front
// frontSlide.appendChild(grad) //front
 //frontSlide.appendChild(sliderText) //front
 //textFront.appendChild(pokeNum)  //front
 textFront.appendChild(type)
 //textFront.appendChild(type1)
// front.appendChild(name)  //front
 //textFront.appendChild(pokeName) //front

frontSlide.appendChild(grad) //front
//front.appendChild(pokeType(pokeCards))
//front.appendChild(imgBox) //front
//imgBox.appendChild(pokeImg) //front
 card.appendChild(back)
 back.appendChild(pokeMoves) //back

 cardDiv.appendChild(card)
 pokenDiv.appendChild(card)


 


 
}

/*function cardBackPop(pokemon) {
  let back = document.createElement('div')
  back.setAttribute('class', 'back')
  let pokeNum = document.createElement('h2')
  let pokeName1 = document.createElement('h2')
  let pokeMoves = document.createElement('h2')
  pokeMoves.setAttribute('class', 'moves')
  pokeName1.textContent = pokemon.name
  pokeNum.textContent = pokemon.id
  pokeMoves.textContent = `${pokemon.moves.length}moves`
  pokeMoves.addEventListener('click', () => {
    getMoves(pokemon.moves)
 })
 back.appendChild(pokeMoves)
 back.appendChild(pokeName1)
 
} */

function cardFrontPop(pokemon) {
  let front = document.createElement('div')
  front.setAttribute('class', 'front')
  let frontSlide = document.createElement('div')
  frontSlide.setAttribute('class', 'slide-card')
  let pokeImg = document.createElement('img')
  pokeImg.src = `../pokemon.json/images/${pokeNumber(pokemon)}.png`
  pokeImg.setAttribute('class', 'poke-img')
  let imgBox = document.createElement('div')
  imgBox.setAttribute('class', 'box')
  let grad = document.createElement('div')
  grad.setAttribute('class', 'grad')
  let textFront = document.createElement('div')
  textFront.setAttribute('class', 'text-front')
  let pokeName = document.createElement('h2')
  pokeName.textContent = pokemon.name
  let name = document.createElement('h2')
  name.setAttribute('class', 'name')
  name.textContent = pokemon.name // name
  let sliderText = document.createElement('div')
  sliderText.setAttribute('class', 'text-div') 

  front.appendChild(imgBox) // frony
  front.appendChild(name)
  front.appendChild(frontSlide)
  frontSlide.appendChild(grad) //grad
  frontSlide.appendChild(sliderText) //sliderText
  sliderText.appendChild(textFront)
  textFront.appendChild(pokeName)
   //frontSlide
  imgBox.appendChild(pokeImg) //imgBox
  return cardFrontPop
}



//function getMoves(pokeM) {
 // document.body.appendChild
 // let move = document.createElement('p')
 // move.setAttribute('class', 'move')
 
//  const moveUrl = pokeM[13].move.url
/*  getApi(moveUrl).then((data) => {
    console.log(data.type.name)
    
  }) */

 
    //console.log(pokeM)
//}


function pokeNumber(pokemon) {
  if(pokemon.id < 10) {
    return `00${pokemon.id}`
  } else if(pokemon.id > 9 && pokemon.id < 100) {
    return `0${pokemon.id}`
  } else if(pokemon.id > 99 && pokemon.id < 810){
    return `${pokemon.id}`
  
  }
}

/*function pokeType(pokemon) {
  if(pokemon.types < 0) {
     let type1 = document.createElement('h2')
     type.textContent = pokeCards.types[1].type.name
     type1.setAttribute('class', 'type1')
  } else {
     return 'none'
  }
} */

const newPokeBtn = document.querySelector('.create');
newPokeBtn.addEventListener('click', () => {
  let pokeName = prompt('want is your name');
  
  let newPokemon = new pokemon(pokeName, 200, 400, ['sleep', 'code', 'eat']);
  console.log(newPokemon)
  populatePoke(newPokemon)
})

function pokemon(name, weight, height, ability) {
  this.name = name,
  this.weight = weight,
  this.height = height,
  this.ability = ability

}
onload()