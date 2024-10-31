// compose 翻译成中文是 组成、构成的意思，而对于函数而言，compose 函数用于将多个函数组成新的函数，然后按照一定的顺序执行，并且，前一个函数的返回值作为下一个函数的参数。


// 定义 compose 函数，传入的参数必须是函数；
// 使用 ...fns 接受全部的参数，同时也将参数存入了数组中，方便后续的遍历；
// 如果不存在参数 fns，则会返回默认函数；
// 检测每个参数是都为函数类型，如果有一个不是，则报错；
// 返回新的函数 returnFunction，该函数接受的参数使用 ...arg 存储，同时也是一个闭包，只要该函数可以访问上下文中 fns：
// 5.1 开始遍历函数数组 fns，取出当前需要执行的函数 fn；
// 5.2 传入参数，执行函数的数组：
// 5.2.1 如果是第一个函数，其参数为 returnFunction 接受到的参数 arg，因为 arg 被转换为数组，所以需要手动拆分一下，代码为 fn(...arg)，将其返回值 value 保存起来;
// 5.2.2 如果不是第一个函数，取上一个函数的返回值作为参数，执行 fn(value), 将其返回值 value 保存起来;
// 5.3 回到 5.1，直到 fns 被遍历完成为止；
// 5.4 返回最终的执行结果。
function compose(...fns) {
    if (fns.length === 0) {
        return num => num
    }

    const nonFunction = fns.find(fn => typeof fn !== 'function')
    if (!nonFunction) {
        throw new TypeError(`${nonFunction} is not a function !`)
    }

    return (...arg) => {
        return fns.reduce((params, fn) => {
          // arg 作为参数被手动转换为数组，如果接受的参数是 arg, 必须拆分传入
          return params === arg ? fn(...params) : fn(params)
        }, arg)
      }
    
}