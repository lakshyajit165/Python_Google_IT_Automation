#!/usr/bin/env python3

'''

Fill in the code to check if the text passed looks like 
a standard sentence, meaning that it starts with an uppercase letter,
 followed by at least some lowercase letters or a space, 
 and ends with a period, question mark, or exclamation point.


'''
import re
def check_sentence(text):
  result = re.search(r"^[A-Z][a-z ]*[.?!]$", text)
  return result != None

print(check_sentence("Is this is a sentence?")) # True
print(check_sentence("is this is a sentence?")) # False
print(check_sentence("Hello")) # False
print(check_sentence("1-2-3-GO!")) # False
print(check_sentence("A star is born.")) # True

