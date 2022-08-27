import React from 'react';
import {useSelector} from 'react-redux';

export default function Navbar() {
  const amount = useSelector(state => state.amount)
  return (
    <>

<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Bank Of CodingNinjas</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Link</a>
        </li>
        
        
      </ul>
      <form class="d-flex" role="search">
        <button disabled={true} class="btn btn-outline-success" type="submit">Your Balance: {amount}</button>
      </form>
    </div>
  </div>
</nav>
         </>
  )
}
