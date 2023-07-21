var isAnagram = function (s, t) {

    if (s.length !== t.length) {
      return false; // Anagrams must have the same length
    }
  
    // Frequency count objects for characters in strings s and t
    const sFreq = {};
    const tFreq = {};
  
    // Populate the frequency count objects for string s
    for (const char of s) {
      sFreq[char] = (sFreq[char] || 0) + 1;
    }
  
    // Populate the frequency count objects for string t
    for (const char of t) {
      tFreq[char] = (tFreq[char] || 0) + 1;
    }
  
    // Check if the frequency count objects are equal
    for (const char in sFreq) {
      if (sFreq[char] !== tFreq[char]) {
        return false;
      }
    }
  
    return true;
  }