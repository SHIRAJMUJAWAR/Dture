import Feed from "./Feed"

 

const Profile = () => {
  return (
    <div className=" bg-black text-white p-5 rounded-2xl space-y-5" >
     
        <div className="w- h-600 bg-gray-900 rounded-2xl object-cover"  > .
            <div className="  w-330 h-71 bg-black rounded-2xl p-10  flex flex-row ">
           <div className="ml-30"> <img src="\logo.jpg" alt="" className="w-30  rounded-4xl" />   
                      <div className="text-3xl font-bold m-10">Shiraj_mujawar786</div>
            </div>
          <div className="container text-center">
             
  <div className="row text-center text-5xl font-semibold">
    <div className="col-2 ">
    5
   <h1></h1>
    <p className="text-xl font-sm mt-30"> Followers</p>
    </div>
    <div className="col">
      50
      <h1></h1>
    <p className="text-xl font-sm mt-30"> Following</p>
    </div>
    <div className="col">
      52
    <h1></h1>
    <p className="text-xl font-sm mt-30"> Debates</p>
    </div>
         
  </div>
 
    <div>   <p className=" mt-50 text-2xl text-gray-500"> <br />A beta tester of Dture</p></div>
  </div> 
        </div>
  <h1 className="text-4xl font-bold text-gray-500 "> Debates </h1>
<div className=" mt-0 w-330 h-400 bg-black rounded-2xl p-10  flex flex-row ">
      <Feed></Feed>
    </div>     
    
        </div>
         
       
    </div>
  )
}

export default Profile