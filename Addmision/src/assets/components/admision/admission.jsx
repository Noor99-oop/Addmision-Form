
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './admission.css'
const Admission = () => {
    const navigate = useNavigate();

    let monthName = ['January', 'Febraury', 'January', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let days = [];
    for (let i = 1; i <= 31; i++) {
        days.push(i)
    }
    let years = [];
    for (let i = 2026; i >= 1990; i--) {
        years.push(i)
    }
    let country = ['Pakistan', 'China', 'UK', 'Malasia', 'England', 'Dubai', 'India']

    const [handleForm, setHandleForm] = useState({ firstName: '', lastName: '', thirdName: '', female: '', male: '', phone: '', email: '', city: '', state: '', postal: '', relationship: '', Yes: '', No: '' })
    const formData = (e) => {
        const { name, value } = e.target;
        setHandleForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const nextPage = () => {
        navigate('/education',{formDetails:handleForm})
    }
    return (
        <>
            <div className="Admission">
                <div className="form">
                    <h2>COLLEGE ADMISSIONS FORM</h2>
                    <p>Enter your admission information below</p>
                    <span className="line">______________________________________________________________________________________________________________________________________________________________</span>
                </div>
                <div className="name">
                    <span className="first">Name</span>
                </div>
                <div className="text">
                    <input className="firsts" type="text" required maxLength={20} name="firstName" value={handleForm.firstName} onChange={formData}></input>
                    <input className="firsts" type="text" required maxLength={20} name="secondName" value={handleForm.secondName} onChange={formData}></input>
                    <input className="firsts" type="text" required maxLength={20} name="thirdName" value={handleForm.thirdName} onChange={formData}></input>
                </div>
                <div className="boxes">
                    <span className="box">First name</span>
                    <span className="box">Middle name</span>
                    <span className="box">Last name</span>
                </div>
                <div className="name">
                    <span className="first">Birth Date</span>
                </div>
                <div className="date">
                    <select className="drop">
                        <option disabled selected>Please Select a Month</option>
                        {
                            monthName.map((month) => (
                                <option>{month}</option>
                            )
                            )
                        }
                    </select>
                    <select className="drop">
                        <option disabled selected>Please Select a Day</option>
                        {
                            days.map((d) => (
                                <option>{d}</option>
                            )
                            )
                        }
                    </select>
                    <select className="drop">
                        <option disabled selected>Please Select a Year</option>
                        {
                            years.map((y) => (
                                <option>{y}</option>
                            )
                            )
                        }
                    </select>
                </div>
                <div className="noor">
                    <span className="noor1">Month</span>
                    <span className="noor1">Day</span>
                    <span className="noor1">Year</span>
                </div>
                <div className="technology">
                    <div className="iqbal">
                        <div className="gender">
                            <div className="male">
                                <span className="first">Gender</span>
                            </div>
                            <div className="operate">
                                <div className="web">
                                    <div className="female">
                                        <input type="checkbox" name="female" value={handleForm.female} onChange={formData} />Male
                                    </div>
                                </div>
                                <div className="web">
                                    <div className="female">
                                        <input type="checkbox" name="male" value={handleForm.male} onChange={formData} />Female
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="iqbal">
                        <div className="gender">
                            <div className="male">
                                <span className="first">Of Which Country are you a citizen?</span>
                            </div>
                            <select className="drop">
                                <option disabled selected>Please Select </option>
                                {
                                    country.map((c) => (
                                        <option>{c}</option>
                                    )
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="technology">
                    <div className="iqbal">
                        <div className="gender">
                            <div className="male">
                                <span className="first">Phone</span>
                            </div>
                            <div className="address">
                                <input className="second" type="text" required max={20} placeholder=" (000) 000-000" name="phone" value={handleForm.phone} onChange={formData}></input>
                            </div>
                        </div>
                    </div>
                    <div className="iqbal">
                        <div className="gender">
                            <div className="male">
                                <span className="first">E-mail Address</span>
                            </div>
                            <div className="address">
                                <input className="second" type="text" required max={20} placeholder=" ex.myname@example.com" name="email" value={handleForm.email} onChange={formData}></input>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="date">
                    <span className="first">Mailing Address</span>
                </div>
                <div className="street">
                    <input className="third" type="text"  name="address" value={handleForm.address} onChange={formData}></input><br />
                    <div className="boxs">
                        <span className="boxe">Street Address</span>
                    </div>
                </div>
                <div className="street">
                    <input className="third" type="text" name="address" value={handleForm.address} onChange={formData}></input><br />
                    <div className="boxs">
                        <span className="boxe">Street Address Line 2</span>
                    </div>
                </div>
                <div className="technology">
                    <div className="iqbal">
                        <div className="gender">
                            <div className="address">
                                <input className="second" type="text" required max={20} name="city" value={handleForm.city} onChange={formData}></input>
                                <div className="boxs">
                                    <span className="boxe">City</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="iqbal">
                        <div className="gender">
                            <div className="address">
                                <input className="second" type="text" required max={20} name="state" value={handleForm.state} onChange={formData}></input>
                                <div className="boxs">
                                    <span className="boxe">State/Province</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="street">
                    <input className="third" type="text" required maxLength={20} name="postal" value={handleForm.postal} onChange={formData}></input><br />
                    <div className="boxs">
                        <span className="boxe">Postal / Zip Code</span>
                    </div>
                </div>
                <div className="technology">
                    <div className="iqbal">
                        <div className="gender">
                            <div className="male">
                                <span className="first">Emergency Contact</span>
                            </div>
                            <div className="operate">
                                <div className="web">
                                    <div className="female">
                                        <input type="text" className="book" name="firstName" value={handleForm.firstName} onChange={formData} />
                                    </div>
                                    <div className="boxs">
                                        <span className="boxe">First Name</span>
                                    </div>
                                </div>
                                <div className="web">
                                    <div className="female">
                                        <input type="text" className="book" name="lastName" value={handleForm.lastName} onChange={formData} />
                                    </div>
                                    <div className="boxs">
                                        <span className="boxe">Last name</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="iqbal">
                        <div className="gender">
                            <div className="male">
                                <span className="first">Relationship</span>
                            </div>
                            <input className="contact" type="text" required max={20} name="relationship" value={handleForm.relationship} onChange={formData}></input>
                        </div>
                    </div>
                </div>
                <div className="technology">
                    <div className="iqbal">
                        <div className="gender">
                            <div className="male">
                                <span className="first">Email</span>
                            </div>
                            <div className="address">
                                <input className="second" type="text" required max={20} name="email" value={handleForm.email} onChange={formData} ></input>
                            </div>
                            <div className="boxs">
                                <span className="boxe">example@example.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="iqbal">
                        <div className="gender">
                            <div className="male">
                                <span className="first">Phone Number</span>
                            </div>
                            <div className="address">
                                <input className="second" type="text" required max={20} placeholder=" (000) 000-0000" name="phone" value={handleForm.phone} onChange={formData}></input>
                            </div>
                            <div className="boxs">
                                <span className="boxe">Please enter a valid phone number</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="speak">
                    <div className="speaks">
                        <span className="speaker">Do you speak any languages other than English?</span>
                    </div>
                    <div className="operates">
                        <div className="web">
                            <div className="females">
                                <input type="checkbox" name="Yes" value={handleForm.Yes} onChange={formData} />Yes
                            </div>
                        </div>
                        <div className="web">
                            <div className="females">
                                <input type="checkbox" name="No" value={handleForm.No} onChange={formData} />No
                            </div>
                        </div>
                    </div>
                </div>
                <span className="lines">____________________________________________________________________________________________________________________________________________</span>
                <button className="next" onClick={nextPage}>Next</button>

            </div >



        </>
    )
}
export default Admission