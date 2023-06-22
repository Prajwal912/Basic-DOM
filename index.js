let check = document.querySelector("input").click()

//properties
// ex: innerHTML, style, firstChild
//methods
//ex: click(), appendChild(), setAttribute()


// document.firstElementChild;  --  all the html file
// document.firstElementChild.firstElementChild;  --  goes inside html and find the first ele that is <head />
// document.firstElementChild.lastElementChild;  --  goes inside html and find the last ele that is <body />
// document.firstElementChild.lastElementChild.firstElementChild;  --  goes inside html and find the last ele that is <body /> goes inside and select the h1


let ul = document.querySelector("ul").lastElementChild;
ul.innerHTML = "prajwal"; 
//  --  select the ul last li and change the text to prajwal



