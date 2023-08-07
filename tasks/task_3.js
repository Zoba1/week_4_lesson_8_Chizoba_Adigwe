let url = 'https://www.themealdb.com/api/json/v1/1/categories.php'

let catArray = [];
let currentPage = 1;
let itemsPerPage = 3;

let previousPage = document.querySelector('.previous')
let nextPage = document.querySelector('.next')

async function fetchApi() {
    const response = await fetch(url)
    const data = await response.json()
    catArray= data.categories
}


async function displayItems() {
    await fetchApi()


    let startingIndex =(currentPage - 1) * itemsPerPage
    let endingIndex = startingIndex + itemsPerPage
    
    let itemToDisplay= catArray.slice(startingIndex,endingIndex)



    let cont = document.querySelector('.container')
    cont.innerHTML= ''

    itemToDisplay.forEach(item=>{
        let num = document.createElement('p')

        let img = document.createElement('img')
        let imgName= document.createElement('h3')
        let discription = document.createElement('p')

        num.innerText= item.idCategory
        imgName.textContent = item.strCategory
        img.src = item.strCategoryThumb
        discription.innerText = item.strCategoryDescription

        cont.appendChild(num)
        cont.appendChild(img)
        cont.appendChild(imgName)
        cont.appendChild(discription)
        
    })
    displayNull()
}

displayItems()

previousPage.addEventListener('click', () =>{
    currentPage--
    displayItems()
})

nextPage.addEventListener('click', () =>{
    currentPage++
    displayItems()
})


function displayNull() {
    if (currentPage === 1) {

        previousPage.style.display = 'none'
    }
    else{
        previousPage.style.display = 'initial'

    };

    let lastPage = Math.ceil( catArray.length /itemsPerPage )

    if(currentPage === lastPage) {
        nextPage.style.display = 'none';
        
    }else{
        nextPage.style.display = 'initial'
    }
}
