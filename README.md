# Multani Motor Body Makers

Next.js website for the workshop in Kota.

## Development

Run `npm ci` followed by `npm run dev`. Run `npm run build` to verify a production build.

## Workshop reels

Reels are local MP4 files in `public/reels/`. To add or reorder one, put the video in that folder and update `content/reels.json` with its public `src` (for example `/reels/example.mp4`), `title`, and `number`. Videos are displayed in number order with playback controls and do not autoplay. Keep video files reasonably sized for mobile visitors and use browser-compatible MP4 encoding.
