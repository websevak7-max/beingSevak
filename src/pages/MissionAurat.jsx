import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const MissionAurat = () => {
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
        .mission-aurat * { margin: 0; padding: 0; box-sizing: border-box; }
        .mission-aurat { font-family: 'Montserrat', sans-serif; background: #f4f6f8; color: #1d2b36; overflow-x: hidden; }
        .mission-aurat img { width: 100%; display: block; }

        .mission-aurat .tax-box {
          width: 100%; height: 70px; display: flex; justify-content: center; align-items: center;
          text-align: center; background: linear-gradient(to right, #009BD4 0%, #0285C3 25%, #046FB1 50%, #074D97 75%, #083D8B 100%);
          color: #fff; margin: 10px 0; padding: 10px; position: relative; overflow: hidden; transition: 0.4s ease;
        }
        .mission-aurat .tax-box h1 { font-size: 28px; font-weight: 700; position: relative; z-index: 2; }
        .mission-aurat .tax-box p { font-size: 16px; line-height: 1.6; position: relative; z-index: 2; }
        .mission-aurat .tax-box::before {
          content: ""; position: absolute; width: 200%; height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.15), transparent);
          top: -50%; left: -50%; animation: auShine 6s linear infinite;
        }
        .mission-aurat .tax-box:hover { transform: translateY(-5px) scale(1.01); box-shadow: 0 25px 60px rgba(0,163,218,0.35); }
        @keyframes auShine { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        .mission-aurat .hero {
          width: 100%; min-height: 100vh; display: flex; align-items: center; justify-content: center;
          gap: 40px; padding: 50px 5%; overflow: hidden;
          background: radial-gradient(circle at top left, #dff6ff 0%, transparent 35%),
          radial-gradient(circle at bottom right, #c7ecff 0%, transparent 35%),
          linear-gradient(135deg, #ffffff, #eef8ff);
        }
        .mission-aurat .hero-left { flex: 1; max-width: 520px; }
        .mission-aurat .mini-title { color: #00a3da; display: inline-block; margin-bottom: 25px; font-weight: 800; font-size: 30px; letter-spacing: 1px; }
        .mission-aurat .hero-left h1 { font-size: 62px; line-height: 1.1; font-weight: 800; margin-bottom: 22px; color: #1c2b36; }
        .mission-aurat .hero-left h1 span { color: #00a3da; }
        .mission-aurat .hero-left p { font-size: 18px; line-height: 1.9; color: #51606d; margin-bottom: 30px; }
        .mission-aurat .hero-buttons { display: flex; gap: 15px; flex-wrap: wrap; }
        .mission-aurat .primary-btn {
          text-decoration: none; padding: 14px 26px; border-radius: 50px; font-size: 18px; font-weight: 700;
          transition: 0.3s; background: #00a3da; color: #fff; box-shadow: 0 15px 35px rgba(0,163,218,0.35);
        }
        .mission-aurat .primary-btn:hover { transform: translateY(-4px); }
        .mission-aurat .hero-right {
          flex: 1; display: flex; justify-content: center; align-items: center;
          position: relative; max-width: 500px; min-height: 500px;
        }
        .mission-aurat .image-box {
          width: 100%; max-width: 480px; position: relative; z-index: 2;
          transform: perspective(1000px) rotate(-3deg);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15), 0 10px 25px rgba(0,163,218,0.12);
          transition: 0.6s ease; animation: auFloatCard 4s ease-in-out infinite;
        }
        .mission-aurat .image-box img { width: 100%; display: block; object-fit: cover; border-radius: 30px; transition: 0.6s ease; }
        .mission-aurat .image-box:hover { transform: perspective(1000px) rotate(0deg) scale(1.05); box-shadow: 0 40px 90px rgba(0,0,0,0.25); }
        @keyframes auFloatCard {
          0% { transform: perspective(1000px) rotate(-3deg) translateY(0); }
          50% { transform: perspective(1000px) rotate(-3deg) translateY(-12px); }
          100% { transform: perspective(1000px) rotate(-3deg) translateY(0); }
        }
        .mission-aurat .floating-card {
          position: absolute; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px);
          padding: 15px 18px; border-radius: 20px; min-width: 160px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.10); z-index: 5; animation: auFloat 3s ease-in-out infinite;
        }
        .mission-aurat .floating-card h3 { color: #00a3da; font-size: 34px; margin-bottom: 4px; }
        .mission-aurat .floating-card p { font-size: 12px; font-weight: 600; color: #51606d; }
        .mission-aurat .card1 { top: -10px; left: -10px; }
        .mission-aurat .card2 { bottom: -10px; right: -10px; }
        @keyframes auFloat { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }

        .mission-aurat .about-section { width: 100%; display: flex; align-items: center; justify-content: center; gap: 45px; padding: 45px 5%; background: #fff; position: relative; z-index: 1; overflow: hidden; isolation: isolate; }
        .mission-aurat .about-image { position: relative; overflow: hidden; isolation: isolate; }
        .mission-aurat .about-image img { border-radius: 35px; height: 450px; object-fit: cover; box-shadow: 0 25px 50px rgba(0,0,0,0.12); transition: 0.5s ease; }
        .mission-aurat .about-image img:hover { transform: scale(1.03); box-shadow: 0 40px 90px rgba(0,0,0,0.2); }
        .mission-aurat .about-image::before {
          content: ""; position: absolute; top: 20px; left: 20px; width: 100%; height: 100%;
          border-radius: 35px; background: linear-gradient(135deg, rgba(0,163,218,0.2), transparent);
          filter: blur(12px); z-index: -1;
        }
        .mission-aurat .about-content { flex: 1; max-width: 520px; }
        .mission-aurat .about-content span { color: #00a3da; font-weight: 700; font-size: 30px; margin-bottom: 18px; display: block; }
        .mission-aurat .about-content h2 { font-size: 42px; line-height: 1.2; margin-bottom: 22px; }
        .mission-aurat .about-content p { font-size: 15px; line-height: 1.8; color: #51606d; }
        .mission-aurat .about-grid { display: flex; flex-wrap: wrap; gap: 15px; margin-top: 28px; }
        .mission-aurat .about-box {
          background: #f7fcff; padding: 20px; border-radius: 22px; transition: 0.3s ease;
          cursor: pointer; flex: 1 1 calc(50% - 15px); min-width: 160px;
        }
        .mission-aurat .about-box:hover { background: #00a3da; }
        .mission-aurat .about-box:hover h3, .mission-aurat .about-box:hover p { color: #fff; }
        .mission-aurat .about-box h3 { font-size: 17px; margin-bottom: 8px; }
        .mission-aurat .about-box p { font-size: 13px; }

        .mission-aurat .mission-section { width: 100%; padding: 60px 5%;
          background: radial-gradient(circle at top left, #dff6ff 0%, transparent 35%),
          linear-gradient(135deg, #f4f6f8, #eef8ff);
        }
        .mission-aurat .impact-content span { color: #00a3da; font-weight: 800; font-size: 20px; display: block; text-align: center; margin-bottom: 10px; }
        .mission-aurat .impact-content h2 { font-size: 40px; margin-top: 10px; text-align: center; }
        .mission-aurat .mission-cards { max-width: 1200px; margin: 35px auto 0; display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
        .mission-aurat .mission-card {
          background: #fff; padding: 28px 18px; text-align: center; border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06); transition: 0.3s ease; position: relative; overflow: hidden; cursor: pointer;
        }
        .mission-aurat .mission-card::before {
          content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 0%;
          background: #00a3da; transition: 0.4s ease; z-index: 1;
        }
        .mission-aurat .mission-card:hover::before { height: 100%; }
        .mission-aurat .mission-card h3, .mission-aurat .mission-card p, .mission-aurat .mission-card .icon { position: relative; z-index: 2; transition: 0.3s ease; }
        .mission-aurat .mission-card:hover h3, .mission-aurat .mission-card:hover p, .mission-aurat .mission-card:hover .icon { color: #fff; }
        .mission-aurat .icon { width: 70px; height: 70px; border-radius: 50%; background: #e0f7ff; color: #00a3da; display: flex; align-items: center; justify-content: center; font-weight: 800; margin: 0 auto 25px; }

        .mission-aurat .impact-section {
          width: 100%; padding: 60px 5%;
          background: radial-gradient(circle at top left, #dff6ff 0%, transparent 35%),
          linear-gradient(135deg, #f4f6f8, #eef8ff);
        }
        .mission-aurat .section-heading { text-align: center; margin-bottom: 35px; }
        .mission-aurat .section-heading span { color: #00a3da; font-weight: 800; font-size: 20px; }
        .mission-aurat .section-heading h2 { font-size: 40px; margin-top: 10px; }
        .mission-aurat .impact-wrapper { width: 100%; max-width: 1400px; margin: auto; display: flex; align-items: center; justify-content: space-between; gap: 70px; }
        .mission-aurat .impact-content { flex: 1; max-width: 550px; }
        .mission-aurat .impact-content h2 { font-size: 50px; line-height: 1.2; color: #111827; margin-bottom: 20px; font-weight: 800; text-align: left; }
        .mission-aurat .impact-content p { font-size: 16px; line-height: 1.9; color: #51606d; }
        .mission-aurat .impact-stats { display: flex; gap: 18px; margin-top: 35px; flex-wrap: wrap; }
        .mission-aurat .impact-stats div {
          background: #fff; padding: 28px 18px; text-align: center; border-radius: 24px; min-width: 150px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06); transition: 0.3s ease; position: relative; overflow: hidden; cursor: pointer;
        }
        .mission-aurat .impact-stats div::before {
          content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 0%;
          background: #00a3da; transition: 0.4s ease; z-index: 1;
        }
        .mission-aurat .impact-stats div:hover::before { height: 100%; }
        .mission-aurat .impact-stats div:hover { transform: translateY(-5px); }
        .mission-aurat .impact-stats h3 { font-size: 34px; color: #00a3da; margin-bottom: 8px; font-weight: 800; position: relative; z-index: 2; transition: 0.3s ease; }
        .mission-aurat .impact-stats p { font-size: 14px; color: #51606d; line-height: 1.5; position: relative; z-index: 2; transition: 0.3s ease; }
        .mission-aurat .impact-stats div:hover h3, .mission-aurat .impact-stats div:hover p { color: #fff; }
        .mission-aurat .impact-image { flex: 1; display: flex; justify-content: center; }
        .mission-aurat .impact-image img {
          width: 100%; max-width: 560px; height: 600px; object-fit: cover; border-radius: 35px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.12), 0 12px 30px rgba(0,163,218,0.18); transition: 0.5s;
        }
        .mission-aurat .impact-image img:hover { transform: translateY(-10px) rotate(-1deg); }

        .mission-aurat .gallery-section {
          width: 100%; padding: 60px 5%; background: #fff; overflow: hidden;
        }
        .mission-aurat .gallery-title { max-width: 800px; margin: 0 auto 60px; text-align: center; }
        .mission-aurat .gallery-title span { color: #00a3da; font-weight: 800; font-size: 20px; letter-spacing: 1px; text-transform: uppercase; }
        .mission-aurat .gallery-title h2 { font-size: 40px; margin: 10px 0; font-weight: 800; }
        .mission-aurat .gallery-title p { color: #51606d; line-height: 1.9; }
        .mission-aurat .gallery-grid { max-width: 1200px; margin: auto; display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; }
        .mission-aurat .gallery-card {
          overflow: hidden; border-radius: 24px; height: 420px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06); transition: 0.4s ease; position: relative; cursor: pointer;
        }
        .mission-aurat .gallery-card img { width: 100%; height: 100%; object-fit: cover; transition: 0.6s; }
        .mission-aurat .gallery-card:hover img { transform: scale(1.12); }
        .mission-aurat .gallery-card:hover { transform: translateY(-10px); }

        .mission-aurat .sevak-donation {
          width: 100%; background: linear-gradient(to right, #009BD4 0%, #0285C3 25%, #046FB1 50%, #074D97 75%, #083D8B 100%);
          padding: 50px 4%; min-height: 120px; display: flex; align-items: center;
        }
        .mission-aurat .sevak-donation-content { width: 100%; display: flex; justify-content: space-between; align-items: center; min-height: 120px; }
        .mission-aurat .sevak-left { display: flex; flex-direction: column; gap: 4px; }
        .mission-aurat .sevak-tag { font-size: 20px; font-weight: 700; color: #fff; }
        .mission-aurat .sevak-title { font-size: 41px; margin: 0; line-height: 1.2; color: #fff; }
        .mission-aurat .sevak-desc { font-size: 15px; margin: 0; color: #fff; }
        .mission-aurat .sevak-btn {
          display: inline-block; padding: 15px 36px; background: #00a3da; color: #fff; text-decoration: none;
          border-radius: 6px; font-weight: 700; font-size: 16px; white-space: nowrap; transition: 0.3s;
        }
        .mission-aurat .sevak-btn:hover { transform: translateY(-2px); }

        .mission-aurat .testimonial-section { padding: 50px 5%; }
        .mission-aurat .section-header { text-align: center; margin-bottom: 40px; }
        .mission-aurat .section-header h2 { font-size: 42px; margin: 18px 0; }
        .mission-aurat .testimonial-grid {
          width: 100%; max-width: 1200px; margin: auto; display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; align-items: stretch;
        }
        .mission-aurat .testimonial-card {
          width: 100%; background: #fff; padding: 30px; border-radius: 28px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.07); transition: 0.4s; overflow: hidden; position: relative;
        }
        .mission-aurat .testimonial-card:hover { transform: translateY(-10px); }
        .mission-aurat .testimonial-card p { line-height: 2; color: #6c7d8e; margin-bottom: 25px; }
        .mission-aurat .testimonial-card h4 { color: #00a3da; }
        .mission-aurat .testimonial-card h4, .mission-aurat .testimonial-card p { position: relative; z-index: 3; transition: 0.4s ease; }
        .mission-aurat .testimonial-card:hover h4, .mission-aurat .testimonial-card:hover p { color: #fff !important; }
        .mission-aurat .testimonial-card::before {
          content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 0%;
          background: #00a3da; transition: 0.4s ease; z-index: 1; border-radius: 28px;
        }
        .mission-aurat .testimonial-card:hover::before { height: 100%; }
        .mission-aurat .testimonial-card > * { position: relative; z-index: 2; }

        @media (max-width: 991px) {
          .mission-aurat .hero, .mission-aurat .about-section { flex-direction: column; text-align: center; }
          .mission-aurat .hero-left, .mission-aurat .about-content { max-width: 100%; }
          .mission-aurat .hero-buttons { justify-content: center; }
          .mission-aurat .hero-left h1 { font-size: 46px; }
          .mission-aurat .about-content h2, .mission-aurat .impact-content h2, .mission-aurat .gallery-title h2 { font-size: 34px; }
          .mission-aurat .mission-cards { grid-template-columns: 1fr; }
          .mission-aurat .about-grid { flex-direction: column; }
          .mission-aurat .impact-wrapper { flex-direction: column; text-align: center; gap: 50px; }
          .mission-aurat .impact-content { max-width: 100%; }
          .mission-aurat .impact-content h2 { font-size: 34px; text-align: center; }
          .mission-aurat .impact-content span { text-align: center; }
          .mission-aurat .impact-stats { justify-content: center; }
          .mission-aurat .gallery-grid { grid-template-columns: repeat(2,1fr); gap: 16px; }
          .mission-aurat .sevak-donation-content { flex-direction: column; text-align: center; gap: 20px; min-height: auto; }
          .mission-aurat .sevak-title { font-size: 34px; }
          .mission-aurat .testimonial-grid { grid-template-columns: 1fr; }
          .mission-aurat .about-image img { box-shadow: none; }
        }
        @media (max-width: 600px) {
          .mission-aurat .hero-left h1 { font-size: 38px; }
          .mission-aurat .hero-buttons { flex-direction: column; }
          .mission-aurat .hero-right { min-height: auto; padding-bottom: 40px; }
          .mission-aurat .image-box { max-width: 100%; }
          .mission-aurat .floating-card { position: absolute; padding: 5px 8px; }
          .mission-aurat .floating-card h3 { font-size: 14px; line-height: 1.1; }
          .mission-aurat .floating-card p { font-size: 10px; margin: 0; }
          .mission-aurat .about-section { gap: 25px; padding: 30px 5%; }
          .mission-aurat .about-image img { height: 320px; }
          .mission-aurat .gallery-grid { grid-template-columns: 1fr; gap: 12px; }
          .mission-aurat .gallery-card { height: 250px; }
          .mission-aurat .sevak-title { font-size: 28px; }
          .mission-aurat .about-section { margin-top: 50px; }
          .mission-aurat #donate { margin-bottom: 30px; }
        }
        @media (max-width: 360px) {
          .mission-aurat .about-section { margin-top: 60px; }
          .mission-aurat #donate { margin-bottom: 40px; }
        }
      `}</style>

      <div className="mission-aurat">
        <section className="tax-box">
          <p><h1>Mission Aurat</h1></p>
        </section>

        <section className="hero">
          <div className="hero-left">
            <span className="mini-title">Women Empowerment Initiative</span>
            <h1>Empowering <span>Women</span><br />Creating Brighter Futures</h1>
            <p>Aurat is dedicated to uplifting women through education, skill development, healthcare awareness and self-reliance. Together we can build stronger families and empowered communities.</p>
            <div className="hero-buttons">
              <a href="#donate" className="primary-btn">Support Mission</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="image-box">
              <img src="/images/aurat7.jpg" alt="Women Empowerment" />
              <div className="floating-card card1">
                <h3>15K+</h3>
                <p>Women Supported</p>
              </div>
              <div className="floating-card card2">
                <h3>120+</h3>
                <p>Awareness Drives</p>
              </div>
            </div>
          </div>
        </section>

<div id="donate" style={{ width: '100%', background: '#f4f7fb', padding: '0', overflow: 'hidden', position: 'relative', zIndex: 10, isolation: 'isolate', marginBottom: '0' }}>
  <iframe
    ref={iframeRef}
    src="/donations/donation-inline-aurat.html"
    style={{ width: '100%', height: '650px', border: 'none', display: 'block' }}
    title="Donate to Mission Aurat"
  />
</div>

        <section className="about-section" id="about">
          <div className="about-image">
            <img src="/images/aurat6.jpg" alt="Women" />
          </div>
          <div className="about-content">
            <span>About Aurat</span>
            <h2>Supporting Women With Dignity & Opportunity</h2>
            <p>Aurat focuses on helping women become independent and confident through education, awareness campaigns, vocational training and community support.</p>
            <div className="about-grid">
              <div className="about-box">
                <h3>Education</h3>
                <p>Encouraging girls and women towards learning opportunities.</p>
              </div>
              <div className="about-box">
                <h3>Skill Training</h3>
                <p>Providing practical training to create sustainable livelihoods.</p>
              </div>
              <div className="about-box">
                <h3>Health Support</h3>
                <p>Promoting healthcare awareness and hygiene initiatives.</p>
              </div>
              <div className="about-box">
                <h3>Self Reliance</h3>
                <p>Helping women build confidence and financial independence.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mission-section" id="mission">
          <div className="impact-content">
            <span>Our Mission</span>
            <h2>Building Hope Through Empowerment</h2>
          </div>
          <div className="mission-cards">
            <div className="mission-card">
              <div className="icon">01</div>
              <h3>Awareness Programs</h3>
              <p>Conducting campaigns to spread awareness about women's rights, health and education.</p>
            </div>
            <div className="mission-card">
              <div className="icon">02</div>
              <h3>Skill Development</h3>
              <p>Creating opportunities for women through practical training and workshops.</p>
            </div>
            <div className="mission-card">
              <div className="icon">03</div>
              <h3>Community Support</h3>
              <p>Building safe and supportive communities where women can grow confidently.</p>
            </div>
          </div>
        </section>

        <section className="impact-section" id="impact">
          <div className="impact-wrapper">
            <div className="impact-content">
              <span>Our Impact</span>
              <h2>Creating Positive Change Every Day</h2>
              <p>Through continuous outreach and empowerment initiatives, Aurat is helping women discover confidence, independence and hope.</p>
              <div className="impact-stats">
                <div>
                  <h3>500+</h3>
                  <p>Training Sessions</p>
                </div>
                <div>
                  <h3>20+</h3>
                  <p>Communities Reached</p>
                </div>
                <div>
                  <h3>10K+</h3>
                  <p>Lives Impacted</p>
                </div>
              </div>
            </div>
            <div className="impact-image">
              <img src="/images/auratImpact.jpeg" alt="" />
            </div>
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="gallery-title">
            <span>Program Highlights</span>
            <h2>Moments Of Empowerment</h2>
            <p>Together we create opportunities, confidence and hope for women through impactful community initiatives.</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-card"><img src="/images/aurat1.jpg" alt="Awareness Drive" /></div>
            <div className="gallery-card"><img src="/images/aurat2.jpg" alt="Women Support" /></div>
            <div className="gallery-card"><img src="/images/aurat3.jpg" alt="Skill Training" /></div>
            <div className="gallery-card"><img src="/images/aurat4.jpg" alt="Community Care" /></div>
          </div>
        </section>

        <section className="sevak-donation" id="donation-section">
          <div className="sevak-donation-content">
            <div className="sevak-left">
              <span className="sevak-tag">Mission Aurat</span>
              <h2 className="sevak-title">Empower Her, Empower Society</h2>
              <p className="sevak-desc">Help women gain education, skills, healthcare, and opportunities to lead independent and dignified lives.</p>
            </div>
            <div className="sevak-right">
              <a href="#" className="sevak-btn">Donate Now</a>
            </div>
          </div>
        </section>

        <br />

        <section className="testimonial-section">
          <div className="section-header">
            <h2>What Our Donors Say</h2>
          </div>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>Being Sevak is doing incredible work for visually impaired and needy families. Proud to support this mission.</p>
              <h4>Riya Sharma</h4>
            </div>
            <div className="testimonial-card">
              <p>Transparent work, genuine impact, and a wonderful team dedicated to helping people with dignity.</p>
              <h4>Rahul Mehta</h4>
            </div>
            <div className="testimonial-card">
              <p>Every donation creates real change. Their food distribution drives truly touch lives.</p>
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
};

export default MissionAurat;
