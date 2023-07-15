# Visual and meaningful explanations of Hashing algorithms

## Contains Duplicate

Let's illustrate this using a scenario where you are hosting a large, exclusive party, where every guest has a unique invitation code. Your task is to ensure no one tries to crash your party using a duplicated invitation code.

Here's how you'd use the "Contains Duplicate" algorithm to verify:

1. Create a guest log: As guests start arriving at your party (i.e., you have an array of numbers, each representing a guest's invitation code), you use a special party log (a JavaScript Set) to register each guest's unique code. By the nature of a Set, it automatically removes any duplicate entries.

2. Register all guests: In one swift move, you log all your guests (i.e., create a new Set with all the numbers in the array). This is like telling your gatekeeper to mark every guest off on the list as they arrive. If a guest tries to enter with a duplicate code, the Set will discard it, as Sets only keep unique values.

3. Check the guest count: After everyone has arrived, you count the number of entries in your guest log and compare it to the number of guests that were supposed to attend according to your original list (i.e., compare the size of the Set to the length of the array).

4. Find a party crasher: If the numbers don't match (i.e., set.size !== nums.length), it means someone tried to crash your party with a duplicate invitation code! You return true to indicate there's a duplicate.

5. All codes are unique: If the numbers match, it means every guest had a unique code, and there are no duplicates. So, you return false.

This JavaScript code solution to the "Contains Duplicate" problem is very concise and efficient. It takes advantage of the properties of the JavaScript Set object to quickly remove duplicates from the array and then compares the size of the Set (i.e., the number of unique elements) to the size of the original array.If the sizes aren't equal, that means there were duplicates in the array. If the sizes are equal, that means there were no duplicates. This operation has a linear time complexity, O(n), as it needs to iterate over the entire array once.
