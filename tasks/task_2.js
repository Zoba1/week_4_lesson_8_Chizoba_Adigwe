let url = ' https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/L0mnZpFBRfDXLD0kNPrj/likes'
const zobs ={
    "item_id": "item100"
}

fetch(url, {
    method:'POST',
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify(zobs)
})
.then(response => {
    if(response.status===200){
        task2.innerText = 'Posted successfully'
        task2.style.backgroundColor = 'green'
    }
})
.catch(error => {
    if (error) {
        task2.innerText = 'failed'
        task2.backgroundColor = 'red'
    }
})













