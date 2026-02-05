import React from "react";
import { useNavigate } from "react-router-dom";
import "./education.css"

const Education = () => {
    const navigate = useNavigate();
    let country = ['Pakistan', 'China', 'UK', 'Malasia', 'England', 'Dubai', 'India'];

    const backPage = () => {
        navigate('/')
    }
    const nextPage = () => {
        navigate('/fee')
    }
    return (
        <>
            <div className="Education">
                <h2>Education</h2>
                <span className="lines">_________________________________________________________________________________________________________________________________________</span>
                <div className="tech">
                    <div className="Phone">
                        <div className="gender">
                            <div className="male">
                                <span className="first">Higher School or Equivalent Name</span>
                            </div>
                            <div className="address">
                                <input className="second" type="text" required max={20} ></input>
                            </div>

                        </div>
                    </div>
                    <div className="Phone">
                        <div className="gender">
                            <div className="male">
                                <span className="first">Graduation Date</span>
                            </div>
                            <div className="address">
                                <input className="second" type="date-"  placeholder=" MM-DD-YYYY"></input>
                            </div>
                        </div>
                        <div className="boxs">
                            <span className="boxe">Date</span>
                        </div>
                    </div>
                </div>
                <div className="tech">
                    <div className="Phones">
                        <div className="gender">
                            <div className="male">
                                <span className="first">School Address</span>
                            </div>
                            <div className="address">
                                <input className="second" type="text"  ></input>
                            </div>
                            <div className="boxs">
                                <span className="boxe">City</span>
                            </div>
                        </div>
                    </div>
                    <div className="Phones">
                        <div className="gender">
                            <div className="male">
                                <span className="first">Province/State</span>
                            </div>
                            <div className="address">
                                <input className="second" type="date-" required max={20} placeholder=" MM-DD-YYYY"></input>
                            </div>
                        </div>
                        <div className="boxs">
                            <span className="boxe">State / Province</span>
                        </div>
                    </div>
                </div>

                <div className="droped">
                    <select className="drops">
                        <option disabled selected>Please Select </option>
                        {
                            country.map((c) => (
                                <option>{c}</option>
                            )
                            )
                        }
                    </select>
                    <div className="boxs">
                        <span className="boxe">Country</span>
                    </div>
                </div>



                <span className="lines">___________________________________________________________________________________________________________________________________________</span>
                <div className="button">
                    <button className="of" onClick={backPage}>Back</button>
                    <button className="on" onClick={nextPage}>Next</button>
                </div>
            </div>
        </>
    )
}
export default Education