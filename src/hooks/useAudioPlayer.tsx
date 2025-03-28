import { useState, useRef } from "react";

const useAudioPlayer = () => {
  const [currentAudioUrl, setCurrentAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = (audioUrl: string) => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.onended = () => setIsPlaying(false); // Reset when audio ends
    }

    if (currentAudioUrl === audioUrl) {
      // Toggle play/pause if the same audio is selected
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      // If a new audio is clicked, stop previous and play new one
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(audioUrl);
      audioRef.current.onended = () => setIsPlaying(false); // Reset when new audio ends
      audioRef.current.play();
      setCurrentAudioUrl(audioUrl);
      setIsPlaying(true);
    }
  };

  return { handlePlayPause, currentAudioUrl, isPlaying };
};

export default useAudioPlayer;
