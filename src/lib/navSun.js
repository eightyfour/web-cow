const pos = {
    1 : [p(-10,0)],
    2 : [p(0,-10),p(0, + 10)],
    3 : [p(-10,0),p(7, 7),p(7, -7)],
    4 : [p(-7, -7),p(-7, + 7),p(7, + 7),p(7, -7)],
    5 : [p(-1, -9),p(-10, 0),p(-1, 9),p(8, 6),p(8, -6)],
    6 : [p(-1, -9),p(-10, 0),p(-1, 9),p(8, 6),p(8, -6)]
};

function p(top, left) {
    return {top:top, left:left};
}

function arrange(count, center, radiusFunc){
    function pointOnCircumference(_angle, _radius, _center) {
        if(!_center) _center = { 'x' : 0, 'y' : 0 };
        return {
            'x' : _center.x + _radius * Math.cos(_angle),
            'y' : _center.y + _radius * Math.sin(_angle)
        };
    }
    const arr = [],
        s = (Math.PI) / count;
    let a = 1.65;

    for(let i = 0; i < count; i++){
        arr.push(pointOnCircumference(a, radiusFunc() , center));
        a += s;
    }
    return arr;
}

function blossom(node) {
    const off = 10,
        children = [].slice.call(node.children),
        length = children.length,
        p = arrange(length, 0, function () {return 300;});
    for (let i = 0; i < length; i++) {
        const child = children[i];
        child.style.top = p[i].x + 'px';
        child.style.left = p[i].y + 'px';
    }
}

export function show (node) {
    blossom(node);
}

export function reset (node) {
    const children = [].slice.call(node.children);
    children.forEach((child) => {
        child.style.top = '';
        child.style.left = '';
    })
}