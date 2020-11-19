const ourForm = document.getElementById('ourForm') 
const ourField = document.getElementById('ourField')
const ourList = document.getElementById('ourList')
ourForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createItem(ourField.value)
})

function createItem(x) {
    let ourHtml = `<li> <input type="checkbox"> ${x} <button onclick= 'deleteItem(this)'>delete</button></li>`
    ourList.insertAdjacentHTML('beforeend', ourHtml)
    ourField.value = ''
    ourField.focus()
}

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove()
}