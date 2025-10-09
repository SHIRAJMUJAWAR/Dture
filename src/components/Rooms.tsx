import Feed from "./Feed"

 

const Rooms = () => {
  return (
      <div className="container text-center mt-1  ml-500">
      <ul className="nav nav-pills ml-25  gap-50 text-2xl bg-black p-3 mr-20  rounded-2xl" id="pills-tab" role="tablist">
  <li className="nav-item ml-40" role="presentation">
    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Active</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Ended</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Mine</button>
  </li>
  
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"  >
    
    Active Debates
    <br />
    <Feed></Feed> </div>

  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"  >
    Ended Debates </div>

  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"  >
    Mine Deabtes</div>
</div>
    </div>
  )
}

export default Rooms
