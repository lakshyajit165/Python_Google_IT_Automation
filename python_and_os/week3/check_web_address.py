#!/usr/bin/env python3

import re

def check_web_address(text):
  pattern = r"^[A-Za-z0-9_\-\+\.][a-zA-Z_\.\-\+]*[\.a-zA-Z]$"
  result = re.search(pattern, text)
  return result != None

print(check_web_address("gmail.com")) # True
print(check_web_address("www@google")) # False
print(check_web_address("www.Coursera.org")) # True
print(check_web_address("web-address.com/homepage")) # False
print(check_web_address("My_Favorite-Blog.US")) # True
