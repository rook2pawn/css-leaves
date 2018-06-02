var nanostate = require('nanostate')

var machine = nanostate('green', {
  green: { timer: 'yellow' },
  yellow: { timer: 'red' },
  red: { timer: 'green' }
})

machine.on("green", () => {
  console.log("KERMIT!!");
})
machine.event('powerOutage', nanostate('flashingRed', {
  flashingRed: { powerRestored: 'green' }
}))

machine.emit('timer')
console.log(machine.state)
// => 'yellow'

machine.emit('powerOutage')
console.log(machine.state)
// => 'flashingRed'

machine.emit('powerRestored')
console.log(machine.state)
// => 'green'

machine.emit('timer');
console.log("final timer:", machine.state)
