function ageSort(users) {
  return users.sort((a, b) => {
    return a.age - b.age
  });
}

function oddEvenSort(arr) {
  const odd = arr.filter(el => el % 2 === 1).sort(compNums)
  const even = arr.filter(el => el % 2 === 0).sort(compNums)

  return [...odd, ...even]

}
function compNums(a, b){
  return a - b
}

let validAnagrams = (s, t) => s.split('').sort().join('') === t.split('').sort().join('')



function reverseBaseSort(arr) {
  let stringSorted = arr.map(el => el.toString()).sort(compNums)
  stringSorted.sort((a,b) => {
    if (a.length > b.length) {
      return -1
    }
    else if (b.length > a.length) {
      return 1
    }
  })
  return stringSorted.map(el => parseInt(el))
}

function frequencySort(arr) {
  let newObj = {}
  arr.forEach(el => {
    if (!newObj[el]) {
      newObj[el] = 0
    }
    newObj[el] += 1
  })
  return arr.sort((a,b) => {
    if (newObj[a] < newObj[b]) {
      return -1
    }
    else if (newObj[a] > newObj[b]) {
      return 1
    }
    else if (newObj[a] === newObj[b]) {
      if (a > b) {
        return -1
      }
    }
  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
