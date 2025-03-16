a=int(input())
arr=list(map(int,input().split()))
count=0
for i in range(1,a):
    if arr[i]>arr[i-1]:
        count+=1

print(count)
