// https://zhaopin.sankuai.com/video-interview/interviewer?roomid=223039337&interviewid=2737759077&isRetry=1&a.0=1&a.1=2&d.b.c=3

// {

//  roomid: 223039337,

//  a:  [1, 2],

//  d: {b: {c: 3}}

// }

function analyze(url) {
    let params = url.split('?')[1]?.split('&')
    let result = {}
    params.forEach((item, index) => {
        let current = result
        const label = item.split('=')[0]
        let value = decodeURIComponent(item.split('=')[1])
        value = isNaN(value) ? value : Number(value)

        if (!label.includes('.')) {
            result[label] = value
        } else {
            const keys = label.split('.')
            keys.forEach((key, index) => {
                if (!isNaN(key)) {
                    // 如果 key 是数字，将其作为数组索引
                    if (!Array.isArray(current)) {
                        current = [];
                    }
                    // 如果是最后一个元素，将值赋给数组
                    if (index === keys.length - 1) {
                        current[key] = value;
                    } else {
                        // 如果还不是最后一个元素，继续嵌套
                        if (!current[key]) {
                            current[key] = {};
                        }
                        current = current[key];
                    }
                } else {
                    if (index === keys.length - 1) {
                        current[key] = value;
                    } else {
                        if (!current[key]) {
                            current[key] = isNaN(keys[index + 1]) ? {} : [];
                        }
                        current = current[key];
                    }
                }
            })
        }
    })

    // });
    console.log(result);



}

analyze('https://zhaopin.sankuai.com/video-interview/interviewer?roomid=223039337&interviewid=2737759077&isRetry=1&a.0=1&a.1=2&d.b.c=3')