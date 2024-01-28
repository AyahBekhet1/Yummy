import { Helper } from "./assist.js";
import { Details } from "./details.js";

export class subArea{
    constructor(){}

    async getSubArea (subarea){
        let apiRess =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${subarea}`)
        console.log(apiRess);
        let res =await apiRess.json();
        this.displayArea(res.meals)
        let details =new Details()
        
        let data =new Helper()
        let showDetails = data.showDetails()
    }

    displayArea (cartona){

            let helper = new Helper()
            let meals = helper.displayData(cartona)
            document.querySelector(`#home .row`).innerHTML= meals
        
    }
}