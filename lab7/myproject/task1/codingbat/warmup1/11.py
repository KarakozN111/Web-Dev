def not_string(s):
    return s if s.startswith("not") else "not " + s

print(not_string('candy'))    #  'not candy'
print(not_string('x'))        # 'not x'
print(not_string('not bad'))  # 'not bad'
