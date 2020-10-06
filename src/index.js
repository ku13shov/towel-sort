
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    let newArr = [];
    
    if (Array.isArray(matrix) && matrix.length) {
        for (let i = 0; i < matrix.length; i++) {
            if ((i == 0) || (i % 2 === 0)) {
                arr.push(matrix[i]);
            } else if (i % 2 !== 0) {
                arr.push(matrix[i].reverse()); 
            }  
        }
        
        for ( let i of arr) {
            for (let j of i) {
              newArr.push(j);
            }
          }
        return newArr;
    } else {
        return [];
    }
    
}
