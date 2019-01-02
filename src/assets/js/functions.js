function filter(input, amount) {
  return input
    .filter((item, index) => index >= input.length - amount)
    .reverse();
}

function urlize(input) {
  return input
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[^-a-z0-9A-Z_]/g, "");
}

export { filter, urlize };
