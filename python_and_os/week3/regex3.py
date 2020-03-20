#!/usr/bin/env python3

import re

# \w matches letters numbers and underscores
# \d matches digits
# \s matches spaces, tabs and newlines
# \b mathces word boundaries

print(re.search(r".com", "welcome"))

print(re.search(r"\.com", "mydomain.com"))

print(re.search(r"\w*", "This is an example")) #Output - This (stops match at first space, as space is not a part of this set)

print(re.search(r"\w*", "And_This_Is_Another"))