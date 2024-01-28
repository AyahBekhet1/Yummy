import { Helper } from "./assist.js"

export class Details {
constructor (){
// this.getDetails()

}


async getDetails(id){
    let data = new Helper()
    console.log(id);
    var res=await data.getData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    this.displayDetails(res.meals)
    console.log(res.meals);
    }


displayDetails (data){
    document.querySelector('#home').style.display='none'
    document.querySelector('#search').style.display='none'
    document.querySelector('#details').style.display='block'
    
    let ings=''
    let measures=''

    let cartona =`
    <div class="col-md-4">
                    <div class="image-container">
                        <div>
                            <img src="${data[0].strMealThumb}" class="w-100 mb-2 rounded-3" alt="${data[0].strMeal}">
                        </div>

                        <h2 class="mb-5">${data[0].strMeal}</h2>
                    </div>
                </div>
                <div class="col-md-8">
                    <h2>Instructions</h2>
                    <p>${data[0].strInstructions}</p>
                    <div class="item-details">
                        <h3>
                            Area:<span>${data[0].strArea}</span>
                        </h3>
                        <h3>
                            Category:<span>${data[0].strCategory}</span>
                        </h3>
                        <h3>
                            Recipes
                        </h3>
                        <ul class=" ingredients list-unstyled d-flex g-3 flex-wrap">
                        </ul>
                        <h3>Tags :</h3>
                        <ul class=" tags list-unstyled d-flex g-3 flex-wrap">
                        </ul>
                        <a href="${data[0].strSource}" target="_blank" class="btn btn-success">Source</a>
                        <a href="${data[0].strYoutube}" target="_blank" class="btn btn-danger">YouTube</a>
                    </div>
                </div>
    `

    document.querySelector('#details .row').innerHTML=cartona
    for (let i = 1; i <= 20; i++) {

        if(data[0][`strIngredient${i}`]){
           let li= document.createElement('li')
             ings =data[0][`strIngredient${i}`];
             measures = data[0][`strMeasure${i}`]
             li.innerText=measures + ' ' +ings ;
             li.classList.add('alert','alert-info', 'm-2', 'p-1')
             document.querySelector('.ingredients').append(li)

        }else{
            break;
        }
        
    }

    if(data[0].strTags){
    let tags=(data[0].strTags).split('').join('')
    let newArr = tags.split(',')

        newArr.map(item =>{
            console.log(item);
            let li = document.createElement('li')
            li.innerText =item
            li.classList.add('alert','alert-danger', 'm-2', 'p-1')
            document.querySelector('.tags').append(li)
        })
    }
    
        
}
 
}