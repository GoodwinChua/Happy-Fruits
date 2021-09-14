// Part 1
function addElem(){
    var user = document.getElementById("gen").value;
    var elem = document.createElement(user);
    elem.id=user

    var hr = document.createElement("HR");
    document.getElementById("generate").appendChild(hr);

    if(user == "p"){
        elem.innerHTML = "HELLO! I'M MAGIC PARAGRAPH!"
        document.getElementById("generate").appendChild(elem); 
    }

    else if(user == "h1"){
        elem.innerHTML = "HELLO! I'M MAGIC HEADER!"
        document.getElementById("generate").appendChild(elem); 
    }

    else if(user == "a"){
        elem.innerHTML = "CLICK ME!"
        elem.href = "https://i.pinimg.com/originals/cd/54/15/cd5415bb2b7feeddb2c33677be2fd96f.jpg" 
        elem.target = "_blank";
        document.getElementById("generate").appendChild(elem); 
    }

    else if(user == "img"){
        elem.src = "https://i.pinimg.com/originals/cd/54/15/cd5415bb2b7feeddb2c33677be2fd96f.jpg" 
        elem.alt = "Best girl";
        elem.title = "Best girl";
        document.getElementById("generate").appendChild(elem); 
    }

    else if(user == "iframe"){
        elem.src = "https://www.youtube.com/embed/RjWiNbIIzb8?controls=1&loop=1&autoplay=1";
        elem.setAttribute('allowfullscreen','');
        document.getElementById("generate").appendChild(elem); 
    }

    else if(user == "form"){
        elem.id = "form";
        document.getElementById("generate").appendChild(elem); 

        var label = document.createElement("label");
        label.for = "name";
        label.innerHTML = "Full Name:";
        document.getElementById("form").appendChild(label);

        var br = document.createElement("br");
        document.getElementById("form").appendChild(br);

        var input = document.createElement("input");
        input.type = "text";
        input.name = "name";
        document.getElementById("form").appendChild(input);
    }

    else if(user == "table"){
        elem.id = "table"; 
        elem.setAttribute("border","1");
        document.getElementById("generate").appendChild(elem); 

        var thead = document.createElement("thead");
        thead.id = "thead";
        document.getElementById("table").appendChild(thead);   
        
        var tr0 = document.createElement("tr");
        tr0.id = "tr0";
        document.getElementById("thead").appendChild(tr0);   

        var th1 = document.createElement("th");
        th1.id = "th1";
        th1.innerHTML = "Column 1"
        document.getElementById("tr0").appendChild(th1);

        var th2 = document.createElement("th");
        th2.id = "th2";
        th2.innerHTML = "Column 2"
        document.getElementById("tr0").appendChild(th2);

        var tbody = document.createElement("tbody");
        thead.id = "tbody";
        document.getElementById("table").appendChild(tbody); 

        var tr1 = document.createElement("tr");
        tr1.id = "tr1";
        document.getElementById("tbody").appendChild(tr1); 
        
        var td1 = document.createElement("td");
        td1.id = "td1";
        td1.innerHTML = "Cell 1"
        document.getElementById("tr1").appendChild(td1);

        var td2 = document.createElement("td");
        td2.id = "td2";
        td2.innerHTML = "Cell 2"
        document.getElementById("tr1").appendChild(td2);
    }
}

function removeElem(){
    document.getElementById("generate").remove();
}


// Part 2
function addData(){
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Added Cell 1";
    cell2.innerHTML = "Added Cell 2";
}


// Part 3
function addResto(){
	var select = document.getElementById("restaurants");
	var option = document.createElement("option");
	option.text = "Viking's";
	select.add(option);
}
// Part 3.1
function banResto(){
	var rem = document.getElementById("restaurants");
	rem.remove(rem.selectedIndex);
}


