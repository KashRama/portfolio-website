import React from 'react';
import './Music.css';

const Music = () => {
  return (
    <section id="music" className="spotify-section">
      <div className="container">
        <h2 className="section-title">My Vibes</h2>
        <p className="music-description">
          I can't do anything without music. Here's what's been on repeat:
        </p>
        <div className="spotify-embed">
          <iframe 
            src="https://open.spotify.com/embed/playlist/3wfkvZbesqUxqFyoYqh1d4?utm_source=generator"
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Spotify Playlist"
          />
          <iframe 
            src="https://open.spotify.com/embed/playlist/6BGyHzsMpcoLSwx2AhrdaL?utm_source=generator"
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Spotify Playlist"
          />
          <iframe 
            src="https://open.spotify.com/embed/playlist/1jqycdbKIWteKDbd3mTSYT?utm_source=generator"
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Spotify Playlist"
          />
          <iframe 
            src="https://open.spotify.com/embed/playlist/64r7PyFextamgLxfJdbDxw?utm_source=generator"
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