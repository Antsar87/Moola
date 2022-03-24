const nav = document.querySelector('.navbar');

nav.innerHTML = `  
<div class="container-fluid">

<a class="navbar-brandA" href="index.html">
    <img src="img/Jade.svg" alt="logo" class="d-inline-block align-text-top" />
</a>

<a href="index.html" class="nav-link mt-4 c-themeA" style="font-size:28px">
Moola
</a>


  <button class="navbar-toggler my-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
    aria-controls="offcanvasNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Moola</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>

  
    <div class="offcanvas-body">

      <ul class="navbar-nav justify-content-end align-items-lg-center flex-grow-1 pe-3 pt-4"><!--LI" pt-4 moves list down-->
       

        <li class="nav-item dropdown me-3 menu-i-hov">
          <a class="nav-link c-themeA"  href="#" id="offcanvasNavbarDropdown" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <!--<ul class="dropdown-menu mt-3 py-2" aria-labelledby="offcanvasNavbarDropdown">-->
            <ul class="dropdown-menu mt-3 py-2 bg-themeA" aria-labelledby="offcanvasNavbarDropdown">  <!--LI-->
            <li>
              <a class="dropdown-item py-2 fs-4 c-themeA" href="Inflation Fund.html">Crypto Inflation Fund</a>
            </li>
            <li>
              <a class="dropdown-item py-2 fs-4 c-themeA" href="Winter Fund.html">Crypto Winter Fund</a>
            </li>
            <li>
              <a class="dropdown-item py-2 fs-4 c-themeA" href="Gold Fund.html">Crypto Gold Fund</a>
            </li>
            <li>
              <a class="dropdown-item py-2 fs-4 c-themeA" href="Tech Fund.html">Crypto Tech Fund</a>
            </li>
          </ul>
        </li>

        <li class="nav-item dropdown me-3 menu-i-hov">
          <a class="nav-link c-themeA"  href="#" id="offcanvasNavbarDropdown" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Technology
          </a>
          <!--<ul class="dropdown-menu mt-3 py-2" aria-labelledby="offcanvasNavbarDropdown">-->
            <ul class="dropdown-menu mt-3 py-2 bg-themeA" aria-labelledby="offcanvasNavbarDropdown">  <!--LI-->
            <li>
              <a class="dropdown-item py-2 fs-4 c-themeA" href="trading.html">Moola Platform</a>
            </li>
            <li>
              <a class="dropdown-item py-2 fs-4 c-themeA" href="platforms.html">Moola Protocol</a>
            </li>
            <li>
              <a class="dropdown-item py-2 fs-4 c-themeA" href="demo.html">Blockchain</a>
            </li>
            <li>
              <a class="dropdown-item py-2 fs-4 c-themeA" href="demo.html">Security</a>
            </li>
          </ul>
        </li>

        <li class="nav-item dropdown me-3 menu-i-hov">
          <a class="nav-link c-themeA"  href="#" id="offcanvasNavbarDropdown" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Company
          </a>
          <!--<ul class="dropdown-menu mt-3 py-2" aria-labelledby="offcanvasNavbarDropdown">-->
            <ul class="dropdown-menu mt-3 py-2 bg-themeA" aria-labelledby="offcanvasNavbarDropdown">  <!--LI-->
            <li>
              <a class="dropdown-item py-2 fs-4 c-themeA" href="trading.html">About us</a>
            </li>
            <li>
              <a class="dropdown-item py-2 fs-4 c-themeA" href="platforms.html">Strategies</a>
            </li>
            <li>
              <a class="dropdown-item py-2 fs-4 c-themeA" href="demo.html">Investing</a>
            </li>
          </ul>
        </li>

        <li class="nav-item me-3 menu-i-hov">
          <a class="nav-link" href="#"></a>
        </li>

        <li class="nav-item me-3 menu-i-hov">
          <a class="nav-link" href="#"></a>
        </li>

        <li class="nav-item me-3 menu-i-hov txt-center">
          <a class="nav-link ms-2" style="color: #00a86b" href="#">Log in</a><!--LI: changed color-->
        </li>

  
       <li class="nav-item txt-center">
       <a href="signUp.html">
       <button  class="btnA btn-greenA py-0 my-auto text-uppercase text-white fw-bold " type="submit"
       style="height: 40px !important;"><!--LI: me-5 moves button to left-->
       Sign Up
   </button>
     </a>
       </li>

       <li >
       <div class="mt-mdA-4 switcher-desktop">
         <input type="checkbox" class="checkbox" id="checkbox">
         <label for="checkbox" class="label theme-switcher">
         <i class="fas fa-moon"></i>
         <i class='fas fa-sun'></i>
       <div class='ball'></div>
         </label>
       </div>
       </li> 
      </ul>
    </div>
  </div>
</div>
`;
