#!/usr/bin/env python3

import re
def extract_pid(log_line):
    pid = r"(\[(\d+)\])"
    result = re.search(pid, log_line)
    message = r"\b[A-Z]+\b"
    result2 = re.findall(message, log_line)
    if result is None or result2 is None or len(result2[0]) < 2:
        return None
    str = result[1].replace('[', '')
    str2 = str.replace(']', '')
    
    return "{} ({})".format(str2, result2[0])

print(extract_pid("July 31 07:51:48 mycomputer bad_process[12345]: ERROR Performing package upgrade")) # 12345 (ERROR)
print(extract_pid("99 elephants in a [cage]")) # None
print(extract_pid("A string that also has numbers [34567] but no uppercase message")) # None
print(extract_pid("July 31 08:08:08 mycomputer new_process[67890]: RUNNING Performing backup")) # 67890 (RUNNING)