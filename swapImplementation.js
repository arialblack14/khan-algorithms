var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
};

var testArray = [7, 9, 4];
swap(testArray, 0, 1);

println(testArray);

Program.assertEqual(testArray, [9, 7, 4]);

testArray = [10, 100, 4];
swap(testArray, 1, 2);

println(testArray);

Program.assertEqual(testArray, [10, 4, 100]);

testArray = [2, 10, 47, 32];
swap(testArray, 2, 3);

println(testArray);

Program.assertEqual(testArray, [2, 10, 32, 47]);
