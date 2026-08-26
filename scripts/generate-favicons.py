import cairosvg
from PIL import Image
import io
import os

PUBLIC = '/home/z/my-project/public'
SVG_PATH = os.path.join(PUBLIC, 'logo.svg')

def svg_to_png(size):
    """Convert SVG to PNG at given size."""
    png_data = cairosvg.svg2png(url=SVG_PATH, output_width=size, output_height=size)
    return Image.open(io.BytesIO(png_data)).convert('RGBA')

def create_favicon():
    """Create favicon.ico with multiple sizes."""
    img_32 = svg_to_png(32)
    img_16 = svg_to_png(16)
    
    # Create ICO with multiple sizes
    favicon_path = os.path.join(PUBLIC, 'favicon.ico')
    img_32.save(favicon_path, format='ICO', sizes=[(16, 16), (32, 32)], append_images=[img_16])
    print(f'Created: {favicon_path}')

def create_icon_png():
    """Create icon.png (180x180 for modern browsers)."""
    img = svg_to_png(180)
    icon_path = os.path.join(PUBLIC, 'icon.png')
    img.save(icon_path, format='PNG')
    print(f'Created: {icon_path}')

def create_apple_touch_icon():
    """Create apple-touch-icon.png (180x180 for iOS)."""
    img = svg_to_png(180)
    touch_path = os.path.join(PUBLIC, 'apple-touch-icon.png')
    img.save(touch_path, format='PNG')
    print(f'Created: {touch_path}')

def create_opengraph():
    """Create opengraph-image.png (1200x630 for social sharing)."""
    img = svg_to_png(512)
    # Create 1200x630 canvas with dark background
    canvas = Image.new('RGBA', (1200, 630), (0, 0, 0, 255))
    # Center the logo
    logo_resized = img.resize((300, 300), Image.LANCZOS)
    x = (1200 - 300) // 2
    y = (630 - 300) // 2
    canvas.paste(logo_resized, (x, y), logo_resized)
    og_path = os.path.join(PUBLIC, 'opengraph-image.png')
    canvas.save(og_path, format='PNG')
    print(f'Created: {og_path}')

if __name__ == '__main__':
    create_favicon()
    create_icon_png()
    create_apple_touch_icon()
    create_opengraph()
    print('All favicons generated successfully!')
