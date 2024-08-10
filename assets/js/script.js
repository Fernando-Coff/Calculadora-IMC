

const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    
    event.preventDefault() 


    const weigth = document.getElementById('weigth').value
    const heigth = document.getElementById('heigth').value
    const bmi = (weigth / (heigth*heigth)).toFixed(2)

    const value = document.getElementById('value')
    let description = ''
    value.classList.add('attention')

    document.getElementById('infos').classList.remove('hidden')

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso.'
    } else if (bmi >= 18.5 && bmi <= 25){
        value.classList.remove('attention')
        value.classList.add('normal')
        description = 'Você está no peso ideal!'
    } else if (bmi > 25 && bmi <= 30){
        description = 'Cuidado! Você está com sobrepeso.'
    } else if (bmi > 30 && bmi <=35){
        description = 'Cuidado! Você está com obesidade moderada.'
    } else if (bmi > 35 && bmi <= 40){
        description = 'Cuidado! Você está com obesidade severa.'
    } else{
        description = 'Cuidado, você está com obesidade mórbida.'
    }
    




    value.textContent = bmi.replace('.',',')
    document.getElementById('description').textContent = description
})