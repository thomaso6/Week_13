import React from "react";
export const Navbar = () =>{
    return(
        <div class="navbar">
        
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <a class="navbar-brand" href="index.html">navigation:</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-control="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a href="#link">home&nbsp;</a>
                        </li>
                        <li class="nav-item">
                            <a href="#link">contact&nbsp;</a>
                        </li>
                        <li class="nav-item">
                            <a href="#link">extras&nbsp;</a>
                        </li>
                    </ul>
                </div>
            </nav>
    
        </div>
    )
}