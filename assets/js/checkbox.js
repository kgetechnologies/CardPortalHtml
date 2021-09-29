var last;
document.addEventListener('input',(e)=>{
var closest=e.target.closest("*[data-name='check']");
if(e.target.closest("*[data-name]")){
if(last)
last.checked=false;
}
if(e.target!==last)
last=e.target;
else
last=undefined;
})
