// 1461. 检查一个字符串是否包含所有长度为 K 的二进制子串
// 中等
// 相关标签
// 相关企业
// 提示
// 给你一个二进制字符串 s 和一个整数 k 。如果所有长度为 k 的二进制字符串都是 s 的子串，请返回 true ，否则请返回 false 。



// 示例 1：

// 输入：s = "00110110", k = 2
// 输出：true
// 解释：长度为 2 的二进制串包括 "00"，"01"，"10" 和 "11"。它们分别是 s 中下标为 0，1，3，2 开始的长度为 2 的子串。
// 示例 2：

// 输入：s = "0110", k = 1
// 输出：true
// 解释：长度为 1 的二进制串包括 "0" 和 "1"，显然它们都是 s 的子串。
// 示例 3：

// 输入：s = "0110", k = 2
// 输出：false
// 解释：长度为 2 的二进制串 "00" 没有出现在 s 中。


/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
    let p = 0
    let set = new Set()
    let max = 1 << k
    for (let i = 0; i <= s.length - k; i++) {
        let cur = s.substring(i, i + k)
        let num = parseInt(cur, 2)
        console.log(num);
        
        if (!set.has(num)) {
            set.add(num)
        }

    }
    console.log(max === set.size);

};

hasAllCodes("00110", 2)