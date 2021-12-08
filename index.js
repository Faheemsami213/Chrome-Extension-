let  myLeads = []
let inputEl = document.getElementById("input-el")
let saveBtn = document.getElementById("save-btn")
let ulEl = document.getElementById("ul-el")
let deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadLocalStorage){
    myLeads = leadLocalStorage
    render(myLeads)
}
function render(leads){
    let textToRender = ""
    for(let i = 0 ;i<leads.length;i++){
        textToRender +=`
        <li> 
            <a target="_blank" href="${leads[i]}">${leads[i]}

            
            </a>
        </li>
        `
    }
    ulEl.innerHTML = textToRender
}
tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

saveBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})


