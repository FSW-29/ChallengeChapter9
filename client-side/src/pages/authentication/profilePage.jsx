import React, { useEffect, useState } from "react";
import {ref,get,child,getDatabase, update} from "firebase/database"
import firebase from "../../services/firebase";
import {useNavigate} from "react-router"
import NavbarAuthComponent from "../../components/NavbarAuth"

export default function ProfilePage(){

    //penampung fetchData
    const [profileUser, setProfileUser]=useState();

    let navigate=useNavigate()
    let userNum=null;
    
    let [userScore, setUserScore]=useState();

    let [userCity, setUserCity]=useState();
    let [userBiodata, setUserBiodata]=useState();
    let [userSocialMedia, setUserSocialMedia]= useState();



    const database= getDatabase(firebase);

    useEffect(() =>{
        cekToken();
        fetchData();
    },[])


    const cekToken = () => {
        if (!localStorage.getItem("token")){
            navigate('/login')
        }
    }

    const fetchData = async() =>{
        try{
                const databaseFirebase = await(get(child(ref(database),'users')))

                let cekData=Object.values(databaseFirebase.val())
                let tokenCurrentUser=localStorage.getItem("token")

                console.log(tokenCurrentUser,"==> ini token yang sedang login")
                
                for(let i=0; i<cekData.length; i++){
                    if(cekData[i].id === tokenCurrentUser){
                        userNum=i;
                        console.log(userNum,"===> data user berada di array posisi ini")
                    }
                }
                if(!userNum){
                    alert('token invalid, you access our page illegaly')
                    localStorage.removeItem('token');
                    navigate('/login')
                }
                setProfileUser(cekData[Number(userNum)])
                setUserScore(cekData[Number(userNum)].total_score)
        }catch(err){
            console.log(err)
        }
    }

    const handleEdit = async(e) =>{
        e.preventDefault()
        try{
            
            //ambil data dari realtime firebase di directory /users
            const databaseFirebase = await(get(child(ref(database),'users')))
            //ubah data yang diambil menjadi array
            let cekData=Object.values(databaseFirebase.val())
            //ambil token berisi uid
            let tokenCurrentUser=localStorage.getItem("token")
            console.log(tokenCurrentUser,"==> ini token yang sedang login")
                
                //looping untuk pencarian data user yang sesuai dengan uid
            for(let i=0; i<cekData.length; i++){
                //kondisinal untuk mengambil index array yang sesuai dengan uid
                if(cekData[i].id === tokenCurrentUser){
                    userNum=i;
                    console.log(userNum,"===> data user berada di array posisi ini")
                }
            }
            //ambil data /users menjadi kumpulan object of object
            let collectionObject= databaseFirebase.val();
            //penampung untuk mengecek looping ke berapa
            let temp=0
            //penampung index /users/tempProperty dari firebase
            let tempProperty;

            console.log(userNum,"=>")
            //looping obbject in object
            for(let property in collectionObject){
                //kondisional buat pengecek apakah looping sudah sesuai dengan index array
                if(temp===userNum){

                    // console.log(`${property}: ${collectionObject[property]}`)
                    console.log("kena if")

                    tempProperty=property
                }
                temp++
                    
            }
            console.log(tempProperty,"==> INI ISI TEMP PROPERTY dari tombol edit")
            //ambil data dari input user
            let tempCity, tempBiodata, tempSocialMedia;
            if(!userCity){
                tempCity=cekData[Number(userNum)].city;
            }else{
                tempCity=userCity
            }
            if(!userBiodata){
                tempBiodata=cekData[Number(userNum)].biodata
            }else{
                tempBiodata=userBiodata
            }
            if(!userSocialMedia){
                tempSocialMedia=cekData[Number(userNum)].social_media
            }else{
                tempSocialMedia=userSocialMedia
            }
            const inputUser={
                email:cekData[Number(userNum)].email,
                username:cekData[Number(userNum)].username,
                id:cekData[Number(userNum)].id,
                password:cekData[Number(userNum)].password,
                total_score:cekData[Number(userNum)].total_score,
                city:tempCity,
                biodata:tempBiodata,
                social_media:tempSocialMedia,
            }

            console.log(inputUser,"===> ini isi input user")
            const updates={};
            updates['/users/'+tempProperty]=inputUser
            update(ref(database),updates);
            alert("Profile Successfully Updated!")
            navigate('/profile')

            

        }catch(err){
            console.log(err)
        }
    }


    return(
        <>
            <NavbarAuthComponent />
        
            <div className="container border rounded border-info mt-3">
                <h1>Profile Page</h1>
                {
                    (userScore > 9) && (<img src="assets/badge/silver.png" height={50} width={50}></img>)
                }
                {
                    (userScore > 99) && (<img src="assets/badge/gold.png" height={50} width={50}></img>)
                }
                {
                    (userScore > 999) && (<img src="assets/badge/platinum.png" height={50} width={50}></img>)
                }
                <form onSubmit={handleEdit}>
                    <div className="mb-3 rounded border">
                        <label className="form-label"><b>id</b></label>
                        {
                            profileUser && (<p className="text-muted">{profileUser.id}</p>)
                        }                  
                    </div>
                    <div className="mb-3 rounded border">
                        <label className="form-label"><b>Username</b></label>
                        {
                            profileUser && (<p className="text-muted">{profileUser.username}</p>)
                        }
                    </div>
                    <div className="mb-3 rounded border">
                        <label  className="form-label"><b>Email</b></label>
                        {
                            profileUser && (<p className="text-muted">{profileUser.email}</p>)
                        }                 
                    </div>
                    <div className="mb-3 rounded border">
                        <label className="form-label"><b>City</b></label>
                        {
                            profileUser && (<p className="text-muted">{profileUser.city}</p>)
                        }
                        <label className="blockquote-footer"><strong>Edit City</strong></label>
                        <input type="text" className="form-control" onChange={e=>setUserCity(e.target.value)}/>                 
                    </div>
                    <div className="mb-3 rounded border">
                        <label className="form-label"><b>Biodata</b></label>
                        {
                            profileUser && (<p className="text-muted">{profileUser.biodata}</p>)
                        }
                        <label className="blockquote-footer"><strong>Edit Biodata</strong></label>
                        <input type="text" className="form-control" onChange={e=>setUserBiodata(e.target.value)}/>                    
                    </div>
                    <div className="mb-3 rounded border">
                        <label className="form-label"><b>Social Media</b></label>
                        {
                            profileUser && (<p className="text-muted">{profileUser.social_media}</p>)
                        }
                        <label className="blockquote-footer"><strong>Edit Social media</strong></label>
                        <input type="text" className="form-control" onChange={e=>setUserSocialMedia(e.target.value)}/>                    
                    </div>
                    <div className="mb-3 rounded border">
                        <label className="form-label"><b>Total Score</b></label>
                        {
                            profileUser && (<p className="text-muted">{profileUser.total_score}</p>)
                        }                 
                    </div>
                    <button type="submit" className="btn btn-primary">Edit Profile</button>
                </form>
            </div>
        </>
    )


}