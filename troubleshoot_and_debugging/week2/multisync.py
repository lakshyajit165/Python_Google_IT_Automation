​#!/usr/bin/env python3
from multiprocessing import Pool
import multiprocessing
import subprocess
import os
home_add = os.path.expanduser('~')      #Gets home path
src = home_add + "data/prod/"
dest = home_add + "data/prod_backup/"

if __name__ == "__main__":
  pool = Pool(multiprocessing.cpu_count())
  pool.apply(subprocess.call, args=(["rsync", "-arq", src, dest],))
