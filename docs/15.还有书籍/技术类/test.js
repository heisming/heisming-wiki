let proxied = {};
let p = new Proxy(proxied, {
  get(target, property) {
    console.log(`${property} getter is called`);
    return property in target ? target[property] : 3;
  },
  set(target, property, value) {
    console.log(`${property} setter is called`);
    target[property] = value;
  }
});
p.name = 'test';
console.log(p.name);