const pokenDiv = document.querySelector('.poke-div')



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

   getApi('https://pokeapi.co/api/v2/pokemon/').then
   (async (data) => {
     for(const pokemon of data.results) {
       await getApi(pokemon.url).then((pokeData) => {
          populatePoke(pokeData)
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
 
 let cardDiv = document.createElement('div')
 let card =  document.createElement('div')
 let front = document.createElement('div')
 let back = document.createElement('div')
 let grad = document.createElement('div')
 let pokeNum = document.createElement('h2')
 let pokeName = document.createElement('h2')
 let pokeImg = document.createElement('img')
 pokeImg.src = `../pokemon.json/images/${pokeNumber(pokeCards)}.png`
 let pokeName1 = document.createElement('h2')
 let frontSlide = document.createElement('div')
 let sliderText = document.createElement('div')
 let textFront = document.createElement('div')
 let name = document.createElement('h2')
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
 name.setAttribute('class', 'name')
 frontSlide.setAttribute('class', 'slide-card')
pokeImg.setAttribute('class', 'poke-img')
textFront.setAttribute('class', 'text-front')
pokeName.textContent = pokeCards.name
 pokeName1.textContent = pokeCards.name
 pokeNum.textContent = pokeCards.id
 name.textContent = pokeCards.name
 cardDiv.setAttribute('class', 'card-div')
 card.setAttribute('class', 'card')
 front.setAttribute('class', 'front')
 back.setAttribute('class', 'back')
 grad.setAttribute('class', 'grad')
 sliderText.setAttribute('class', 'text-div')
 card.appendChild(front)
 front.appendChild(frontSlide)
 sliderText.appendChild(textFront)
 frontSlide.appendChild(grad)
 frontSlide.appendChild(sliderText)
 textFront.appendChild(pokeNum)
 front.appendChild(name)
 textFront.appendChild(pokeName)

frontSlide.appendChild(grad)
front.appendChild(pokeImg)
 card.appendChild(back)
 back.appendChild(pokeName1)
 cardDiv.appendChild(card)
 pokenDiv.appendChild(cardDiv)


 


 
}

function pokeNumber(pokemon) {
  if(pokemon.id < 10) {
    return `00${pokemon.id}`
  } else if(pokemon.id > 9 && pokemon.id < 100) {
    return `0${pokemon.id}`
  }
}
onload()