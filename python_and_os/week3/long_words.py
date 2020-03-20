#!/usr/bin/env python3


'''The long_words function returns all words that 
are at least 7 characters. 
Fill in the regular expression to complete this function.
'''


import re
def long_words(text):
  pattern = r"\b[a-zA-Z]{7,}\b"
  result = re.findall(pattern, text)
  return result

print(long_words("I like to drink coffee in the morning.")) # ['morning']
print(long_words("I also have a taste for hot chocolate in the afternoon.")) # ['chocolate', 'afternoon']
print(long_words("I never drink tea late at night.")) # []
