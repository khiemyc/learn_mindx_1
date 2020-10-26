// let nums = [1, 1, 2, 3, 3, 4, 5, 5]
// let nums2 = [-2,2,4,6,-2,10]

// function khongTrungLap(nums) {
//     nums.sort()
//     for (let index = 0; index < nums.length - 1; index++) {
//         if (nums[index] == nums[index + 1]) {
//             nums.splice(index, 2)
//         }
//     }
//     console.log(nums)
// }

// khongTrungLap(nums2)

let check = {

};

let array = [1,2,1,1,4,3,4,5,3,2]

for (let indelx = 0; indelx < array.length; indelx++) {
   if(!check[array[indelx]]){
       check[array[indelx]] = 1;
   }else{
       check[array[indelx]]++;
   } 
}

console.log(check)

for (const key in check) {
    // console.log(check[key])
    if(check[key] === 1){
        console.log(key)
    }
}