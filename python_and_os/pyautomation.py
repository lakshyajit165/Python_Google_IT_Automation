import shutil
import psutil

du = shutil.disk_usage("/")
print(du)
print(du.free/du.total * 100)
print(psutil.cpu_percent(0.1))
