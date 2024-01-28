import { Helper } from "./assist.js";
import { SubCategory } from "./subCategory.js";

export class Category{
    constructor (){
        this.getCategory()
    }

    async getCategory (){
        let data = new Helper()
        var res=await data.getData('https://www.themealdb.com/api/json/v1/1/categories.php')
        console.log(res.categories);
        this.displayCategories(res.categories)
        this.getId()
        
    } 


    displayCategories (data) {
       
        
        let cartona=``
        
        for (let i = 0; i < data.length; i++) {
            cartona += `
            <div class="col-md-3">
            <div class=" box position-relative rounded-3" data-id=${data[i].strCategory}>
                <img src="${data[i].strCategoryThumb}" alt="${data[i].strCategory}" class=" w-100">
                <div class="layer d-flex flex-column">

                    <h3>${data[i].strCategory}</h3>
                    <p>${extractPar(data[i].strCategoryDescription)}</p>
                </div>

            </div>
        </div>
            `
          
        }

        function extractPar (para){
            let words= para.split(/\s+/)
            console.log(words);
            let first20words= words.slice(0,20)
            let res =first20words.join(' ')
            return res
        }
        
       document.querySelector('#home .row').innerHTML=cartona

    }




    getId (){
        document.querySelectorAll('.box').forEach((item)=>{
            item.addEventListener('click',()=>{
                let str=item.getAttribute("data-id")
                console.log(str);
                let sub=new SubCategory()
                sub.getSubCategory(str)
                // let details=new Details()
                // details.getDetails(id)
            })
        })
    }
    
}