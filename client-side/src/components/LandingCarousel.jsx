import React from "react"

function LandingCarouselComponent() {

    return(
        <>

        {/* Landing Main Carousel */}
            <div className="landing-main-carousel">
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{width: "100%", height: "100%"}}>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img className="d-block w-100" src="assets/4k-gaming.jpg" alt="Assassin's Creed"/>
                        </div>
                        <div class="carousel-item active">
                            <img src="assets/dark-souls.jpg" class="d-block w-100" alt="Dark Souls" />
                        </div>
                        <div class="carousel-item active">
                            <img src="assets/rockpaperstrategy-1600.jpg" class="d-block w-100" alt="The Legendary Rock Paper Scissor" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default LandingCarouselComponent;



