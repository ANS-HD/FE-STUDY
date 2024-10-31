// 给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。

// 请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。

// 任何误差小于 10-5 的答案都将被视为正确答案。



// 示例 1：

// 输入：nums = [1,12,-5,-6,50,3], k = 4
// 输出：12.75
// 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
// 示例 2：

// 输入：nums = [5], k = 1
// 输出：5.00000



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    // let l = 0, r = 0, max = 0
    // const res = []
    // while (r < k) {
    //     res.push(nums[r])
    //     r++
    // }
    // max = res.reduce((a, b) => a + b, 0) / k
    // while (r < nums.length) {
    //     res.shift()
    //     res.push(nums[r])
    //     r++
    //     max = Math.max(max, (res.reduce((a, b) => a + b, 0) / k))
    // }
    // console.log(max);
    // return max
    let res = 0
    let max = 0
    for (let i = 0; i < k; i++) {
        res += nums[i]
    }
    max = res
    for (let i = k; i < nums.length; i++) {
        res = res + nums[i] - nums[i - k]
        // console.log(cur, max, res);
        max = Math.max(res, max)



    }
    console.log(max / k);

    return max / k

};

findMaxAverage([4, 2, 1, 3, 3], 2)