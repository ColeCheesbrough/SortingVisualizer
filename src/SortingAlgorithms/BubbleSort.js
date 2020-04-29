

const bubbleSort = (inArr) => {
    let arr = []
    arr.push(...inArr)
    let sorted = false;
    let animations = []
    let passes = 0
    do {
      sorted = true;
      for (let i = 0; i < arr.length - passes -1; i++) {
        animations.push(['select',i,i+1])
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          sorted = false;
          animations.push(['switch',i,i+1])
        }
        animations.push(['deselect',i,i+1])
      } passes++
    } while (!sorted);
    return animations;
  };
export default bubbleSort