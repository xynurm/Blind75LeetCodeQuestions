var maxProfit = function(prices) {
    let left = 0 // Buy
    let right = 1 // Sell
    let max_profit = 0
    
    while (right < prices.length){
        if (prices[left] < prices[right]){
            let currentProfit = prices[right] - prices[left]; // Our current profit
            max_profit = Math.max(max_profit, currentProfit);
        }else{
            left = right;
        }
        right++;
    }
    return max_profit;
};