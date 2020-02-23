import os
import datetime
# to remove a file
# os.remove("novel.txt")

# to check if a file exists
print(os.path.exists("spider.txt"))

# to get file size in bytes
print(os.path.getsize("spider.txt"))

# to get the last modified time of a file
timestamp = os.path.getmtime("spider.txt")
print(datetime.datetime.fromtimestamp(timestamp))

# to print the absolute path of a file
print(os.path.abspath("spider.txt"))

# to get the current directory of a file
print(os.getcwd())

# to create a new directory
# os.mkdir("new_dir")

# to change a directory
# os.chdir("new_dir")

# to remove a directory - works for an empty directory
# os.rmdir("new_dir")

# to list all files/folders in a directory
print(os.listdir(os.getcwd()))

# to check if a content inside a directory is a file or another directory
dir = os.getcwd()
for name in os.listdir(dir):
    fullname = os.path.join(dir, name)
    if os.path.isdir(fullname):
        print("{} is a directory".format(fullname))
    else:
        print("{} is a file".format(fullname))
