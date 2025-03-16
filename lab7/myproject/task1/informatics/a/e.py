v=int(input())
t=int(input())
s=109
position=(v*t)%s
if position>=0:
    print(position)
else:
    print(position+109)
