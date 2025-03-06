const sortButton = document.getElementById("sort");
const data = document.getElementsByClassName("values-dropdown");
const selectSortElement = document.getElementById("seletion-sort");
const insertionSortElement = document.getElementById("insertion-sort");
console.log("sel", selectSortElement, "ins", insertionSortElement);
const sortInputValues = (event) => {
  event.preventDefault();
  const inputValuesArray = [...data].map((val) => Number(val.value));

  //const valuesToSort = value;
  const bSortedValues = bubbleSort(inputValuesArray);
  const selectionSortedValues = selectionSort(inputValuesArray);
  const insersionSortValues = insertionSort(inputValuesArray);
  updateUI(bSortedValues);
  updateUI(selectionSortedValues);

  updateUI(insersionSortValues);
};

const updateUI = (array = []) => {
  array.forEach((value, i) => {
    let bublSortOutputs = document.getElementById(`output-value-${i}`);
    bublSortOutputs.innerText = value;

    let selectSortOutputs = document.getElementById(`output-value-select-${i}`);

    let insertSortOutputs = document.getElementById(`output-value-insert-${i}`);
    setTimeout(() => {
      selectSortElement.innerText = "Select sort is coming";
    }, 2500);

    setTimeout(() => {
      selectSortElement.innerText = "Selection sort Ouputs:";
    }, 3500);
    setTimeout(() => {
      selectSortOutputs.innerText = value;
    }, 4500);

    setTimeout(() => {
      insertionSortElement.innerText = "insertion sort is coming now";
    }, 5500);
    setTimeout(() => {
      insertionSortElement.innerText = "Insertion Sort Ouputs:";
    }, 7000);
    setTimeout(() => {
      insertSortOutputs.innerText = value;
    }, 7500);
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
    let j = i - 1;
    while (j >= 0 && array[j] > currValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currValue;
  }
  return array;
};
sortButton.addEventListener("click", sortInputValues);
