/* Task 1 */
var heading =document.getElementById('heading')
console.log(heading.innerText)

/* Task 2 using plain JavaScript */
function addText2(){
    var task2div = document.getElementById('task2a')
    var paragraph =document.createElement('p')
    paragraph.innerText ="Hello World"
    task2div.appendChild(paragraph)
}
 var textBtn =document.getElementById('textBtn2a')
  textBtn2a.addEventListener('click',addText2)



/* Task 4 using jQuery */
//Task2(B)
function changeBGcolor(event){
    var body=document.getElementsByTagName('body')[0]
    if(event.target.innerText=="Red"){
        body.style.backgroundColor='red'
    }
    if(event.target.innerText=="Green"){
        body.style.backgroundColor='green'
        
    }
}
//Task 2(C)
function redirectToGoogle(){
    window.location.assign(www.google.com)
}
$('addText4').click(function(event){
    var paragraph = $('<p>').text("Hello World");
    $('#task4a').append(paragraph);
});
//Task 4b
function changeBG(event){
    var color=event.target.innerText.toLowerCase();
    $('body').css('background-color',color);
}
//Task 4c
$('#sum').click(function(event){
    var sum=Number($('#num1').val())+Number($('#num2').val())
    $('#answer').text(sum)
})