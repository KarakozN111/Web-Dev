def array123(nums):
    return any(nums[i:i+3] == [1, 2, 3] for i in range(len(nums) - 2))

print(array123([1, 1, 2, 3, 1]))     
print(array123([1, 1, 2, 4, 1]))     
print(array123([1, 1, 2, 1, 2, 3]))  
