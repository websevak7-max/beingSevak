import { Link } from 'react-router-dom';

const Careers = () => {
  return (
    <>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:'Open Sans',sans-serif;color:#1a1a2e;overflow-x:hidden}
        .tax-box{width:100%;height:70px;display:flex;justify-content:center;align-items:center;text-align:center;background:linear-gradient(to right,#009BD4 0%,#0285C3 25%,#046FB1 50%,#074D97 75%,#083D8B 100%);color:#fff;border-radius:0px;margin:20px 0;padding:10px}
        .tax-box h1{font-family:'Montserrat',sans-serif;font-size:28px;font-weight:800;letter-spacing:2px;color:#fff;margin:0}
        .careers-section{padding:60px 6%;background:#f4f7fb}
        .careers-inner{max-width:1100px;margin:0 auto}
        .section-title{text-align:center;margin-bottom:50px}
        .section-title h2{font-family:'Montserrat',sans-serif;font-size:38px;font-weight:800;color:#03163E;margin-bottom:10px}
        .section-title h2 span{color:#00A2D9}
        .section-title p{font-size:16px;color:#4a5568;max-width:600px;margin:0 auto;line-height:1.6}
        .careers-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start}
        .info-card{background:#fff;border-radius:20px;padding:35px;box-shadow:0 10px 30px rgba(0,0,0,0.06);margin-bottom:24px;transition:0.4s ease}
        .info-card:hover{background:#00a3da;transform:translateY(-4px);box-shadow:0 15px 40px rgba(0,163,218,0.2)}
        .info-card:hover h3,.info-card:hover p,.info-card:hover ul li,.info-card:hover ul li i{color:#fff}
        .info-card:hover h3 i{background:rgba(255,255,255,0.2)}
        .info-card h3{font-family:'Montserrat',sans-serif;font-size:20px;font-weight:700;color:#03163E;margin-bottom:12px;display:flex;align-items:center;gap:12px}
        .info-card h3 i{width:44px;height:44px;background:linear-gradient(135deg,#00A2D9,#0072a0);border-radius:12px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:20px}
        .info-card p{font-size:14px;color:#4a5568;line-height:1.7;margin-left:56px}
        .info-card ul{list-style:none;margin-left:56px}
        .info-card ul li{font-size:14px;color:#4a5568;padding:6px 0;display:flex;align-items:center;gap:10px}
        .info-card ul li i{color:#00A2D9;font-size:12px}
        .form-card{background:#fff;border-radius:20px;padding:35px;box-shadow:0 10px 30px rgba(0,0,0,0.06)}
        .form-card h3{font-family:'Montserrat',sans-serif;font-size:22px;font-weight:700;color:#03163E;margin-bottom:8px;text-align:center}
        .form-card > p{text-align:center;font-size:14px;color:#4a5568;margin-bottom:28px}
        .form-group{margin-bottom:20px}
        .form-group label{display:block;font-size:13px;font-weight:600;color:#03163E;margin-bottom:6px}
        .form-group label span{color:#e74c3c}
        .form-group input,.form-group select,.form-group textarea{width:100%;padding:12px 16px;border:2px solid #e8edf2;border-radius:10px;font-size:14px;font-family:'Open Sans',sans-serif;color:#1a1a2e;transition:0.3s;background:#fafbfc}
        .form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:#00A2D9;outline:none;box-shadow:0 0 0 3px rgba(0,163,218,0.1);background:#fff}
        .form-group textarea{resize:vertical;min-height:100px}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .submit-btn{width:100%;padding:14px;background:linear-gradient(135deg,#00A2D9,#0072a0);color:#fff;font-family:'Montserrat',sans-serif;font-weight:700;font-size:16px;border:none;border-radius:12px;cursor:pointer;transition:0.4s;letter-spacing:0.5px}
        .submit-btn:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(0,163,218,0.3)}
        .field-error{color:#e74c3c;font-size:12px;margin-top:4px;display:block}
        .volunteer-benefits{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:20px}
        .benefit-item{background:#f4f7fb;border-radius:12px;padding:16px;text-align:center;transition:0.3s}
        .benefit-item i{font-size:24px;color:#00A2D9;margin-bottom:8px;display:block}
        .benefit-item h4{font-family:'Montserrat',sans-serif;font-size:14px;font-weight:700;color:#03163E;margin-bottom:4px}
        .benefit-item p{font-size:12px;color:#4a5568;margin:0}
        .benefit-item:hover{transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,0.12);background:linear-gradient(135deg,#00a3da,#315270)}
        .benefit-item:hover h4,.benefit-item:hover p,.benefit-item:hover i{color:#fff}
        @media(max-width:860px){.careers-grid{grid-template-columns:1fr}.form-row{grid-template-columns:1fr}.volunteer-benefits{grid-template-columns:1fr}.section-title h2{font-size:28px}}
      `}</style>

      <section className="tax-box">
        <h1>Careers</h1>
      </section>

      <section className="careers-section">
        <div className="careers-inner">
          <div className="section-title">
            <h2>Join Our <span>Mission</span></h2>
            <p>Be part of a team dedicated to selfless service and social change. Explore career opportunities or volunteer with us.</p>
          </div>

          <div className="careers-grid">
            <div>
              <div className="info-card">
                <h3><i className="fas fa-bullseye"></i> Why Join Us?</h3>
                <p>Being Sevak Charitable Trust offers a meaningful work environment where you can make a real difference. We value passion, integrity, and a commitment to serving communities.</p>
              </div>

              <div className="info-card">
                <h3><i className="fas fa-check-circle"></i> Current Openings</h3>
                <ul>
                  <li><i className="fas fa-chevron-right"></i> Program Manager</li>
                  <li><i className="fas fa-chevron-right"></i> Social Media Coordinator</li>
                  <li><i className="fas fa-chevron-right"></i> Field Volunteer</li>
                  <li><i className="fas fa-chevron-right"></i> Fundraising Associate</li>
                  <li><i className="fas fa-chevron-right"></i> Content Writer</li>
                </ul>
              </div>

              <div className="info-card">
                <h3><i className="fas fa-heart"></i> Volunteer Benefits</h3>
                <div className="volunteer-benefits">
                  <div className="benefit-item">
                    <i className="fas fa-award"></i>
                    <h4>Certificate</h4>
                    <p>Official recognition for your service</p>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-graduation-cap"></i>
                    <h4>Skill Dev</h4>
                    <p>Learn &amp; grow through real work</p>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-users"></i>
                    <h4>Network</h4>
                    <p>Connect with like-minded people</p>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-hand-holding-heart"></i>
                    <h4>Impact</h4>
                    <p>Directly contribute to social change</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-card">
              <h3>Volunteer Application</h3>
              <p>Fill out the form below and our team will get back to you.</p>

              <form id="volunteerForm">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name <span>*</span></label>
                    <input type="text" required placeholder="Your full name" onInput={(e) => { const err = e.target.parentElement.querySelector('.field-error'); if (e.target.value && !/^[A-Za-z\s]+$/.test(e.target.value)) { e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, ''); if (!err) { e.target.insertAdjacentHTML('afterend', '<span class="field-error">Invalid name</span>'); setTimeout(() => e.target.parentElement.querySelector('.field-error')?.remove(), 2000); } } else if (err) { err.remove(); } }} />
                  </div>
                  <div className="form-group">
                    <label>Email <span>*</span></label>
                    <input type="text" required placeholder="Your email address" onInput={(e) => { const err = e.target.parentElement.querySelector('.field-error'); if (e.target.value && !/^[A-Za-z0-9@.]+$/.test(e.target.value)) { e.target.value = e.target.value.replace(/[^A-Za-z0-9@.]/g, ''); if (!err) { e.target.insertAdjacentHTML('afterend', '<span class="field-error">Invalid email</span>'); setTimeout(() => e.target.parentElement.querySelector('.field-error')?.remove(), 2000); } } else if (err) { err.remove(); } }} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone <span>*</span></label>
                    <input type="tel" required placeholder="Your phone number" maxLength={10} onInput={(e) => { const err = e.target.parentElement.querySelector('.field-error'); e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10); if (e.target.value && e.target.value.length === 10) { if (!err) { e.target.insertAdjacentHTML('afterend', '<span class="field-error">10 digit number accept only</span>'); setTimeout(() => e.target.parentElement.querySelector('.field-error')?.remove(), 2000); } } else if (err) { err.remove(); } }} />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" placeholder="Your city" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Area of Interest <span>*</span></label>
                  <select required>
                    <option value="">Select an option</option>
                    <option>Program Management</option>
                    <option>Field Volunteering</option>
                    <option>Fundraising</option>
                    <option>Content &amp; Social Media</option>
                    <option>Teaching &amp; Education</option>
                    <option>Healthcare Support</option>
                    <option>Administrative Support</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Availability</label>
                  <select>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Weekends Only</option>
                    <option>Flexible</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Why do you want to join us? <span>*</span></label>
                  <textarea required placeholder="Tell us about your motivation and experience..."></textarea>
                </div>
                <button type="submit" className="submit-btn">SUBMIT APPLICATION</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
