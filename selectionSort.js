var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array) {
    for (var i = 0; i < array.length - 1; i++) {
        var newMinIndex = indexOfMinimum(array, i);
        swap(array, i, newMinIndex);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array = [102, 11, 909, 1888, 9, 37, 412];
selectionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [9, 11, 37, 102, 412, 909, 1888]);
