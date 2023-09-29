import { bench, group, run } from 'mitata'

import {
  bubbleSort,
  bucketSort,
  countingSort,
  gnomeSort,
  heapSort,
  insertionSort,
  mergeSort,
  radixSort,
  randomQuickSort,
  selectionSort,
  shellSort,
  treeSort
} from '../sort'
import {
  generateDescSortedIntegerArray,
  generateNearlySortedIntegerArray,
  generateRandomizedIntegerArray,
  generateSortedIntegerArray
} from './utils/array-generator.js'

const size = 1000

const randomizedArray = generateRandomizedIntegerArray(size, {
  min: 0,
  max: size
})
const sortedArray = generateSortedIntegerArray(size)
const descSortedArray = generateDescSortedIntegerArray(size)
const nearlySortedArray = generateNearlySortedIntegerArray(size, 10)

group(`Sort Randomized Array ${size} of integer numbers`, () => {
  bench('native array sort', () => [...randomizedArray].sort((a, b) => a - b))
  bench('buubleSort', () => bubbleSort([...randomizedArray]))
  bench('bucketSort', () => bucketSort([...randomizedArray]))
  bench('countingSort', () => countingSort([...randomizedArray]))
  bench('gnomeSort', () => gnomeSort([...randomizedArray]))
  bench('heapSort', () => heapSort([...randomizedArray]))
  bench('insertionSort', () => insertionSort([...randomizedArray]))
  bench('mergeSort', () => mergeSort([...randomizedArray]))
  bench('radixSort', () => radixSort([...randomizedArray]))
  bench('randomQuickSort', () => randomQuickSort([...randomizedArray]))
  bench('selectionSort', () => selectionSort([...randomizedArray]))
  bench('shellSort', () => shellSort([...randomizedArray]))
  bench('treeSort', () => treeSort([...randomizedArray]))
})

group(`Sort Sorted Array ${size} of integer numbers`, () => {
  bench('native array sort', () => [...sortedArray].sort((a, b) => a - b))
  bench('buubleSort', () => bubbleSort([...sortedArray]))
  bench('bucketSort', () => bucketSort([...sortedArray]))
  bench('countingSort', () => countingSort([...sortedArray]))
  bench('gnomeSort', () => gnomeSort([...sortedArray]))
  bench('heapSort', () => heapSort([...sortedArray]))
  bench('insertionSort', () => insertionSort([...sortedArray]))
  bench('mergeSort', () => mergeSort([...sortedArray]))
  bench('radixSort', () => radixSort([...sortedArray]))
  bench('randomQuickSort', () => randomQuickSort([...sortedArray]))
  bench('selectionSort', () => selectionSort([...sortedArray]))
  bench('shellSort', () => shellSort([...sortedArray]))
  bench('treeSort', () => treeSort([...sortedArray]))
})

group(`Sort Desc Sorted Array ${size} of integer numbers`, () => {
  bench('native array sort', () => [...descSortedArray].sort((a, b) => a - b))
  bench('buubleSort', () => bubbleSort([...descSortedArray]))
  bench('bucketSort', () => bucketSort([...descSortedArray]))
  bench('countingSort', () => countingSort([...descSortedArray]))
  bench('gnomeSort', () => gnomeSort([...descSortedArray]))
  bench('heapSort', () => heapSort([...descSortedArray]))
  bench('insertionSort', () => insertionSort([...descSortedArray]))
  bench('mergeSort', () => mergeSort([...descSortedArray]))
  bench('radixSort', () => radixSort([...descSortedArray]))
  bench('randomQuickSort', () => randomQuickSort([...descSortedArray]))
  bench('selectionSort', () => selectionSort([...descSortedArray]))
  bench('shellSort', () => shellSort([...descSortedArray]))
  bench('treeSort', () => treeSort([...descSortedArray]))
})

group(`Sort Nearly Sorted Array ${size} of integer numbers`, () => {
  bench('native array sort', () => [...nearlySortedArray].sort((a, b) => a - b))
  bench('buubleSort', () => bubbleSort([...nearlySortedArray]))
  bench('bucketSort', () => bucketSort([...nearlySortedArray]))
  bench('countingSort', () => countingSort([...nearlySortedArray]))
  bench('gnomeSort', () => gnomeSort([...nearlySortedArray]))
  bench('heapSort', () => heapSort([...nearlySortedArray]))
  bench('insertionSort', () => insertionSort([...nearlySortedArray]))
  bench('mergeSort', () => mergeSort([...nearlySortedArray]))
  bench('radixSort', () => radixSort([...nearlySortedArray]))
  bench('randomQuickSort', () => randomQuickSort([...nearlySortedArray]))
  bench('selectionSort', () => selectionSort([...nearlySortedArray]))
  bench('shellSort', () => shellSort([...nearlySortedArray]))
  bench('treeSort', () => treeSort([...nearlySortedArray]))
})

run({
  avg: true, // enable/disable avg column (default: true)
  json: false, // enable/disable json output (default: false)
  colors: true, // enable/disable colors (default: true)
  min_max: true, // enable/disable min/max column (default: true)
  collect: false, // enable/disable collecting returned values into an array during the benchmark (default: false)
  percentiles: true // enable/disable percentiles column (default: true)
})
