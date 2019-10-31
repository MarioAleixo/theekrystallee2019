//On querySelector() and some class-related methods

//querySelector() returns the first element within a document that matches the specified selector, or group of selectors.
document.querySelector("#container").id = "wrapper";

//Sometimes an element will include more than one class. You can view these as well
document.querySelector(".nav-logo").classList;

//The element “classlist” however is a read only element. So how can we add or remove classes?
.classList.add("class")
//and
.classList.remove("class")

//Toggle classes:
.classList.toggle("nav-logo");

//To check if an element contains a class you use
.classList.contain("new-class");

//This method allows you to replace one class with another
.classList.replace("new-class", "old class");
