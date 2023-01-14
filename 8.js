let myMap = new Map();
myMap.set(1, 'Cisco');
myMap.set('String', 'text amassiv');
myMap.set(true,'Hello')

for (let key of myMap.keys()) {
    key++;
}
for (let vallues of myMap.values()){ 
    vallues++;
}
console.log('Ключ —' + key + ', значение — ' + vallues);