# Algorithms

 1. Matcher.js
  * [match.object(a,b)](#user-content-matchobjectab)
  * [match.array(a,b)](#user-content-matcharrayab)

## Matcher.js (Methods)

### match.array(a,b)
Matching two arrays. Returns true is the first array has the same values as the second array. The ordering is doesn't metter.

```javascript
console.log(match.array([1,2,3,4], [3,2,1,4]));
// => true
console.log(match.array([1,2,3,4], [3,2,1,1]));
// => false
```

### match.object(a,b)
Matching names and values of two objects and return true if matched of false elsewhere. The array also can be matched as a value by using a *match.object(a,b)* function. It works recursively, so the nesting level is doesn't metter.

```javascript
console.log(match.object({a:1}, {a:1})); 
// => true
console.log(match.object({a:1, b:[1,2,3]}, {b:[3,1,2], a:1}));
// => true
console.log(match.object({a:1, b:[1,2,3], c:6}, {b:[3,1,2], a:2}));
// => false
```
