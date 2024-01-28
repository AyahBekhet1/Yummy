
import { Helper } from "./assist.js";

export class Search{
   constructor(){
   //  this.searchName()
    document.querySelector('.sName').addEventListener('keyup',this.searchName.bind(this))
    document.querySelector('.sLetter').addEventListener('keyup',this.searchLetter.bind(this))
   }

   async getSearchMeals(search){
    let data = new Helper()
    var res=await data.getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    this.displaySearch(res.meals)
    let showDetails = data.showDetails()

    }

   async getSearchletter(search){
    let data = new Helper()
    var res=await data.getData(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
    this.displaySearch(res.meals)
    let showDetails = data.showDetails()

    }

 displaySearch (cartona) { 
    let helper = new Helper()
    let meals = helper.displayData(cartona)
    document.querySelector(`#search .row`).innerHTML= meals
}


 searchName(){
   
        let inputVal = document.querySelector('.sName').value
          this.getSearchMeals(inputVal)    
    }

    searchLetter (){
        let inputLetter = document.querySelector('.sLetter').value  
        this.getSearchletter(inputLetter)
    }

    
 }