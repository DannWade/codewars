// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

function quadrant(x, y) {
    return (x>0)&&(y>0)? 1 : (x>0)&&(y<0)? 4 : (x<0)&&(y<0)? 3 :2
  }