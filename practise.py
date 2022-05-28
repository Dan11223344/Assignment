def find_anagram(word: str , anagram: str):
    count = len(anagram)
    for letter in word :
        if letter in anagram :
            count -+1
    if count == 0:
        return True
    else:
        return False

question = find_anagram("stop", "spot")
print(question)