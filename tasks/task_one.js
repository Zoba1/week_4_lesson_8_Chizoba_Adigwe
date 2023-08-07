const name = document.getElementById('task')

// Write something
let url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
function getApi(){
    fetch(url)
    .then((response)=>{
        if (response.ok) {
            task.innerText = 'Successful AJAX request'
            task.style.backgroundColor ='purple'
            
        }
        else{
            task.innerText = 'request failed'
            task.style.backgroundColor = 'red'
        }
    })
    .catch((error)=>{
        task.innerText = 'Request Failed, check internet connectivity'
        task.innerText.backgroundColor = 'red'
    })
}

