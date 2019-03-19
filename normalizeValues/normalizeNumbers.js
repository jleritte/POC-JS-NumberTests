// This function takes an array of numbers and will normalize it between twe given values
function normal(nums = [],y1,y2,dp = 0) {
    let dem = 10 ** dp,
        max = Math.max.apply(Math,nums),
        min = Math.min.apply(Math,nums), 
        m = (y2 - y1) / (max - min),
        b = y2 - max * m

    // if(!nums || nums.length === 0) {
    //     return -1
    // }
    // if(nums.length === 1){
    //     return [y2]
    // }
    // else{
    //     return nums.map(num => Math.round((m * num + b) * dem) / dem).sort((a,b) => a - b)
    // }
    return (!nums || nums.length === 0) ? -1
            : nums.length === 1 ? [y2]
            : nums.map(num => Math.round((m * num + b) * dem) / dem).sort((a,b) => a - b)
}

// Demos of above function
var test = [1,2,3,4,5,6,7,8,9,10],
    test2 = [],
    test3

while(test2.length < 10){
    test2.push(Math.round(Math.random() * Date.now()))
}
console.log("Call with Random numbers seeded with Date.now().")
console.log(normal(test2,1,10))
console.log(normal(test2,1,10,1))
console.log(normal(test2,1,10,2))
console.log(normal(test2,1,10,3))

test3 = normal(test2,1,10,3)

console.log("Call with test array [1,2,3,4,5,6,7,8,9,10].")
console.log(normal(test,1,10,2))
console.log("Test to make sure normalization is good.")
console.log(normal(test3,1,10,3))
console.log("Test single element")
console.log(normal([4],1,10))
console.log("Return if bad array")
console.log(normal(null,1,10,2))
console.log(normal([],1,10,2))
