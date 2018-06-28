var input=document.getElementById("userinput");
var button=document.getElementById("enter");
var ul=document.querySelector("ul");
var listItems=document.getElementsByTagName("li");
var body = document.querySelector('body');


function inputLength(){
	return input.value.length;
}


function createListElement(){
var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";

		var btn = document.createElement("button");
     	btn.appendChild(document.createTextNode("Delete!"));
 		li.appendChild(btn);
 		btn.onclick = removeParent;
}


function addListAfterClick(){
    if (inputLength()>0){
    	createListElement();

    }
}


function addListAfterKeypress(event){
	  if (inputLength()>0 && event.keyCode===13){
	  	createListElement();
			  console.log(event);
	  }
}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);

function targeting(){
	var target=event.target;
	console.log(event);
	target.classList.toggle("done");
}
body.addEventListener('click',targeting);
// ul.onclick=function(event){
// 	var target=event.target;
// 	console.log(target);
// 	console.log(event);
// 	target.classList.toggle("done");
// }

function listLength(){
	return listItems.length;
}

function deleteButton(){
	var btn=document.createElement("button");
btn.appendChild(document.createTextNode("Delete!"));
listItems[i].appendChild(btn);
btn.onclick=removeParent;
}

for( i=0;i<listLength();i++){

deleteButton();
}

function removeParent(evt){
	evt.target.parentNode.remove();
}
