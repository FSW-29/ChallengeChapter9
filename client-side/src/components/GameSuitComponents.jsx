import React, {useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import * as ReactDOM from 'react-dom';


function GameSuitComponent() {

    let refRockPlayer = useRef("");
    let refRockCom = useRef("");

    let refPaperPlayer = useRef("");
    let refPaperCom = useRef("");

    let refScissorPlayer = useRef("");
    let refScissorCom = useRef("");

    let refResult_label = useRef("");
    let refReset = useRef("");

    let hasil_suit;
    
    let array_com = ["Batu","Gunting","Kertas"];

    class comAction {
        static com_choosing() {
            let random_com = Math.floor(Math.random() * 3);
            console.log("com: " + array_com[random_com]);
    
            let hasil_com = array_com[random_com];
            
            if(hasil_com === "Batu") 
            {
                const rock_com = refRockCom.current;
                rock_com.classList.add("com-choose-suit");
                console.log(hasil_com, "==> ini hasil suit com");
            }
            else if(hasil_com === "Kertas") 
            {
                const paper_com = refPaperCom.current;
                paper_com.classList.add("com-choose-suit");
                console.log(hasil_com, "==> ini hasil suit com");
            } 
            else
            {
                const scissor_com = refScissorCom.current;
                scissor_com.classList.add("com-choose-suit");
                console.log(hasil_com, "==> ini hasil suit com");
            }
            return hasil_com;
        }
    }


        class validate_hasilSuit extends comAction{
            static validate_suit(pilihan_player) {
               let hasil_com = comAction.com_choosing();

               console.log(pilihan_player,"==> ini pilihan suit player")
        
               console.log("hasil com : " + hasil_com);
        
               if((hasil_com === "Batu" && pilihan_player === "Kertas") || (hasil_com === "Gunting" && pilihan_player === "Batu") || (hasil_com === "Kertas" && pilihan_player === "Gunting")){
                    // return player win
                    hasil_suit = "Player 1 Win";
               } else if(hasil_com === pilihan_player) {
                    // draw
                    hasil_suit = "Draw";
               } else {
                    // return com win
                    hasil_suit = "Com Win";
               }
         
               console.log(hasil_suit);
               return hasil_suit;
            }
        }
      
      // setelah suit
      const disableButton = (e) => {
        refRockPlayer.disableButton = true;
        refPaperPlayer.disableButton = true;
        refScissorPlayer.disableButton = true;
      }
      
      // setelah klik reset
      function enableButton() {
        refRockPlayer.disableButton = false;
        refPaperPlayer.disableButton = false;
        refScissorPlayer.disableButton = false;
      }
      
      // nampilin hasil result
      function showResultLabel() {

          let result_label = refResult_label.current;

          console.log(hasil_suit, "==> hasil suit di showResultLabelFunction");
          console.log(result_label, "==> result label")

          
          result_label = hasil_suit

          refResult_label.innerText = result_label

          console.log(refResult_label, "==> isi refResultLabel");


          alert(refResult_label.innerText);

          const resultLabel_final = refResult_label.current;
          resultLabel_final.innerText = hasil_suit;
          resultLabel_final.classList.add("lbl-hasil-suit");

      }
      

    const resetClicked = (e) => {
        e.preventDefault();

        const result = refResult_label.current;

        let rockBtnPlayer = refRockPlayer.current;
        let paperBtnPlayer = refPaperPlayer.current;
        let scissorBtnPlayer = refScissorPlayer.current;

        let rock_com = refRockCom.current;
        let paper_com = refPaperCom.current;
        let scissor_com = refScissorCom.current;

        rockBtnPlayer.classList.remove("btn-choose-suit");
        paperBtnPlayer.classList.remove("btn-choose-suit");
        scissorBtnPlayer.classList.remove("btn-choose-suit");

        rock_com.classList.remove("com-choose-suit");
        paper_com.classList.remove("com-choose-suit");
        scissor_com.classList.remove("com-choose-suit");
        
        const resultLabel_final = refResult_label.current;
        resultLabel_final.innerText = "VS";

        resultLabel_final.classList.remove("lbl-hasil-suit");

        enableButton();
    }

       
    const rockClicked = (e) => {
        e.preventDefault();
        console.log("Batu"); 

        const rockBtnPlayer = refRockPlayer.current;
        rockBtnPlayer.classList.add("btn-choose-suit");

        console.log(rockBtnPlayer, "==> isi rockBtnPlayer");
        
        let suitPlayer = "Batu"

    
        validate_hasilSuit.validate_suit(suitPlayer);

        disableButton();
        showResultLabel();
    }

     const paperClicked = (e) => {
        console.log("Kertas"); 
        //paper.value = "btn-choose-suit";

        const paperBtnPlayer = refPaperPlayer.current;
        paperBtnPlayer.classList.add("btn-choose-suit");

        console.log(paperBtnPlayer, "==> isi paperBtnPlayer");
        
    
        let suitPlayer = "Kertas"

        validate_hasilSuit.validate_suit(suitPlayer);
        disableButton();
        showResultLabel();

     }
      
    const scissorClicked = (e) => {
        console.log("Gunting"); 
        
        const scissorBtnPlayer = refScissorPlayer.current;
        scissorBtnPlayer.classList.add("btn-choose-suit");

        console.log(scissorBtnPlayer, "==> isi scissorBtnPlayer");
      
        let suitPlayer = "Gunting"

        validate_hasilSuit.validate_suit(suitPlayer);
        disableButton();
        showResultLabel();
    }
     
   
    return(
        <>
            <div className="body-container">
                <div style={{width: "100%", textAlign: "left"}}>
                    <div className="row" style={{paddingRight: 0, paddingLeft: 0}}>
                        <div className="col-1">
                            {/* <a src="assets/angle-left.png" onClick={handleBack}>
                                
                            </a> */}
                        </div>
                        <div className="col-1">
                            <img src="../assets/logo.png" alt="logo" style={{width: "50px", height: "50px"}} />
                        </div>
                        <div className="col-10" style={{paddingTop: "10px"}}>
                            ROCK PAPER SCISSOR
                        </div>
                    </div>
                </div>
        
                <div className="container-player-label" style={{marginLeft: "auto", marginRight: "auto"}}>
                    <div className="row" style={{paddingRight: 0, paddingLeft: 0}}>
                        <div className="col-5">
                            <h4 style={{fontSize: "20px", textAlign: "right", color: "black", paddingRight: "20%", fontWeight: "bold"}}>
                                PLAYER 1
                            </h4>
                        </div>
                        <div className="col-2">
            
                        </div>
                        <div className="col-5">
                            <h4 style={{fontSize: "20px", textAlign: "left", color: "black", paddingLeft: "22%", fontWeight: "bold"}}>
                                COM
                            </h4>
                        </div>
                    </div>
                </div>
            
                <div className="container-icon-rock" style={{marginLeft: "auto", marginRight: "auto", paddingTop: "3%", marginBottom: "5%"}}>
                    <div className="row" style={{paddingLeft: 0, paddingRight: 0}}>
                        <div className="col-5" style={{textAlign: "right", paddingRight: "9%"}}>
                            <button id="rock-btn" onClick={rockClicked} ref={refRockPlayer} className="btn-suit" >
                                <img src="../assets/batu.png" alt="batu-player" style={{width: "100px", height: "100px"}} />
                            </button>
                        </div>
                        <div className="col-2">
            
                        </div>
                        <div className="col-5" style={{paddingLeft: "8%"}}>
                            <button id="rock-com-btn" className="btn-suit" ref={refRockCom}>
                                <img src="../assets/batu.png" alt="batu-com" style={{width: "100px", height: "100px"}} />
                            </button>
                        </div>
                    </div>
                </div>
            
                <div className="container-icon-paper" style={{marginLeft: "auto", marginRight: "auto", marginBottom: "5%"}}>
                    <div className="row" style={{paddingRight: "10%", paddingRight: "0" }}>
                        <div className="col-5" style={{textAlign: "right", paddingRight: "9%"}}>
                            <button id="paper-btn" onClick={paperClicked} ref={refPaperPlayer} className="btn-suit">
                                <img src="../assets/kertas.png" alt="kertas-player" style={{width: "100px", height: "100px" }}/>
                            </button>
                        </div>
                        <div className="col-2" style={{textAlign: "center"}}>
                            <h1 id="result-label" ref={refResult_label}>
                                VS
                            </h1>
                        </div>
                        <div className="col-5" style={{paddingLeft: "8%"}}>
                            <button id="paper-com-btn" className="btn-suit" ref={refPaperCom}>
                                <img src="../assets/kertas.png" alt="kertas-com" style={{width: "100px", height: "100px"}} />
                            </button>
                        </div>
                    </div>
                </div>
            
                <div className="container-icon-scissor" style={{marginLeft: "auto", marginRight: "auto"}}>
                    <div className="row" style={{paddingRight: "10%", paddingLeft: "0"}}>
                        <div className="col-5" style={{textAlign: "right", paddingRight: "9%"}}>
                            <button id="scissor-btn" onClick={scissorClicked} ref={refScissorPlayer} className="btn-suit">
                                <img src="../assets/gunting.png"  alt="gunting-player" style={{width: "100px", height: "100px"}} />
                            </button>
                        </div>
                        <div className="col-2">
            
                        </div>
                        <div className="col-5" style={{paddingLeft: "8%"}}>
                            <button id="scissor-com-btn" className="btn-suit" ref={refScissorCom}>
                                <img src="../assets/gunting.png" alt="gunting-com" style={{width: "100px", height: "100px" }}/>
                            </button>
                        </div>
                    </div>
                </div>
            
                <div style={{width: "100%", textAlign: "center"}}>
                    <button id="reset-btn" className="btn-suit" onClick={resetClicked}>
                        <img src="../assets/refresh.png" alt="refresh" style={{width: "50px", height: "50px" }} />
                    </button>
                </div>
            </div>
        </>
    )
}


export default GameSuitComponent;