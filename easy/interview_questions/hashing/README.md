# Visual and meaningful explanations of Hashing algorithms

## Contains Duplicate

Let's envision a scenario where you are an organizer of a unique contest, where each participant should have a unique identifier number to be eligible. Your task is to identify if any participant has somehow managed to enter the contest more than once, i.e., there are duplicate identifier numbers.

Here's how you'd use the "Contains Duplicate" algorithm to do this:

1. Start with an empty register: To keep track of participant identifiers, you create an empty register. In programming terms, this would be an empty hash set or dictionary.

2. Greet each participant: One by one, participants start coming to the contest (i.e., you iterate through the array of numbers).

3. Check the register: Each time a participant comes, you check your register to see if their identifier number is already recorded.

4. Spot a duplicate: If you find the identifier number in your register (i.e., it's already in the hash set), you've caught a duplicate! You immediately stop and disqualify the participant (i.e., return true as the array contains duplicate).

5. Register a new participant: If the identifier number isn't in your register, it means the participant is unique so far. You register them by adding their identifier to your records (i.e., adding the number to the hash set), and move on to greet the next participant.

6. Finish the check-in process: If you manage to greet every participant (i.e., go through the entire array) without finding any duplicates, it means there were no duplicate identifiers, and you return false.

To implement this in code, you'd initialize an empty hash set, then loop through the array. For each number, check if it's in the hash set. If it is, you've found a duplicate and return true. If it isn't, add the number to the hash set. If you finish looping through the array without finding duplicates, return false.

This algorithm is efficient, as hash set operations (adding an element and checking whether an element is in the set) typically take constant time, leading to an overall linear time complexity (O(n)).
