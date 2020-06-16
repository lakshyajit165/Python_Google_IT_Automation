#!/usr/bin/env python3

import os
from PIL import Image

old_path = os.path.expanduser('~') + '/images/'
new_path = '/opt/icons/'

for image in os.listdir(old_path):
    print(image)
    if '.' not in image[0]:
        img = Image.open(old_path + image)
        img.rotate(-90).resize((128, 128)).convert("RGB").save(new_path + image.split('.')[0], 'jpeg')
        img.close()

# final code

# Notes:

# s.path.expanduser('~') :

# os.path.expanduser() method in Python is used to expand an initial path component ~( tilde symbol) o
# r ~user in the given path to user’s home directory.

# On Unix platforms, an initial ~ is replaced by the value of HOME environment variable, 
# if it is set. Otherwise, os.path.expanduser() method search for user’s home directory i
# n password directory using an in-built module pwd. Path containing an initial ~user 
# component is looked up directly in the password directory.

# On Windows platform, an initial ~ is replaced by the value of HOME and 
# USERPROFILE environment variable, if it is set. Otherwise, HOMEPATH and 
# HOMEDRIVE environment variable will be used. While Path containing an 
# initial ~user component is handled by replacing the last directory component with ~user from the path derived above.

