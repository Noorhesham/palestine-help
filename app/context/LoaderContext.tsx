"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const LoaderContext = createContext({
  isLoading: true,
  setIsLoading: (loading: boolean) => {},
  setLoadedVideos: (loading: number | ((prev: number) => number)) => {},
  loadedVideos: 0,
  totalVideos: 2,
  handleVideoLoad: () => {},
});

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 2;
  const handleVideoLoad = () => {
    setLoadedVideos((prev: number) => prev + 1);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [loadedVideos]);

  return (
    <LoaderContext.Provider
      value={{ isLoading, setIsLoading, setLoadedVideos, loadedVideos, totalVideos, handleVideoLoad }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
