 

const CreateDebates = () => {
  return (
    <div className="container text-center mt-1  ml-500">  
    <div className="items-center justify-center bg-black text-white p-10 rounded-2xl space-y-5 mt-3 mb-10" >
        <div className="w-150 border-1 h-80 bg-gray-900 rounded-2xl object-cover flex flex-col items-center ml-85  "  > 
          <img src= '' alt="" />
        </div>
      <div className="mb-3 items-center text-4xl font-bold ml-70 mr-50 mt-15">
  <h1> </h1>
  <input   className="form-control w-170 text-2xl h-20 " id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3 text-2xl font-bold ml-70 mr-50 mt-15">
 <h1> </h1>
  <textarea className="form-control w-170  "  rows="10"></textarea>
</div> 
<div className="container text-center mt-1  ml-50 ">
          <ul className="nav nav-pills ml-20  gap-50 text-3xl bg-black p-3 mr-20  rounded-2xl" id="pills-tab" role="tablist">
  <li className="nav-item ml-40" role="presentation">
    <button className="nav-link active"  data-bs-toggle="pill"   type="button" role="tab"   aria-selected="true">
        24 Hours</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link"   data-bs-toggle="pill"  type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
        3 Days</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link "  data-bs-toggle="pill"  type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
        7 Days</button>
  </li>
  
</ul>
</div>
  <div className="text-4xl"> 
   <button className='bg-blue-600 w-95 h-20 rounded-5  font-semibold mt-10'>Create Debate</button>
   </div>
    </div>
     </div>
  )
}

export default CreateDebates
