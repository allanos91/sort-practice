function ageSort(users) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].age > users[i+1].age) {
      [users[i], users[i+1]] = [users[i+1], users[i]]
      return users
    }
  }
}

function oddEvenSort(arr) {
  const odd = arr.filter(el => {
    el % 2 !== 0
  })
  arr.sort(compare)

}
function compare(a, b) {
  return a - b
}
function validAnagrams(s, t) {
  // Your code here
}

function reverseBaseSort(arr) {
  console.log(arr.sort())
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
