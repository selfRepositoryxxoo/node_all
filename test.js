
'use strict';
const tree = {
    a: ['b', 'c'],
    b: ['e'],
    e: ['f']
};
const keys = {};
for (let k in tree) {
    keys[k] = true;
    for (let ck of tree[k]) {
        keys[ck] = true;
    }
}
console.log(keys)
const getNode = id => keys[id] ? {
    id,
    children: tree[id] || []
} : null;
const getTree = id => ({
    id,
    children: getNode(id).children.map(getTree)
})
console.log(getTree('a'));
//const getNodeAsync
//const getTreeAsync
const getNodeAsync = async (id)=>{
    keys[id]
}