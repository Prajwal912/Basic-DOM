let check = document.querySelector("input").click()

//properties
// ex: innerHTML, style, firstChild
//methods
//ex: click(), appendChild(), setAttribute()


// document.firstElementChild;  --  all the html file
// document.firstElementChild.firstElementChild;  --  goes inside html and find the first ele that is <head />
// document.firstElementChild.lastElementChild;  --  goes inside html and find the last ele that is <body />
// document.firstElementChild.lastElementChild.firstElementChild;  --  goes inside html and find the last ele that is <body /> goes inside and select the h1


// let ul = document.querySelector("ul").lastElementChild;
// ul.innerHTML = "prajwal"; 
// //  --  select the ul last li and change the text to prajwal

// //it only works with the index ele
// let li = document.getElementsByTagName("li")[2].style.backgroundColor = "yellow"
// let li2 = document.getElementsByTagName("li").length
// console.log(li); //returns array of ele
// console.log(li2); 


// //it only works with the index ele
// let className = document.getElementsByClassName("btn")[0];
// className.style.padding = "10px";
// let className2 = document.getElementsByClassName("btn")[1];
// className2.style.padding = "10px";

// let byID = document.getElementById("ul").style.display = "inline-block"

// document.querySelector("li a").style.color = 'white'
// document.querySelector(".btn").style.backgroundColor = 'black';


// //it only selects the first elem
// document.querySelector("#ul li").style.backgroundColor = 'blue'

// //to select the particular ele use the querySelectorAll
// document.querySelectorAll("#ul .list")[1].style.fontSize = '40px'



//classList add, remove and toggle

// document.querySelector(".btn").classList.add("invisible")
// document.querySelector(".btn").classList.remove("invisible")
// document.querySelector(".btn").classList.toggle("invisible")
// document.querySelector(".btn").classList.toggle("invisible")

// document.querySelector("#head").classList.add("huge")


//innerHTML and textContent difference
// //innerhtml can be used with the tags also
// let inner = document.querySelector("#head").innerHTML = "<em>innerhtml</em>"
// console.log(inner)

// //textcontent can only be used to extract the content only
// let content = document.querySelector("#head2").textContent = "<em>textconetent</em>"
// console.log(content)


//setAttribute and getAttribute

//to know which attributes are present on the element
const attr = document.querySelector(".list a").attributes
const attr1 = document.querySelector(".list a").getAttribute("style")
const attr2 = document.querySelector(".list a").setAttribute("href", "https://www.bing.com")
console.log(attr)
console.log(attr1)




