let app = new Vue({
  el: '#app',
  data: {
    alert: "This is an alert message",
    projects: [
      {title: "portfolio", desc: "stuff"},
      {title: "twitter clone", desc: "Lorem ipsn"}
    ]
    }
});

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
