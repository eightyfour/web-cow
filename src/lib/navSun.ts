type Point = { x: number; y: number }

function arrange(count: number, center: Point, radiusFunc: () => number): Point[] {
  function pointOnCircumference(_angle: number, _radius: number, _center?: Point): Point {
    if (!_center)
      _center = {
        x: 0,
        y: 0,
      }
    return {
      x: _center.x + _radius * Math.cos(_angle),
      y: _center.y + _radius * Math.sin(_angle),
    }
  }
  const arr: Point[] = []
  const s = Math.PI / count
  let a = 1.65

  for (let i = 0; i < count; i++) {
    arr.push(pointOnCircumference(a, radiusFunc(), center))
    a += s
  }
  return arr
}

function blossom(node: HTMLElement): void {
  const children: HTMLElement[] = Array.from(node.children) as HTMLElement[]
  const length = children.length
  const p = arrange(length, { x: 0, y: 0 }, () => 300)
  for (let i = 0; i < length; i++) {
    const child = children[i]
    const point = p[i]
    if (child && point) {
      child.style.top = point.x + 'px'
      child.style.left = point.y + 'px'
    }
  }
}

export function show(node: HTMLElement): void {
  blossom(node)
}

export function hide(node: HTMLElement): void {
  const children: HTMLElement[] = Array.from(node.children) as HTMLElement[]
  children.forEach((child) => {
    child.style.top = ''
    child.style.left = ''
  })
}
