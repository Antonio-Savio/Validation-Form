const inputs = document.querySelectorAll('.inputs')
const fields = document.querySelectorAll('.campos')
const form = document.querySelector('form')
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

inputs.forEach(function(input, i){
    input.addEventListener('input', 
    
    function fieldsValidation(){
        const fieldsAreEmpty = inputs[i].value.length == 0

        if(fieldsAreEmpty){
            fields[i].classList.add('invalid')
        } else if(i == 2 || i == 1){ //email or phone
            return
        } else {
            fields[i].classList.remove('invalid')
            fields[i].classList.add('valid')
        }
    })
})

inputs[1].addEventListener('input',

    function emailValidation(){
        const emailIsValid = regexEmail.test(this.value)

        if (emailIsValid){
            fields[1].classList.remove('invalid')
            fields[1].classList.add('valid')
        } else {
            fields[1].classList.add('invalid')
        }
})

inputs[2].addEventListener('input', 

    function phoneValidation(){
        const phoneHasNot8Numbers = this.value.length < 8

        if (phoneHasNot8Numbers){
            fields[2].classList.add('invalid')
        } else {
            fields[2].classList.remove('invalid')
            fields[2].classList.add('valid')
        }
})

form.addEventListener('submit', (event) => {
    inputs.forEach(

    function emptyFields(input, i) {
        const fieldsAreEmpty = input.value.length == 0
      
        if(fieldsAreEmpty){
            event.preventDefault()
            fields[i].classList.add('invalid')
        }
    })

    fields.forEach(function(field){
       const containInvalid = field.classList.contains('invalid')

       if (containInvalid){
            event.preventDefault()          
       }  
    })
})
