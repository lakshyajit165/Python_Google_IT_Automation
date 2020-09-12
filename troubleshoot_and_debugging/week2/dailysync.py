​#!/usr/bin/env python3
from multiprocessing import Pool
import multiprocessing
import subprocess
import os

home_add = os.path.expanduser('~')      # Gets home path as /home/username

home_add = home_add + "/"               # Added a "/" to change value stored in home_add (/home/username) to (/home/username/)

src = home_add + "data/prod/"           # It points to /home/username/data/prod/
dest = home_add + "data/prod_backup/"   # It points to /home/username/data/prod_backup/

if __name__ == "__main__":
  pool = Pool(multiprocessing.cpu_count())
  pool.apply(subprocess.call, args=(["rsync", "-arq", src, dest],))
