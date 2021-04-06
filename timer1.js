const args = process.argv.slice(2);

for (let element of args) {
  let delay = element * 1000;
  if (delay >= 0 && typeof delay === 'number') {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay);
  }
}