const insertion_Sort = (arr) => {
  let animations = []
  for (let i = 1; i < arr.length; i++) {
    animations.push(['select',i])
    let j = i - 1
    let temp = arr[i]
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      animations.push(['stepDown',j])
      j--
      console.log(arr);
    }
    animations.push(['insertComplete',j])
    arr[j+1] = temp
    console.log(2,arr);
    
  }

  return animations
}
export default insertion_Sort
console.log(insertion_Sort([3, 0, 2, 5, -1, 4, 1]));
//console.log(insertion_Sort([2,6,5,12,-1,3,8,7,1,-4,0,23,1,-55,20,37,54,210,-23,7,483,9339,29,-3,90,-2,81,54,7372,-92,93,93,18,-43,21]));

