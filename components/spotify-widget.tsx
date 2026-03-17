"use client"

import { useEffect, useState } from "react"

const TRACKS = [
  { title: "Midnight City", artist: "M83", duration: 243 },
  { title: "Resonance", artist: "HOME", duration: 213 },
  { title: "Digital Love", artist: "Daft Punk", duration: 301 },
  { title: "Starlight", artist: "Muse", duration: 240 },
  { title: "Intro", artist: "The xx", duration: 128 },
  { title: "Nightcall", artist: "Kavinsky", duration: 258 },
]

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

export default function SpotifyWidget() {
  const [trackIdx, setTrackIdx] = useState(0)
  const [progress, setProgress] = useState(0)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    if (!playing) return
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setTrackIdx((i) => (i + 1) % TRACKS.length)
          return 0
        }
        return p + 0.5
      })
    }, 100)
    return () => clearInterval(interval)
  }, [playing])

  const track = TRACKS[trackIdx]
  const elapsed = (progress / 100) * track.duration
  const barLen = 24
  const filled = Math.floor((progress / 100) * barLen)
  const bar = "█".repeat(filled) + "░".repeat(barLen - filled)

  return (
    <div className="border border-term-line bg-term-darker font-mono text-xs">
      <div className="flex items-center justify-between px-3 py-2 text-term-gray uppercase tracking-[0.14em] border-b border-term-line">
        <span>♫ now playing</span>
        <span className="text-term-green text-[10px]">● live</span>
      </div>
      <div className="p-3 space-y-2">
        <div className="text-term-white truncate">
          {track.title} <span className="text-term-gray">— {track.artist}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPlaying((p) => !p)}
            className="text-term-gray hover:text-term-cyan transition-colors flex-shrink-0"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? "⏸" : "▶"}
          </button>
          <div className="text-term-cyan tracking-wider flex-1 overflow-hidden">{bar}</div>
        </div>
        <div className="flex justify-between text-[10px] text-term-gray">
          <span>{formatTime(elapsed)}</span>
          <span>{formatTime(track.duration)}</span>
        </div>
      </div>
    </div>
  )
}