// Part 4
function myMove() {
    var elem = document.getElementById("myAnimation");  
    var cont  = document.getElementById("myContainer") 
    var pos = 0;
    var id = setInterval(frame, 10);
    elem.style.backgroundColor = "white";
    cont.style.backgroundColor = "black";
    function frame() {
      if (pos >= 350) {
        elem.style.backgroundColor = "yellow";
        cont.style.backgroundColor = "green";
        clearInterval(id);
      } else {
        elem.style.top = pos + 'px'; 
        elem.style.left = pos + 'px'; 
      }
      pos++; 
    }
  }
  

// Part 5
function printWait(){
    document.getElementById("printing").innerHTML = "Printing..."
    setTimeout(doone,3000)
  
    function doone(){
      var done = document.getElementById("done").innerHTML = "Done!"
    }
}


// Part 6
function hover() {
    var elem = document.getElementById("events");
    elem.style.color = 'red'
    elem.style.backgroundColor = "blue"
    elem.style.fontSize = "100px"
}
// Part 7
function out() {
    var elem = document.getElementById("events");
    elem.style.color = 'blue'
    elem.style.backgroundColor = "red"
    elem.style.fontSize = "20px"
}


// Part 8
function colLength() {
    var myCollection = document.getElementsByTagName("p");
    document.getElementById("collect_length").innerHTML = "This Page contains: "+myCollection.length+" paragraphs";
}
  
  
// Part 9
var click1=0;
function colStyle(){
    var myCollection = document.getElementsByTagName("p");
    if(click1%2==0){
        for (i = 0; i < myCollection.length; i++) {
        myCollection[i].style.color = "gold";
        }
    } 
    else{
        for (i = 0; i < myCollection.length; i++) {
        myCollection[i].style.color = "purple";
        }
    }
        click1 ++;
}
  
  
// Part 10
function addpara(){
    var para = document.createElement("p");
    var node = document.createTextNode("a PORK CHOP.");
    para.appendChild(node);
    var element = document.getElementById("joke");
    element.appendChild(para);
} 
// Part 10.1
function haha(){
    var para = document.createElement("p");
    var node = document.createTextNode("HAHA.");
    para.appendChild(node);
    var element = document.getElementById("joke");
    element.appendChild(para);
}
  
  
// Part 11
function nlist(){
    var myNodelist = document.querySelectorAll("p");
    var toPrint = "";
    for(var i = 0; i <= myNodelist.length-1; i++){
        toPrint = toPrint+ myNodelist[i].innerHTML;
    }
    document.getElementById("noderepeat").innerHTML = "I said: " + toPrint;
        
}

// Part 12
var click2 = 0
function pizzaz(){
    var i 
    var myNodelist = document.querySelectorAll("p");
    if(click2 % 2==0){
        for (i = 0; i < myNodelist.length; i++) {
            myNodelist[i].style.color = "white";
            myNodelist[i].style.backgroundColor = "transparent"
        }
    } else {
        for (i = 0; i < myNodelist.length; i++) {
        myNodelist[i].style.color = "gold";
        myNodelist[i].style.backgroundColor = "purple"
        }
    }
    click2++
}


// Part 13
document.getElementById("myBtn").addEventListener("click", displayData);
function displayData(){
    var content = document.getElementById("name").value
    if (content != ""){
        document.getElementById("event").innerHTML = content
    }
    else{
        alert("No Inputs! Please Try again!")
    }
}


// Part 14
document.getElementById("multi").addEventListener("click", click);
function click(){
    alert("You just Clicked on me!")
}
// Part 14.1
document.getElementById("multi").addEventListener("mouseover", mouseover);
function mouseover(){
    alert("You just Hovered your mouse over me!")
}
// Part 14.2
document.getElementById("multi").addEventListener("mouseout", mouseout);
function mouseout(){
    alert("You just Removed your mouse over me!")
}


// Part 15
document.getElementById("if").addEventListener("click",function(){document.getElementById("insidefunction").innerHTML = "I am made inside of the event handler function hihi!"});


// Part 16
var add1 = "Add me on Paragraph 1";
var add2 = "Add me on Paragraph 2";
document.getElementById("addall").addEventListener("click",function(){addFunc(add1,add2)});
function addFunc(){
    document.getElementById("add1").innerHTML = add1;
    document.getElementById("add2").innerHTML = add2;
}

