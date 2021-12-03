document.addEventListener("DOMContentLoaded", homeTimeline);
document.addEventListener("DOMContentLoaded", navTabFunc);
/*
This is the functionality for the navigation tabs
*/
function navTabFunc(){
  let navlink1 = document.getElementById("nav-home-tab");
  let navlink2 = document.getElementById("nav-website-tab");
  let navlink3 = document.getElementById("nav-art-tab");
  let navlink4 = document.getElementById("nav-contact-tab");
  let navbar = [navlink1,navlink2,navlink3,navlink4];
  let navcontent1 = document.getElementById("home");
  let navcontent2 = document.getElementById("websites");
  let navcontent3 = document.getElementById("art-projects");
  let navcontent4 = document.getElementById("contact");
  let content = [navcontent1,navcontent2,navcontent3,navcontent4];
  //that arrow do something
  for(let i = 0; i < navbar.length; i++){
    navbar[i].addEventListener("click", () => toggle(navbar[i],content[i]));
  }
}
/*
toggle between tabs on page
*/
 function toggle(tab, content){
   //switches tab
   removeIdentifiers();
   addIdentifiers(tab);
   //switches tab content
   removeTabContentIdentifiers();
   addTabContentIdentifiers(content);
 }
/*
removes styling from the previously selected tab
*/
 function removeIdentifiers(){
    let navlink1 = document.getElementById("nav-home-tab");
    let navlink2 = document.getElementById("nav-website-tab");
    let navlink3 = document.getElementById("nav-art-tab");
    let navlink4 = document.getElementById("nav-contact-tab");
    let navbar = [navlink1,navlink2,navlink3,navlink4];
    for(let i = 0; i < navbar.length; i++){
      navbar[i].classList.remove("active");
      navbar[i].classList.remove("text-white");
      navbar[i].removeAttribute("style");
      navbar[i].ariaSelected = false;
    }
 }
/*
Background is black but bootstrap bg-dark can also be used instead of style
This add styling to the selected tab
*/
 function addIdentifiers(tab){
   let currentTab = tab;
   currentTab.classList.add("active");
   currentTab.classList.add("text-white");
   currentTab.setAttribute("style","background-color: black;");
   currentTab.ariaSelected = true;
 }
/*
helper functions for switching tab content
*/
 function removeTabContentIdentifiers(){
   let navcontent1 = document.getElementById("home");
   let navcontent2 = document.getElementById("websites");
   let navcontent3 = document.getElementById("art-projects");
   let navcontent4 = document.getElementById("contact");
   let content = [navcontent1,navcontent2,navcontent3,navcontent4];
   for(let i = 0; i < content.length; i++){
     content[i].classList.remove("show");
     content[i].classList.remove("active");
   }
 }

 function addTabContentIdentifiers(tab){
   let currentTab = tab;
   currentTab.classList.add("show");
   currentTab.classList.add("active");
 }

/*
This is the timeline for the animations on the home screen
*/
function homeTimeline(){
  var timeline = anime.timeline();
  timeline.add({
      targets: '#profile',
      delay: 1500,
      translateX: "-350%",
      easing: 'easeOutQuad'
    });
    /*
    Element is added to the dom but cannot be seen until placed to proper
    position
    */
    addInvisibleDOM();
    timeline.add({
      targets: "#home-message",
      translateY: "-500%"
    });
    /*
    Once element is in place this function fades in the element
    */
    makeVisibleDOM();
}

function addInvisibleDOM(){

}

function makeVisibleDOM(){

}
/*
function navClick(link){
  /*
  (?:^|\s) # Match the start of the string or any single whitespace character
  (?!\S)   # Negative lookahead to verify the above is the whole classname
         # Ensures there is no non-space character following
         # (i.e. must be the end of the string or space)
         this can be replaced with Jquery or Vue

  if ( document.getElementById("home").className.match(/(?:^|\s)show active(?!\S)/) ){
    document.getElementById("home").className = document.getElementById("home").className.replace
      ( /(?:^|\s)show active(?!\S)/g , '' )
  }
  document.getElementById(link).className += "show active";
}
*/
