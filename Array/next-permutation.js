/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = (nums) => {
    let i = nums.length - 2;
    while(i>=0 && nums[i] >= nums[i+1]) i-=1;
    if(i>=0)    {
        let j = nums.length - 1;
        while(nums[j] <= nums[i])   j-=1;
        swap(nums,i,j);
    }
    reverse(nums,i+1,nums.length-1);
};

const swap = (nums,i,j) => {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}

const reverse = (nums,i,j) => {
    while(i < j)    {
        swap(nums,i,j);
        i+=1;
        j-=1;
    }
}
