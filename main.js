const submitform=document.getElementById("input-form")
const overly=document.getElementById("overly")
const open_input_form_btn=document.getElementById("open-task-input")
const close_input_form_btn=document.getElementById("close_submit_form_btn")
const close_input_form_btn2=document.getElementById("close-form-btn")
const submit_btn=document.getElementById("submit-form-btn")
const task_title=document.getElementById("task-title")
const msg=document.getElementById("msg")
const sucsess_msg=document.getElementById("sucsess-msg")
const user_input_text=document.getElementById("user-input-text")
const task_date=document.getElementById("date-choose")
const ul_task=document.getElementById("task-list")

// const alltasks=localStorage.getItem("tasks")?localStorage.getItem("tasks",JSON.parse(data)):[]
// localStorage.removeItem("tasks")

function opensubmitform() {
        open_input_form_btn.addEventListener("click",(e=>{
       e.preventDefault()
        submitform.classList.add("active")
        overly.classList.add("active")
    }))

   

   
    let closeform=()=>{
    overly.addEventListener("click",(e=>{
        e.preventDefault()
        submitform.classList.remove("active")
        overly.classList.remove("active")
    }))
    close_input_form_btn.addEventListener("click",(e=>{
        e.preventDefault()
        submitform.classList.remove("active")
        overly.classList.remove("active")

    }))

        
    close_input_form_btn2.addEventListener("click",(e=>{
        e.preventDefault()
        submitform.classList.remove("active")
        overly.classList.remove("active")
    }))
}
closeform()}

opensubmitform()








// showing the date function

function show_date(){
    let date_show=new Date()
    date_show=date_show.toString().split(" ")
  const date=document.getElementById("showdate")
    console.log(date_show)
  date.innerHTML=date_show[0]+" "+date_show[1]+" "+date_show[2]+" "+date_show[3]
}
show_date()


// form validation and submitiing the form 

let submitformf=function submitformf() {
    setTimeout(() => {

   submitform.classList.remove("active")
    overly.classList.remove("active")

      }, "1000");

}


submitform.addEventListener("submit",(e=>{
    e.preventDefault()
   formvalidation()

 }))

function formvalidation() {
    if (task_title.value==="") {
        msg.innerHTML="Title Can Not Be Blank"

    } else {
        submitformf()
        taking_user_data() 

localStorage.setItem("tasks",JSON.stringify(data))
        creattask()
       sucsess_msg.classList.add("active")
        resetform()
        edit_form()

console.log(data)

 }


}
// taking data from user and creating a task



data={}

// localStorage.setItem("tasks",JSON.stringify(data))
let taking_user_data= function () {
console.log(task_title.value)
  data={
    date:task_date.value,
    taskTitle:task_title.value,
    task:user_input_text.value
}

    creattask()
}

let creattask= function () {
    let newtask=document.createElement("li")
    newtask.classList.add("flex-col","text-xl","font-serif","font-medium", "text-ellipsis","relative","border","w-[100%]","h-[240px]","p-3")
    let newtask_markup=`

    <span class=" text-2xl font-serif" id="task-number"> <p class="">${data.taskTitle}:</p></span>
    <span class="" id="date"><small>${data.date}</small></span>
   <p class="text-red-800 mt-3 font-serif" id="task-text">${data.task}</p>

  <span class="absolute start-0 bottom-0 ml-5 " >
    <button class:"edit-btn ">
    <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/30/create-new.png" alt="create-new"/>
   </button>
  </span>
    <span  class="absolute end-0 bottom-0 mr-5 text-lg font-bold" >
        <button onClick="delet_form(this)" >
            <img width="45" height="45" src="https://img.icons8.com/quill/50/filled-trash.png" alt="filled-trash"/>
        </button>
    </span>

 
    `
    newtask.innerHTML=newtask_markup
    ul_task.appendChild(newtask)
}

// delet form function
let delet_form=(e=>{
e.parentElement.parentElement.remove()


})

    



let resetform=function resetform() {
    
    setTimeout(() => {

        msg.innerHTML=""
        sucsess_msg.classList.remove("active")
        task_date.value=""
        task_title.value=""
        user_input_text.value=""

      }, "2000");

}

let edit_form=(e=>{
    const edit_btn=document.querySelectorAll(".edit-btn")
    console.log(edit_btn)
    edit_btn.forEach((i=>{
        i.addEventListener("click",(e=>{
            e.preventDefault()
             submitform.classList.add("active")
        overly.classList.add("active")
        }))
        
    }))
 
   
})











