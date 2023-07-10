var twoSum = function(nums, target) {
   var mapsArray = {}
for(let i = 0; i < nums.length; i++){
    const currentValue = mapsArray[nums[i]]
    if(currentValue >= 0){
        return [currentValue, i ]
    } else {
        let numberToFind = target - nums[i]
        mapsArray[numberToFind] = i
    }
}

return null
};
