import React, { useState } from "react";
import { FcSpeaker } from "react-icons/fc";
import { IoIosSearch } from "react-icons/io";

const Content = () => {
  const [word, setWord] = useState("Dictionary");
  const [dict, setDict] = useState([]);
  const [audioUrl, setAudioUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [audioPlaying, setAudioPlying] = useState(false);

  const handleAudioClick = () => {
    var audio = new Audio(audioUrl);

    audio.onended = () => {
      setAudioPlying(false);
    };
    setAudioPlying(true);
    audio.play();
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await response.json();
      setDict(data);
      console.log(data);
      if (data.length > 0 && data[0].phonetics.length > 0) {
        setAudioUrl(data[0].phonetics[0].audio);
      } else {
        setAudioUrl("");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <div className="inputs">
          <input
            type="text"
            placeholder="Enter a Word"
            onChange={(e) => setWord(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                fetchData();
              }
            }}
          />
          <div className="icon" onClick={fetchData}>
            <IoIosSearch />
          </div>
        </div>
        { loading ? <div className="loading"><h1>Loading...</h1> </div> :
        <div className="dict">
          <div className="Word">
            {word ? <h1>{word}</h1> : <p></p>}
            {dict.length > 0 && (
              <div>
                <p>Pronunciation: {dict[0].phonetic}</p>
                {/* <p>Audio: {dict[0].phonetics[0]?.audio}</p> */}
              </div>
            )}
          </div>
          {audioUrl ? (
            <div className="audio" onClick={handleAudioClick}>
              {audioPlaying ? <> Playing...</> : <FcSpeaker />}
            </div>
          ) : (
            <></>
          )}
          {dict.length > 0 && (
            <div className="define">
              {dict[0].meanings.map((meaning, index) => (
                <div key={index}>
                  <h3>{meaning.partOfSpeech}</h3>
                  {meaning.definitions.map((definition, defIndex) => (
                    <div key={defIndex}>
                      <p>Definition: {definition.definition}</p>
                      <p>Example: {definition.example}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
}
      </div>
    </div>              
  );
                  
};

export default Content;
