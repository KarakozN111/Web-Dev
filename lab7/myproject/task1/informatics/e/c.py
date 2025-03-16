def xor(x,y):
    return int((x==1)!=(y==1))
x,y=map(int,input().split())
print(xor(x,y))