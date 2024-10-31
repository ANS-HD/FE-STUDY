// 示例 1：
// 输入：S = "havefunonleetcode", K = 5
// 输出：6
// 解释：
// 这里有 6 个满足题意的子串，分别是：
// 'havef','avefu','vefun','efuno','etcod','tcode'。

// 示例 2：
// 输入：S = "home", K = 5
// 输出：0
// 解释：
// 注意：K 可能会大于 S 的长度。在这种情况下，就无法找到任何长度为 K 的子串。

// 提示：
// 1 <= S.length <= 10^4
// S 中的所有字符均为小写英文字母
// 1 <= K <= 10^4


function fun(s, k) {
    let ans = 0
    let l = 0
    if (k > s.length) {
        return 0
    }
    let set = new Set()
    let map = new Map()
    while (l < k) {
        set.add(s[l])
        map.set(s[l], (map.get(s[l]) || 0) + 1)
        l++
    }

    if (map.size === k) {
        ans++
    }

    // if (set.size === k) {
    //     ans++
    // }

    while (l < s.length) {
        if (l >= k) {
            map.set(s[l - k])
            if (map.has(s[l - k])) {
                if (map.get(s[l - k]) <= 1) {
                    map.delete(s[l - k])
                } else {
                    map.set(s[l - k], map.get(s[l - k]) - 1)
                }

            }
            map.set(s[l], (map.get(s[l]) || 0) + 1)
            // set.delete(s[l - k])
            // set.add(s[l])
            // console.log(l, set);
            console.log(map.entries());

            map.size === k && ans++
            // set.size === k && ans++
            // console.log(set);
        }
        l++
    }
    console.log(ans);
    return ans

}

fun('abcabcbbbbbabcabcdeabcdefghijkabcdabcde', 5)