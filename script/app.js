let doneTask = 0;
let totalTask = document.querySelectorAll("button").length;

let remainingTask = totalTask

let clearHistoryButton = document.getElementById("clear"); 


let bgChangeButton = document.getElementById("bg-change");
bgChangeButton.addEventListener("click", function(){
    const randomColor = getRandomColor()
    console.log(randomColor)
   document.body.style.backgroundColor = randomColor;
})


function getRandomColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

document.getElementById("blog-page").addEventListener("click", function(){
    window.location.href = "blog.html";
})

function completeTask(taskId, button) {
  let title = document.getElementById(taskId).innerText;
  
   

  alert(`Board updated successfully`);
  button.disabled = true;
  button.classList.add("bg-gray-400");

  doneTask++;
  remainingTask--;


  document.getElementById("completed-task").innerText = remainingTask - 1; 
  document.getElementById("task-count").innerText = 0 + doneTask; 



  const mainHistory = document.querySelector("#history");
  let history = document.createElement('p')
  history.classList.add("text-start", "text-sm", "mt-4", "bg-[#f4f7ff]","p-2", "rounded-md");

  history.innerText = `You have completed the task ${title} at ${getCurrentTime()}`

    mainHistory.appendChild(history)

    if(remainingTask - 1 === 0){
        alert('congrates!! You have completed all the current task')
    }
}

clearHistoryButton.addEventListener("click", function(){
    const mainHistory = document.querySelector("#history");
    mainHistory.innerHTML = ""
})


const week = document.getElementById("week");
const dateMonth = document.getElementById("date-month");

function dateTime(){
    const date = new Date();

    const weeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const weekAll = weeks[date.getDay()]

    const calender = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    }
    const dates = date.toLocaleDateString('en-US', calender)

    week.innerText = weekAll
    dateMonth.innerText = dates
}

   function getCurrentTime() {
     const now = new Date();

     
     let hours = now.getHours();
     let minutes = now.getMinutes();
     let seconds = now.getSeconds();
     const ampm = hours >= 12 ? "PM" : "AM";

     hours = hours % 12;
     hours = hours ? hours : 12; 
     minutes = minutes < 10 ? "0" + minutes : minutes;
     seconds = seconds < 10 ? "0" + seconds : seconds;

     const time = `${hours}:${minutes}:${seconds} ${ampm}`;
     
     return time
   }


dateTime();

