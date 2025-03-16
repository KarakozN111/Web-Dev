def xyz_there(s):
    return s.count('xyz') > s.count('.xyz')

print(xyz_there('abcxyz'))
print(xyz_there('abc.xyz'))
print(xyz_there('xyz.abc'))
