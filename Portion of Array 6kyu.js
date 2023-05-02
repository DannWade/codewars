function portion(a,i,n){
    return a[Math.abs(i)] === undefined || a[Math.abs(n)] === undefined ? -1 : a.slice((i*-1 === Math.abs(i) ? -n-1 : i), ( i*-1 === Math.abs(i) ? i : n+1)) || -1
}