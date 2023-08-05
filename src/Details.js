function Details(prop){
    const desc={
        1:`
        Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles in sparkling water. The bubbles represents the elements of the data structure.
        The bigger bubbles reach the top faster than smaller bubbles, and this algorithm works in the same way. It iterates through the data structure and for each cycle compares the current element with the next one, swapping them if they are in the wrong order.
        It's a simple algorithm to implement, but not much efficient: on average, quadratic sorting algorithms with the same time complexity such as Selection Sort or Insertion Sort perform better.
        It has several variants to improve its performances, such as Shaker Sort, Odd Even Sort and Comb Sort.`
        ,
        2:`
            Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It's less performant than advanced sorting algorithms, but it can still have some advantages: it's really easy to implement and it's efficient on small data structures almost sorted.

            The algorithm divides the data structure in two sublists: a sorted one, and one still to sort. Initially, the sorted sublist is made up of just one element and it gets progressively filled. For every iteration, the algorithm picks an element on the unsorted sublist and inserts it at the right place in the sorted sublist. It's available in several variants such as Gnome Sort.`,
        3:`
        Selection Sort is an iterative and in-place sorting algorithm that divides the data structure in two sublists: the ordered one, and the unordered one. The algorithm loops for all the elements of the data structure and for every cycle picks the smallest element of the unordered sublist and adds it to the sorted sublist, progressively filling it.
        
        It's a really simple and intuitive algorithm that does not require additional memory, but it's not really efficient on big data structures due to its quadratic time complexity.
        
        This algorithm has been upgraded and enhanced in several variants such as Heap Sort.`
        ,
        4:`Quick Sort is a sorting algorithm based on splitting the data structure in smaller partitions and sort them recursively until the data structure is sorted.

        This division in partitions is done based on an element, called pivot: all the elements bigger than the pivot get placed on the right side of the structure, the smaller ones to the left, creating two partitions. Next, this procedure gets applied recursively to the two partitions and so on.
        
        This partition technique based on the pivot is called Divide and conquer. It's a performant strategy also used by other sorting algorithms, such as Merge Sort.`,
        5:`Merge Sort is a sorting algorithm based on the Divide et Impera technique, like Quick Sort. It can be implemented iteratively or recursively, using the Top-Down and Bottom-Up algorithms respectively. We represented the first one.

        The algorithm divides the data structure recursively until the subsequences contain only one element. At this point, the subsequences get merged and ordered sequentially. To do so, the algorithm progressively builds the sorted sublist by adding each time the minimum element of the next two unsorted subsequences until there is only one sublist remaining. This will be the sorted data structure.
        
        `,
        6:`Radix Sort is a sorting algorithm that doesn't use comparisons. Its complexity depends, in addition to the number of elements, by the values b and d, representing the radix of the numbers and the maximum number of digits of the elements respectively.

        Radix Sort works by splitting the elements into buckets, according to their radix, starting from the least significant digit (LSD) or from the most significant digit (MSD) of the number. If the number has more than one significant digit, this process is repeated to account all the digits of the number.
        
        It's a particular sorting algorithm really different from the others as it is not based on comparisons, but on the digits of the number instead, so it's only applicable on whole numbers or strings.
        
        It can be faster than other logarithmic sorting algorithms on big data structures as it can even perform in linear time in special cases, but it's not widely used due to its limitations.
        
        `
    }
    const comp={
        2:`void insertionSort(int arr[], int n)
        {
            int i, key, j;
            for (i = 1; i < n; i++)
            {
                key = arr[i];
                j = i - 1;
        
                while (j >= 0 && arr[j] > key)
                {
                    arr[j + 1] = arr[j];
                    j = j - 1;
                }
                arr[j + 1] = key;
            }
        }
        `,
        1:`void swap(int *xp, int *yp) {
            int temp = *xp;
            *xp = *yp;
            *yp = temp;
        }
        
        
        void bubbleSort(int arr[], int n) {
            int i, j;
            for (i = 0; i < n-1; i++)
                for (j = 0; j < n-i-1; j++)
                    if (arr[j] > arr[j+1])
                        swap(&arr[j], &arr[j+1]);
        }
        `,
        3:`void swap(int *xp, int *yp) {
            int temp = *xp;
            *xp = *yp;
            *yp = temp;
        }
        
        void selectionSort(int arr[], int n) {
            int i, j, min_idx;
        
            for (i = 0; i < n-1; i++) {
                min_idx = i;
                for (j = i+1; j < n; j++)
                    if (arr[j] < arr[min_idx])
                        min_idx = j;
        
                swap(&arr[min_idx], &arr[i]);
            }
        }`,
        4:`void swap(int *a, int *b) {
            int t = *a;
            *a = *b;
            *b = t;
          }
          
          int partition(int array[], int low, int high) {
          
            int pivot = array[high];
            int i = (low - 1);
          
            for (int j = low; j < high; j++) {
              if (array[j] <= pivot) {
                i++;
                swap(&array[i], &array[j]);
              }
            }
          
            swap(&array[i + 1], &array[high]);
            return (i + 1);
          }
          
          void quickSort(int array[], int low, int high) {
            if (low < high) {
          
              int pi = partition(array, low, high);
          
              quickSort(array, low, pi - 1);
          
              quickSort(array, pi + 1, high);
            }
          }`,
        5:`void merge(int arr[], int l, int m, int r)
        {
            int i, j, k;
            int n1 = m - l + 1;
            int n2 = r - m;
        
            int L[n1], R[n2];
        
            for (i = 0; i < n1; i++)
                L[i] = arr[l + i];
            for (j = 0; j < n2; j++)
                R[j] = arr[m + 1 + j];
        
            i = 0;
            j = 0;
            k = l;
        
            while (i < n1 && j < n2) {
                if (L[i] <= R[j]) {
                    arr[k] = L[i];
                    i++;
                }
                else {
                    arr[k] = R[j];
                    j++;
                }
                k++;
            }
        
            while (i < n1) {
                arr[k] = L[i];
                i++;
                k++;
            }
        
            while (j < n2) {
                arr[k] = R[j];
                j++;
                k++;
            }
        }
        
        void mergeSort(int arr[], int l, int r)
        {
            if (l < r) {
                int m = l + (r - l) / 2;
        
                mergeSort(arr, l, m);
                mergeSort(arr, m + 1, r);
                merge(arr, l, m, r);
            }
        }
        `,
        6:`int getMax (int a[], int n){
            int max = a[0];
            for (int i = 1; i < n; i++)
               if (a[i] > max)
                  max = a[i];
            return max;
         }
         
         void radixSort (int a[], int n){
            int bucket[10][10], bucket_cnt[10];
            int i, j, k, r, NOP = 0, divisor = 1, lar, pass;
            lar = getMax (a, n);
            while (lar > 0) {
               NOP++;
               lar /= 10;
            }
            for (pass = 0; pass < NOP; pass++) {
               for (i = 0; i < 10; i++) {
                  bucket_cnt[i] = 0;
               }
               for (i = 0; i < n; i++) {
                  r = (a[i] / divisor) % 10;
                  bucket[r][bucket_cnt[r]] = a[i];
                  bucket_cnt[r] += 1;
               }
               i = 0;
               for (k = 0; k < 10; k++){
                  for (j = 0; j < bucket_cnt[k]; j++){
                     a[i] = bucket[k][j];
                     i++;
                  }
               }
               divisor *= 10;
            }
         }`,
    }
    return(
        <div className="det">
                
            <div className='dl'>
                <div className="title">
                    Description
                </div>
                <div className="desc">
                    {desc[prop.algo]}
                </div>
            </div>
            <div className="dr">
                <div className="title">
                    Implementation    
                </div>
                <div className="code" >
                    {comp[prop.algo]}
                </div>
            </div>
        </div>
    )
}
export default Details;