
function palindrom(input) {

  var index = -1;
 input = input.toString()
 
  for (let i = input.length - 1; i >= 0; i--) {
   index++;
   if(input[i]==input[index]){
     return `${input} adalah bilangan palindrom`
   }else{
     return `${input} bukan bilangan palindrom`
     
   }
 }}
 