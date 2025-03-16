def capitalize_name(full_name):
    words = full_name.split(' ')
    capitalized_words = [word.capitalize() for word in words]
    capitalized_name = ' '.join(capitalized_words)
    return capitalized_name
S = input()
print(capitalize_name(S))