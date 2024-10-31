https://leetcode.cn/problems/diameter-of-binary-tree/description/?envType=study-plan-v2&envId=top-100-liked

// 给你一棵二叉树的根节点，返回该树的 直径 。

// 二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。

// 两节点之间路径的 长度 由它们之间边数表示。



// 示例 1：


// 输入：root = [1,2,3,4,5]
// 输出：3
// 解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。
// 示例 2：

// 输入：root = [1,2]
// 输出：1


// 提示：

// 树中节点数目在范围 [1, 104] 内
// -100 <= Node.val <= 100
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let ans = 1

    function dfs(root) {
        if (!root) return 0
        let l = dfs(root.left)
        let r = dfs(root.right)
        ans = Math.max(ans, l + r + 1)
        return Math.max(l, r) + 1
    }
    dfs(root)
    console.log(ans);

    return ans

}