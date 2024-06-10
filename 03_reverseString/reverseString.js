const reverseString = function(string) {
    let aux_array = string.split("");
    let output = "";
    
    for(let i = (aux_array.length - 1); i >= 0; i--) {
        output += `${aux_array[i]}`; 
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
