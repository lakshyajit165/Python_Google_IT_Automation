
# normal reading of file line by line
with open("spider.txt") as file:
    for line in file:
        print(line.strip().upper())

# to store the lines of a file in a list
file = open("spider.txt")
lines = file.readlines()
file.close()
lines.sort()
print(lines)