@echo off
REM Extract frames from video as WebP images
REM Run this script after placing animation.mp4 in public\images\video\

REM Get video metadata first
echo Getting video metadata...
ffprobe -v error -select_streams v:0 -show_entries stream=width,height,r_frame_rate,nb_read_frames -of json public\images\video\animation.mp4

REM Extract frames as WebP with zero-padded numbering
echo Extracting frames as WebP...
mkdir -p public\frames
ffmpeg -i public\images\video\animation.mp4 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -vsync vfr -frame_pts true -compression_level 6 -quality 100 -loop 0 -an -vsync 0 -frame_pts true public\frames\frame_%04d.webp

echo Frame extraction complete!
echo Frames saved to public\frames\ directory