

const bubbleSort = (inArr) => {
    let arr = []
    arr.push(...inArr)
    let sorted = false;
    let animations = []
    do {
      sorted = true;
      for (let i = 0; i < arr.length - 1; i++) {
        animations.push(['select',i,i+1])
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          sorted = false;
          animations.push(['switch',i,i+1])
        }
        animations.push(['deselect',i,i+1])
      }
    } while (!sorted);
    return animations;
  };
let test = [10,9,8,7,6,5,4,3,2,1]
console.log(bubbleSort(test))
export default bubbleSort