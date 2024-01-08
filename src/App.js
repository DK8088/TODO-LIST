import './App.css';


function App() {

let task,content,li,span;

  function addtask(){

   task=document.getElementById('input').value;
   content=document.querySelector('ul')
  
  if(task===''){alert("write something ! ! ! ! !")}

  else{

    li=document.createElement('li');
    li.innerHTML=task;
    content.appendChild(li)
    
    span=document.createElement("span");
    span.innerHTML="X";
    li.appendChild(span);
    
    localStorage.setItem("data",content.innerHTML)
  }  
  document.getElementById('input').value=''
  content.addEventListener("click",(e)=>{
    if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove()
      localStorage.setItem("data",content.innerHTML)}
    else if(e.target.tagName === "LI"){
      e.target.className="strike"
      localStorage.setItem("data",content.innerHTML)}
   },false)

   

      
}



function showmenu(){
     document.getElementById("menu").style="display:block;"
     document.querySelector("main").addEventListener("click",(e)=>{
      if(e.target.tagName === "MAIN"){
         document.getElementById("menu").style="display:none;"
      }
     })

     document.querySelector("header").addEventListener("click",()=>{
      document.getElementById("menu").style="display:none;"
     })
}



function show(){document.querySelector('ul').innerHTML = localStorage.getItem("data")}

setTimeout(show,1000)
  return (
   <>
{/****************************************       HEADER    **********************************************/}
   <header>
            <h1>ToDo List</h1>
            <div id='m-btn'>
                  <button className='menu-btn' onClick={()=>{showmenu()}}></button>
                  <button className='menu-btn' id='menu-btn' onClick={()=>{showmenu()}}></button>
                  <button className='menu-btn' onClick={()=>{showmenu()}}></button>
            </div>
            
            <span  id='menu' className='menu-box'>
               <ol>
               <li><a href="https://github.com/DK8088/TODO-LIST" target='blank'>source code</a></li>
                  <li><a href="https://github.com/DK8088/TODO-LISTc" target='blank'>source code</a></li>
                  <li className='menu-item'><a href='mailto:dk88git@gmail.com'>FeedBack</a>
                  </li>
               </ol>
            </span>
   </header>

{/*****************************************      MAIN      **********************************************/}



   <main>
          <div id='input-area'>
               <input id='input' placeholder='Add events here . . . ' type='text' autoComplete='off'/>         
               <button id='add-btn' onClick={()=>{addtask()}} >+</button>
          </div>
           

           
            
           <div className='content'>

              <ul className='content-list'>
                  
              </ul>

           </div>

   </main>

   
   
   </>
  );
}

export default App;
