import { useEffect, useRef, useState } from "react";
import { site } from "../data/site.config";
import { asset } from "../lib/asset";
import { Icon } from "./Icon";

export function MusicToggle() {
  const audioRef = useRef(null);
  const buttonRef = useRef(null);
  const userToggledRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const { music } = site;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const removeListeners = () => {
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };

    const tryPlay = () => {
      if (userToggledRef.current) {
        removeListeners();
        return;
      }

      audio.play().then(
        () => {
          setPlaying(true);
          removeListeners();
        },
        () => {
          setPlaying(false);
        },
      );
    };

    function handleFirstInteraction(event) {
      if (buttonRef.current?.contains(event.target)) return;
      tryPlay();
    }

    tryPlay();
    window.addEventListener("pointerdown", handleFirstInteraction);
    window.addEventListener("keydown", handleFirstInteraction);

    return () => {
      removeListeners();
    };
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    userToggledRef.current = true;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    audio.play().then(
      () => setPlaying(true),
      () => {
        setPlaying(false);
      },
    );
  }

  return (
    <div className="fixed right-4 bottom-6 z-40">
      <audio ref={audioRef} src={asset(music.src)} preload="auto" loop />
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-page text-accent-deep shadow-md"
        aria-pressed={playing}
        aria-label={playing ? music.labelPause : music.labelPlay}
      >
        <Icon name={playing ? "pause" : "music"} />
      </button>
    </div>
  );
}