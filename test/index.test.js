const { add, subtract, multiply } = require('../src/index.js');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
    passed++;
  } else {
    console.error(`  ✗ ${message}`);
    failed++;
  }
}

console.log('Running tests...\n');

console.log('add():');
assert(add(1, 2) === 3, 'should add two positive numbers');
assert(add(-1, 1) === 0, 'should add negative and positive numbers');
assert(add(0, 0) === 0, 'should add zeros');

console.log('\nsubtract():');
assert(subtract(5, 3) === 2, 'should subtract two positive numbers');
assert(subtract(0, 5) === -5, 'should subtract from zero');

console.log('\nmultiply():');
assert(multiply(3, 4) === 12, 'should multiply two positive numbers');
assert(multiply(-2, 3) === -6, 'should multiply negative and positive');
assert(multiply(0, 100) === 0, 'should multiply by zero');

console.log(`\nResults: ${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exit(1);
}
