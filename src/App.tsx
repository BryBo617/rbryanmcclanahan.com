import './styles/style.css';

function App() {
  return (
    <div className="fill-view-port is-paper">
      <header className="header">
        <div className="banner">
          <div className="banner-box">
            <div className="title">R. Bryan McClanahan</div>
            <div className="subtitle">Software Developer, Musician, Father</div>
            <div className="tagline">
              I have been a software developer for over 25 years. I still enjoy
              what I do but I need my hobbies to keep me sane. As a musician, I
              play guitar, bass, drums, and piano. I write music and record in
              my home studio.
            </div>
            <div className="sign-off">Welcome to my personal website!</div>
          </div>
          <img className="image" src="/images/banner.png" alt="Site Banner" />
        </div>
      </header>
      <footer className="footer p-strip--highlighted">
        <p>
          &copy; 2025 R. Bryan McClanahan.
          <br />
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
