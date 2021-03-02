try {
  console.log(myFirstVariable);
} catch (e) {
  console.log('\x1b[31m', `${e}`);
  // Reference URL on how to set colors in NodeJS console.logs.
  // https://stackoverflow.com/a/41407246/1533666
}
