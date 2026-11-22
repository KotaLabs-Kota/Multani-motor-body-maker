# Multani Motor Body Makers

Next.js website for the workshop in Kota.

## Development

Run `npm ci` followed by `npm run dev`. Run `npm run build` to verify a production build.

## Workshop reels

Reels are local MP4 files in `public/reels/`. To add or reorder one, put the video in that folder and update `content/reels.json` with its public `src` (for example `/reels/example.mp4`), `title`, and `number`. Videos are displayed in number order. When the reels section first comes into view, the first video attempts to play with sound; if the browser blocks this, it attempts muted playback. Visitors can use the player or the “Play with sound” button. Keep video files reasonably sized for mobile visitors and use browser-compatible MP4 encoding.

## Workshop photography

The modified-vehicle images used on the homepage are still frames from the MP4s in `public/reels/`. `instagram-night-build.jpg` is from `workshop-reel.mp4`, the repository's export of the workshop's Instagram reel [CxAIv_jLv0-](https://www.instagram.com/p/CxAIv_jLv0-/). The remaining workshop frames are from the other videos already supplied in the repository.
