const footer = document.querySelector('.footer');

footer.innerHTML = `    
<div class="container-content p-5 c-themeA">
<div class="row g-5">
  <div class="col-md-3">
    <a href="#" class="navbar-brand">
      <img src="img/Jade.svg" alt="logo Moola" class="img-fluid"
        style="width: 4rem; margin-top: -2rem" />
    </a>
    <p class="paragraph c-themeA"><span class="text-span-2"><span class="animate-charcter">Moola</span> </span> <br>The Power to invest.<br></p>

    <p class="c-themeA fw-lighter">
      Moola is the online platform for funds and ETFs investing in crypto, stocks, gold and Decentralized Finance.
    </p>
    <p class="c-themeA fs-8 pt-5">Find us on</p>
    <a href="#" class="fs-5 me-3 c-themeA"><i class="bi bi-facebook facebook-hover"></i></a>
    <a href="#" class="fs-5 me-3 c-themeA"><i class="bi bi-instagram instagram-hover"></i></a>
    <a href="#" class="fs-5 me-3 c-themeA"><i class="bi bi-youtube youtube-hover"></i></a>
    <a href="#" class="fs-5 me-3 c-themeA"><i class="bi bi-twitter twitter-hover"></i></a>
    <a href="#" class="fs-5 c-themeA"><i class="bi bi-linkedin linkedin-hover"></i></a>
  </div>
  <!-- Col-md-3 -->

  <div class="col-md-3 d-none d-md-block">
    <p class="c-themeA fs-10 fw-light">
      Products
    </p>
    <ul class="list-unstyled">
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Crypto-Tech Fund</a>
      </li>
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Crypto-Winter Fund</a>
      </li>

      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Growth ETF</a>
      </li>

      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Inflation-Protected Fund</a>
      </li>

      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Xtra Gold Fund</a>
      </li>
    </ul>

  </div>
  <!-- Col-md-3 -->

  <div class="col-md-3 d-none d-md-block">

    <p class="c-themeA fs-10 fw-light">Technology</p>
    <ul class="list-unstyled">
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Moola Platform</a>
      </li>
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Moola Protocol</a>
      </li>
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Blockchain</a>
      </li>
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Security</a>
      </li>
    </ul>

  </div>
  <!-- Col-md-3 -->

  <div class="col-md-3 d-none d-md-block">
    <p class="c-themeA fs-10 fw-light">
      Company
    </p>
    <ul class="list-unstyled">
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">About us</a>
      </li>
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Strategies</a>
      </li>
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Investing</a>
      </li>
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Governance</a>
      </li>

    </ul>


  </div>
  <!-- Col-md-3 -->
</div>


<div class="accordion accordion-flush d-md-none" style="padding:20px 0;" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button
        class="accordion-button collapsed bg-themeA fs-10"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#footer-collapseOne"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
      >
      Products
      </button>
    </h2>
    <div
      id="footer-collapseOne"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
      <ul class="list-unstyled">
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Inflation-Protected Fund</a>
      </li>
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Crypto-Winter Fund</a>
      </li>
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Xtra Gold Fund</a>
      </li>
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Crypto-Tech Fund</a>
      </li>
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Growth ETF</a>
      </li>

    </ul>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="footer-headingOne">
      <button
        class="accordion-button collapsed bg-themeA fs-10"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#footer-collapseTwo"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
      >
      Technology
      </button>
    </h2>
    <div
      id="footer-collapseTwo"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
      <ul class="list-unstyled">
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Moola Platform</a>
      </li>
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Moola Protocol</a>
      </li>
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Blockchain</a>
      </li>
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Security</a>
      </li>
    </ul>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="footer-headingOne">
      <button
        class="accordion-button collapsed bg-themeA fs-10"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#footer-collapseThree"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
      >
      Company
      </button>
    </h2>
    <div
      id="footer-collapseThree"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
      <ul class="list-unstyled">
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">About us</a>
      </li>
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Strategies</a>
      </li>
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Investing</a>
      </li>
      <li>
        <a href="#" class="c-themeA text-decoration-none fs-9 fw-300">Governance</a>
      </li>

    </ul>
      </div>
    </div>
  </div>
</div>

  <p>
    Copyright &copy; 2022 Moola - All rights reserved.
  </p>
</section>
</div>
<!-- Container -->`;
