const submitform=document.getElementById("input-form")
const overly=document.getElementById("overly")
const open_input_form_btn=document.getElementById("open-task-input")
const close_input_form_btn=document.getElementById("close_submit_form_btn")
console.log(close_input_form_btn)
const close_input_form_btn2=document.getElementById("close-form-btn")
const submit_btn=document.getElementById("submit-form-btn")
const task_title=document.getElementById("task-title")
const msg=document.getElementById("msg")
const sucsess_msg=document.getElementById("sucsess-msg")
const user_input_text=document.getElementById("user-input-text")
const task_date=document.getElementById("date-choose")
const ul_task=document.getElementById("task-list")
let alltask_count=document.getElementById("alltask")
let complated_count=document.getElementById("complated")
let remaining_count=document.getElementById("remaining")

let all_tasks=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]

    if (localStorage.getItem) {
    all_tasks.map((x=>{
        creattask(x)
       
    }))
}


     




// opening submit form function
function opensubmitform() {
    open_input_form_btn.addEventListener("click",(e=>{
   e.preventDefault()
    submitform.classList.add("active")
    overly.classList.add("active")
    if (close_input_form_btn.classList.contains("hidden")||close_input_form_btn2.classList.contains("hidden")) {
close_input_form_btn.classList.remove("hidden")
close_input_form_btn2.classList.remove("hidden")
    }
}))




let closeform=()=>{
overly.addEventListener("click",(e=>{
    e.preventDefault()
    submitform.classList.remove("active")
    overly.classList.remove("active")
   
    resetform()
}))
close_input_form_btn.addEventListener("click",(e=>{
    e.preventDefault()
    submitform.classList.remove("active")
    overly.classList.remove("active")
resetform()
}))

    
close_input_form_btn2.addEventListener("click",(e=>{
    e.preventDefault()
    submitform.classList.remove("active")
    overly.classList.remove("active")
    
    resetform()
}))
}
closeform()}
opensubmitform()





// showing date function
function show_date(){
    let date_show=new Date()
    date_show=date_show.toString().split(" ")
  const date=document.getElementById("showdate")
   
  date.innerHTML=date_show[0]+" "+date_show[1]+" "+date_show[2]+" "+date_show[3]
}
show_date()

// CLOSE FORM 1S AFTER SUBMITIN A LIST

let submitformf=function submitformf() {
    setTimeout(() => {

   submitform.classList.remove("active")
    overly.classList.remove("active")

      }, "1000");

}

// TAKE DATA AND SUBMIT NEW LIST

submit_btn.addEventListener("click",(e)=>{
   e.preventDefault()
   creat()
   })
    function creat() {
    if (task_title.value==="") {
        msg.innerHTML="Title Can Not Be Blank"
        setTimeout((e=>{
            msg.innerHTML=""
        }),"2000")
        return
    }

   const newtask={
        id:new Date().getTime(),
        title:task_title.value,
        date:task_date.value,
        description:user_input_text.value,
        iscompleted:false,
    }    
    all_tasks.push(newtask)
    localStorage.setItem("tasks",JSON.stringify(all_tasks))
creattask(newtask)
    resetform()
 }


// CREAT TASK FUNCTION

