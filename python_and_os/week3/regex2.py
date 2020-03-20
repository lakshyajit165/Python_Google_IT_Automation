# code to check if the text passed contains punctuation symbols: commas, periods, colons, semicolons, question marks, and exclamation points.

#!/usr/bin/env python3

import re
def check_punctuation(text):
  result = re.search(r"[,.:;?!]", text)
  return result != None

print(check_punctuation("This is a sentence that ends with a period.")) # True
print(check_punctuation("This is a sentence fragment without a period")) # False
print(check_punctuation("Aren't regular expressions awesome?")) # True
print(check_punctuation("Wow! We're really picking up some steam now!")) # True
print(check_punctuation("End of the line")) # False