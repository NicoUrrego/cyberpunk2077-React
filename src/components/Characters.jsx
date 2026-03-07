import { useState } from "react";
import "./Characters.css";
import { characters } from "../Data2";

function Characters() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="characters">
      
      <h2 className="title">PERSONAJES</h2>

      <div className="characters-grid">
        {characters.map((char, index) => (
          <div
            key={index}
            className="card"
            onClick={() => setSelectedVideo(char.video)}
          >
            <img src={char.image} alt={char.name} />

            <div className="card-info">
              <h3>{char.name}</h3>
              <p>{char.info}</p>
            </div>

          </div>
        ))}
      </div>

      {selectedVideo && (
        <div
          className="modal"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="modal-content">
            <iframe
               src={selectedVideo}
               title="video"
               allowFullScreen
             ></iframe>
          </div>
        </div>
      )}

    </section>
  );
}

export default Characters;