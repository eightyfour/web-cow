function arrange(count, center, radiusFunc) {
  function pointOnCircumference(_angle, _radius, _center) {
    if (!_center)
      _center = {
        x: 0,
        y: 0
      }
    return {
      x: _center.x + _radius * Math.cos(_angle),
      y: _center.y + _radius * Math.sin(_angle)
    }
  }
  const arr = [],
    s = Math.PI / count
  let a = 1.65

  for (let i = 0; i < count; i++) {
    arr.push(pointOnCircumference(a, radiusFunc(), center))
    a += s
  }
  return arr
}

function blossom(node) {
  const children = [].slice.call(node.children),
    length = children.length,
    p = arrange(length, 0, function() {
      return 300
    })
  for (let i = 0; i < length; i++) {
    const child = children[i]
    child.style.top = p[i].x + "px"
    child.style.left = p[i].y + "px"
  }
}

export function show(node) {
  blossom(node)
}

export function hide(node) {
  const children = [].slice.call(node.children)
  children.forEach(child => {
    child.style.top = ""
    child.style.left = ""
  })
}
