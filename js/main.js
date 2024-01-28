import { Meals } from "./melas.js";
import { Search } from "./search.js";
import { Category } from "./categories.js";
import { Area } from "./area.js";
import { Ingredients } from "./ingredients.js";
import { Validation } from "./validation.js";

$(document).ready(function () {
    $('#loading').fadeOut(1000)
let meals = new Meals()


$('#searchLink').click(function (){
    $('#loading').fadeOut(1000)
    
    let search = new Search()
    $('#search').removeClass('d-none')
    $('#contactUs').addClass('d-none')
    $('#home').addClass('d-none')
})

$('#categoriesLink').click(function (){
    let category = new Category()
    $('#contactUs').addClass('d-none')
    $('#home').removeClass('d-none')
    $('#search').addClass('d-none')
})

$('#areasLink').click(function (){
let area =new Area()
$('#contactUs').addClass('d-none')
$('#home').removeClass('d-none')
$('#search').addClass('d-none')
})

$('#ingredientsLink').click(function (){
let ing =new Ingredients()
$('#contactUs').addClass('d-none')
$('#home').removeClass('d-none')
$('#search').addClass('d-none')

})

$('#contactLink').click(function (){
    $('#contactUs').removeClass('d-none')
    $('#home').addClass('d-none')
    $('#search').addClass('d-none')
   let v =new Validation()

})



let btn=document.getElementById('submitBtn')

$('#nameInput').keyup(function (){
    let nameVal = document.getElementById('nameInput').value
    v.nameValidation(nameVal)
v.btnEnable(btn)
})

$('#emailInput').keyup(function (){
    let emailVal = document.getElementById('emailInput').value
    v.emailValidation(emailVal)

    v.btnEnable(btn)
})

$('#phoneInput').keyup(function (){
    let phoneVal = document.getElementById('phoneInput').value
    v.phoneValidation(phoneVal)

    v.btnEnable(btn)
})

$('#ageInput').keyup(function (){
    let ageVal = document.getElementById('ageInput').value
    v.ageValidation(ageVal)

    v.btnEnable(btn)
})

$('#passwordInput').keyup(function (){
    let passVal = document.getElementById('passwordInput').value
    v.passValidation(passVal)

    v.btnEnable(btn)
})

$('#repasswordInput').keyup(function (){
    let repassVal = document.getElementById('repasswordInput').value
    let passVal = document.getElementById('passwordInput').value

    v.rePassValidation(repassVal,passVal)

    v.btnEnable(btn)
})



});


