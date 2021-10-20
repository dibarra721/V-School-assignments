function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="index.html">
          Start Bootstrap
        </a>

        <div class="navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link px-lg-3 py-3 py-lg-4" href="index.html">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-lg-3 py-3 py-lg-4" href="about.html">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-lg-3 py-3 py-lg-4" href="post.html">
                Sample Post
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-lg-3 py-3 py-lg-4" href="contact.html">
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
