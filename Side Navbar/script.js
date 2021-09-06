//everything that need to change
const togglebtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closebtn = document.querySelector('.close-btn');

//adding function
togglebtn.addEventListener("click", function(){
  sidebar.classList.toggle("show-sidebar");
});

closebtn.addEventListener("click", function(){
  sidebar.classList.remove("show-sidebar");
});

