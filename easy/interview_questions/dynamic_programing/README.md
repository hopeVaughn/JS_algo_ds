# Visual and meaningful explanations of Dynamic Programming algorithms

## Best Time to Buy and Sell Stock

The Best Time to Buy and Sell Stock problem is a common coding problem where you are given an array of numbers representing the price of a stock on each day. You need to find the maximum profit you can make by buying and selling a stock. The output is usually the maximum profit.

 Imagine you are a time-traveling merchant dealing in a magical artifact. Your power allows you to visit any day in a given period. However, your powers are limited: you can only make one purchase and one sale of the artifact.

  Your goal is to maximize your profit, that is, to buy the artifact at its lowest price and sell it at its highest price. Here's how you could use the Best Time to Buy and Sell Stock algorithm to achieve this:

  Step into the time portal: Your journey starts by stepping into the time portal to begin visiting each day sequentially. (i.e., starting at the beginning of the array of prices).

1. Identify the cheapest artifact: As you travel day-by-day (i.e., iterate through the array), you're continually on the lookout for the cheapest artifact you have encountered so far. This is your potential buying point, as buying the artifact at the lowest price will help maximize your profit. We can call this "curMin."

2. Consider the selling price: Each day, you also consider what your profit would be if you sold the artifact on this day (i.e., the current price minus the "curMin"). This is your potential selling point. We can call this "profit."

3. Seek the best deal: As a smart merchant, you want to sell the artifact at the highest possible price. So, if the "profit" for today is higher than any profit you've considered so far, you make a mental note of this as the most profitable sale you could make. We can call this "curMax."

4. Travel through time: You continue this process, hopping from day to day (i.e., moving through the array) always watching for the lowest buying price and the highest selling profit.

5. Complete your journey: By the time your journey ends (i.e., you've reached the end of the array), you've determined the best days to buy and sell the artifact to make the highest profit possible.

Now, back to programming terms:

You initialize two variables: "curMin" to the first element in the given array and "curMax" to 0.

As you iterate through the array, for each price, you update "curMin" if the current price is lower and "curMax" if selling at the current price would yield a higher profit (current price - curMin).

At the end of the loop, "curMax" will hold the maximum profit you can achieve by buying and selling the stock.

This algorithm is efficient (O(n)) as it only needs to loop through the array once, and it doesn't require extra space beyond the two variables for the minimum price and maximum profit, so it's also space-efficient (O(1)).
