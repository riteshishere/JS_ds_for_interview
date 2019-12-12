// Write a JavaScript program to test if a string end with "Script"
function end_script(str) {
    if (str.substring(str.length - 6, str.length) == 'Script') 
    {
      return true;
    } 
    else 
    {
      return false;
    }
  }
/*
console.log(end_script('JavaScript'));
true
console.log(end_script('Java Script'));
true
console.log(end_script('Java Scripts'));
false
console.log(end_script('JavaScripts'));
false
console.log(end_script('JavaScript script'));
false
*/