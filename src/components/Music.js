import React from 'react';
import './Music.css';

const Music = () => {
  return (
    <section id="music" className="spotify-section">
      <div className="container">
        <h2 className="section-title">Currently Vibing To</h2>
        <p className="music-description">
          Music fuels my creativity while coding. Here's what's been on repeat:
        </p>
        <div className="spotify-embed">
          <iframe 
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator&theme=0" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Spotify Playlist"
          />
        </div>
      </div>
    </section>
  );
};

export default Music;