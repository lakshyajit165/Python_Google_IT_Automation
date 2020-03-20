#!/usr/bin/env python3

import re

result = re.search(r"^(\w*), (\w*)$", "Lovelace, Ada")

print(result)

print(result.groups())

print(result[0])

print(result[1])

print(result[2]) 