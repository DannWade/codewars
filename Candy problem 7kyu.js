// "It's the end of trick-or-treating and we have a list/array representing how much candy each child in our group has made out with. We don't want the kids to start arguing, and using our parental intuition we know trouble is brewing as many of the children in the group have received different amounts of candy from each home.

// So we want each child to have the same amount of candies, only we can't exactly take any candy away from the kids, that would be even worse. Instead we decide to give each child extra candy until they all have the same amount.

function candies(kids){
    return kids.length < 2 ? -1 : kids.reduce((acc,x)=>acc+= (Math.max(...kids)- x),0)
  }