import '../Fonts/Fonts.css'

export default function Header() {
  return (
    <>
      <header>
        <nav>
        <img src="../public/LOGO.svg" alt="LOGO" />
          <a>Home</a>
          <a>Courses</a>
          <a>Gallery</a>
          <a>About</a>
          <a>Contact</a>
        </nav>

        <button className="btn">Get Started</button>
      </header>
    </>
  );
}
