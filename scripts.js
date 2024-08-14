const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const allList = document.querySelector('.list-task')

let myItemList = []




function addNewTask() {
    if (input.value.trim() === '') {
        alert("Por favor, insira uma tarefa antes de adicionar!");
        return; // Retorna para evitar adicionar uma tarefa vazia à lista
    }
    myItemList.push({
        task: input.value,
        concluida: false

    })
    input.value = ''
    showTask()
}



function showTask() {
    let newLi = ''

    myItemList.forEach((item, index) => {

        newLi = newLi + `

            <li class = "task ${item.concluida && "done"}">
                <img src="img/checked.png" alt="check-na-tarefa" onclick = "checkItem(${index})">
                <p>${item.task}</p>
                <img src="./img/trash.png" alt="tarefa-para-lixo" onclick="deletItem(${index})">
            </li>
        `
    })

    allList.innerHTML = newLi
    localStorage.setItem('lista', JSON.stringify(myItemList))
}

function checkItem(index) {
    myItemList[index].concluida = !myItemList[index].concluida
    showTask();
}

function deletItem(index) {
    myItemList.splice(index, 1)
    showTask();
}



function reloadTask() {

    const taskLocalStorage = localStorage.getItem('list')

    if(taskLocalStorage){
        myItemList = JSON.parse(taskLocalStorage)

    }
    showTask()
}

reloadTask()
button.addEventListener('click', addNewTask)