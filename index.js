let elCount=document.getElementById('el-count')
let elEntries=document.getElementById('el-entries')
let count=0
function increment(){
    count+=1
    elCount.textContent=count
}
function save(){
    elEntries.textContent+=count+' - '
}
function limpiar(){
    count=0
    elCount.textContent=count
}