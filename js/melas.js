import { Helper } from "./assist.js"
import { Details } from "./details.js"

export class Meals {
    constructor (){
        this.container= ''
        this.navToggle()
        this.getMeals()
    }
    async getMeals (){
        let data = new Helper()
        let details =new Details()
        var res=await data.getData('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        this.displayMeals(res.meals)
        let showDetails = data.showDetails()
        
    }
    
     displayMeals (cartona) { 
        let helper = new Helper()
        let meals = helper.displayData(cartona)
        document.querySelector(`#home .row`).innerHTML= meals
    }
    
 


    navToggle (){
        
        $('.close-icon').click(function () { 
            let navItemsWidth=$('.nav-items').innerWidth();
    
        if($('.side-nav').css('left') =='0px'){
            $('.side-nav').animate({"left":-navItemsWidth},500)
           
            $('.close-icon').addClass('d-none');
            $('.open-icon').removeClass('d-none');
        }
        $('.nav-links li').animate({'top':'300'},500)
       }); 


       $('.open-icon').click(function (){
        if($('.side-nav').css('left') != '0px'){
            $('.side-nav').animate({"left":'0'},500)
            $('.close-icon').removeClass('d-none');
            $('.open-icon').addClass('d-none');
        }

        $('.nav-links li').animate({'top':0},700)

       })

    }




}