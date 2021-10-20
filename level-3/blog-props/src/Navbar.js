function Navbar() {
  return (
    <nav class="mainNav">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          Start Bootstrap
        </a>

        <div class="navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="post.html">
                Sample Post
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
