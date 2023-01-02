var div=document.createElement("div");

div.style.textAlign="center";

var input=document.createElement("input");

input.setAttribute("type","text");

input.setAttribute("id","kural");
input.setAttribute("placeholder","Enter the no. of the Kural");


var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML=`<i class="fa fa-search fa-5px"</i>`;
button.addEventListener("click",foo);


let section = document.createElement("div");
section.setAttribute("id","section");


let chapter = document.createElement("div");
chapter.setAttribute("id","chapter");


let chap = document.createElement("div");
chap.setAttribute("id","chap");
let line1 = document.createElement("div");
line1.setAttribute("id","line1");


let line2 = document.createElement("div")
line2.setAttribute("id","line2");


let exp = document.createElement("div");
exp.setAttribute("id","exp");


let eng = document.createElement("div");
eng.setAttribute("id","eng");


let chapgroup = document.createElement("div");
chapgroup.setAttribute("id","chapgroup");


let chapeng = document.createElement("div");
chapeng.setAttribute("id","chapeng");


let english = document.createElement("div");
english.setAttribute("id","english");


let engexp = document.createElement("div");
engexp.setAttribute("id","engexp")


div.append(input,button,section,chapter,chap,line1,line2,exp,eng,chapgroup,chapeng,english,engexp);
document.body.append(div);


async function foo(){ var number =document.getElementById("kural").value;
 var url=`https://api-thirukkural.vercel.app/api?num=${number}`;
  var result=await fetch(url);
   let result1=await result.json(); 
   console.log(result1);



    section.innerHTML=`<b><u>Section-Tamil</u></b>: ${result1.sect_tam}` 

	chapter.innerHTML=`<b><u>ChapGroup-Tamil</u></b>: ${result1.chapgrp_tam}` 

	chap.innerHTML=`<b><u>Chapter-Tamil</u></b>: ${result1.chap_tam}` 

	line1.innerHTML=`<b><u>Line 1</u></b>: ${result1.line1}` 

	line2.innerHTML=`<b><u>Line 2</u></b>: ${result1.line2}` 

	exp.innerHTML=`<b><u>Explanation-Tamil</u></b>: ${result1.tam_exp}`

	 eng.innerHTML=`<b><u>Section-English</u></b>: ${result1.sect_eng}`

	 chapgroup.innerHTML=`<b><u>ChapGroup-English</u></b>: ${result1.chapgrp_eng}`

	  chapeng.innerHTML=`<b><u>Chapter-English</u></b>: ${result1.chap_eng}` 

	 english.innerHTML=`<b><u>English</u></b>: ${result1.eng}`
	 
	  engexp.innerHTML=`<b><u>Explanation-English</u></b>: ${result1.eng_exp}`
}