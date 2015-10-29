// This function takes an array of numbers and will normalize it between twe given values
function normal(nums,y1,y2,dp) {
    var tmp = [],i,dem = 1;
    if(nums && nums.length > 0) {
        for(i = 0; i<nums.length; i++) {
            tmp.push(nums[i]);
        }
    } else {
        return -1;
    }
    for(i = 0; i<dp;i++){
        dem *= 10;
    }
    if(tmp.length === 1){
        tmp[0] = y2;
    }
    else{
        var max = Math.max.apply(Math,tmp),
            min = Math.min.apply(Math,tmp),
            m, b;
        m = (y2 - y1) / (max - min);
        b = y2 - max * m;
        for(i = 0;i<tmp.length;i++){
            tmp[i] = Math.round((m * tmp[i] + b)*dem)/dem;
        }
    }
    return tmp.sort(function (a,b) {
        return a - b;
    });
}

// Demos of above function
var test = [1,2,3,4,5,6,7,8,9,10],
    test2 = [],
    test3;

for (i = 0; i<10; i++){
    test2.push(Math.round(Math.random() * Date.now()));
}
console.log("Call with Random numbers seeded with Date.now().");
console.log(normal(test2,1,10,0));
console.log(normal(test2,1,10,1));
console.log(normal(test2,1,10,2));
console.log(normal(test2,1,10,3));

test3 = normal(test2,1,10,3);

console.log("Call with test array [1,2,3,4,5,6,7,8,9,10].");
console.log(normal(test,1,10,2));
console.log("Test to make sure normalization is good.");
console.log(normal(test3,1,10,3));
console.log("Return if bad array");
console.log(normal(null,1,10,2));
console.log(normal([],1,10,2));