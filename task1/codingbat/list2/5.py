def centered_average(nums):
    nums_sorted = sorted(nums)
    centered_nums = nums_sorted[1:-1]
    return sum(centered_nums) // len(centered_nums)
print(centered_average([1, 2, 3, 4, 100]))          
print(centered_average([1, 1, 5, 5, 10, 8, 7]))    
print(centered_average([-10, -4, -2, -4, -2, 0]))   