function creattask(x) {
   console.log(x)
        let newli=document.createElement("li")
        newli.setAttribute("id",x.id)
        newli.className="flex-col text-xl border-red-100 rounded-md font-serif font-medium  text-ellipsis relative w-[100%] h-[380px] bg-gray-500 p-3  mt-2 shadow-inner"
      
        let newli_markup=`
    
        <span class="">
           
        <input type="checkbox" class="check-btn p-3 w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        ${x.iscompleted ? "checked"  :""}
         ${x.iscompleted?newli.classList.add("opacity"):newli.classList.remove("opacity")} 
         >
        <label for="purple-checkbox" class=" text-sm font-medium w-full dark:text-gray-300"></label>
    </span>
       


        <span class="  text-2xl font-serif w-1/2"  > <p class="title font-serif ">${x.title}</p></span>

        <span class="break-normal break-words" ><small>${x.date}</small></span>


       <p class="text-red-800 mt-3 font-serif w-full border-t break-normal break-words" >${x.description}</p>
    
      <span class="absolute start-0 bottom-0 ml-5  ${x.iscompleted?"hidden":""}  "
     >
        <button class="edit" title:edit>
        <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/30/create-new.png" alt="create-new"/>
       </button>
      </span>
        <span  class="absolute end-0 bottom-0 mr-5 text-lg font-bold" >
            <button class="remove" >
                <img width="45" height="45" src="https://img.icons8.com/quill/50/filled-trash.png" alt="filled-trash"/>
            </button>
        </span>

        `
    
        newli.innerHTML=newli_markup
        ul_task.appendChild(newli)
        sucsess_msg.classList.add("active")
  
    activate_editbtn()
   activate_delet_btn()
  count()
       resetform()
      
} 

// RESET THE FORM FUNCTION

function resetform() {
    
    setTimeout(() => {

        msg.innerHTML=""
        sucsess_msg.classList.remove("active")
        task_date.value=""
        task_title.value=""
        user_input_text.value=""
        submitform.classList.remove("active")
        overly.classList.remove("active")
        submit_btn.innerHTML="ADD"
      }, "1000");

}






// edit functions

function activate_editbtn() {
    let edit_btn=document.querySelectorAll(".edit")
let form_title=document.querySelectorAll(".title")

    
    edit_btn.forEach((ed,i)=>{
   
        ed.addEventListener("click",(i)=>{ 
            i.preventDefault()
            let selectedtask=ed.parentElement.parentElement
           let taskid=ed.parentElement.parentElement.id
            submitform.classList.add("active")
            overly.classList.add("active")
         close_input_form_btn.classList.add("hidden")
         close_input_form_btn2.classList.add("hidden")
         removeEventListener("click",overly)
            task_title.value=selectedtask.children[1].children[0].innerHTML
            task_date.value=selectedtask.children[2].children[0].innerHTML
            user_input_text.value=selectedtask.children[3].innerHTML
            submit_btn.innerHTML="save"

delet_item(taskid,selectedtask)

        })

    })

}




// DELET FUNCTIONS

function activate_delet_btn(){
    let delet_btn=document.querySelectorAll(".remove")
    
delet_btn.forEach((dl,i)=>{
    dl.addEventListener("click",(e)=>{
        e.preventDefault()
        let taskid=dl.parentElement.parentElement.id
let selectedtaskd=dl.parentElement.parentElement

        delet_item(taskid,selectedtaskd)
    
       
    })

})


}

function delet_item(taskid,selectedtaskd) {

console.log(taskid)
all_tasks=all_tasks.filter((list)=>{
    console.log(list)
 return list.id!=taskid
 


 })

localStorage.setItem("tasks",JSON.stringify(all_tasks))
selectedtaskd.remove()
count()

}



ul_task.addEventListener("input",(e=>{
    const taskid=e.target.closest("li").id
    update_task(taskid,e.target)



}))
function update_task(taskid,el) {
  
    
    const task=all_tasks.find((task)=>task.id===parseInt(taskid))
let btnedit=el.parentElement.parentElement.children[4]

  console.log(btnedit)
    const parent=el.closest("li")

   
  
    task.iscompleted = !task.iscompleted
    if (task.iscompleted) {
      btnedit.classList.add("hidden")
        parent.classList.add("complate")
       parent.classList.add("opacity")
    }else{
        parent.classList.remove("opacity")
        parent.classList.remove("complate")
        btnedit.classList.remove("hidden")
    }
    localStorage.setItem("tasks",JSON.stringify(all_tasks))
    count()

        }

function count() {
alltask_count.innerText=all_tasks.length
let complated=all_tasks.filter((i)=>{
    if (i.iscompleted) {
        return i
    }
})
complated_count.innerText=complated.length
remaining_count.innerText=all_tasks.length-complated.length
}

count()






















