function countVowel(string){
    const count = string.match(/[aeiou]/gi).length;
    return count;
 }
 function nrVocale(){
   const string = prompt('Introduceti un string: ');
 const result = countVowel(string);
 console.log(result);
 alert(result);
 }