#!/usr/bin/env bash
# Downscale + recompress generated art so pages stay fast.
set -u
total_before=0; total_after=0
for f in "$@"; do
  [ -f "$f" ] || continue
  before=$(stat -c%s "$f")
  case "${f,,}" in
    *.jpg|*.jpeg) convert "$f" -resize '1600x1600>' -strip -interlace Plane -sampling-factor 4:2:0 -quality 82 "$f" ;;
    *.png)        convert "$f" -resize '1200x1200>' -strip "$f" ;;
  esac
  after=$(stat -c%s "$f")
  total_before=$((total_before+before)); total_after=$((total_after+after))
done
echo "optimized $# files: $((total_before/1024))K -> $((total_after/1024))K"
