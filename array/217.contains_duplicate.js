/*
A. Using a Hash Map:
1. Initialize an empty hashMap.
2. Iterate through each element in the array nums.
3. For each element, check if it exists in the hash set.
4. If it does, return true (as it appears at least twice).
5. If it doesn't, add it to the hash set.
6. After iterating through all the elements, return false (as no duplicates were found).

In this implementation:

- The hash map hashMap is used to keep track of the frequency of each number encountered in the nums array.
- The for loop iterates through each element in the array.
- For each element, it checks if the number exists as a key in the hash map using hashMap[nums[i]].
- If the number doesn't exist, it adds the number as a key to the hash map with a value of 1.
- If the number already exists as a key in the hash map, a duplicate is found, and the function returns true.
- If the loop completes without finding any duplicates, the function returns false.
This approach has a time complexity of O(n), where n is the length of the array nums. It is an efficient solution that utilizes a hash map to track the frequency of number

B. Sorting:
1. Sort the array nums in ascending order.
2. Iterate through the sorted array, comparing each element with its adjacent element.
3. If any two adjacent elements are the same, return true (as there is a duplicate).
4. After iterating through all elements, return false (as no duplicates were found).

Sorting implementation:
- The array nums is sorted in ascending order using the sort() method.
- A loop is used to iterate through the sorted array until the second-to-last element (nums.length - 1), comparing each element with the next one.
- If a duplicate is found, true is returned immediately.
- If the loop completes without finding any duplicates, false is returned.
This approach has a time complexity of O(n log n) due to the sorting operation, where n is the length of the array nums.The sorting approach can be useful in situations where the input array needs to be sorted for other purposes as well.
*/

var containsDuplicateHashMap = function (nums) {
    let hashMap = {}; // Initialize an empty hash map
  
    for (let i = 0; i < nums.length; i++) {
      // Check if the current number exists in the hash map
      if (!hashMap[nums[i]]) {
        hashMap[nums[i]] = 1; // If it doesn't exist, add it to the hash map
      } else {
        return true; // If it already exists, a duplicate is found, return true
      }
    }
    
    return false; // No duplicates found, return false
};

var containsDuplicateSorting = function (nums) {
    nums.sort(); // Sorting the array in-place
    for (let i = 0; i < nums.length - 1; i++) {
      // Check if the current number is equal to the next number
      if (nums[i] === nums[i + 1]) {
        return true; // Duplicate found, return true
      }
    }
    
    return false; // No duplicates found, return false
};
