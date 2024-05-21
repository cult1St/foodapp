export const Nav = ()=>{
    return(
        <>
          
    
<nav class="navbar navbar-expand-lg bg-danger fixed-top">
  <div class="container-fluid bg-danger">
    <a class="navbar-brand" href="index.html">EAT.PLAY.SLEEP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="features.html">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="price.html">Pricing</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}