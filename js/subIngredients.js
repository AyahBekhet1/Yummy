import { Helper } from "./assist.js";

import { Details } from "./details.js";

export class subIngredient {
    constructor(){}

    async getSubIngredient (subIng){
        let data = new Helper()
        var res=await data.getData(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${subIng}`)
        this.displaySubIngredient(res.meals)
        let details =new Details()
        let showDetails = data.showDetails()

             
    }

    
    displaySubIngredient (cartona){
    
        let helper = new Helper()
        let meals = helper.displayData(cartona)
        document.querySelector(`#home .row`).innerHTML= meals
    
}
}