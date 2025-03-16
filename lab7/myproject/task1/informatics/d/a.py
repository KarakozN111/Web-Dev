a=int(input())
arr=list(map(int,input().split()))
for i in range(0,a,2):#start,stop,step(numbers not index )
    print(arr[i], end=" ")
