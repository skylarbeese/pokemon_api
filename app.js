const pokenDiv = document.querySelector('.poke-div')
//const first1 = document.querySelector('.first')
let frontt = document.querySelector('.front')
let con = document.querySelector('.con')

const colors = {
  fire: '#F55447',
  grass: '#43F040',
  water: '#5038F5',
  electric: '#F7E202',
  ground: '#A85F3B',
  rock: '#A8926C',
  fairy: '#FA9CE7',
  poison: '#D95B87',
  dragon: '#923D5B',
  bug: '#BBFA47',
  psychic: '#D9B9DE',
  flying: '#D4DBF4',
  fighting: '#E0C390',
  normal: '#F0E8F1',
  ice: '#A1E4F0'
}

const main = Object.keys(colors)

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

   getApi('https://pokeapi.co/api/v2/pokemon/?limit=200&offset=0').then
   (async (data) => {
     for(const pokemon of data.results) {
       await getApi(pokemon.url).then((pokeData) => {
          populatePoke(pokeData)
          //pokeType(pokeData)
       })
     }
   })






    

const newPokeBtn = document.querySelector('.create');
newPokeBtn.addEventListener('click', () => {
  let pokeName = prompt('want is your name');
  
  let newPokemon = new pokemon(pokeName, 200, 400, ['sleep', 'code', 'eat'], "fire");
 // console.log(newPokemon)
    populatePoke(newPokemon)
})

function pokemon(name, weight, height, ability, type) {
  this.name = name,
  this.weight = weight,
  this.height = height,
  this.ability = ability,
  this.type = type
}

   

function populatePoke(pokeCards) {



 let cardDiv = document.createElement('div') //front
 let card =  document.createElement('div')
 let front = document.createElement('div') //front
 let back = document.createElement('div') //back
 let grad = document.createElement('div') //fornot
 let pokeNum = document.createElement('h2') //front
 let pokeName = document.createElement('h2') //front
 let pokeImg = document.createElement('img') //front
 let imgBox = document.createElement('div') //front
 pokeImg.src = `../pokemon.json/images/${pokeNumber(pokeCards)}.png` //front
 //let PokeNum = document.createElement('h2')
 //let pokeMoves = document.createElement('h2') //back
 let frontSlide = document.createElement('div') //front
 let sliderText = document.createElement('div') //front
 let textFront = document.createElement('div') //front
 let name = document.createElement('h2') //front

 let type = document.createElement('h2')
 type.setAttribute('class', 'type')



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


 name.setAttribute('class', 'name') //front
 frontSlide.setAttribute('class', 'slide-card') //front
pokeImg.setAttribute('class', 'poke-img') //front
textFront.setAttribute('class', 'text-front')  //front
//pokeMoves.setAttribute('class', 'moves') //back
pokeName.textContent = `${pokeCards.name}` //front

const pokeTypes = pokeCards.types.map(el => el.type.name)

const typeP = main.find(type => pokeTypes.indexOf(type) === 0)
const color = colors[typeP]
const type1 = `${pokeTypes}`

let typeDiv = document.createElement('div')
typeDiv.setAttribute('class', 'poke-type')
let tey = document.createElement('h2')
tey.setAttribute('child', "type-text")
tey.textContent = "type:"
type.textContent = type1



//first1.addEventListener('click', (event) => {
//  console.log(populatePoke(pokeFire))
  //populatePoke(pokeFire) 
//})



 pokeNum.textContent = `#${pokeCards.id}` //back
 name.textContent = pokeCards.name //front
 //pokeMoves.textContent = `${pokeCards.moves.length}moves`//back

//back.addEventListener('click', () => getMoves(pokeCards))


 
   

 cardDiv.setAttribute('class', 'card-div') //front
 card.setAttribute('class', 'card')
 front.setAttribute('class', 'front') //front
 back.setAttribute('class', 'back') //back
 grad.setAttribute('class', 'grad') //front
 sliderText.setAttribute('class', 'text-div') //front
 imgBox.setAttribute('class', 'box')  //front
 card.appendChild(front)
 front.appendChild(frontSlide)  ///front
 sliderText.appendChild(textFront)  //front
 frontSlide.appendChild(grad) //front
 frontSlide.appendChild(sliderText) //front
 textFront.appendChild(pokeNum)  //front



 back.appendChild(name)  //back
 back.appendChild(pokeNum)
 back.appendChild(typeDiv)
 typeDiv.appendChild(tey)
 typeDiv.appendChild(type)

 textFront.appendChild(pokeName) //front

frontSlide.appendChild(grad) //front

front.appendChild(imgBox) //front
imgBox.appendChild(pokeImg) //front
 card.appendChild(back)
 //back.appendChild(pokeMoves) //back

 cardDiv.appendChild(card)
 pokenDiv.appendChild(card)
 
 front.style.backgroundColor = color

 

}




/*function getType(pokemon2){
  let po = document.createElement('p')
  po.textContent = "hi"
//  pokenDiv.appendChild(po)
 /*   return pokemon.map(poke => {
    let pokeType = poke.types[1] ? `${poke.types[1]}` : ``
return {
     
        types:`${pokeType}`
     
    } 
  })  */
//} 
function getMoves(pokemon) {

 
 // const moveUrl = pokemon.id
  //console.log(moveUrl)
  //getApi(moveUrl).then((data) => data.type.name)
    
  //}) 
 // let type = document.createElement('h2')
 //type.setAttribute('class', 'type')
 // type.textContent = pokeM.types[0].type.name
 
   // console.log(pokeM)
}


function pokeNumber(pokemon) {
  if(pokemon.id < 10) {
    return `00${pokemon.id}`
  } else if(pokemon.id > 9 && pokemon.id < 100) {
    return `0${pokemon.id}`
  } else if(pokemon.id > 99 && pokemon.id < 810){
    return `${pokemon.id}`
  
  }
}



}
 

onload()