'use client';

import { useState, useEffect } from 'react';
import { VesakScene } from "@/components/VesakScene";

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {showLoading ? (
        <div className="loading-container">
          <style>{`
            .loading-container {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              background: linear-gradient(135deg, #0a1628 0%, #1a2a3a 50%, #0a1628 100%);
              overflow: hidden;
              position: relative;
            }

            .loading-content {
              text-align: center;
              z-index: 10;
            }

            .vesak-title {
              font-size: clamp(2rem, 8vw, 4rem);
              font-weight: 700;
              color: #f5c842;
              text-shadow: 0 0 20px rgba(245, 200, 66, 0.6),
                            0 0 40px rgba(232, 160, 32, 0.4);
              margin: 0;
              animation: fadeInScale 1.2s ease-out;
              letter-spacing: 3px;
            }

            .loading-spinner {
              margin-top: clamp(1.5rem, 5vw, 3rem);
              display: flex;
              gap: 1rem;
              justify-content: center;
            }

            .spinner-dot {
              width: clamp(8px, 2vw, 12px);
              height: clamp(8px, 2vw, 12px);
              border-radius: 50%;
              background: #e8a020;
              animation: bounce 1.4s infinite ease-in-out;
              box-shadow: 0 0 10px rgba(232, 160, 32, 0.8);
            }

            .lantern-1 {
              top: 10%;
              left: 10%;
              font-size: clamp(2rem, 8vw, 5rem);
              animation-delay: 0s;
            }

            .lantern-2 {
              top: 15%;
              right: 10%;
              font-size: clamp(1.5rem, 6vw, 4rem);
              animation-delay: 2s;
            }

            .lantern-3 {
              bottom: 15%;
              left: 15%;
              font-size: clamp(1.75rem, 7vw, 4.5rem);
              animation-delay: 1s;
            }

            .loading-text {
              color: #f5e6c8;
              font-size: clamp(0.875rem, 2vw, 1rem);
              margin-top: clamp(1rem, 3vw, 2rem);
              opacity: 0.7;
              animation: fadeIn 2s ease-in-out;
            }

            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 0.7;
              }
            }
          `}</style>

          <div className="floating-lantern lantern-1">🏮</div>
          <div className="floating-lantern lantern-2">🏮</div>
          <div className="floating-lantern lantern-3">🏮</div>

          <div className="loading-content">
            <h1 className="vesak-title">HAPPY VESAK</h1>

            <div className="loading-spinner">
              <div className="spinner-dot"></div>
              <div className="spinner-dot"></div>
              <div className="spinner-dot"></div>
            </div>

            <p className="loading-text">Preparing the celebration...</p>
          </div>
        </div>
      ) : (
        <VesakScene />
      )}
    </main>
  );
}
