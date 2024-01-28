import { Details } from "./details.js";
export class Helper {
    constructor (){
        // this.details = new Details()
    }

    async getData (url){
        $('#loading').fadeOut(1000)
        let apiRes =await fetch(url)
        let res =await apiRes.json();
        return  res;
    }

   
     displayData (data) {
        
        let cartona=``
        
        for (let i = 0; i < data.length; i++) {
            cartona += `
            <div class="col-md-3">
            <div class="meal box position-relative rounded-3" data-id=${data[i].idMeal}>
                <img src="${data[i].strMealThumb}" alt="${data[i].strMeal}" class=" w-100">
                <div class="layer">
                    <h3>${data[i].strMeal}</h3>
                </div>

            </div>
        </div>
            `
          
        }
        
       return cartona

    }

    showDetails (){
        document.querySelectorAll('.meal').forEach((item)=>{
            item.addEventListener('click',()=>{
                let id=item.getAttribute("data-id")
                let details=new Details()
                details.getDetails(id)
            })
        })
    }
    
    
}