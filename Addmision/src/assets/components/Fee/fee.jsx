import React from "react";
import { useNavigate } from "react-router-dom";
import './fee.css'
const Fee = () => {
    const navigate = useNavigate();

    const backPage = () => {
        navigate('/education')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted Successfully")
    }

    return (
        <>
            <div className="Fee">
                <h3 className="fees">Application Fee</h3>
                <span className="payment">Payment is due 3 days prior to the start of the class</span>
                <div>
                    <span className="lines">________________________________________________________________________________________________________________________</span>
                </div>
                <div className="method">
                    <span>    Payment Method :</span>
                </div>
                <div className="operating">
                    <div className="webs" >
                        <input type="checkbox" />Credit Card
                    </div>

                    <div className="webs">
                        <input type="checkbox" />Mail a Check
                    </div>
                    <div className="webs">
                        <input type="checkbox" />In-person at School
                    </div>
                </div>
                <div>
                    <span className="lines">________________________________________________________________________________________________________________________</span>
                </div>
                <div className="buttons">
                    <button className="off" onClick={backPage}>Back</button>
                    <button className="open" on onSubmit={handleSubmit}>Submit Form</button>
                </div>


            </div >



        </>
    )
}
export default Fee