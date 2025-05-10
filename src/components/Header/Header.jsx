const Header =()=>{
  return(

  <nav class="navbar navbar-expand-lg  header bg-dark">
  <div class="container-fluid ">
    <div className='ms-5'>
    <img src="/studio-logo-transparent.png"  alt="" />
    </div>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
     <ul className="navbar-nav d-flex  flex-columnm justify-content-center w-100 text-center">
  <li className="nav-item px-3">
    <a className="nav-link" href="#">Link 1</a>
  </li>
  <li className="nav-item px-3">
    <a className="nav-link" href="#">Link 2</a>
  </li>
  <li className="nav-item px-3">
    <a className="nav-link" href="#">Link 3</a>
  </li>
  <li className="nav-item px-3">
    <a className="nav-link" href="#">Link 4</a>
  </li>
</ul>

    </div>
  </div>
</nav>

  )
}
  
  export default Header;
  