//Subset Sum Problem

var twoSum = function(nums, target) {
    
    var result = []
     for (var i = 0; i<nums.length; i++){
        for (var j = 0 + 1; j<nums.length; j++){
            if (nums[i] + nums[j] === target) {
                result.push(i)
                result.push(j)
            }

        
        }
     }
    // return result
    console.log(result)
    
};
twoSum([3,2,4], 6)