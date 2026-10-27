// scratch

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function debounce(fn, ms) {
  let t;
  return (...a) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...a), ms);
  };
}
