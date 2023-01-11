
function validateFirstNameAndLastName(event) {
    if(event.target.value){
        if(/^[A-Z][a-z]+\s[A-Z][a-z]+$/.test(event.target.value)){
                event.target.setAttribute('class','form-control is-valid')
        }else {
            event.target.setAttribute('class','form-control is-invalid')
            document.getElementById('result').innerText=''
        }
    }else {
        event.target.setAttribute('class','form-control is-invalid')
        document.getElementById('result').innerText=''
    }
}


function onChange(event) {
    event.preventDefault();
    switch (event.target.name) {
        case 'firstAndLastName':
            validateFirstNameAndLastName(event)
            break;
        case 'apartmentArea':
            validateApartmentArea(event)
            break;
        case 'apartmentHeight':
            validateApartmentHeight(event)
            break;
        default:
            console.error('Invalid attribute name from input.')
            break;
    }
}


function validateApartmentArea(event) {
    let inputValue= event.target.value;
    if(inputValue){
        if(inputValue<50 || inputValue>100){
            event.target.setAttribute('class','form-control is-invalid')
            document.getElementById('result').innerText='Input values are invalid'
        }else{
                event.target.setAttribute('class','form-control is-valid')

        }
    }else {
        event.target.setAttribute('class','form-control is-invalid')
        document.getElementById('result').innerText='Input values are invalid'
    }
}

function validateApartmentHeight(event) {
    let inputValue= event.target.value;
    if(inputValue){
        if(inputValue<2.2 || inputValue>3.3){
            event.target.setAttribute('class','form-control is-invalid')
            document.getElementById('result').innerText='Input values are invalid'
        }else{
                event.target.setAttribute('class','form-control is-valid')
        }
    }else {
        event.target.setAttribute('class','form-control is-invalid')
        document.getElementById('result').innerText='Input values are invalid'
    }
}


function submitForm(event) {
    event.preventDefault()
    let  firstNameAndLastName=document.getElementById('firstAndLastName').value;
    let  apartmentArea=document.getElementById('apartmentArea').value;
    let  apartmentHeight=document.getElementById('apartmentHeight').value;
    let result=apartmentHeight*apartmentArea;
    document.getElementById('result').innerText='Hello ' + firstNameAndLastName + ' volume of apartment is ' + result;
}

