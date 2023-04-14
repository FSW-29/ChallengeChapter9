import React, { useEffect, useState } from "react";
import {ref,set,get,child,getDatabase, update} from "firebase/database"
import {getAuth} from "firebase/auth"
import firebase from "../../services/firebase";
import {useNavigate} from "react-router"
import NavbarAuthComponent from "../../components/NavbarAuth"


export default function ProfilePage(){

    const [profileUser, setProfileUser]=useState();
    let [userNum, setUserNum]=useState();
    let navigate=useNavigate()

    let [userId, setUserId]=useState();
    let [userName, setUserName]= useState();
    let [userEmail, setUserEmail]=useState();
    let [userCity, setUserCity]=useState();
    let [userBiodata, setUserBiodata]=useState();
    let [userSocialMedia, setUserSocialMedia]= useState();
    let [userTotalScore, setUserTotalScore]= useState();


    const database= getDatabase(firebase);

    // const authFirebase=getAuth(firebase);
    // const userId=authFirebase.currentUser.uid;

    useEffect(() =>{
        cekToken();
        fetchData();
        // console.log(database,'===> isi get database')
        // console.log(authFirebase, '===> isi getAuth')
        // console.log(userId,'===> isi auth current user uid')
    },[])


    const cekToken = () => {
        if (!localStorage.getItem("token")){
            let tokenLocal=localStorage.getItem("token")
            console.log(tokenLocal, "masuk ga ya")
            navigate('/login')
        }
    }

    const fetchData = async() =>{
        try{
                const databaseFirebase = await(get(child(ref(database),'users')))
                // console.log(databaseFirebase.val(),"===> ini dari databasefirebase")

                let cekData=Object.values(databaseFirebase.val())
                let tokenCurrentUser=localStorage.getItem("token")
                console.log(tokenCurrentUser,"==> ini token yang sedang login")
                
                for(let i=0; i<cekData.length; i++){
                    if(cekData[i].id === tokenCurrentUser){
                        setUserNum=i;
                        console.log(i,"===> data user berada di array posisi ini")
                    }
                }

                setProfileUser(cekData[Number(setUserNum)])
                console.log("halo 2")
                console.log(cekData[Number(setUserNum)], "===> isi dari cekData")
                console.log(profileUser, "====> isi profileUser")
                console.log(profileUser.biodata, "===> ini ambil dari biodata profileuser")
            
        }catch(err){
            console.log(err)
        }
    }

    const handleEdit = async(e) =>{
        e.preventDefault()
        try{
            const inputUser={
                id:userId,
                email:userEmail,
                city:userCity,
                biodata:userBiodata,
                social_media:userSocialMedia,
                total_score:userTotalScore
            }

            console.log(inputUser,"===> ini isi input user")

        }catch(err){
            console.log(err)
        }e.preventDefault()


    }


    return(
        <>
        
            <div className="container">
                <h1>Profile Page</h1>
                <form onSubmit={handleEdit}>
                    <div className="mb-3">
                        <label className="form-label">id</label>
                        <input type="text" className="form-control" value={
                            profileUser && (profileUser.id)
                        } onChange={e=>setUserId(e.target.value)} readOnly/>                    
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" value={
                            profileUser && (profileUser.username)
                        } onChange={e=>setUserName(e.target.value)}/>                    
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email</label>
                        <input type="text" className="form-control" value={
                            profileUser && (profileUser.email)
                        } onChange={e=>setUserEmail(e.target.value)} readOnly/>                    
                    </div>
                    <div className="mb-3">
                        <label className="form-label"><b>City</b></label>
                        <input type="text" className="form-control" value={
                            profileUser && (profileUser.city)
                        } onChange={e=>setUserCity(e.target.value)}/>
                        Edit City
                        <input type="text" className="form-control" onChange={e=>setUserCity(e.target.value)} />                    
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Biodata</label>
                        <input type="text" className="form-control" value={
                            profileUser && (profileUser.biodata)
                        } onChange={e=>setUserBiodata(e.target.value)}/>                    
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Social Media</label>
                        <input type="text" className="form-control" value={
                            profileUser && (profileUser.social_media)
                        } onChange={e=>setUserSocialMedia(e.target.value)}/>                    
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Total Score</label>
                        <input type="text" className="form-control" value={
                            profileUser && (profileUser.total_score)
                        } onChange={e=>setUserTotalScore(e.target.value)} readOnly/>                    
                    </div>
                    <button type="submit" className="btn btn-primary">Edit Profile</button>
                </form>
            </div>
        </>
    )


}