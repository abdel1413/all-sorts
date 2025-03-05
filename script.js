const sortButton = document.getElementById("sort");
const data = document.getElementsByClassName("values-dropdown");

const sortInputValues = (event) => {
  event.preventDefault();
  const inputValuesArray = [...data].map((val) => Number(val.value));

  //const valuesToSort = value;
  const bSortedValues = bubbleSort(inputValuesArray);
  const selectionSortedValues = selectionSort(inputValuesArray);
  updateUI(bSortedValues);
  updateUI(selectionSortedValues);
};

const updateUI = (array = []) => {
  array.forEach((value, i) => {
    let bublSortOutputs = document.getElementById(`output-value-${i}`);
    bublSortOutputs.innerText = value;
    let selectSortOutputs = document.getElementById(`output-value-select-${i}`);
    selectSortOutputs.innerText = value;
  });
};

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
};

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      console.log(array, array[j], array[minIndex]);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
      console.log("min", minIndex);
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
};

//for insertion for loop and while loop
//the first values is consided as sorted
//and we just need to loop thru the rest of array
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let currValue = array[i];
    let j = i + 1;
    while (j >= 0 && array[j] > currValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currValue;
  }
  return array;
};
sortButton.addEventListener("click", sortInputValues);
