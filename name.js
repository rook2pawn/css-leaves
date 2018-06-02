var name = "David"

function f(name) {
  var fontSize = Math.round((-0.55 * name.length) + (12));
  return Math.round(fontSize)
}


f("David")
f("Ted")
f("Gabby the cat")
f("KingMaker")
