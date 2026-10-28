#!/usr/bin/env python3
import os
import re
import sys
import html

def verify():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    index_path = os.path.join(base_dir, "index.html")
    article_path = os.path.join(base_dir, "article.html")
    css_path = os.path.join(base_dir, "css", "style.css")
    js_path = os.path.join(base_dir, "js", "main.js")

    with open(index_path, "r", encoding="utf-8") as f:
        raw_index_html = f.read()
        index_html = html.unescape(raw_index_html)

    with open(article_path, "r", encoding="utf-8") as f:
        raw_article_html = f.read()
        article_html = html.unescape(raw_article_html)

    with open(css_path, "r", encoding="utf-8") as f:
        css = f.read()

    with open(js_path, "r", encoding="utf-8") as f:
        js = f.read()

    errors = []
    checks = []

    # 1. Check Protected Projects
    projects = [
        "PT Pamerindo Indonesia",
        "Food & Hospitality Indonesia",
        "Lab Indonesia",
        "Food, Hotel & Tourism Bali",
        "Cosmobeauté Indonesia",
        "Vape Fair Indonesia",
        "Clouds Fest",
        "Beauté Festival",
        "NexusAgent & PamerAi Ecosystem",
        "Orion ERP & IBM iSeries Simulator",
        "CV Examiner AI Pro Platform",
        "Enterprise IoT Remote Hub"
    ]
    for p in projects:
        if p in index_html:
            checks.append(f"PROJECT FOUND: {p}")
        else:
            errors.append(f"MISSING PROJECT: {p}")

    # 2. Check Photography Stories
    stories = [
        "Gold in the Mist: The Unseen Workers",
        "Silhouettes of Ambition: Sunset Over SCBD",
        "Kebayoran Station",
        "Welcome to Isekai: Among Books & Dreams",
        "Two Sources of Light: Sun & Filament",
        "Dusk Over JIEXPO Kemayoran",
        "Crimson Skyline: Fiery Horizon Over Jakarta",
        "Golden Corona: The Piercing Sun",
        "Amber Horizon: Solitude of the Street Lamp"
    ]
    for s in stories:
        if s in index_html and s in article_html:
            checks.append(f"STORY PRESERVED: {s}")
        else:
            errors.append(f"MISSING STORY: {s}")

    # 3. Check Key Statistics
    stats = [
        ("8+", "B2B Trade Portals"),
        ("500K+", "Annual Trade Visitors"),
        ("99.9%", "Platform Uptime"),
        ("5+ Yrs", "Engineering Experience")
    ]
    for val, lbl in stats:
        if val in index_html and lbl in index_html:
            checks.append(f"STAT PRESERVED: {val} {lbl}")
        else:
            errors.append(f"MISSING STAT: {val} {lbl}")

    # 4. Check Work Experience & Education
    records = [
        "Jul 2024 — Present",
        "Data & Tech Support",
        "Informa Markets Asia · Jakarta",
        "Oct 2023 — Present",
        "Web Development",
        "Pamerindo Indonesia · Jakarta",
        "Degree in System Computer (GPA 3.78/4.00)",
        "Diploma in Computer Engineering (GPA 3.77/4.00)",
        "Universitas Gunadarma · Depok",
        "Traveling Violation Detection System in Basketball Matches using Deep Learning (YOLOv8 Algorithm)",
        "Housing Access Control System with IoT & ESP8266 Microcontroller",
        "Fortinet NSE 1 & NSE 2"
    ]
    for r in records:
        if r in index_html:
            checks.append(f"JOURNEY RECORD PRESERVED: {r[:40]}...")
        else:
            errors.append(f"MISSING JOURNEY RECORD: {r}")

    # 5. Check Contact details & External URLs
    contact_items = [
        "rikkardotobing1@gmail.com",
        "+62 822-3174-5213",
        "Jakarta, Indonesia",
        "https://www.pamerindo.com",
        "https://www.foodhospitalityindonesia.com",
        "https://www.lab-indo.com",
        "https://www.fhtbali.com",
        "https://www.cosmobeauteasia.com/indonesia/",
        "https://www.vapefair.id",
        "https://www.cloudsfest.com",
        "https://www.beautefestival.com",
        "https://id.linkedin.com/in/rikkardo-l-tobing",
        "https://github.com/rikkardochaplin"
    ]
    for c in contact_items:
        if c in index_html:
            checks.append(f"CONTACT / LINK PRESERVED: {c}")
        else:
            errors.append(f"MISSING CONTACT / LINK: {c}")

    # 6. Check Referenced Images exist on disk
    img_matches = re.findall(r'src=["\']([^"\']+\.(?:png|jpe?g|svg|webp))["\']', index_html)
    for img in set(img_matches):
        if not img.startswith("http"):
            full_img_path = os.path.join(base_dir, img)
            if os.path.isfile(full_img_path):
                checks.append(f"IMAGE ASSET EXISTS: {img}")
            else:
                errors.append(f"BROKEN IMAGE ASSET: {img}")

    # 7. Check Palette Tokens in CSS
    required_colors = ["#F2EBDD", "#25231F", "#E8B931", "#D9624A", "#76948C", "#FAF8F1"]
    for col in required_colors:
        if col.lower() in css.lower():
            checks.append(f"PALETTE TOKEN IN CSS: {col}")
        else:
            errors.append(f"MISSING PALETTE TOKEN: {col}")

    # 8. Check Typography in CSS
    required_fonts = ["Space Grotesk", "Cormorant Garamond", "DM Sans", "Caveat"]
    for font in required_fonts:
        if font.lower() in css.lower():
            checks.append(f"TYPOGRAPHY FONT IN CSS: {font}")
        else:
            errors.append(f"MISSING TYPOGRAPHY FONT: {font}")

    # Output Results
    print(f"\n==========================================")
    print(f"CONTENT INTEGRITY VERIFICATION SUMMARY")
    print(f"==========================================")
    print(f"Total Successful Verification Checks: {len(checks)}")
    print(f"Total Content Drift Errors: {len(errors)}")
    print(f"==========================================\n")

    if errors:
        for err in errors:
            print(f"[FAIL] {err}")
        return False
    else:
        print("ALL CRITICAL CHECKS PASSED WITH 100% INTEGRITY!")
        return True

if __name__ == "__main__":
    success = verify()
    sys.exit(0 if success else 1)
