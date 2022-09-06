import React, {useState} from 'react'

const Contact = () => {
    const [data, setData] = useState({
      fullname:"",
      phone:"",
      email:"",
      msg:"",
    })
    const InputEvent=(event)=>{
      const {name, value} = event.target;
      setData((preVal) =>{
        return {
          ...preVal,
          [name] : value,
        };
      });
    };
    const forSubmit= (e)=>{
      e.preventDefault();
      alert(`My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what i want to say ${data.msg}`)
    };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center fw-bold">Contact US</h1>
      </div>
      <div className="container contact_div mb-5">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={forSubmit} className="my-4">
          <div className="mb-3">
           <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" required/>
            </div>
            <div className="mb-3">
           <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" required/>
            </div>
            <div className="mb-3">
           <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">Phone No.</label>
            <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Your Mobile number" required/>
            </div>
           <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">Message</label>
              <textarea type="text" className="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} rows="3" required></textarea>
            </div>
             <div class="col-12">
            <button className="btn btn-outline-primary" type="submit">Submit form</button>
               </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
