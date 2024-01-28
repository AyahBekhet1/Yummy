import { Helper } from "./assist.js";
import { Details } from "./details.js";

export class SubCategory{
    constructor (){
    }

    async getSubCategory (subCat){
        let data = new Helper()
        var res=await data.getData(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${subCat}`)
        this.displaySubCategory(res.meals)
        let details =new Details()
        let showDetails = data.showDetails()

             
    }

    displaySubCategory (cartona){
    
            let helper = new Helper()
            let meals = helper.displayData(cartona)
            document.querySelector(`#home .row`).innerHTML= meals
        
    }

    // getId (){
    //     document.querySelectorAll('.box').forEach((item)=>{
    //         item.addEventListener('click',()=>{
    //             let str=item.getAttribute("data-id")
    //             console.log(str);
    //             let sub=new SubCategory()
    //             sub.getSubCategory(str)
    //             let details=new Details()
    //             details.getDetails(id)
    //         })
    //     })
    // }
}