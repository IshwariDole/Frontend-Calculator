var expr=document.querySelector("#expression")
var action=document.querySelectorAll('.calculator .buttons .action button')
action.forEach((button) => {
    button.addEventListener('click',function(){
        let previousValue=expr.value
        previousValue=previousValue+button.value
        expr.value=previousValue
    })
});

var number=document.querySelectorAll('.calculator .buttons .number button')
number.forEach((button)=>{
    button.addEventListener('click',function(){
        let previousValue=expr.value
        previousValue=previousValue+button.value
        expr.value=previousValue
    })
})

function calculate(){
    let expression=expr.value
    let result=eval(expression)
    expr.value=result.toString()
}

function clearText(){
    expr.value=" "
}