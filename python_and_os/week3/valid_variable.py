#!/usr/bin/env python3

import re

pattern = r"^[a-zA-Z_][a-zA-Z0-9_]*$"

print(re.search(pattern, "_this_is_a_valid_variable"))

print(re.search(pattern, "this isn't a valid variable"))

print(re.search(pattern, "2name"))