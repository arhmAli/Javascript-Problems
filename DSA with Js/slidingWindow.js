const maxSubArray = (arr, num) => {
    let maxSum = 0
    let tempSum = 0
    for (let i = 0; i < num; i++) {
        maxSum = maxSum + arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - num]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}
maxSubArray([12,36,29,22,100,18,15,65,35,32,43,100,21],3)
