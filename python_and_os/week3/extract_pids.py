#!/usr/bin/env python3

import re
log = "July 31 07:51:48 mycomputer bad_process[12345]: ERROR performing package upgrade"
regex = r"\[(\d+)\]"

result = re.search(regex, log)
print(result[1])

result2 = re.search(regex, "A completely different string ")


def extract_pid(log_line):
    regex = r"\[(\d+)\]"
    result = re.search(regex, log_line)
    if result is None:
        return ""
    return result[1]

print(extract_pid("99 elephants in a [cage]"))