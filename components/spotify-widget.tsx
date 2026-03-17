import { siteConfig } from "@/content/site"

export default function SpotifyWidget() {
  return (
    <div className="border border-term-line bg-term-darker font-mono text-xs overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 text-term-gray uppercase tracking-[0.14em] border-b border-term-line">
        <span>♫ now playing</span>
        <span>spotify</span>
      </div>
      <iframe
        src={`https://open.spotify.com/embed/playlist/${siteConfig.spotifyPlaylistId}?theme=0`}
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify playlist"
        className="block border-0"
      />
    </div>
  )
}
