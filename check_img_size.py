import struct
import os

def get_image_info(file_path):
    with open(file_path, 'rb') as f:
        data = f.read(25)
        if data[:8] == b'\x89PNG\r\n\x1a\n':
            w, h = struct.unpack('>LL', data[16:24])
            return int(w), int(h)
        else:
            return None

files = ['images/01.png', 'images/02.png', 'images/03.png']
for p in files:
    full_path = os.path.join('/Users/seoheekim/maeve/portfolio', p)
    if os.path.exists(full_path):
        dims = get_image_info(full_path)
        if dims:
            print(f"{p}: {dims[0]}x{dims[1]} px")
        else:
            print(f"{p}: Could not determine size")
    else:
        print(f"{p}: File not found")

