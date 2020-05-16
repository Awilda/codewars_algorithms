function descendingOrder(n){
  const newN = Array.from(n.toString());
  newN.sort(function(a, b) {
    return b - a;
  });
  return parseInt((newN.join("")));
}