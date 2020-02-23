# "w" mode deletes the previous contents of the file (as soon
#  as it is openened) if it exists and writes new content

with open("novel.txt", "w") as file:
    file.write("It was a dark and stormy night")