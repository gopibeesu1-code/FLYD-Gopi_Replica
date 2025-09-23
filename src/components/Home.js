import React from "react";
import Student from "../components/studenttable/student";
import studentimg from "../assets/student.png";  
import Accommodationsupport from "../assets/Accommodationsupport.png";
import Admissionsuccessrate from "../assets/admissionsuccessrate.png"
import Completeapplicationssupport from "../assets/Completeapplicationssupport.png";
import Feepayment from "../assets/Feepayment.png";
import GuidanceonVisa from "../assets/guidanceonVisa.png";
import Identifying from "../assets/Identifying.png";
import Inputsoncareeropportunities from "../assets/Inputsoncareeropportunities.png";
import Mockinterviewsessions from "../assets/Mockinterviewsessions.png";
import Personalizedcounselling from "../assets/personalizedcounselling.png";
import Universitywebinars from "../assets/Universitywebinars.png";
import Predeparturebriefing from "../assets/Predeparturebriefing.png";
import Visaprocedures from "../assets/visaprocedures.png";
import trustedpartner from "../assets/trustedpartner.png";
import Scholarships from "../assets/Scholarships.png";
import expertise from "../assets/expertise.png";
import guidance from "../assets/guidance.png";
import directrepresentative from "../assets/directrepresentative.png";
import affordablerange from "../assets/affordablerange.png";
import extensivesupport from "../assets/extensivesupport.png";
import FirstConsultant from "../assets/FirstConsultant.png";
import Branches from "../assets/Branches.png";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {

const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // typing chesthe error clear avvudam
  };

  const validate = () => {
    const { name, email, phone, country } = formData;
    let newErrors = {};

    if (!name) newErrors.name = "Please enter your name";
    if (!email) newErrors.email = "Please enter your email";
    if (!phone) newErrors.phone = "Please enter your phone number";
    if (!country) newErrors.country = "Please enter your country";

    // Email & phone validation
    const emailPattern = /\S+@\S+\.\S+/;
    const phonePattern = /^[0-9]{10}$/;

    if (email && !emailPattern.test(email))
      newErrors.email = "Invalid email address";

    if (phone && !phonePattern.test(phone))
      newErrors.phone = "Phone must be 10 digits";
   
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setMessage({ type: "error", text: "Please fix the errors above" });
      return false;
    }

    // ✅ Success message
    setMessage({ type: "success", text: "Register Success!" });
    
    // ✅ 1s తర్వాత fields reset అవ్వాలి
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
      });
      setMessage(null); // message కూడా పోతుంది
    }, 1000);

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };


  return (
    <div>
      <div>
      </div>
      
    <div className="home-bg">
      <div className="main-bg">
        <div className="h3">
          <h3>
              <span>Your Best Study</span><br/>
              <span>Abroad Consultant for</span><br/>
              <span> Europe </span>
          </h3>
        </div>
        <div>
          <img src={studentimg} alt="studentlogo" className="student-img"/>
        </div>
        
<div>
      <h1 className="h1">Get Register</h1>

      {/* Top Message */}
      {message && (
        <div className={`msg-box ${message.type}`}>
          {message.text}
        </div>
      )}

      <div className="login">
        <form onSubmit={handleSubmit}>
          <div>
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={`login-holders ${errors.name ? "error-border" : ""}`     }
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}

            {/* Email */}
            <input
              type="text"
              name="email"
              placeholder="Email"
              className={`login-holders ${errors.email ? "error-border" : ""}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className={`login-holders ${errors.phone ? "error-border" : ""}`}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}

            {/* Country */}
            {/* Country */}
<select 
  name="country"
  className={`select ${errors.country ? "error-border" : "" }`}
  value={formData.country}
  onChange={handleChange}
>
  <option value="">-- Select Country --</option>
  <option value="India">India</option>
  <option value="United States">United States</option>
  <option value="United Kingdom">United Kingdom</option>
  <option value="Canada">Canada</option>
  <option value="Australia">Australia</option>
  <option value="Germany">Germany</option>
  <option value="France">France</option>
  <option value="Italy">Italy</option>
  <option value="Japan">Japan</option>
  <option value="China">China</option>
  <option value="Singapore">Singapore</option>
  <option value="New Zealand">New Zealand</option>
  <option value="South Africa">South Africa</option>
</select>
{errors.country && <p className="error-text">{errors.country}</p>}


          </div>

          <div className="login-btn">
            <button type="submit" className="login-button">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  </div>

    <div className="achievements">
      <h2 className="title">
        Our <span>Achievements</span>
      </h2>
      <p className="subtitle">
        Advising students the best possible guidance who intend to study abroad, 
        based on their geographic and financial consideration.
      </p>

      <div className="cards">
        <div className="card">
          <h3>11,000<span>+</span></h3>
          <p>Admitted Students</p>
        </div>
        <div className="card">
          <h3>10<span>+</span></h3>
          <p>Years of Expertise</p>
        </div>
        <div className="card">
          <h3>200<span>+</span></h3>
          <p>Partner Universities</p>
        </div>
        <div className="card">
          <h3>50<span>+</span></h3>
          <p>Crores worth of Scholarships</p>
        </div>
        <div className="card">
          <h3>5,000<span>+</span></h3>
          <p>Admissions in World Top 500</p>
        </div>
      </div>
    </div>

    <div className="achievement">
      <h1 className="title2">How FLY Ur Dream can Help you?</h1>
      <div className="cards2">

        <div className="card2 card-matter">
          <img src={Personalizedcounselling} className="card-images"/><br/>
          <p>Personalized 1:1 Counselling</p>
        </div>

        <div className="card2 card-matter">
          <img src={Identifying} className="card-images"/><br/>
          <p>Identifying the right options as per your profile, budget & aspirations</p>
        </div>

        <div className="card2 card-matter">
          <img src={Admissionsuccessrate} className="card-images"/><br/>
          <p>Providing inputs to improve your admission success rate</p>
        </div>

        <div className="card2 ">
          <img src={Universitywebinars} className="card-images card-matter"/><br/>
          <p>University webinars & Delegate interactions</p>
        </div>
      </div>

      <div className="cards2">

        <div className="card2 card-matter">
          <img src={Inputsoncareeropportunities} className="card-images"/><br/>
          <p>Inputs on career opportunities</p>
        </div>

        <div className="card2 card-matter">
          <img src={Completeapplicationssupport} className="card-images"/><br/>
          <p>Complete applications support</p>
        </div>
        <div className="card2 card-matter">
          <img src={Mockinterviewsessions} className="card-images"/><br/>
          <p>Mock interview sessions</p>
        </div>
        <div className="card2 card-matter">
          <img src={Feepayment} className="card-images"/><br/>
          <p>Fee payment to foreign university</p>
        </div>
      </div>

      <div className="cards2">

        <div className="card2 card-matter">
          <img src={Accommodationsupport} className="card-images"/><br/>
          <p>Accommodation support</p>
        </div>

        <div className="card2 card-matter">
          <img src={GuidanceonVisa} className="card-images"/><br/>
          <p>Detailed guidance on Visa funding</p>
        </div>

        <div className="card2 card-matter">
          <img src={Visaprocedures} className="card-images"/><br/>
          <p>Hand holding for Visa procedures</p>
        </div>

        <div className="card2 card-matter">
          <img src={Predeparturebriefing} className="card-images"/><br/>
          <p>Pre-departure briefing and Cultural understanding</p>
        </div>
      </div>
    </div>




    <div className="why-flyurdream">
          <div>
      <h2 className="title2">
        Why <span>Fly Ur Dream</span>?
      </h2>

      <div className="cards2">

        <div className="card2 card-matter">
          <img src={expertise} className="card-images"/><br/>
          <p>Inputs on career opportunities</p>
        </div>

        <div className="card2 card-matter">
          <img src={guidance} className="card-images"/><br/>
          <p>Complete applications support</p>
        </div>
        <div className="card2 card-matter">
          <img src={FirstConsultant} className="card-images"/><br/>
          <p>Mock interview sessions</p>
        </div>
        <div className="card2 card-matter">
          <img src={directrepresentative} className="card-images"/><br/>
          <p>Fee payment to foreign university</p>
        </div>
      </div>

      <div className="cards2">

        <div className="card2 card-matter">
          <img src={trustedpartner} className="card-images"/><br/>
          <p>Accommodation support</p>
        </div>

        <div className="card2 card-matter">
          <img src={affordablerange} className="card-images"/><br/>
          <p>Detailed guidance on Visa funding</p>
        </div>

        <div className="card2 card-matter">
          <img src={Scholarships} className="card-images"/><br/>
          <p>Hand holding for Visa procedures</p>
        </div>

        <div className="card2 card-matter">
          <img src={extensivesupport} className="card-images"/><br/>
          <p>Pre-departure briefing and Cultural understanding</p>
        </div>
      </div>

    </div>
    </div>
<Student/>
   <div>
    <div>
      <h2 className="title2">
        Our <span>Branches</span>
      </h2>
      <img src={Branches} alt='barnches-logo' className="branch-image"/>
    </div>

    <div className="cards-container">
  {/* Hyderabad */}
  <div className="card3">
    <h2 className="h2">
      <MdLocationOn className="icon location" /> India
    </h2>
    <div className="address">
      <p>
        Address: FLAT NO 601, C9WM+547, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081
      </p>
      <p>
        <MdPhone className="icon" /> 000-00000000 | 11111111
      </p>
      <p>
        <FaMobileAlt className="icon" /> +91 96666 69160
      </p>
      <p>
        <MdEmail className="icon" /> hyd@flyurdream.com
      </p>
    </div>
  </div>

  {/* Vijayawada */}
  <div className="card3">
    <h2 className="h2">
      <MdLocationOn className="icon location" /> United Arab Emirates

    </h2>
    <div className="address">
      <p>
        Address: Shams Business Center, Sharjah Media City, P.O.Box 515000, Sharjah, United Arab Emirates.
      </p>
      <p>
        <MdPhone className="icon" /> 000-00000000 | 11111111
      </p>
      <p>
        <FaMobileAlt className="icon" /> +91 96666 69160
      </p>
      <p>
        <MdEmail className="icon" /> UAE@flyurdream.com
      </p>
    </div>
  </div>

    <div className="card3">
    <h2 className="h2">
      <MdLocationOn className="icon location" /> UK (Head Quarters)

    </h2>
    <div className="address">
      <p>
        Address: Vista Business Centre, 50 Salisbury Road, Hounslow,
England, TW4 6JQ.
      </p>
      <p>
        <MdPhone className="icon" /> 000-00000000 | 11111111
      </p>
      <p>
        <FaMobileAlt className="icon" /> +91 96666 69160
      </p>
      <p>
        <MdEmail className="icon" /> UK@flyurdream.com
      </p>
    </div>
  </div>
</div>

    </div>
  </div>
);
};

export default Home;
