let input = prompt("Nhap vao day so: ");
let nums = input.split(',').map(function (item) {
    return Number(item)
})

let x = Number(prompt("Nhap vao so x: "))

for (let index = 0; index < nums.length - 1; index++) {
    for (let index2 = index + 1; index2 < nums.length; index2++) {
        if (nums[index] + nums[index2] == x){
            console.log(`(${index}, ${index2})`)
        } 
   }
}