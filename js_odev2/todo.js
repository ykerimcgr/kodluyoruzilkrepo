
const ulDOM = document.querySelector('#list')
const cross = `<span class="close" onclick="deleteItemFromTODO(elem)">&times;</span>`

console.log(ulDOM.innerText.split("\n"))

console.log(ulDOM.textContent.split("\n"));

let todoListItems = ['3 Litre Su İç', 'Ödevleri Yap', 'En Az 3 Saat Kodlama Yap', 'Yemek Yap', '50 Sayfa Kitap Oku' ]

console.log(todoListItems);

if (localStorage.getItem('todo') === null) {
    todoListItems.forEach(element => {
        let liDOM = document.createElement( 'li' )
        liDOM.innerHTML = `${ element } ${ cross }`
        ulDOM.appendChild( liDOM )
        localStorage.setItem( 'todo', JSON.stringify( todoListItems ))
    });
}
else {
    todoListItems = JSON.parse(localStorage.getItem('todo'))
    todoListItems.forEach( element => {
        let liDOM = document.createElement('li');
        liDOM.innerHTML = `${ element } ${ cross }`;
        ulDOM.append(liDOM);
    })
}

const newElement = () => {

    const addBtn = document.querySelector('#task')
    const inputVal = addBtn.value;

    if (inputVal.length <= 0) {
        $('.error').toast('show');
        addBtn.value = "";
    }
    else {
        const liDOM = document.createElement('li')
        liDOM.innerHTML = `${inputVal} ${cross}`
        ulDOM.appendChild(liDOM)
        todoListItems.push(inputVal)
        localStorage.setItem('todo', JSON.stringify(todoListItems))
        $('.success').toast('show');
        addBtn.value = ""
    }
    localStorage.clear()
}


function deleteItemFromTODO( elem ) {
    todoListItems.splice( todoListItems.indexOf( elem ), 1)
    localStorage.setItem( 'todo', JSON.stringify( todoListItems ))
    localStorage.removeItem( elem )
}