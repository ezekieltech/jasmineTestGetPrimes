function getPrimes (n) {
    
 /*
  Input: an integer n > 1.
 
 Let A be an array of Boolean values, indexed by integers 2 to n,
 initially all set to true.
 
 for i = 2, 3, 4, ..., not exceeding √n:
   if A[i] is true:
     for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n:
       A[j] := false.
 
 Output: all i such that A[i] is true.
 */
  //take care of edge cases
    var output = [];
    if (n==1){return output;}
    if (n<=0){return console.log('Your input should be a positive number');}

 // An array of boolean values
 
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

}