"""Take screenshots of all QFS pages in light and dark mode."""
import asyncio
from playwright.async_api import async_playwright
import os

BASE = 'http://localhost:3001'
OUT = '/home/z/my-project/download/review'
os.makedirs(OUT, exist_ok=True)

async def screenshot(page, name, full=False):
    path = os.path.join(OUT, f'{name}.png')
    await page.wait_for_timeout(2000)
    if full:
        await page.evaluate('window.scrollTo(0, document.body.scrollHeight/3)')
        await page.wait_for_timeout(500)
    await page.screenshot(path=path, full_page=full)
    print(f'  Saved: {path}')

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        ctx = await browser.new_context(viewport={'width': 1440, 'height': 900})
        
        # ===== LIGHT MODE =====
        print('=== LIGHT MODE ===')
        page = await ctx.new_page()
        await page.goto(BASE, wait_until='networkidle', timeout=30000)
        await page.wait_for_timeout(3000)
        
        # Home - top
        await page.evaluate('window.scrollTo(0, 0)')
        await screenshot(page, '01-home-light-top')
        
        # Home - middle (ecosystem)
        await page.evaluate('window.scrollTo(0, 1500)')
        await page.wait_for_timeout(1000)
        await screenshot(page, '02-home-light-ecosystem')
        
        # Home - why QFS section (the one user reported)
        await page.evaluate('window.scrollTo(0, 4500)')
        await page.wait_for_timeout(1000)
        await screenshot(page, '03-home-light-why-qfs')
        
        # White Paper
        await page.click('text=White Paper')
        await page.wait_for_timeout(2000)
        await page.evaluate('window.scrollTo(0, 0)')
        await screenshot(page, '04-whitepaper-light-top')
        await page.evaluate('window.scrollTo(0, 800)')
        await page.wait_for_timeout(500)
        await screenshot(page, '05-whitepaper-light-content')
        
        # Roadmap
        await page.click('text=Roadmap')
        await page.wait_for_timeout(2000)
        await page.evaluate('window.scrollTo(0, 0)')
        await screenshot(page, '06-roadmap-light-top')
        await page.evaluate('window.scrollTo(0, 1200)')
        await page.wait_for_timeout(500)
        await screenshot(page, '07-roadmap-light-timeline')
        
        # Portal
        await page.click('text=Portal')
        await page.wait_for_timeout(2000)
        await page.evaluate('window.scrollTo(0, 0)')
        await screenshot(page, '08-portal-light-top')
        await page.evaluate('window.scrollTo(0, 1000)')
        await page.wait_for_timeout(500)
        await screenshot(page, '09-portal-light-qfspay')
        
        await page.close()
        
        # ===== DARK MODE =====
        print('\n=== DARK MODE ===')
        page2 = await ctx.new_page()
        # Set dark mode via localStorage before loading
        await page2.goto(BASE, wait_until='networkidle', timeout=30000)
        await page2.wait_for_timeout(2000)
        
        # Click moon icon to switch to dark
        moon_btn = await page2.query_selector('[class*="cursor-pointer"][class*="p-2"][class*="rounded"]:has(svg)')
        # Try finding moon/sun toggle
        try:
            # The theme toggle is in the nav - find the button with moon or sun icon
            buttons = await page2.query_selector_all('button')
            for btn in buttons:
                txt = await btn.inner_text()
                html = await btn.inner_html()
                if 'Moon' in html or 'Sun' in html or 'moon' in html.lower() or 'sun' in html.lower():
                    await btn.click()
                    print('  Clicked theme toggle')
                    break
        except:
            pass
        
        await page2.wait_for_timeout(2000)
        
        # Home - dark top
        await page2.evaluate('window.scrollTo(0, 0)')
        await screenshot(page2, '10-home-dark-top')
        
        # Home - dark ecosystem
        await page2.evaluate('window.scrollTo(0, 1500)')
        await page2.wait_for_timeout(1000)
        await screenshot(page2, '11-home-dark-ecosystem')
        
        # Home - dark WHY QFS (the reported issue)
        await page2.evaluate('window.scrollTo(0, 4500)')
        await page2.wait_for_timeout(1000)
        await screenshot(page2, '12-home-dark-why-qfs')
        
        # White Paper dark
        await page2.click('text=White Paper')
        await page2.wait_for_timeout(2000)
        await page2.evaluate('window.scrollTo(0, 0)')
        await screenshot(page2, '13-whitepaper-dark-top')
        await page2.evaluate('window.scrollTo(0, 800)')
        await page2.wait_for_timeout(500)
        await screenshot(page2, '14-whitepaper-dark-content')
        
        # Roadmap dark
        await page2.click('text=Roadmap')
        await page2.wait_for_timeout(2000)
        await page2.evaluate('window.scrollTo(0, 0)')
        await screenshot(page2, '15-roadmap-dark-top')
        await page2.evaluate('window.scrollTo(0, 1200)')
        await page2.wait_for_timeout(500)
        await screenshot(page2, '16-roadmap-dark-timeline')
        
        # Portal dark
        await page2.click('text=Portal')
        await page2.wait_for_timeout(2000)
        await page2.evaluate('window.scrollTo(0, 0)')
        await screenshot(page2, '17-portal-dark-top')
        await page2.evaluate('window.scrollTo(0, 1000)')
        await page2.wait_for_timeout(500)
        await screenshot(page2, '18-portal-dark-qfspay')
        
        await page2.close()
        await browser.close()
        print('\nDone! All screenshots saved to', OUT)

asyncio.run(main())
