

function addGoal(buttonId, InputId, listId){

const btn = document.getElementById(buttonId);
const userInput = document.getElementById(InputId);
const userList = document.getElementById(listId);


    btn.addEventListener('click', function(){


        const goal = userInput.value.trim()
        if(goal){


        const listOfGoals = document.createElement('li')

        const checkBox = document.createElement('input')
        checkBox.className = 'checkbox'
        checkBox.type = 'checkbox'

        const goalText = document.createElement('span')
        goalText.textContent = goal
        goalText.className = 'goal-text';


        const deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>'
        deleteBtn.className = 'remove-btn'
        deleteBtn.onclick = function(){
            userList.removeChild(listOfGoals)
        }

        userInput.value = ''

        listOfGoals.appendChild(checkBox)
        listOfGoals.appendChild(goalText)
        listOfGoals.appendChild(deleteBtn)
        userList.appendChild(listOfGoals)

        checkBox.addEventListener('change', function() {
            if (checkBox.checked) {
                listOfGoals.classList.add('completed');
            } else {
                listOfGoals.classList.remove('completed');
            }
        });
            
    }

})

userInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
       return btn.click()
    }
})


}

addGoal('add-day-goal', 'day-goal-input','day-goals' )
addGoal('add-week-goal', 'week-goal-input', 'week-goals');
addGoal('add-month-goal', 'month-goal-input', 'month-goals');
addGoal('add-long-term', 'long-term-input', 'long-term-goals');