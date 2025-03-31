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
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
};

//for insertion for loop and while loop
//the first values is consided as sorted
//and we just need to loop thru the rest of array
//arra = [3,1,4,2]

const insertionSort = (array) => {
  // [3, 1, 4, 2];
  //([1,3,4,2])
  //[1,3,4,2]

  //[1,3,2,4]
  //([1,3,4,2])
  //[1,3,2,4])

  //(([1,3,2,4]))
  //(([1,3,2,4]))
  //{[1,2,3,4]}
  //[1, 2, 3, 4];
  for (let i = 1; i < array.length; i++) {
    //1 lp :
    // i = 1
    //i = 2
    //i = 3
    console.log("i:", i);
    //2 lp
    // i= 1
    //i = 2
    //i = 3

    //3lp
    // i = 1
    //i = 2
    //i = 3
    let currValue = array[i];
    //crrv = ar[1] = 1
    //crrv = arr[2] = 4
    //crrv = arr[3] = 2

    console.log("currv: ", currValue);

    //2lp
    //ccv = arr[1] = 3
    //ccv = arr[2 ]= 4
    //// crv = arr[3] = 4

    //3lp
    // crv = arr[1] = 3
    //crv = arr[2] = 2
    // crv = arr[3] = 4

    let j = i - 1;
    // j = i -1 -> 1-1 = 0
    // j =i -2 -> 2-1 = 1
    // j = i -1 -> 3-1 = 2
    console.log("j", j);

    //2lp
    // j = i-1 -> 1-1 = 0
    // j = i-1 -> 2-1 =1
    //j = i -1 -> 3-1 = 2

    // 3lp
    // j = i -1 -> 1-1 = 0
    //j = i -1 -> 2-1 =1
    //j = i -1  -> j = 3-1  = 2

    while (j >= 0 && array[j] > currValue) {
      //j =0? arr[0] = 3 > 1 ? yes
      // j = 1 arr[1] =3 > 4? no
      //j =2 , arr[2]=4 > 2 ? yes
      //2lp
      // j =0; arr[0] =1 > 3? no
      // j = 1 , ar[1] = 3 > 4 no
      //j =2 , arr[2] = 2 > 4 ? no
      console.log(
        "j in w : ",
        j,
        "array[j] i w : ",
        array[j],
        "crv in w :",
        currValue
      );

      //3lp
      // j = 0 arr[0] =1 > 3 no
      // j = 1 arr[1] = 3 > 2 yes
      //j =2 arr[2] = 3 > 4 no
      array[j + 1] = array[j];
      // arr[0 +1] = arr[j]-> arr[1] = arr[0] ([1,3,4,2])
      // arr[2+1] = arr arr[2]-> arr[3] = arr[2] ([1,3,2,4])
      // arr[1+1] = arr[2] -> arr[2]= arr[1]  {[1,2,3,4]}
      console.log("   array[j + 1] ", array[j + 1], " = array[j]", array[j]);
      j--;
      //j= 0-1 = -1
      // j =  2-1 = 1
      // j = 1-1 = 0
      console("j--", j);
    }

    array[j + 1] = currValue;
    // arr[j + 1] -> arr[1+1]-> arr[2] = 4 ([1,3,4,2])
    // arr[j +2]-> arr[0+1] -> arr[1] = 3  ([1,3,4,2])
    // arr[2+1] -> arr[3] = 4  (([1,3,2,4]))
    //arr[2+1] -> arr[3] = 4 (([1,3,2,4]))
    // arr[j+1] => arr[0+1]-> arr[1] = 3 ([1,3,2,4])
    // arr[j +1] -> arr[2+1] ->arr[3] =4  ([1,2,3,4])
    console.log("array[j + 1] = ", array[j + 1], "cvr ", currValue);
  }
  console.log(array);
  return array;
};

//can also use built-in sort() method
//by call sot() on inputValuesArray

// inputValuesArray.sort((a, b) => {
//   return a - b;
//   //ie: if a-b < 0, a is returned
//   //if a-b>0, b is returned
//   //if a-b =0, eith one is returned as both are equal
// });
sortButton.addEventListener("click", sortInputValues);
