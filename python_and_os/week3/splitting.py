#!/usr/bin/env python3

import re

def convert_phone_number(phone):

  result = re.sub(r"([\d]{3})-([\d]{3})", r"(\1) \2",phone)

  return result


print(re.split(r"[.?!]", "One sentence. Another one? And last one!"))

print(re.split(r"([.?!])", "One sentence. Another one? And last one!"))

print(re.sub(r"[\w.%+-]+@[\w.+]+", "[REDACTED]", "Received an email for go_nuts95@gmail.com"))

print(re.sub(r"^([\w .+]*), ([\w .-]*)$", r"\2 \1", "Lovelace, Ada"))

print(convert_phone_number("My number is 212-345-9999.")) # My number is (212) 345-9999.