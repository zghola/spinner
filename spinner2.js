const spinner = '|/-\\|/'
let delay = 100;
for (const symbol of spinner) {
setTimeout(() => {
    process.stdout.write(spinner);
  }, delay);
  delay += 100
}
  
 /* setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, 700);
  
  // ... fill in the rest yourself ...
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r|  '); 
  }, 900);


  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r/  '); 
  }, 1200);*/

