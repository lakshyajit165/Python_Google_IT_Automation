#!/bin/bash

for file in *.HTM; do
    name=$(basename "$file" .HTM) # commands to be kept in parentheses
    echco mv "$file" "$name.html" # using echo to test for finally renaming the files
done