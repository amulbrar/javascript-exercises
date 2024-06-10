const removeFromArray = function(array, ...toBeRemoved) {
    let i = 0;
    for(let h = 0; h < toBeRemoved.length; h++){
        for (i = 0; i < array.length; i++) {
            if (array[i] ===  toBeRemoved[h]) {
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;
    };

// Do not edit below this line
module.exports = removeFromArray;
