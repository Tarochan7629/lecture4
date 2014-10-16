var randomSFCPyramid = function(n){
  var message = "";
  var counter = 0;
  
  while(counter < n){
    message = message + "SFC";
    counter = counter + 1;
    
  }
  return message;
};

var output;

output = nSFC(1);
console.log(output);

output = nSFC(2);
console.log(output);

output = nSFC(3);
console.log(output);

output = nSFC(4);
console.log(output);

var createNumber = function(n){
   var tmp = Math.random() * n;
   var result = Math.floor(tmp);
   return result;
   };
   
   createNumber(100);