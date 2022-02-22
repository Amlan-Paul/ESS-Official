var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {

document.querySelector(".preloader").style.display = "none"; 

  document.getElementById("myDiv").style.display = "block";

}

