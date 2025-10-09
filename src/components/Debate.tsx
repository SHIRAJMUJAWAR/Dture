 
import { IoIosPeople } from "react-icons/io";

const Debate = () => {
  return (
    <div >
      <div  className="card bg-black text-white rounded-2xl" style={{width: 25 + 'rem' , marginTop: 20 + 'px', height: 35 + 'rem'}}>
  <img src="public\debateimage.jpg"  className="card-img-top" alt="..." />
  <div  className="card-body bg-black text-white ">
    <h5  className="card-title bg-black text-white">Is Online Education Better Than Traditional Classroom Learning?</h5>
    <p  className="card-text h-14 mt-2 bg-black text-white">Since the rise of technology and the COVID-19 pandemic, online education has become a major part of learning. Supporters say it gives flexibility, comfort, and access to global resources from anywhere. It also helps students learn at their own pace.</p>
  </div>
  <ul  className="list-group list-group-flush bg-black text-white">
    <li  className="list-group-item font-bold bg-black text-white">created by : Shiraj mujawar 
       <button className='bg-blue-600  pr-2  pl-2 pt-1 pb-1 rounded   text-white'> <IoIosPeople /> joined  </button></li>
    <li  className="list-group-item bg-black text-white">A second item</li>
    <li  className="list-group-item bg-black text-white">A third item</li>
  </ul>
  <div  className="card-body bg-black text-white">
   <button className='bg-blue-600 w-100 h-10 rounded text-5xl font-bold'>Enter Debate</button>
  </div>
</div>
    </div>
  )
}

export default Debate
