var rayray = ['elephant', 'lion', 'zebra', 'rino', 'tiger']
  console.log(rayray.length)
  for(i = 0; i < rayray.length; i++) {
    console.log(rayray[i].length)
  }
  console.log(rayray.reverse())

var numb = [3, 65, 200, 44, 52, 2];
numb.sort(function(a, b){return a-b})
  console.log(numb)

  var numb = [3, 65, 200, 44, 52, 2];
  numb.sort(function(a, b){return b-a})
    console.log(numb)

var appendage = ["reggae", "hiphop", "country"]
appendage.push("trap", "rock")
appendage.shift(appendage)
console.log(appendage)
