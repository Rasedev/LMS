



// ////////////////////////converter//////////////////////////


const submit = document.querySelector('.btn')
const celcius = document.querySelector('.celcius')
const fahrenheit = document.querySelector('.fahrenheit')
const kelvin = document.querySelector('.kelvin')
const  weather_image = document.querySelector('.weather_image')



const conditionImage = {
    extraCold : "./images/x.jpeg",
    cold: "./images/31.jpeg",

    normalCold: "./images/86.jpeg",

    normal: "./images/89.jpeg",

    sunny: "./images/5.jpeg",
   

    desert: "./images/lo70.jpeg",

}




window.onload = function(){
    let player = document.getElementById("player"),
        play = document.getElementById("play");
    
    play.addEventListener("click",function(){
      player.play();
    });
  }



let lastEdit = 'celcius'


////immedietely invoke function///////////

// (function () {
//     celcius.addEventListener('keyup', (e) => {
//         lastEdit = 'celcius'
// })
const updateLastEdit = () => {
      celcius.addEventListener('keyup', (e) => {
          lastEdit = 'celcius'
      })

      fahrenheit.addEventListener('keyup', (e) => {
        lastEdit = 'fahrenheit'
    })

    kelvin.addEventListener('keyup', (e) => {
        lastEdit = 'kelvin'
    })

}

  updateLastEdit()


const updateImage = (temp) => {
    if(temp < -10 ){
         weather_image.setAttribute('src', conditionImage.extraCold)
    }else if(temp > 10 && temp <= 0){
        weather_image.setAttribute('src', conditionImage.cold)
    }else if(temp > 0 && temp <= 15){
        weather_image.setAttribute('src', conditionImage.normalCold)
    }else if(temp > 15 && temp <= 25){
        weather_image.setAttribute('src', conditionImage.normal)
    }else if(temp > 25 && temp <= 35){
        weather_image.setAttribute('src', conditionImage.sunny)
    }else if(temp > 35 ){
        weather_image.setAttribute('src', conditionImage.desert)
    }
}




let tempppp = 20

const convert = (lastEdited) => {

     if(lastEdited === 'celcius') {
     const fVlue = (parseFloat(celcius.value) * 9 / 5) + 32
     const kVlue = (parseFloat(celcius.value)) + 273

        fahrenheit.value = Math.floor(fVlue )+ '°C'
         kelvin.value = Math.floor(kVlue) + 'K'

        //  fahrenheit.value = fVlue  
        //  kelvin.value = kVlue 



}else if(lastEdited === 'fahrenheit'){
    const cVlue = (parseFloat(fahrenheit.value) - 32) * 5/9 
    const kVlue = (parseFloat(fahrenheit.value) -32 ) * 5/9 + 273

   celcius.value = Math.floor(cVlue) + '°C'
    kelvin.value = Math.floor(kVlue) + 'K'

        //    celcius.value = cVlue 
        //     kelvin.value = kVlue 


}else if(lastEdited === 'kelvin'){
    const cVlue = parseFloat(kelvin.value) - 273 
    const fVlue = (parseFloat(kelvin.value) -273.15) * 9/5 + 32 

   celcius.value = math.floor(cVlue) + '°C'
   fahrenheit.value = math.flooR(fVlue) + '°F'
   
        //    celcius.value = cVlue 
        //    fahrenheit.value = fVlue


}


}
submit.addEventListener('click', () => {

    convert(lastEdit)

    let temp = 0
    if(lastEdit === 'celcius') {
        temp = celcius.value
    }else if(lastEdit === 'fahrenheit'){
        temp = (parseFloat(fahrenheit.value) - 32) * 5/9 
    }else if(lastEdit === 'kelvin'){
        temp = parseFloat(kelvin.value) - 273 
    }
   updateImage(temp )
})




