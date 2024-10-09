var table = +prompt("which table are looking for ?");
if(table >= 1 &&  table <=10){
document.write("<div class ='table'><h1>Table of  " + table + "</h1>");
for (var i = 1; i <= 10; i++) {
  document.write("<div class ='tablebox'>"+ table + "×" + i + " = " + (table * i) + "<br> </div>");
};
document.write("</div");
}
else{
    alert("Invalid input ! Please enter a Number Between 1 to 10");
};
