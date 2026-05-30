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
              font-size: 4rem;
              font-weight: 700;
              color: #f5c842;
              text-shadow: 0 0 20px rgba(245, 200, 66, 0.6),
                            0 0 40px rgba(232, 160, 32, 0.4);
              margin: 0;
              animation: fadeInScale 1.2s ease-out;
              letter-spacing: 3px;
            }

            .loading-spinner {
              margin-top: 3rem;
              display: flex;
              gap: 1rem;
              justify-content: center;
            }

            .spinner-dot {
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background: #e8a020;
              animation: bounce 1.4s infinite ease-in-out;
              box-shadow: 0 0 10px rgba(232, 160, 32, 0.8);
            }

            .spinner-dot:nth-child(1) {
              animation-delay: -0.32s;
            }

            .spinner-dot:nth-child(2) {
              animation-delay: -0.16s;
            }

            @keyframes bounce {
              0%, 80%, 100% {
                transform: scale(1);
                opacity: 0.8;
              }
              40% {
                transform: scale(1.3);
                opacity: 1;
              }
            }

            @keyframes fadeInScale {
              from {
                opacity: 0;
                transform: scale(0.8);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            .floating-lantern {
              position: absolute;
              opacity: 0.15;
              animation: float 6s ease-in-out infinite;
            }

            @keyframes float {
              0%, 100% {
                transform: translateY(0px) translateX(0px);
              }
              50% {
                transform: translateY(-30px) translateX(20px);
              }
            }

            .lantern-1 {
              top: 10%;
              left: 10%;
              font-size: 5rem;
              animation-delay: 0s;
            }

            .lantern-2 {
              top: 15%;
              right: 10%;
              font-size: 4rem;
              animation-delay: 2s;
            }

            .lantern-3 {
              bottom: 15%;
              left: 15%;
              font-size: 4.5rem;
              animation-delay: 1s;
            }

            .loading-text {
              color: #f5e6c8;
              font-size: 1rem;
              margin-top: 2rem;
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
