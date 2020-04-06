#!/usr/bin/env python3

import sys

for line in sys.stdin:
    words = line.strip().split()
    print(" ".join([word.capitalize() for word in words]))


'''
command to be used in terminal to capitalize all the words of story.txt:

cat story.txt | ./capitalize_words.py   


'''