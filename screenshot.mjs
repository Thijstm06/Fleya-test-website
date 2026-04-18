#!/usr/bin/env python3
"""
Screenshot a URL using Safari + screencapture, save to ./temporary screenshots/
Usage: python3 screenshot.mjs <url> [label]
"""
import subprocess, sys, os, glob, time

url   = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000"
label = sys.argv[2] if len(sys.argv) > 2 else ""

# Ensure output dir exists
out_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "temporary screenshots")
os.makedirs(out_dir, exist_ok=True)

# Auto-increment filename
existing = glob.glob(os.path.join(out_dir, "screenshot-*.png"))
nums = []
for f in existing:
    base = os.path.basename(f)
    try: nums.append(int(base.split("-")[1].split(".")[0].split("-")[0]))
    except: pass
n = max(nums, default=0) + 1
suffix = f"-{label}" if label else ""
out_path = os.path.join(out_dir, f"screenshot-{n}{suffix}.png")

# Open URL in Safari, wait for load, then screencapture the whole screen
open_script = f'tell application "Safari" to open location "{url}"'
subprocess.run(["osascript", "-e", open_script])
time.sleep(3)  # wait for page load

# screencapture -x = no sound, -C = capture cursor too (omit to skip)
subprocess.run(["screencapture", "-x", out_path], check=True)
print(f"Saved: {out_path}")
