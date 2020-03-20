#!/usr/bin/env python3

import re

print(re.search(r"A.*a", "Argentina"))

print(re.search(r"A.*a", "Azerbaijan"))

print(re.search(r"^A.*a$", "Azerbaijan"))

print(re.search(r"^A.a*$", "Australia"))
