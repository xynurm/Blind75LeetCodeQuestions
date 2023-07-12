/*
Approach:
1.	Remove non-alphanumeric characters: Iterate through each character in the string s. Keep only the alphanumeric characters (letters and numbers) by discarding all other characters. You can use regular expressions or a loop with conditional checks to achieve this.
2.	Convert to lowercase: Convert all remaining uppercase letters in the string to lowercase. This step ensures case insensitivity when checking for palindromes.
3.	Compare characters: Compare the characters in the modified string from both ends. Start from the first and last characters and gradually move towards the center of the string. If at any point the characters don't match, return false. If the comparison reaches the center of the string without finding any non-matching characters, return true.
*/

var isPalindrome = function (s) {
    // Remove non-alphanumeric characters
   s = s.replace(/[^a-zA-Z0-9]/g, '');
 
   // Convert to lowercase
   s = s.toLowerCase();
 
   // Compare characters
   let left = 0;
   let right = s.length - 1;
   while (left < right) {
     if (s[left] !== s[right]) {
       return false;
     }
     left++;
     right--;
   }
   return true;
 }