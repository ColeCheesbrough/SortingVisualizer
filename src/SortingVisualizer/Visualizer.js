import React, { Component } from "react";
import bubbleSort from "../SortingAlgorithms/BubbleSort";
import insertion_Sort from "../SortingAlgorithms/InsertionSort";

class Visualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  bubbleSort() {
    console.log(this.state.array);

    let animations = bubbleSort(this.state.array);
    console.log(this.state.array);

    let bars = document.getElementsByClassName("bar");
    let refArr = this.state.array;
    for (let i = 0; i < animations.length; i++) {
      switch (animations[i][0]) {
        case "select":
          setTimeout(() => {
            bars[animations[i][1]].style.backgroundColor = "red";
            bars[animations[i][2]].style.backgroundColor = "red";
          }, i * 1);

          break;
        case "deselect":
          setTimeout(() => {
            bars[animations[i][1]].style.backgroundColor = "blue";
            bars[animations[i][2]].style.backgroundColor = "blue";
          }, i * 1);
          break;
        case "switch":
          setTimeout(() => {
            let BarOneNewHeight = refArr[animations[i][2]];
            let BarTwoNewHeight = refArr[animations[i][1]];
            refArr[animations[i][1]] = BarOneNewHeight;
            refArr[animations[i][2]] = BarTwoNewHeight;
            //console.log(String(convertForView(BarTwoNewHeight)) +'vh');

            bars[animations[i][2]].style.height =
              String(convertForView(BarTwoNewHeight)) + "vh";
            //console.log(bars[animations[i][2]].style.height);

            bars[animations[i][1]].style.height =
              String(convertForView(BarOneNewHeight)) + "vh";
          }, i * 1);
          break;

        default:
          break;
      }
    }
    //console.log(refArr);
  }
  insertionSort() {
    let animations = insertion_Sort(this.state.array);
    let bars = document.getElementsByClassName("bar");
    let refArr = this.state.array;
    for (let i = 0; i < animations.length; i++) {
      switch (animations[i][0]) {
        case "select":
          setTimeout(() => {
            let selectedBar = bars[animations[i][1]];
            selectedBar.style.backgroundColor = "red";
          }, i * 10);
          break;
        case "stepDown":
          setTimeout(() => {
            let newHeight = bars[animations[i][1]].style.height;
            bars[animations[i][1]].style.height =
              bars[animations[i][1] + 1].style.height;
            bars[animations[i][1] + 1].style.height = newHeight;
            bars[animations[i][1] + 1].style.backgroundColor = "blue";
            bars[animations[i][1]].style.backgroundColor = "red";
          }, i * 10);
          break;
        case "insertComplete":
          setTimeout(() => {
            console.log(animations[i][1]);

            bars[animations[i][1] + 1].style.backgroundColor = "blue";
          }, i * 10);
          break;
        default:
          break;
      }
    }
  }
  generateArray(numberOfBars = 50) {
    let array = [];
    for (let i = 0; i < numberOfBars; i++) {
      array.push(randomInt(3, 450));
    }
    this.setState({ array });
  }
  componentDidMount() {
    this.generateArray();
  }
  render() {
    const array = this.state.array;

    return (
      <div className="app">
        <div className="View">
          {array.map((value, index) => (
            <div
              className="bar"
              key={index}
              style={{
                height: String(convertForView(value)) + "vh",
                width:
                  String(90 / document.getElementById("slider").value) + "vw",
              }}
            ></div>
          ))}
        </div>
        <div className="controls">
          <input
            id="slider"
            type="range"
            max={125}
            min={4}
            step={1}
            onInput={(e) => this.generateArray(e.target.value)}
          ></input>
          <button
            onClick={() =>
              this.generateArray(document.getElementById("slider").value)
            }
          >
            New Array
          </button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          <button onClick={() => this.insertionSort()}>insertionSort</button>
        </div>
      </div>
    );
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const convertForView = (value) => {
  let oldRange = 500;
  let newRange = 90;
  return (value * newRange) / oldRange;
};
export default Visualizer;
