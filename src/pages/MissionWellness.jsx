import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

export default function MissionWellness() {
  const iframeRef = useRef(null);

  useEffect(() => {
    function handleMessage(e) {
      if (iframeRef.current && typeof e.data === 'number') {
        iframeRef.current.style.height = e.data + 'px';
      }
    }
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <>
      <style>{`
        .mission-wellness * { margin: 0; padding: 0; box-sizing: border-box; }
        .mission-wellness { font-family: 'Montserrat', sans-serif; background: #f4f6f8; color: #1d2b36; overflow-x: hidden; }
        .mission-wellness img { width: 100%; display: block; }

        .mission-wellness .tax-box {
          width: 100%; height: 70px; display: flex; justify-content: center; align-items: center;
          text-align: center; background: linear-gradient(to right, #009BD4 0%, #0285C3 25%, #046FB1 50%, #074D97 75%, #083D8B 100%);
          color: #fff; margin: 10px 0; padding: 10px; position: relative; overflow: hidden; transition: 0.4s ease;
        }
        .mission-wellness .tax-box h1 { font-size: 28px; font-weight: 700; position: relative; z-index: 2; }
        .mission-wellness .tax-box p { font-size: 16px; line-height: 1.6; position: relative; z-index: 2; }
        .mission-wellness .tax-box::before {
          content: ""; position: absolute; width: 200%; height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.15), transparent);
          top: -50%; left: -50%; animation: mwShine 6s linear infinite;
        }
        .mission-wellness .tax-box:hover { transform: translateY(-5px) scale(1.01); box-shadow: 0 25px 60px rgba(0,163,218,0.35); }
        @keyframes mwShine { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        .mission-wellness .hero-section {
          width: 100%; min-height: 100vh; display: flex; align-items: center; justify-content: center;
          gap: 40px; padding: 50px 5%; overflow: hidden;
          background: radial-gradient(circle at top left, #dff6ff 0%, transparent 35%),
          radial-gradient(circle at bottom right, #c7ecff 0%, transparent 35%),
          linear-gradient(135deg, #ffffff, #eef8ff);
        }
        .mission-wellness .hero-left { flex: 1; max-width: 520px; }
        .mission-wellness .tag { color: #00a3da; display: inline-block; margin-bottom: 25px; font-weight: 800; font-size: 30px; letter-spacing: 1px; background: none; }
        .mission-wellness .hero-left h1 { font-size: 62px; line-height: 1.1; font-weight: 800; margin-bottom: 22px; color: #1c2b36; }
        .mission-wellness .hero-left h1 span { color: #00a3da; }
        .mission-wellness .hero-left p { font-size: 18px; line-height: 1.9; color: #51606d; margin-bottom: 30px; }
        .mission-wellness .hero-buttons { display: flex; gap: 15px; flex-wrap: wrap; }
        .mission-wellness .primary-btn {
          text-decoration: none; padding: 14px 26px; border-radius: 50px; font-size: 18px; font-weight: 700;
          transition: 0.3s; background: #00a3da; color: #fff; box-shadow: 0 15px 35px rgba(0,163,218,0.35);
        }
        .mission-wellness .primary-btn:hover { transform: translateY(-4px); }
        .mission-wellness .hero-right {
          flex: 1; display: flex; justify-content: center; align-items: center;
          position: relative; max-width: 500px; min-height: 500px;
        }
        .mission-wellness .main-image-card {
          width: 100%; max-width: 480px; position: relative; z-index: 2;
          transform: perspective(1000px) rotate(-3deg);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15), 0 10px 25px rgba(0,163,218,0.12);
          transition: 0.6s ease; animation: mwFloatCard 4s ease-in-out infinite;
        }
        .mission-wellness .main-image-card img { width: 100%; display: block; object-fit: cover; border-radius: 30px; transition: 0.6s ease; }
        .mission-wellness .main-image-card:hover { transform: perspective(1000px) rotate(0deg) scale(1.05); box-shadow: 0 40px 90px rgba(0,0,0,0.25); }
        @keyframes mwFloatCard {
          0% { transform: perspective(1000px) rotate(-3deg) translateY(0); }
          50% { transform: perspective(1000px) rotate(-3deg) translateY(-12px); }
          100% { transform: perspective(1000px) rotate(-3deg) translateY(0); }
        }
        .mission-wellness .floating-card {
          position: absolute; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px);
          padding: 15px 18px; border-radius: 20px; min-width: 160px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.10); z-index: 5; animation: mwFloat 3s ease-in-out infinite;
        }
        .mission-wellness .floating-card h3 { color: #00a3da; font-size: 34px; margin-bottom: 4px; }
        .mission-wellness .floating-card p { font-size: 12px; font-weight: 600; color: #51606d; }
        .mission-wellness .card1 { top: -10px; left: -10px; }
        .mission-wellness .card2 { bottom: -10px; right: -10px; }
        @keyframes mwFloat { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }

        .mission-wellness .donation-frame { width: 100%; min-height: 550px; border: none; display: block; }

        .mission-wellness .about-section { width: 100%; display: flex; align-items: center; justify-content: center; gap: 45px; padding: 45px 5%; background: #fff; position: relative; z-index: 1; overflow: hidden; isolation: isolate; }
        .mission-wellness .about-image { position: relative; overflow: hidden; isolation: isolate; }
        .mission-wellness .about-image img { border-radius: 35px; height: 450px; object-fit: cover; box-shadow: 0 25px 50px rgba(0,0,0,0.12); transition: 0.5s ease; }
        .mission-wellness .about-image img:hover { transform: scale(1.03); box-shadow: 0 40px 90px rgba(0,0,0,0.2); }
        .mission-wellness .about-image::before {
          content: ""; position: absolute; top: 20px; left: 20px; width: 100%; height: 100%;
          border-radius: 35px; background: linear-gradient(135deg, rgba(0,163,218,0.2), transparent);
          filter: blur(12px); z-index: -1;
        }
        .mission-wellness .about-content { flex: 1; max-width: 520px; }
        .mission-wellness .mini-title { color: #00a3da; font-weight: 700; font-size: 30px; margin-bottom: 18px; display: block; }
        .mission-wellness .about-content h2 { font-size: 42px; line-height: 1.2; margin-bottom: 22px; }
        .mission-wellness .about-content h2 span { color: #00a3da; }
        .mission-wellness .about-content p { font-size: 15px; line-height: 1.8; color: #51606d; }
        .mission-wellness .feature-boxes { display: flex; flex-wrap: wrap; gap: 15px; margin-top: 28px; }
        .mission-wellness .feature-card {
          background: #f7fcff; padding: 20px; border-radius: 22px; transition: 0.3s ease;
          cursor: pointer; flex: 1 1 calc(50% - 15px); min-width: 160px;
        }
        .mission-wellness .feature-card:hover { background: #00a3da; }
        .mission-wellness .feature-card:hover h4, .mission-wellness .feature-card:hover p, .mission-wellness .feature-card:hover .icon { color: #fff; }
        .mission-wellness .icon { font-size: 28px; margin-bottom: 12px; }
        .mission-wellness .feature-card h4 { font-size: 17px; margin-bottom: 8px; }
        .mission-wellness .feature-card p { font-size: 13px; }

        .mission-wellness .impact-section {
          width: 100%; padding: 60px 5%;
          background: radial-gradient(circle at top left, #dff6ff 0%, transparent 35%),
          linear-gradient(135deg, #f4f6f8, #eef8ff);
        }
        .mission-wellness .section-heading { text-align: center; margin-bottom: 35px; }
        .mission-wellness .section-heading span { color: #00a3da; font-weight: 800; font-size: 20px; }
        .mission-wellness .section-heading h2 { font-size: 40px; margin-top: 10px; }
        .mission-wellness .impact-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; }
        .mission-wellness .impact-card {
          background: #fff; padding: 28px 18px; text-align: center; border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06); transition: 0.3s ease; position: relative; overflow: hidden; cursor: pointer;
        }
        .mission-wellness .impact-card::before {
          content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 0%;
          background: #00a3da; transition: 0.4s ease; z-index: 1;
        }
        .mission-wellness .impact-card:hover::before { height: 100%; }
        .mission-wellness .impact-card h3, .mission-wellness .impact-card p { position: relative; z-index: 2; transition: 0.3s ease; }
        .mission-wellness .impact-card:hover h3, .mission-wellness .impact-card:hover p { color: #fff; }

        .mission-wellness .techvision-wrap { width: 100%; padding: 70px 7%; background: #fff; overflow: hidden; }
        .mission-wellness .techvision-container { display: flex; align-items: center; justify-content: space-between; gap: 70px; flex-wrap: wrap; }
        .mission-wellness .techvision-image-side { flex: 1; min-width: 320px; }
        .mission-wellness .techvision-image-box {
          position: relative; border-radius: 35px; overflow: hidden; background: #fff;
          box-shadow: 0 25px 60px rgba(0,0,0,0.12), 0 12px 30px rgba(0,163,218,0.18); transition: 0.5s;
        }
        .mission-wellness .techvision-image-box:hover { transform: translateY(-10px) rotate(-1deg); }
        .mission-wellness .techvision-image-box img { width: 100%; height: 620px; object-fit: cover; display: block; }
        .mission-wellness .techvision-content-side { flex: 1; min-width: 320px; }
        .mission-wellness .techvision-mini-title {
          display: inline-block; padding: 10px 22px; background: #00a3da; color: #fff; border-radius: 60px;
          font-size: 20px; font-weight: 700; margin-bottom: 20px; box-shadow: 0 10px 25px rgba(163,218,0,0.25);
        }
        .mission-wellness .techvision-content-side h3 { font-size: 38px; line-height: 1.1; color: #111; margin-bottom: 28px; font-weight: 800; }
        .mission-wellness .techvision-content-side p { font-size: 17px; line-height: 1.9; color: #555; margin-bottom: 18px; }
        .mission-wellness .techvision-feature-grid { display: flex; flex-wrap: wrap; gap: 18px; margin-top: 35px; }
        .mission-wellness .techvision-feature-card {
          flex: 1; min-width: 180px; background: #fff; border: 1px solid #e8f6fc; padding: 28px 22px;
          border-radius: 24px; transition: 0.4s;
          box-shadow: 0 12px 30px rgba(0,0,0,0.05), 0 8px 20px rgba(0,163,218,0.08);
        }
        .mission-wellness .techvision-feature-card:hover { transform: translateY(-8px); }
        .mission-wellness .techvision-feature-card h3 { font-size: 22px; color: #00a3da; margin-bottom: 10px; font-weight: 700; }
        .mission-wellness .techvision-feature-card span { font-size: 15px; color: #666; line-height: 1.7; }
        .mission-wellness .techvision-btn {
          display: inline-block; margin-top: 40px; padding: 16px 35px; background: #00a3da; color: #fff;
          text-decoration: none; border-radius: 60px; font-weight: 600; transition: 0.4s;
          box-shadow: 0 15px 30px rgba(0,163,218,0.25);
        }
        .mission-wellness .techvision-btn:hover { background: #008dbd; transform: translateY(-5px); }

        .mission-wellness .sevak-donation {
          width: 100%; background: linear-gradient(to right, #009BD4 0%, #0285C3 25%, #046FB1 50%, #074D97 75%, #083D8B 100%);
          padding: 50px 4%; min-height: 120px; display: flex; align-items: center;
        }
        .mission-wellness .sevak-donation-content { width: 100%; display: flex; justify-content: space-between; align-items: center; min-height: 120px; }
        .mission-wellness .sevak-left { display: flex; flex-direction: column; gap: 4px; }
        .mission-wellness .sevak-tag { font-size: 20px; font-weight: 700; color: #fff; }
        .mission-wellness .sevak-title { font-size: 41px; margin: 0; line-height: 1.2; color: #fff; }
        .mission-wellness .sevak-desc { font-size: 15px; margin: 0; color: #fff; }
        .mission-wellness .sevak-btn {
          display: inline-block; padding: 15px 36px; background: #00a3da; color: #fff; text-decoration: none;
          border-radius: 6px; font-weight: 700; font-size: 16px; white-space: nowrap; transition: 0.3s;
        }
        .mission-wellness .sevak-btn:hover { transform: translateY(-2px); }

        .mission-wellness .testimonial-section { padding: 50px 5%; }
        .mission-wellness .section-header { text-align: center; margin-bottom: 40px; }
        .mission-wellness .section-header h2 { font-size: 42px; margin: 18px 0; }
        .mission-wellness .testimonial-grid {
          width: 100%; max-width: 1200px; margin: auto; display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; align-items: stretch;
        }
        .mission-wellness .testimonial-card {
          width: 100%; background: #fff; padding: 30px; border-radius: 28px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.07); transition: 0.4s; overflow: hidden; position: relative;
        }
        .mission-wellness .testimonial-card:hover { transform: translateY(-10px); }
        .mission-wellness .testimonial-card p { line-height: 2; color: #6c7d8e; margin-bottom: 25px; }
        .mission-wellness .testimonial-card h4 { color: #00a3da; }
        .mission-wellness .testimonial-card h4, .mission-wellness .testimonial-card p { position: relative; z-index: 3; transition: 0.4s ease; }
        .mission-wellness .testimonial-card:hover h4, .mission-wellness .testimonial-card:hover p { color: #fff !important; }
        .mission-wellness .testimonial-card::before {
          content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 0%;
          background: #00a3da; transition: 0.4s ease; z-index: 1; border-radius: 28px;
        }
        .mission-wellness .testimonial-card:hover::before { height: 100%; }
        .mission-wellness .testimonial-card > * { position: relative; z-index: 2; }

        @media (max-width: 991px) {
          .mission-wellness .hero-section, .mission-wellness .about-section { flex-direction: column; text-align: center; }
          .mission-wellness .about-section { margin-top: 50px; clip-path: inset(0); }
          .mission-wellness #donate { margin-bottom: 30px; }
          .mission-wellness .hero-left, .mission-wellness .about-content { max-width: 100%; }
          .mission-wellness .hero-buttons { justify-content: center; }
          .mission-wellness .hero-left h1 { font-size: 46px; }
          .mission-wellness .about-content h2, .mission-wellness .section-heading h2, .mission-wellness .techvision-content-side h3 { font-size: 34px; }
          .mission-wellness .impact-grid { grid-template-columns: repeat(2,1fr); }
          .mission-wellness .feature-boxes { flex-direction: column; }
          .mission-wellness .techvision-container { flex-direction: column; }
          .mission-wellness .techvision-image-box img { height: 500px; }
          .mission-wellness .sevak-donation-content { flex-direction: column; text-align: center; gap: 20px; min-height: auto; }
          .mission-wellness .sevak-title { font-size: 34px; }
          .mission-wellness .testimonial-grid { grid-template-columns: 1fr; }
          .mission-wellness .about-image img { box-shadow: none; }
        }
        @media (max-width: 600px) {
          .mission-wellness .hero-left h1 { font-size: 38px; }
          .mission-wellness .hero-buttons { flex-direction: column; }
          .mission-wellness .hero-right { min-height: auto; padding-bottom: 40px; }
          .mission-wellness .main-image-card { max-width: 100%; }
          .mission-wellness .floating-card { position: absolute; padding: 5px 8px; }
          .mission-wellness .floating-card h3 { font-size: 14px; line-height: 1.1; }
          .mission-wellness .floating-card p { font-size: 10px; margin: 0; }
          .mission-wellness .techvision-wrap { padding: 50px 5%; }
          .mission-wellness .techvision-content-side h3 { font-size: 28px; }
          .mission-wellness .techvision-image-box img { height: 350px; }
          .mission-wellness .sevak-title { font-size: 28px; }
          .mission-wellness .about-section { margin-top: 50px; }
          .mission-wellness #donate { margin-bottom: 30px; }
        }
        @media (max-width: 360px) {
          .mission-wellness .about-section { margin-top: 60px; }
          .mission-wellness #donate { margin-bottom: 40px; }
        }
      `}</style>

      <div className="mission-wellness">
        <section className="tax-box">
          <h1>Mission Aarogya</h1>
        </section>

        <section className="hero-section">
          <div className="hero-left">
            <span className="tag">Mission Aarogya</span>
            <h1>
              Bringing <span>Health</span><br />
              Into Every Life
            </h1>
            <p>
              Mission Aarogya by Being Sevak Charitable Trust provides healthcare support,
              medical assistance, emergency aid and wellness initiatives for underprivileged
              communities across India.
            </p>
            <div className="hero-buttons">
              <a href="#donate" className="primary-btn">Donate Now</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="main-image-card">
              <img src="/images/aarogya1.png" alt="Mission Aarogya" />
              <div className="floating-card card1">
                <h3>3000+</h3>
                <p>Lives Supported</p>
              </div>
              <div className="floating-card card2">
                <h3>24/7</h3>
                <p>Care Support</p>
              </div>
            </div>
          </div>
        </section>

    <div id="donate" style={{ width: '100%', background: '#f4f7fb', padding: '0', overflow: 'hidden', marginBottom: '0', position: 'relative', zIndex: 10, isolation: 'isolate' }}>
      <iframe
        ref={iframeRef}
        src="/donations/donation-inline-arogya.html"
        style={{ width: '100%', height: '650px', border: 'none', display: 'block' }}
        title="Donate to Mission Aarogya"
      />
</div>

        <section className="about-section" id="about">
          <div className="about-image">
            <img src="/images/aarogya2.png" alt="Healthcare Support" />
          </div>
          <div className="about-content">
            <span className="mini-title">About Mission</span>
            <h2>Helping Patients With <span>Care & Emergency Support</span></h2>
            <p>
              Our mission supports heart patients, children and old age people by
              helping them during medical emergencies, hospital treatments and critical
              healthcare situations with compassion and care.
            </p>
            <div className="feature-boxes">
              <div className="feature-card">
                <div className="icon">❤️</div>
                <h4>Heart Patient Help</h4>
                <p>Supporting heart patients with emergency medical assistance.</p>
              </div>
              <div className="feature-card">
                <div className="icon">👶</div>
                <h4>Child Healthcare</h4>
                <p>Helping small children receive proper hospital treatment.</p>
              </div>
              <div className="feature-card">
                <div className="icon">🏥</div>
                <h4>Old Age Support</h4>
                <p>Providing healthcare help for elderly people in need.</p>
              </div>
              <div className="feature-card">
                <div className="icon">🩺</div>
                <h4>Hospital Assistance</h4>
                <p>Helping needy families with treatment and hospital support.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-section" id="impact">
          <div className="section-heading">
            <span>Our Support</span>
            <h2>Healthcare Initiatives & Programmes</h2>
          </div>
          <div className="impact-grid">
            <div className="impact-card"><h3>5000+</h3><p>Patients Helped</p></div>
            <div className="impact-card"><h3>200+</h3><p>Medical Camps</p></div>
            <div className="impact-card"><h3>100+</h3><p>Health Check-ups</p></div>
            <div className="impact-card"><h3>24/7</h3><p>Emergency Aid</p></div>
          </div>
        </section>

        <section className="techvision-wrap">
          <div className="techvision-container">
            <div className="techvision-image-side">
              <div className="techvision-image-box">
                <img src="/images/aarogya4.png" alt="Baby Care Center" />
              </div>
            </div>
            <div className="techvision-content-side">
              <span className="techvision-mini-title">Baby Care Center</span>
              <h3>Safe Feeding Spaces For Mothers & Babies</h3>
              <p>
                Our Baby Care Center initiative creates safe and comfortable feeding
                spaces where mothers can feed and care for their babies peacefully in
                public places with privacy, hygiene and proper support.
              </p>
              <p>
                Every care center represents our commitment to mother and child wellbeing,
                ensuring families feel supported and dignified during the most important
                moments of early life.
              </p>
              <div className="techvision-feature-grid">
                <div className="techvision-feature-card"><h3>Baby Feeding Rooms</h3><span>Clean and safe feeding areas for mothers</span></div>
                <div className="techvision-feature-card"><h3>Mother Support</h3><span>Comfortable care facilities in public places</span></div>
                <div className="techvision-feature-card"><h3>Hygienic Environment</h3><span>Cleanliness and safety for newborn care</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <span className="mini-title">Medical Emergency Support</span>
            <h2>Critical <span>Healthcare</span> For Those In Need</h2>
            <p>
              Our medical emergency support provides immediate healthcare assistance
              for patients facing critical health situations including surgeries,
              treatments and essential medications.
            </p>
            <div className="feature-boxes">
              <div className="feature-card">
                <div className="icon">🚑</div>
                <h4>Emergency Aid</h4>
                <p>Immediate medical help during health emergencies.</p>
              </div>
              <div className="feature-card">
                <div className="icon">💊</div>
                <h4>Medicine Support</h4>
                <p>Essential medicines for patients in need.</p>
              </div>
              <div className="feature-card">
                <div className="icon">🩻</div>
                <h4>Surgery Assistance</h4>
                <p>Financial support for critical surgeries.</p>
              </div>
              <div className="feature-card">
                <div className="icon">🤝</div>
                <h4>Post Care</h4>
                <p>Recovery support and follow-up care for patients.</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="/images/aarogya3.png" alt="Medical Support" />
          </div>
        </section>

        <section className="impact-section">
          <div className="section-heading">
            <span>Community Wellness</span>
            <h2>Building A Healthier Society Together</h2>
          </div>
          <div className="impact-grid">
            <div className="impact-card"><h3>1000+</h3><p>Health Camps Organized</p></div>
            <div className="impact-card"><h3>50+</h3><p>Partner Hospitals</p></div>
            <div className="impact-card"><h3>300+</h3><p>Doctors Engaged</p></div>
            <div className="impact-card"><h3>100%</h3><p>Free Treatment</p></div>
          </div>
        </section>

        <section className="sevak-donation" id="donate-section">
          <div className="sevak-donation-content">
            <div className="sevak-left">
              <span className="sevak-tag">Mission Aarogya</span>
              <h2 className="sevak-title">Health is the True Wealth</h2>
              <p className="sevak-desc">
                Your donation provides healthcare, medical support and wellness
                services to underprivileged communities across India.
              </p>
            </div>
            <div className="sevak-right">
              <Link to="/donate" className="sevak-btn">Donate Now</Link>
            </div>
          </div>
        </section>

        <section className="testimonial-section">
          <div className="section-header">
            <h2>What Our Donors Say</h2>
          </div>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>Being Sevak is doing incredible work for healthcare and needy families. Proud to support this mission.</p>
              <h4>Riya Sharma</h4>
            </div>
            <div className="testimonial-card">
              <p>Transparent work, genuine impact, and a wonderful team dedicated to helping people with dignity.</p>
              <h4>Rahul Mehta</h4>
            </div>
            <div className="testimonial-card">
              <p>Every donation creates real change. Their healthcare initiatives truly touch lives.</p>
              <h4>Anjali Verma</h4>
            </div>
          </div>
        </section>

        <section className="tax-box">
          <p>Get <b>50% Exemption</b> on your donation under <b>Section 80G of Income Tax Act 1961</b></p>
        </section>
      </div>
    </>
  );
}
