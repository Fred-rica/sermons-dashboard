import { useState, useRef } from "react";

const useAudioPlayer = () => {
  const [currentAudioUrl, setCurrentAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = (audioUrl: string) => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl);
      setupAudioEvents(audioRef.current);
    }

    if (currentAudioUrl === audioUrl) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        audioRef.current.play();
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }

      audioRef.current = new Audio(audioUrl);
      setupAudioEvents(audioRef.current);
      setCurrentAudioUrl(audioUrl);
      setIsLoading(true);
      audioRef.current.play();
    }
  };

  const setupAudioEvents = (audio: HTMLAudioElement) => {
    audio.onended = () => setIsPlaying(false);
    audio.onloadstart = () => setIsLoading(true);
    audio.oncanplay = () => setIsLoading(false);
    audio.onplaying = () => {
      setIsPlaying(true);
      setIsLoading(false);
    };
  };

  return { handlePlayPause, currentAudioUrl, isPlaying, isLoading };
};

export default useAudioPlayer;
