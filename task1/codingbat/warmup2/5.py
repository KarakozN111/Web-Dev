def last2(s):
    if len(s) < 2:
        return 0
    last_two = s[-2:]
    return sum(s[i:i+2] == last_two for i in range(len(s) - 2))

print(last2('hixxhi'))      
print(last2('xaxxaxaxx'))    
print(last2('axxxaaxx'))     
