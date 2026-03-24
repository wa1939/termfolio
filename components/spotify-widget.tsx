"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { siteConfig } from "@/content/site"

const TRACKS = [
  {
    title: "Good Night",
    artist: "FASSounds",
    src: "/audio/good-night.mp3",
  },
  {
    title: "Lofi Study",
    artist: "FASSounds",
    src: "/audio/lofi-study.mp3",
  },
  {
    title: "Chill Vibes",
    artist: "Lo-Fi Chill",
    src: "/audio/chill-vibes.mp3",
  },
]

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return "0:00"
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

export default function SpotifyWidget() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [trackIdx, setTrackIdx] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const wantsToPlayRef = useRef(true) // user intent: should music be playing?
  const mountedRef = useRef(true)

  const track = TRACKS[trackIdx]

  // Single play function that respects user intent
  const startPlaying = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    wantsToPlayRef.current = true
    audio.play().catch(() => {
      // Browser blocked — will retry on interaction
    })
  }, [])

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      wantsToPlayRef.current = false
      audio.pause()
    } else {
      startPlaying()
    }
  }, [playing, startPlaying])

  const prevTrack = useCallback(() => {
    setTrackIdx((i) => (i - 1 + TRACKS.length) % TRACKS.length)
  }, [])

  const nextTrack = useCallback(() => {
    setTrackIdx((i) => (i + 1) % TRACKS.length)
  }, [])

  const handleSeek = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!audioRef.current || !duration) return
      const rect = e.currentTarget.getBoundingClientRect()
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
      audioRef.current.currentTime = ratio * duration
    },
    [duration],
  )

  // Load and play when track changes (including initial mount)
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onCanPlay = () => {
      if (wantsToPlayRef.current && mountedRef.current) {
        audio.play().catch(() => {
          // Blocked by browser — interaction listener will handle it
        })
      }
    }

    audio.src = track.src
    audio.load()
    audio.addEventListener("canplay", onCanPlay, { once: true })

    return () => {
      audio.removeEventListener("canplay", onCanPlay)
    }
  }, [trackIdx, track.src])

  // On first user interaction anywhere, start playing if we haven't yet
  useEffect(() => {
    const onInteraction = () => {
      const audio = audioRef.current
      if (audio && audio.paused && wantsToPlayRef.current) {
        audio.play().catch(() => {})
      }
    }

    document.addEventListener("click", onInteraction)
    document.addEventListener("touchstart", onInteraction)
    document.addEventListener("keydown", onInteraction)
    document.addEventListener("scroll", onInteraction, { passive: true })

    return () => {
      document.removeEventListener("click", onInteraction)
      document.removeEventListener("touchstart", onInteraction)
      document.removeEventListener("keydown", onInteraction)
      document.removeEventListener("scroll", onInteraction)
    }
  }, [])

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onTimeUpdate = () => setCurrentTime(audio.currentTime)
    const onLoadedMetadata = () => setDuration(audio.duration)
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onEnded = () => setTrackIdx((i) => (i + 1) % TRACKS.length)
    const onError = () => setTrackIdx((i) => (i + 1) % TRACKS.length)

    audio.addEventListener("timeupdate", onTimeUpdate)
    audio.addEventListener("loadedmetadata", onLoadedMetadata)
    audio.addEventListener("play", onPlay)
    audio.addEventListener("pause", onPause)
    audio.addEventListener("ended", onEnded)
    audio.addEventListener("error", onError)

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate)
      audio.removeEventListener("loadedmetadata", onLoadedMetadata)
      audio.removeEventListener("play", onPlay)
      audio.removeEventListener("pause", onPause)
      audio.removeEventListener("ended", onEnded)
      audio.removeEventListener("error", onError)
    }
  }, [])

  // Cleanup
  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0
  const barLen = 24
  const filled = Math.floor((progress / 100) * barLen)
  const bar = "\u2588".repeat(filled) + "\u2591".repeat(barLen - filled)

  return (
    <div className="border border-term-line bg-term-darker font-mono text-xs">
      <audio ref={audioRef} preload="auto" />

      <div className="flex items-center justify-between px-3 py-2 text-term-gray uppercase tracking-[0.14em] border-b border-term-line">
        <span>♫ now playing</span>
        <span className={`text-[10px] ${playing ? "text-term-green" : "text-term-gray"}`}>
          {playing ? "● live" : "○ paused"}
        </span>
      </div>

      <div className="p-3 space-y-2">
        <div className="text-term-white truncate">
          {track.title} <span className="text-term-gray">— {track.artist}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prevTrack}
            className="text-term-gray hover:text-term-cyan transition-colors flex-shrink-0"
            aria-label="Previous track"
          >
            ◁
          </button>
          <button
            onClick={togglePlay}
            className="text-term-gray hover:text-term-cyan transition-colors flex-shrink-0"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? "⏸" : "▶"}
          </button>
          <button
            onClick={nextTrack}
            className="text-term-gray hover:text-term-cyan transition-colors flex-shrink-0"
            aria-label="Next track"
          >
            ▷
          </button>
          <button
            onClick={handleSeek}
            className="text-term-cyan tracking-wider flex-1 overflow-hidden text-left cursor-pointer bg-transparent border-none p-0 font-mono text-xs"
            aria-label="Seek in track"
          >
            {bar}
          </button>
        </div>

        <div className="flex justify-between text-[10px] text-term-gray">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        <div className="pt-1 border-t border-term-line">
          <a
            href={siteConfig.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-term-gray hover:text-term-cyan transition-colors"
          >
            open on spotify →
          </a>
        </div>
      </div>
    </div>
  )
}
