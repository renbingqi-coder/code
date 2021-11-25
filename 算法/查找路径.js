// //查找路径
const data = [{
        "id": "1",
        "sub": [{
            "id": "2",
            "sub": [{
                "id": "4",
                "sub": [{
                    "id": "5",
                    "sub": null
                }]
            }, {
                "id": "3",
                "sub": null
            }],
        }],

    },
    {
        "id": "7",
        "sub": [{
            "id": "8",
            "sub": [{
                "id": "9",
                "sub": null
            }]
        }]
    },
    {
        "id": "10",
        "sub": null
    }
]

//     id = "1" => ["1"]
//     id = "9" => ["7", "8", "9"]
//     id = "100"=> []
//     PS: id 全局唯一，无序
//     function getPath (data, id) {}
function getPath(data, id) {
    let res = null;
    let setFather = (data, father = null) => {
        if (data.length === 0)
            return;
        data = data.map(el => {
            if (el.id === id) {
                res = {
                    ...el,
                    father,
                };
            }
            if (el.sub) {
                return {
                    ...el,
                    sub: setFather(el.sub, {
                        ...el,
                        father
                    }),
                    father,
                }
            }
            return {
                ...el,
                father,
            }
        })
        return data;
    }
    setFather(data)
    let result = [];
    while (res) {
        console.log(res);
        result.unshift(res.id)
        res = res.father;
    }
    return result;
}


function getpath(tree, id, path = []) {
    for (const data of tree) {
        path.push(data.id);
        if (data.id === id) return path;  //最终找到时的出口
        if (data.sub) {
            const findChildren = getpath(data.sub, id, path);
            if (findChildren.length) return findChildren;  //找到正确路径时每一层往回反的时候的出口
        }
        path.pop(); //回溯
    }
    return []; //一组数据都不满足所有的条件返回一个空数组  每一层找不到满足数据时返回的数据
}


// console.log(getpath(data, "1"));
console.log(getpath(data, "8"));