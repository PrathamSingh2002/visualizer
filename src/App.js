import './App.css';
import './bar'
import tl from "./tl.png"
import Bar from './bar';
import Sidebar from './Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import play from './play.png'
import res from './reset.png'
import React, { useState, useEffect } from 'react';

function App() {
  const name = {
    1: 'Bubble Sort',
    2: 'Insertion Sort',
    3: 'Selection Sort',
    4: 'Quick Sort',
    5: 'Merge Sort',
    6: 'Radix Sort',
  }
  const [side, togg] = useState(false)
  const [arr, setArr] = useState([])
  const [algo, setAlgo] = useState(1)
  const [l, setL] = useState(50)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    reset()
  }, [l])

  function toggle() {
    togg(!side)
    const el = document.getElementById('sbar')
    if (side) {
      el.style.translate = "100%"
    } else {
      el.style.translate = "-100%"
    }
  }

  function hide() {
    if (!side) {
      togg(true)
      const el = document.getElementById('sbar')
      el.style.translate = "-100%"
    }
  }

  function reset() {
    if (running) return;
    const newArr = Array.from({ length: l }, () => Math.floor(Math.random() * 100))
    setArr(newArr)
  }

  function resetcolor() {
    const el = document.getElementsByClassName('bar')
    for (let i = 0; i < l; i++) {
      el[i].style.backgroundColor = 'red'
    }
  }

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  async function st() {
    if (running) return;
    setRunning(true)
    switch (algo) {
      case 1:
        await bubbleSort()
        break
      case 2:
        await insertionSort()
        break
      case 3:
        await selectionSort()
        break
      case 4:
        await quickSort()
        break
      case 5:
        await mergeSort()
        break
      case 6:
        await radixSort()
        break
      default:
        console.log('Invalid algorithm')
    }
    setRunning(false)
    resetcolor()
  }

  async function bubbleSort() {
    let newArr = [...arr];
    for (let i = 0; i < l; i++) {
      for (let j = 0; j < l - 1 - i; j++) {
        if (newArr[j] > newArr[j + 1]) {
          [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
          setArr([...newArr]);
          await sleep(10);
        }
      }
    }
  }

  async function insertionSort() {
    let newArr = [...arr];
    for (let i = 1; i < l; i++) {
      let key = newArr[i];
      let j = i - 1;
      while (j >= 0 && newArr[j] > key) {
        newArr[j + 1] = newArr[j];
        j = j - 1;
        setArr([...newArr]);
        await sleep(10);
      }
      newArr[j + 1] = key;
      setArr([...newArr]);
      await sleep(10);
    }
  }

  async function selectionSort() {
    let newArr = [...arr];
    for (let i = 0; i < l; i++) {
      let minIdx = i;
      for (let j = i + 1; j < l; j++) {
        if (newArr[j] < newArr[minIdx]) {
          minIdx = j;
        }
      }
      [newArr[i], newArr[minIdx]] = [newArr[minIdx], newArr[i]];
      setArr([...newArr]);
      await sleep(10);
    }
  }

  async function quickSort() {
    let newArr = [...arr];
    await quickSortHelper(newArr, 0, l - 1);
  }

  async function quickSortHelper(arr, low, high) {
    if (low < high) {
      let pi = await partition(arr, low, high);
      await quickSortHelper(arr, low, pi - 1);
      await quickSortHelper(arr, pi + 1, high);
    }
  }

  async function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArr([...arr]);
        await sleep(10);
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArr([...arr]);
    await sleep(10);
    return i + 1;
  }

  async function mergeSort() {
    let newArr = [...arr];
    await mergeSortHelper(newArr, 0, l - 1);
  }

  async function mergeSortHelper(arr, left, right) {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
      await mergeSortHelper(arr, left, mid);
      await mergeSortHelper(arr, mid + 1, right);
      await merge(arr, left, mid, right);
    }
  }

  async function merge(arr, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;
    const L = new Array(n1);
    const R = new Array(n2);

    for (let i = 0; i < n1; i++) L[i] = arr[left + i];
    for (let j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

    let i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
      setArr([...arr]);
      await sleep(10);
    }

    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
      setArr([...arr]);
      await sleep(10);
    }

    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
      setArr([...arr]);
      await sleep(10);
    }
  }

  async function radixSort() {
    let newArr = [...arr];
    const max = Math.max(...newArr);
    
    // Get the number of digits in the largest number
    const maxDigits = Math.floor(Math.log10(max)) + 1;
  
    for (let digit = 0; digit < maxDigits; digit++) {
      await countingSort(newArr, digit);
    }
  }
  
  async function countingSort(arr, digit) {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(10).fill(0);
  
    // Store count of occurrences in count[]
    for (let i = 0; i < n; i++) {
      const index = Math.floor(arr[i] / Math.pow(10, digit)) % 10;
      count[index]++;
    }
  
    // Change count[i] so that count[i] now contains actual
    // position of this digit in output[]
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }
  
    // Build the output array
    for (let i = n - 1; i >= 0; i--) {
      const index = Math.floor(arr[i] / Math.pow(10, digit)) % 10;
      output[count[index] - 1] = arr[i];
      count[index]--;
    }
  
    // Copy the output array to arr[], so that arr[] now
    // contains sorted numbers according to current digit
    for (let i = 0; i < n; i++) {
      arr[i] = output[i];
      setArr([...arr]);
      await sleep(10);
    }
  }

  return (
    <div className='full' onClick={() => { hide() }}>
      <div className='topbar'>
        <div id='logo'>Sorting Visualizer</div>
        <div className='button' onClick={() => { toggle() }}>
          <img src={tl} className='icon' alt="Toggle Sidebar" />
        </div>
      </div>

      <Sidebar algo={setAlgo} toggle={toggle} />
      <Routes>
        <Route path='/visualizer/Algorithm' element={
          <div>
            <div className='name'>
              {name[algo]}
            </div>
            <div className='box'>
              {arr.map((i, j) => 
                <Bar
                key={j}
                id={j}
                len={arr.length}
                ht={i}
                color={running ? '#FF4136' : '#4CAF50'}
                />
              )}
            </div>
            <div className='tools'>
              <img className="stt" src={play} onClick={() => { st() }} height="30px" alt="Start" />
              <img className='rss' src={res} onClick={() => { reset() }} height="30px" alt="Reset" />
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontFamily: 'monospace', flexDirection: 'column-reverse' }}>
                  <input
                    id='slider'
                    min='10'
                    max='200'
                    type='range'
                    value={l}
                    onChange={(e) => setL(parseInt(e.target.value))}
                    disabled={running}
                  />
                  Bars : {l}
                </div>
              </div>
            </div>
            <div>
              <Details algo={algo} />
            </div>
          </div>
        } />
        <Route path='/visualizer/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;