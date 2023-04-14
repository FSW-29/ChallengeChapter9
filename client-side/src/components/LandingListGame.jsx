import React from "react"

function LandingListGameComponent() {

    return(
        <>
           {/* ===== Landing List Game ===== */}

           <div className="landing-list-game">
              <div className="container-top-score">
                <div className="row">

                    {/* ini buat isian tulisan nya */}
                  <div className="col-6" style={{color: "white", paddingLeft: "20%", paddingTop: "5%"}}>
                    <div className="line-1-score">
                      <h1>TOP Games</h1> 
                    </div>
                    <div style={{paddingTop: "3%"}}>
                      <h6 className="line-2-score">
                        This is list from various games provided on this game platform
                      </h6>
                    </div>
                    {/* <div style={{paddingTop: "8%"}}>
                      <button type="button" className="btn btn-secondary btn-lg btn-block btn btn-warning" style={{fontWeight: "bold"}}>see more</button>
                    </div> */}
                  </div>


                    {/* ini buat si card2 nya */}
                  <div className="col-6" style={{paddingTop: "5%", paddingRight: "5%"}}>
                    <div className="container">
                      <div className="row">
                        <div className="col-6">
                         
                        </div>
                        <div className="col-6">


                        <div className="List-card-games" style={{}}>
                        <div className="card bg-dark bg-opacity-25" style={{maxWidth: "18rem", borderColor: "grey"}}>
                          <div className="card-header" style={{backgroundColor: "black", borderColor: "black"}}>
                            <div className="row">
                              <div className="col-3">
                                <img src="assets/4k-gaming.jpg" className="rounded" style={{textAlign: "left", width: "50px", height: "50px"}}/>
                              </div>
                              <div className="col-6" style={{padding: 0}}>
                                <h6 className="nama-user" style={{color: "orange", fontSize: "18px"}}>Assassin's Creed</h6>
                                <h6 className="username-user" style={{color: "grey"}}>PC Games</h6>
                              </div>
                              <div className="col-3" style={{textAlign: "right", paddingTop: "5%"}}>
                                <img src="assets/twitter-card.png" />
                              </div>
                            </div>
                          </div>
                          <div className="card-body text-success" style={{backgroundColor: "black", borderColor: "black"}}>
                            <p className="card-text" style={{color: "white", fontSize: "12px"}}>"The Assassin is coming to hunt for his revenge!"</p>
                          </div>
                          <div className="card-footer" style={{backgroundColor: "black", borderColor: "black", color: "white", fontSize: "10px"}}>
                            June 18, 2021
                          </div>
                        </div>  
                        </div>
                      </div>
                      </div>
                  </div>
                </div>
                </div>

                      
              </div>
            </div>
        </>
    )
}

export default LandingListGameComponent;

 