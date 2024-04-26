import SortedSet from 'collections/sorted-set.js';

const map = new SortedSet([], equalUtil, compareUtil);
let val1 = "abc";
let val2 = "bcd";
let val3 = "efg";

map.add({key: "efg", value: [1, 2, 3]});
map.add({key: "abc"});
map.add({key: "bcd"});
map.add({key: "bdd"});
map.add({key: "bed"});
map.add({key: "aba"});
map.add({key: "abb"});
map.add({key: "bad"});
map.add({key: "aca"});
map.add({key: "aaaa"});
map.add({key: "acbasd"});
map.add({key: "abdefg"});

function equalUtil(obj1, obj2) {
    if (typeof obj1 === "string") {
        return obj1 === obj2.key;
    }
    return obj1.key === obj2.key;
}

function compareUtil(obj1, obj2) {
    if (typeof obj1 === "string") {
        if (obj1 > obj2.key) {
            return 1;
        } else if (obj1 < obj2.key) {
            return -1;
        }
    }

    if (obj1.key > obj2.key) {
        return 1;
    } else if (obj1.key < obj2.key) {
        return -1;
    }
}

console.log(map.get("efg").value.push(4));
const i = map.indexOf(map.findLeastGreaterThan("a").value);
const k = map.indexOf(map.findGreatestLessThan("b").value);
let search = map.iterate(i, k - 1);
console.log(search.set.toObject());
console.log(map.toObject());
console.log(map.indexOf("abc"));