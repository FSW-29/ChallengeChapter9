import React from "react";

function GameSuitComponent() {

    return(
        <>
            <div style={{width: "100%", textAlign: "left"}}>
                <div class="row" style={{paddingRight: 0, paddingLeft: 0}}>
                    <div class="col-1">
                        <a>
                            <h1> < </h1>
                        </a>
                    </div>
                <div class="col-1">
                    <img src="assets/logo.png" alt="logo" style="width: 50px; height: 50px;" />
                </div>
                <div class="col-10" style="padding-top: 10px;">
                    ROCK PAPER SCISSOR
                </div>
            </div>
            </div>
      
            <div class="container-player-label" style="margin-left: auto; margin-right: auto;">
                <div class="row" style="padding-right: 0; padding-right: 0;">
                    <div class="col-5">
                    <h4 style="font-size: 20px; text-align: right; color: black; padding-right: 20%; font-weight: bold;">
                        PLAYER 1
                    </h4>
                    </div>
                    <div class="col-2">
        
                    </div>
                    <div class="col-5">
                    <h4 style="font-size: 20px; text-align: left; color: black; padding-left: 22%; font-weight: bold;">
                        COM
                    </h4>
                    </div>
                </div>
                </div>
        
                <div class="container-icon-rock" style="margin-left: auto; margin-right: auto; padding-top: 3%; margin-bottom: 5%;">
                <div class="row" style="padding-right: 0; padding-right: 0;">
                    <div class="col-5" style="text-align: right; padding-right: 9%;">
                    <button id="rock-btn" class="btn-suit">
                        <img src="assets/batu.png" alt="batu-player" style="width: 100px; height: 100px;">
                    </button>
                    
                    </div>
                    <div class="col-2">
        
                    </div>
                    <div class="col-5" style="padding-left: 8%;">
                    <button id="rock-com-btn" class="btn-suit">
                        <img src="assets/batu.png" alt="batu-com" style="width: 100px; height: 100px; ">
                    </button>
                    </div>
                </div>
                </div>
        
                <div class="container-icon-paper" style="margin-left: auto; margin-right: auto; margin-bottom: 5%;">
                <div class="row" style="padding-right: 10%; padding-right: 0;">
                    <div class="col-5" style="text-align: right; padding-right: 9%;">
                    <button id="paper-btn" class="btn-suit">
                        <img src="assets/kertas.png" alt="batu-player" style="width: 100px; height: 100px;">
                    </button>
                    
                    </div>
                    <div class="col-2" style="text-align: center;">
                        <h1 id="result-label">
                            VS
                        </h1>
                    </div>
                    <div class="col-5" style="padding-left: 8%;">
                    <button id="paper-com-btn" class="btn-suit">
                        <img src="assets/kertas.png" alt="batu-com" style="width: 100px; height: 100px;">
                    </button>
                    </div>
                </div>
                </div>
        
                <div class="container-icon-scissor" style="margin-left: auto; margin-right: auto;     ">
                <div class="row" style="padding-right: 10%; padding-right: 0;">
                    <div class="col-5" style="text-align: right; padding-right: 9%;">
                    <button id="scissor-btn" class="btn-suit">
                        <img src="assets/gunting.png" alt="batu-player" style="width: 100px; height: 100px;">
                    </button>
                    
                    </div>
                    <div class="col-2">
        
                    </div>
                    <div class="col-5" style="padding-left: 8%;">
                    <button id="scissor-com-btn" class="btn-suit">
                        <img src="assets/gunting.png" alt="batu-com" style="width: 100px; height: 100px;">
                    </button>
                    </div>
                </div>
                </div>
        
                <div style="width: 100%; text-align: center;">
                <button id="reset-btn" class="btn-suit">
                    <img src="assets/refresh.png" alt="refresh" style="width: 50px; height: 50px; ">
                </button>
          
        </div>
        </>
    )
}

export default GameSuitComponent;