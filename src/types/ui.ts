import type { ReactNode } from "react";

export interface MovieProviderProps{
  children: ReactNode
}

export interface PlayButtonProps {
  children: string;
  className?: string;
}

export interface SpinnerProps {
  For: "HeroSection"
}

export interface SearchBarProps {
  className?: string
}