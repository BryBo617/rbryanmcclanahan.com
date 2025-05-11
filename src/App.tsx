import './styles/style.css';

function App() {
  return (
    <div className="fill-view-port is-paper">
      <header className="header">
        <div className="banner">
          <div className="banner-box">
            <h6 className="p-heading--1 title">R. Bryan McClanahan</h6>
            <h4 className="p-heading--3 subtitle">
              Software Developer, Musician, Father
            </h4>
            <div className="tagline">
              I have been a software developer for over 25 years. I still enjoy
              what I do but I need my hobbies to keep me sane. As a musician, I
              play guitar, bass, drums, and piano. I write music and record in
              my home studio.
            </div>
            <div className="sign-off">Welcome to my personal website!</div>
          </div>
          <div className="image" data-testid="site-banner" />
        </div>
      </header>
      <footer className="footer p-strip--highlighted">
        <div>&copy; 2025 R. Bryan McClanahan. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
