#!/usr/bin/env python3
import re
log = "July 31 07:51:48 mycomputer bad_process[12345]: Error performing package update"
regex = r"\[(\d+)\]"
result = re.search(regex, log)
print(result[1])
