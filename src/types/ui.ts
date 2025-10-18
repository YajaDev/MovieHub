import type { ReactNode } from "react";

export interface MovieProviderProps{
  children: ReactNode
}

export interface PlayButtonProps {
  children: string;
  className?: string;
}
