function addPara(){
  // making the mother's womb or the vars
  var inputElemnt=document.getElementsByClassName('fst');
  //creating the kids
  var pElement= document.createElement('p');
  // now pElement has become a kid of his mother inputElement
  inputElement.appendChild(pElement);
// time to create text node of what is written inputElement
var textNode = document.createTextNode(inputElement);
// time to create grandson of inputElement
pElement.appendChild(textNode);
// now time to return 
document.write(textNode);
}
