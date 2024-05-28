function TwoSum(nums, target){
    let hash = {}
    for(i=0; i<=nums.length; i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = true
        }
    }
    for(i=0; i<=nums.length; i++){
        let numberFind = target - nums[i]
        if(hash[numberFind]){
            return [nums[i], numberFind]
        }
    }
}
let values= TwoSum([2,3,4,5,0],9)
console.log(values)