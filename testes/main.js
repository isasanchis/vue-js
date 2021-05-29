function adjacentElementsProduct(inputArray) {
    let productMax = -1000;
    for(let i = 0; i < inputArray.length; i++) {
        let product = inputArray[i] * inputArray[i+1]
        if(product >= productMax) {
            productMax = product
        }
    }
    return productMax;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));