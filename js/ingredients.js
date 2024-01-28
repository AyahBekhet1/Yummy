import { Helper } from "./assist.js";
import { subIngredient } from "./subIngredients.js";
export class Ingredients{
    constructor(){
        this.getIngredient()
    }

    async getIngredient (){
        let data =  new Helper()
        var res=await data.getData('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        console.log(res.meals);
        this.displayIngredients(res.meals)
        this.getId()
    }

    displayIngredients (data){
        let cartona=``
        
        for (let i = 0; i < 20; i++) {
            console.log((data[i].strIngredient).split(' ').join('_').toLowerCase());
            cartona += `
        <div class="col-md-3">
            <div class="m-auto box mt-5 cursor-pointer d-flex flex-column justify-content-between align-items-center text-white" data-id=${(data[i].strIngredient).split(' ').join('_')}>
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <h3>${(data[i].strIngredient)}</h3>
                    <p class='text-center'>${(data[i].strDescription).split(/\s+/).slice(0,20).join(' ')}</p>
            </div>
        </div>
            `  
        }
        document.querySelector('#home .row').innerHTML=cartona

    }

    getId (){
        document.querySelectorAll('.box').forEach((item)=>{
            item.addEventListener('click',()=>{
                let str=item.getAttribute("data-id")
                console.log(str);
                let sub=new subIngredient()
                sub.getSubIngredient(str)
                // let details=new Details()
                // details.getDetails(id)
            })
        })
    }
}