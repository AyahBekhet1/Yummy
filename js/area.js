import { Helper } from "./assist.js";
import { subArea } from "./subarea.js";

export class Area {
    constructor (){
        this.getArea()
    }

    async getArea (){
        let data =  new Helper()
        var res=await data.getData('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        console.log(res.meals);
        this.displayAreas(res.meals)
        this.getId()
    }

    displayAreas (data){
        let cartona=``
        
        for (let i = 0; i < data.length; i++) {
            cartona += `
        <div class="col-md-3">
            <div class="m-auto box mt-5 cursor-pointer d-flex flex-column justify-content-between align-items-center text-white" data-id=${data[i].strArea}>
            <i class="fa-solid fa-house-laptop fa-4x"></i>
                
                    <h3>${data[i].strArea}</h3>
            

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
                let sub=new subArea()
                sub.getSubArea(str)
                // let details=new Details()
                // details.getDetails(id)
            })
        })
    }
}