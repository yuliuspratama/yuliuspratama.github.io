import React from 'react'

function HeaderNav(){
    return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Portofolio</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Linkedin</a></li>
            <li><a class="dropdown-item" href="#">Instagram</a></li>
            <li><a class="dropdown-item" href="#">Email</a></li>
          </ul>
        </li>
      </ul>
        <button class="btn btn-outline-success" href="#">Resume</button>
    </div>
  </div>
</nav>

    )
}

export default HeaderNav;