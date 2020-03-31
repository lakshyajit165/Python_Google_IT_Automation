#!/usr/bin/env python3.7

import subprocess

result = subprocess.run(["ls", "this_file_does_not_exist"])

# capturing the output of a command

result2 = subprocess.run(["host", "8.8.8.8"], capture_output=True)

print(result.returncode)

print(result2.returncode)

print(result2.stdout)

# converting the contents of result2.stdout(which is a byte stream) to an array of strings

print(result2.stdout.decode().split())

# experimenting with stderr

result3 = subprocess.run(["rm", "does_not_exist"], capture_output=True)
print(result3.returncode)

print(result3.stdout)

print(result3.stderr)


