def count_code(s):
    return sum(s[i:i+4][:2] == 'co' and s[i+3] == 'e' for i in range(len(s) - 3))

print(count_code('aaacodebbb'))
print(count_code('codexxcode'))
print(count_code('cozexxcope'))
