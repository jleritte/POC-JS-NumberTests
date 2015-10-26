// This function takes an array of numbers and will normalize it between twe given values
function normal(nums,y1,y2) {
    var tmp = [],i;
    if (nums) {
        for(i = 0; i<nums.length; i++) {
            tmp.push(nums[i]);
        }
    } else {
        for (i = 0; i<10; i++){
            tmp.push(Math.round(Math.random() * Date.now()));
        }
    }
    if(tmp.length === 1){
        tmp[0] = 1;
    }
    else{
        var max = Math.max.apply(Math,tmp),
            min = Math.min.apply(Math,tmp),
            m, b;
        m = (y2 - y1) / (max - min);
        b = y2 - max * m;
        for(i = 0;i<tmp.length;i++){
            tmp[i] = m * tmp[i] + b;
        }
    }
    return tmp;
}
var test = [1,2,3,4,5,6,7,8,9,10];
console.log(normal(null,1,10));
console.log(normal(test,1,10));