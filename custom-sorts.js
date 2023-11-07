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
  console.log(stringSorted)
  let pointer = 0

  while (pointer < stringSorted.length) {
    // Do not move this console.log

    // Find the index of the minimum value in the unsorted half
    let maxIndex = pointer
    for (let i = pointer; i < stringSorted.length; i++) {
      if (stringSorted[maxIndex].length < stringSorted[i].length) {
        maxIndex = i
      }
    }
    //Save the min value
    let maxValue = stringSorted[maxIndex]
    // Shift every unsorted value to the left of the min value to the right by 1
    for (let j = maxIndex; j > pointer; j--) {
      stringSorted[j] = stringSorted[j-1]
    }
    // Put the min value at the divider
    stringSorted[pointer] = maxValue
    // Increment the divider and repeat
    pointer ++
  }
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
