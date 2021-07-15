const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow card'],
]);

let events = [...gameEvents.values()];
events = new Set(events);
events = [...events];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const averageTime = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${averageTime} minutes`);

for (const [time, event] of gameEvents.entries()) {
  const half = time > 45 ? 'SECOND' : 'FIRST';
  console.log(`[${half} HALF] ${time}: ${event}`);
}
