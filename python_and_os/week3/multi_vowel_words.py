#!/usr/bin/env python3

import re
def multi_vowel_words(text):
  pattern = '[aeiou]{3}'
  words = text.split(' ')

  new_words = []

  for e in words:
    e = e.replace('.', '')
    e = e.replace(',', '')
    new_words.append(e)

#   print(new_words)

  match = re.findall(pattern, text)
  
  result = []
  for word in new_words:
      for mat in match:
          if mat in word and word not in result:
              result.append(word)

  return result

print(multi_vowel_words("Life is beautiful")) 
# ['beautiful']

print(multi_vowel_words("Obviously, the queen is courageous and gracious.")) 
# ['Obviously', 'queen', 'courageous', 'gracious']

print(multi_vowel_words("The rambunctious children had to sit quietly and await their delicious dinner.")) 
# ['rambunctious', 'quietly', 'delicious']

print(multi_vowel_words("The order of a data queue is First In First Out (FIFO)")) 
# ['queue']

print(multi_vowel_words("Hello world!")) 
# []