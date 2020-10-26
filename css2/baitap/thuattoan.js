let nums = [1, 1, 2, 3, 3, 4, 5, 5]
let nums2 = [-2,2,4,6,-2,10]

function khongTrungLap(nums) {
    nums.sort()
    for (let index = 0; index < nums.length - 1; index++) {
        if (nums[index] == nums[index + 1]) {
            nums.splice(index, 2)
        }
    }
    console.log(nums)
}

khongTrungLap(nums2)
