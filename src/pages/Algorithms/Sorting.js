// Bubble sort function
// @param a - array of data to be sorted
export function bubble(a)
{   
    // declare variables
    let len = a.length-1; 
    let array = a; 
    let answer = [{
        data: array.toString(),
        swappedValue1: -1,
        swappedValue2: -1}];
    let list = [];
    let temp = 0; 
    // repeat the bubble sort for the length of the algorithm
    for (let i = 0; i < len; i++){
        // the actual bubble sort part
        // for every item in the array, float it up through the array
         for(let j = 0; j<len ; j++){
            if(array[j]> array[j+1] ){
                temp = array[j];
                array[j] = array[j+1]; 
                array[j + 1] = temp; 
                // push an object every time a swap happens containing the data (aka the current array to string)
                // as well as the swapped values
                answer.push({data: array.toString(),
                            swappedValue1: j,
                    swappedValue2: j + 1
                });
            }
         }
    }
    return answer;
}

// Insertion Sort fuction
// @param b - array of data to be sorted
export function insertion(b) {
    // declare variables
    let lenInsert = b.length;
    let arrayInsert = b;
    let answer = [{
        data: arrayInsert.toString(),
        swappedValue1: -1,
        swappedValue2: -1
    }];
    // repeat the insertion sort for the length of the algorithm
    for (let i = 1; i < lenInsert; i++) {
        let currentInsert = arrayInsert[i];
        let j = i;
        let swap1, swap2;
        //shift larger values to the right
        while (j > 0 && arrayInsert[j] < arrayInsert[j - 1]) {
            swap1 = arrayInsert[j];
            swap2 = arrayInsert[j - 1];
            arrayInsert[j] = swap2;
            arrayInsert[j - 1] = swap1;
            j--;
        }
        answer.push({
            data: arrayInsert.toString(),
            swappedValue1: j,
            swappedValue2: -1
        })
    }
    return answer;
}

// Selection Sort fuction
// @param c - array of data to be sorted
export function selection(c) {
    //declare variables
    let lenSelect = c.length;
    let arraySelect = c;
    let answer = [{
        data: arraySelect.toString(),
        swappedValue1: -1,
        swappedValue2: -1
    }];
    let temp = 0;
    for (let i = 0; i < lenSelect - 1; i++) {
        let minimum = i;
        for (let j = i + 1; j < lenSelect; j++) {
            if (arraySelect[j] < arraySelect[minimum]) {
                minimum = j;
            }
        }
        if (minimum != i) {
            // swaps to elements in an array 
            temp = arraySelect[i];
            arraySelect[i] = arraySelect[minimum];
            arraySelect[minimum] = temp;
            // push an object every time a swap happens containing the data (aka the current array to string)
            // as well as the swapped values
            answer.push({
                data: arraySelect.toString(),
                swappedValue1: i,
                swappedValue2: minimum
            });
        }
    }
    return answer;
}

// Heap Sort fuction
//sets up maximumum of heap
function maximumHeap(d, len, i) {
    let left = i * 2 + 1;
    let right = left + 1;
    let maximum = i;
    if (left < len && d[left] > d[maximum]) {
        maximum = left;
    }
    if (right < len && d[right] > d[maximum]) {
        maximum = right;
    }
    if (maximum !== i) {
        [d[i], d[maximum]] = [d[maximum], d[i]]; //swaps elements
        maximumHeap(d, len, maximum)
    }
    return d;
}

// @param d - array of data to be sorted
export function heapSort(d) {
    //declare variables
    let lenHeap = d.length;
    let a = Math.floor(lenHeap / 2 - 1);
    let b = lenHeap - 1;
    while (a >= 0) {
        maximumHeap(d, lenHeap, a);
        a--;
    }
    while (b >= 0) {
        [d[0], d[b]] = [d[b], d[0]]; //swaps elements
        maximumHeap(d, b, 0);
        b--;
    }
    return d;
}

// Quick Sort fuction
function partitionQuick(e, left, right) {
    while (left <= right) {
        while (e[left] < e[Math.floor((left + right) / 2)]) {
            left++;
        }
        while (e[right] > e[Math.floor((left + right) / 2)]) {
            right--;
        }
        if (left <= right) {
            [e[left], e[right]] = [e[right], e[left]]; //swaps elements
            left++;
            right--;
        }
    }
    return left;
}

// @param e - array of data to be sorted
export function quick(e, left, right) {
    //declare variable
    let lenQuick = e.length;
    let i = partitionQuick(e, left, right);
    left = left || 0;
    right = right || lenQuick - 1;
    if (left < i - 1) {
        quick(e, left, i - 1);
    }
    if (right > i) {
        quick(e, i, right);
    }
    return e;
}

//Shell Sort Function
// @param f - array of data to be sorted
export function shellSort(f) {
    //declare variable
    let len1 = f.length;
    let len = len1 / 2;
    while (len > 0) {
        for (let i = len; i < len1; i++) {
            //declare variables
            let j = i;
            let temp = f[i];

            while (j >= len && f[j - len] > temp) {
                f[j] = f[j - len];
                j = j - len;
            }
            f[j] = temp;
        }
        if (len == 2) {
            len = 1;
        }
        else {
            len = parseInt(len * 5 / 11);
        }
    }
    return f;
}