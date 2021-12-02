

function navClick(link){
  /*
  (?:^|\s) # Match the start of the string or any single whitespace character
  (?!\S)   # Negative lookahead to verify the above is the whole classname
         # Ensures there is no non-space character following
         # (i.e. must be the end of the string or space)
         this can be replaced with Jquery or Vue
  */
  if ( document.getElementById("home").className.match(/(?:^|\s)show active(?!\S)/) ){
    document.getElementById("home").className = document.getElementById("home").className.replace
      ( /(?:^|\s)show active(?!\S)/g , '' )
  }
  document.getElementById(link).className += "show active";
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

document.addEventListener("DOMContentLoaded", homeTimeline);
