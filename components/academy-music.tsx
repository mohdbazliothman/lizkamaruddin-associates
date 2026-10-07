"use client";

import { useEffect, useRef, useState } from "react";
import { Music2, VolumeX } from "lucide-react";
import styles from "@/app/academylaunch/invitation.module.css";

export function AcademyMusic() {
  const audio = useRef<HTMLAudioElement>(null);
  const starting = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const player = audio.current;
    if (!player) return;
    let cancelled = false;
    player.volume = 0.25;
    // Sound autoplay may be blocked; keep the manual play control available.
    void player.play().catch((reason: unknown) => {
      if (cancelled) return;
      if (reason instanceof DOMException && (reason.name === "NotAllowedError" || reason.name === "AbortError")) return;
      setError(true);
    });
    return () => {
      cancelled = true;
      player.pause();
    };
  }, []);

  async function toggle() {
    const player = audio.current;
    if (!player || starting.current) return;
    if (!player.paused) {
      player.pause();
      return;
    }
    starting.current = true;
    setLoading(true);
    setError(false);
    player.volume = 0.25;
    try {
      await player.play();
    } catch {
      setError(true);
    } finally {
      starting.current = false;
      setLoading(false);
    }
  }

  return <div className={styles.music}>
    <audio ref={audio} src="/academylaunch/background-music.mp3" loop preload="none"
      onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
      onError={() => { setPlaying(false); setError(true); }} />
    <button type="button" onClick={toggle} disabled={loading} aria-pressed={playing}
      aria-label={playing ? "Turn off background music" : "Play background music"}
      title={playing ? "Turn off background music" : "Play background music"}>
      {playing ? <VolumeX size={17} aria-hidden="true" /> : <Music2 size={17} aria-hidden="true" />}
      <span>{loading ? "Loading..." : playing ? "Music off" : "Play music"}</span>
    </button>
    {error && <span className={styles.musicError} role="status">Music unavailable. Tap to retry.</span>}
  </div>;
}
