#!/usr/bin/env python3
import os
import re
import sys
import html

def verify():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    index_path = os.path.join(base_dir, "index.html")
    article_path = os.path.join(base_dir, "article.html")
    project_path = os.path.join(base_dir, "project.html")
    drivefolio_path = os.path.join(base_dir, "drivefolio.html")
    data_path = os.path.join(base_dir, "js", "data.js")
    css_path = os.path.join(base_dir, "css", "style.css")

    with open(index_path, "r", encoding="utf-8") as f:
        index_html = html.unescape(f.read())
    with open(article_path, "r", encoding="utf-8") as f:
        article_html = html.unescape(f.read())
    with open(project_path, "r", encoding="utf-8") as f:
        project_html = html.unescape(f.read())
    with open(drivefolio_path, "r", encoding="utf-8") as f:
        drivefolio_html = html.unescape(f.read())
    with open(data_path, "r", encoding="utf-8") as f:
        data_js = f.read()
    with open(css_path, "r", encoding="utf-8") as f:
        css = f.read()

    errors = []
    checks = []

    # 1. Check all 23 Projects in index.html & js/data.js (12 core + 11 Vercel apps)
    projects = [
        "PT Pamerindo Indonesia",
        "Food & Hospitality Indonesia (FHI)",
        "Lab Indonesia",
        "Food, Hotel & Tourism Bali (FHTB)",
        "Cosmobeauté Indonesia",
        "Vape Fair Indonesia",
        "Clouds Fest",
        "Beauté Festival",
        "NexusAgent & PamerAi Ecosystem",
        "Orion ERP & IBM iSeries Simulator",
        "CV Examiner AI Pro Platform",
        "Enterprise IoT Remote Hub",
        "Tixlantra",
        "Kelantra",
        "Seolantra",
        "Lemburyukk",
        "AssetFlow IT",
        "Reportlantra",
        "XP MailShield Pro 2006",
        "Online Invitation Builder",
        "Absenlantra",
        "Meeting-Registrasi",
        "Elysia AI Chatbot"
    ]
    for p in projects:
        if p in index_html and p in data_js:
            checks.append(f"PROJECT PRESERVED: {p}")
        else:
            errors.append(f"MISSING PROJECT: {p}")

    # 2. Check all 9 Photography Stories in index.html & js/data.js
    stories = [
        "Gold in the Mist: The Unseen Workers",
        "Silhouettes of Ambition: Sunset Over SCBD",
        "Golden Hour at Platform 2: Kebayoran Station",
        "Welcome to Isekai: Among Books & Dreams",
        "Two Sources of Light: Sun & Filament",
        "Dusk Over JIEXPO Kemayoran",
        "Crimson Skyline: Fiery Horizon Over Jakarta",
        "Golden Corona: The Piercing Sun",
        "Amber Horizon: Solitude of the Street Lamp"
    ]
    for s in stories:
        if s in index_html and s in data_js:
            checks.append(f"STORY PRESERVED: {s}")
        else:
            errors.append(f"MISSING STORY: {s}")

    # 3. Check Core Identity, Tagline & Stats
    stats = [
        ("Beyond Code.", "Tagline part 1"),
        ("Across Technology.", "Tagline part 2"),
        ("Multi-disciplinary Technology Engineer", "Professional title"),
        ("8+", "B2B Trade Portals"),
        ("500K+", "Annual Trade Visitors"),
        ("99.9%", "Platform Uptime"),
        ("5+ Yrs", "Engineering Experience")
    ]
    for val, lbl in stats:
        if val in index_html:
            checks.append(f"IDENTITY/STAT PRESERVED: {val} ({lbl})")
        else:
            errors.append(f"MISSING IDENTITY/STAT: {val} ({lbl})")

    # 4. Check Work Experience, Education & Certifications
    records = [
        "Jul 2024 — Present",
        "Data & Tech Support",
        "Informa Markets Asia",
        "Oct 2023 — Present",
        "Web Development",
        "PT Pamerindo Indonesia",
        "GPA: 3.78 / 4.00",
        "GPA: 3.77 / 4.00",
        "Universitas Gunadarma",
        "Traveling Violation Detection System in Basketball Matches using Deep Learning (YOLOv8 Algorithm)",
        "Housing Access Control System with IoT & ESP8266 Microcontroller",
        "Fortinet NSE 1 & NSE 2",
        "Fortinet Certified Fundamentals in Cybersecurity",
        "BNSP Junior Computer Network Technician",
        "ServiceNow Fundamentals",
        "Azure Fundamentals",
        "TOEFL Computer-Based, Score 513"
    ]
    for r in records:
        if r in index_html:
            checks.append(f"RECORD PRESERVED: {r[:45]}")
        else:
            errors.append(f"MISSING RECORD: {r}")

    # 5. Check Contact Details, CV & External URLs
    contact_items = [
        "rikkardotobing1@gmail.com",
        "+62 822-3174-5213",
        "Jakarta, Indonesia",
        "assets/data/Rikkardo L. Tobing - Resume.pdf",
        "https://www.pamerindo.com",
        "https://www.foodhospitalityindonesia.com",
        "https://www.lab-indo.com",
        "https://www.fhtbali.com",
        "https://www.cosmobeauteasia.com/indonesia/",
        "https://www.vapefair.id",
        "https://www.cloudsfest.com",
        "https://www.beautefestival.com",
        "https://id.linkedin.com/in/rikkardo-l-tobing",
        "https://github.com/rikkardochaplin",
        "https://tixlantra.vercel.app/",
        "https://kelantra.vercel.app/",
        "https://seolantra.vercel.app/",
        "https://lemburyukk.vercel.app/",
        "https://reportlantra.vercel.app/",
        "https://emaildetector.vercel.app/"
    ]
    for c in contact_items:
        if c in index_html:
            checks.append(f"LINK/CONTACT PRESERVED: {c}")
        else:
            errors.append(f"MISSING LINK/CONTACT: {c}")

    # 5a. Check PinjaminPamerindo Live link disabled & Vercel label removed
    if 'href="https://pinjaminpamerindo.vercel.app' not in index_html and "liveUrl: 'https://pinjaminpamerindo" not in data_js:
        checks.append("PINJAMIN LIVE DISABLED: No active live link on AssetFlow IT (Pinjam-Barang)")
    else:
        errors.append("PINJAMIN LIVE STILL CLICKABLE IN HTML OR DATA")
    if "Vercel Apps" not in index_html and "Live Vercel" not in index_html and "Vercel Full-Stack" not in index_html and "Vercel Serverless" not in index_html:
        checks.append("CLOUD REBRAND APPLIED: Public Vercel labels removed")
    else:
        errors.append("PUBLIC VERCEL LABEL STILL IN index.html")
    if "View Repository" not in project_html and "repoUrl: 'https://github.com" not in data_js and "github.com/rikkardochaplin/" not in index_html:
        checks.append("PROJECT REPO LINKS HIDDEN: Zero View Repository / project GitHub buttons")
    else:
        errors.append("PROJECT REPOSITORY LINK LEFTOVER FOUND")

    # 5b. Check Blueprint removal & Compact toggle presence
    if "arch-modal-backdrop" not in index_html and "btn-open-modal" not in index_html:
        checks.append("BLUEPRINT REMOVED: Zero arch-modal-backdrop or btn-open-modal in index.html")
    else:
        errors.append("BLUEPRINT LEFTOVER FOUND IN index.html")
    if 'id="projects-expand-btn"' in index_html:
        checks.append("COMPACT EXPAND TOGGLE PRESENT IN index.html")
    else:
        errors.append("MISSING projects-expand-btn IN index.html")

    # 6. Check All Referenced Images & WebP variants Exist on Disk
    all_html = index_html + "\n" + article_html + "\n" + project_html + "\n" + drivefolio_html
    img_matches = re.findall(r'(?:src|srcset)=["\']([^"\']+\.(?:png|jpe?g|svg|webp))(?:\?[^"\']*)?["\']', all_html)
    for img in set(img_matches):
        if not img.startswith("http"):
            full_img_path = os.path.join(base_dir, img)
            if os.path.isfile(full_img_path):
                checks.append(f"IMAGE ASSET EXISTS: {img}")
            else:
                errors.append(f"BROKEN IMAGE ASSET: {img}")

    # 7. Check Hybrid Dark & Light Palette Tokens in CSS
    required_colors = ["#0B1120", "#111827", "#F7F8FA", "#FFFFFF", "#3B82F6", "#64748B", "#E2E8F0"]
    for col in required_colors:
        if col.lower() in css.lower():
            checks.append(f"PALETTE TOKEN IN CSS: {col}")
        else:
            errors.append(f"MISSING PALETTE TOKEN: {col}")

    # 8. Check Typography in CSS
    required_fonts = ["Inter", "Geist", "Geist Mono"]
    for font in required_fonts:
        if font.lower() in css.lower():
            checks.append(f"TYPOGRAPHY FONT IN CSS: {font}")
        else:
            errors.append(f"MISSING TYPOGRAPHY FONT: {font}")

    print("\n==========================================")
    print("CONTENT & DESIGN INTEGRITY SUMMARY")
    print("==========================================")
    print(f"Passed Checks: {len(checks)}")
    print(f"Failed Checks: {len(errors)}")
    print("==========================================\n")

    if errors:
        for err in errors:
            print(f"[FAIL] {err}")
        return False
    print("ALL CRITICAL CHECKS PASSED WITH 100% INTEGRITY!")
    return True

if __name__ == "__main__":
    success = verify()
    sys.exit(0 if success else 1)
