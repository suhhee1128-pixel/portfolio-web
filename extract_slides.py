import fitz  # PyMuPDF
import os

pdf_path = "/Users/seoheekim/maeve/portfolio/wally.pdf"
output_folder = "/Users/seoheekim/maeve/portfolio/images/wally-slides"

if not os.path.exists(output_folder):
    os.makedirs(output_folder)

doc = fitz.open(pdf_path)

print(f"Total pages: {len(doc)}")

for i, page in enumerate(doc):
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2)) # 2x zoom for better quality
    output_path = os.path.join(output_folder, f"slide-{i+1:02d}.png")
    pix.save(output_path)
    print(f"Saved {output_path}")

print("Done!")

