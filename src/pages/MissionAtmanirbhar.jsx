import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const MissionAtmanirbhar = () => {
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
        .mission-atmanirbhar * { margin: 0; padding: 0; box-sizing: border-box; }
        .mission-atmanirbhar { font-family: 'Montserrat', sans-serif; background: #f4f6f8; color: #1d2b36; overflow-x: hidden; }
        .mission-atmanirbhar img { width: 100%; display: block; }

        .mission-atmanirbhar .tax-box {
          width: 100%; height: 70px; display: flex; justify-content: center; align-items: center;
          text-align: center; background: linear-gradient(to right, #009BD4 0%, #0285C3 25%, #046FB1 50%, #074D97 75%, #083D8B 100%);
          color: #fff; margin: 10px 0; padding: 10px; position: relative; overflow: hidden; transition: 0.4s ease;
        }
        .mission-atmanirbhar .tax-box h1 { font-size: 28px; font-weight: 700; position: relative; z-index: 2; }
        .mission-atmanirbhar .tax-box p { font-size: 16px; line-height: 1.6; position: relative; z-index: 2; }
        .mission-atmanirbhar .tax-box::before {
          content: ""; position: absolute; width: 200%; height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.15), transparent);
          top: -50%; left: -50%; animation: atShine 6s linear infinite;
        }
        .mission-atmanirbhar .tax-box:hover { transform: translateY(-5px) scale(1.01); box-shadow: 0 25px 60px rgba(0,163,218,0.35); }
        @keyframes atShine { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        .mission-atmanirbhar .hero-section {
          width: 100%; min-height: 100vh; display: flex; align-items: center; justify-content: center;
          gap: 40px; padding: 50px 5%; overflow: hidden;
          background: radial-gradient(circle at top left, #dff6ff 0%, transparent 35%),
          radial-gradient(circle at bottom right, #c7ecff 0%, transparent 35%),
          linear-gradient(135deg, #ffffff, #eef8ff);
        }
        .mission-atmanirbhar .hero-left { flex: 1; max-width: 520px; }
        .mission-atmanirbhar .tag { color: #00a3da; display: inline-block; margin-bottom: 25px; font-weight: 800; font-size: 30px; letter-spacing: 1px; background: none; }
        .mission-atmanirbhar .hero-left h1 { font-size: 62px; line-height: 1.1; font-weight: 800; margin-bottom: 22px; color: #1c2b36; }
        .mission-atmanirbhar .hero-left h1 span { color: #00a3da; }
        .mission-atmanirbhar .hero-left p { font-size: 18px; line-height: 1.9; color: #51606d; margin-bottom: 30px; }
        .mission-atmanirbhar .hero-buttons { display: flex; gap: 15px; flex-wrap: wrap; }
        .mission-atmanirbhar .primary-btn {
          text-decoration: none; padding: 14px 26px; border-radius: 50px; font-size: 18px; font-weight: 700;
          transition: 0.3s; background: #00a3da; color: #fff; box-shadow: 0 15px 35px rgba(0,163,218,0.35);
        }
        .mission-atmanirbhar .primary-btn:hover { transform: translateY(-4px); }
        .mission-atmanirbhar .hero-right {
          flex: 1; display: flex; justify-content: center; align-items: center;
          position: relative; max-width: 500px; min-height: 500px;
        }
        .mission-atmanirbhar .main-image-card {
          width: 100%; max-width: 480px; position: relative; z-index: 2;
          transform: perspective(1000px) rotate(-3deg);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15), 0 10px 25px rgba(0,163,218,0.12);
          transition: 0.6s ease; animation: atFloatCard 4s ease-in-out infinite;
        }
        .mission-atmanirbhar .main-image-card img { width: 100%; display: block; object-fit: cover; border-radius: 30px; transition: 0.6s ease; }
        .mission-atmanirbhar .main-image-card:hover { transform: perspective(1000px) rotate(0deg) scale(1.05); box-shadow: 0 40px 90px rgba(0,0,0,0.25); }
        @keyframes atFloatCard {
          0% { transform: perspective(1000px) rotate(-3deg) translateY(0); }
          50% { transform: perspective(1000px) rotate(-3deg) translateY(-12px); }
          100% { transform: perspective(1000px) rotate(-3deg) translateY(0); }
        }
        .mission-atmanirbhar .floating-card {
          position: absolute; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px);
          padding: 15px 18px; border-radius: 20px; min-width: 160px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.10); z-index: 5; animation: atFloat 3s ease-in-out infinite;
        }
        .mission-atmanirbhar .floating-card h3 { color: #00a3da; font-size: 34px; margin-bottom: 4px; }
        .mission-atmanirbhar .floating-card p { font-size: 12px; font-weight: 600; color: #51606d; }
        .mission-atmanirbhar .card1 { top: -10px; left: -10px; }
        .mission-atmanirbhar .card2 { bottom: -10px; right: -10px; }
        @keyframes atFloat { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }

        .mission-atmanirbhar .about-section { width: 100%; display: flex; align-items: center; justify-content: center; gap: 45px; padding: 45px 5%; background: #fff; position: relative; z-index: 1; overflow: hidden; isolation: isolate; }
        .mission-atmanirbhar .about-image { position: relative; overflow: hidden; isolation: isolate; }
        .mission-atmanirbhar .about-image img { border-radius: 35px; height: 450px; object-fit: cover; box-shadow: 0 25px 50px rgba(0,0,0,0.12); transition: 0.5s ease; }
        .mission-atmanirbhar .about-image img:hover { transform: scale(1.03); box-shadow: 0 40px 90px rgba(0,0,0,0.2); }
        .mission-atmanirbhar .about-image::before {
          content: ""; position: absolute; top: 20px; left: 20px; width: 100%; height: 100%;
          border-radius: 35px; background: linear-gradient(135deg, rgba(0,163,218,0.2), transparent);
          filter: blur(12px); z-index: -1;
        }
        .mission-atmanirbhar .about-content { flex: 1; max-width: 520px; }
        .mission-atmanirbhar .mini-title { color: #00a3da; font-weight: 700; font-size: 30px; margin-bottom: 18px; display: block; }
        .mission-atmanirbhar .about-content h2 { font-size: 42px; line-height: 1.2; margin-bottom: 22px; }
        .mission-atmanirbhar .about-content h2 span { color: #00a3da; }
        .mission-atmanirbhar .about-content p { font-size: 15px; line-height: 1.8; color: #51606d; }
        .mission-atmanirbhar .feature-boxes { display: flex; flex-wrap: wrap; gap: 15px; margin-top: 28px; }
        .mission-atmanirbhar .feature-card {
          background: #f7fcff; padding: 20px; border-radius: 22px; transition: 0.3s ease;
          cursor: pointer; flex: 1 1 calc(50% - 15px); min-width: 160px;
        }
        .mission-atmanirbhar .feature-card:hover { background: #00a3da; }
        .mission-atmanirbhar .feature-card:hover h4, .mission-atmanirbhar .feature-card:hover p, .mission-atmanirbhar .feature-card:hover .icon { color: #fff; }
        .mission-atmanirbhar .icon { font-size: 28px; margin-bottom: 12px; }
        .mission-atmanirbhar .feature-card h4 { font-size: 17px; margin-bottom: 8px; }
        .mission-atmanirbhar .feature-card p { font-size: 13px; }

        .mission-atmanirbhar .impact-section {
          width: 100%; padding: 60px 5%;
          background: radial-gradient(circle at top left, #dff6ff 0%, transparent 35%),
          linear-gradient(135deg, #f4f6f8, #eef8ff);
        }
        .mission-atmanirbhar .section-heading { text-align: center; margin-bottom: 35px; }
        .mission-atmanirbhar .section-heading span { color: #00a3da; font-weight: 800; font-size: 20px; }
        .mission-atmanirbhar .section-heading h2 { font-size: 40px; margin-top: 10px; }
        .mission-atmanirbhar .impact-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; }
        .mission-atmanirbhar .impact-card {
          background: #fff; padding: 28px 18px; text-align: center; border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06); transition: 0.3s ease; position: relative; overflow: hidden; cursor: pointer;
        }
        .mission-atmanirbhar .impact-card::before {
          content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 0%;
          background: #00a3da; transition: 0.4s ease; z-index: 1;
        }
        .mission-atmanirbhar .impact-card:hover::before { height: 100%; }
        .mission-atmanirbhar .impact-card h3, .mission-atmanirbhar .impact-card p { position: relative; z-index: 2; transition: 0.3s ease; }
        .mission-atmanirbhar .impact-card:hover h3, .mission-atmanirbhar .impact-card:hover p { color: #fff; }

        .mission-atmanirbhar .gallery-section { width: 100%; padding: 90px 20px; }
        .mission-atmanirbhar .gallery-title { max-width: 800px; margin: auto; text-align: center; margin-bottom: 60px; }
        .mission-atmanirbhar .gallery-title span { color: #00a3da; font-size: 15px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
        .mission-atmanirbhar .gallery-title h2 { font-size: 48px; margin: 15px 0; font-weight: 800; }
        .mission-atmanirbhar .gallery-title p { color: #6b7280; line-height: 1.9; }
        .mission-atmanirbhar .gallery-grid { max-width: 1200px; margin: auto; display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 260px; gap: 25px; }
        .mission-atmanirbhar .gallery-item { position: relative; overflow: hidden; border-radius: 30px; cursor: pointer; }
        .mission-atmanirbhar .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: 0.6s; }
        .mission-atmanirbhar .gallery-item.large { grid-column: span 2; grid-row: span 2; }
        .mission-atmanirbhar .gallery-item:hover img { transform: scale(1.08); }

        .mission-atmanirbhar .techvision-wrap { width: 100%; padding: 70px 7%; background: #fff; overflow: hidden; }
        .mission-atmanirbhar .techvision-container { display: flex; align-items: center; justify-content: space-between; gap: 70px; flex-wrap: wrap; }
        .mission-atmanirbhar .techvision-image-side { flex: 1; min-width: 320px; }
        .mission-atmanirbhar .techvision-image-box {
          position: relative; border-radius: 35px; overflow: hidden; background: #fff;
          box-shadow: 0 25px 60px rgba(0,0,0,0.12), 0 12px 30px rgba(0,163,218,0.18); transition: 0.5s;
        }
        .mission-atmanirbhar .techvision-image-box:hover { transform: translateY(-10px) rotate(-1deg); }
        .mission-atmanirbhar .techvision-image-box img { width: 100%; height: 620px; object-fit: cover; display: block; }
        .mission-atmanirbhar .techvision-content-side { flex: 1; min-width: 320px; }
        .mission-atmanirbhar .techvision-mini-title {
          display: inline-block; padding: 10px 22px; background: #00a3da; color: #fff; border-radius: 60px;
          font-size: 20px; font-weight: 700; margin-bottom: 20px; box-shadow: 0 10px 25px rgba(163,218,0,0.25);
        }
        .mission-atmanirbhar .techvision-content-side h3 { font-size: 38px; line-height: 1.1; color: #111; margin-bottom: 28px; font-weight: 800; }
        .mission-atmanirbhar .techvision-content-side p { font-size: 17px; line-height: 1.9; color: #555; margin-bottom: 18px; }
        .mission-atmanirbhar .techvision-feature-grid { display: flex; flex-wrap: wrap; gap: 18px; margin-top: 35px; }
        .mission-atmanirbhar .techvision-feature-card {
          flex: 1; min-width: 180px; background: #fff; border: 1px solid #e8f6fc; padding: 28px 22px;
          border-radius: 24px; transition: 0.4s;
          box-shadow: 0 12px 30px rgba(0,0,0,0.05), 0 8px 20px rgba(0,163,218,0.08);
        }
        .mission-atmanirbhar .techvision-feature-card:hover { transform: translateY(-8px); }
        .mission-atmanirbhar .techvision-feature-card h3 { font-size: 22px; color: #00a3da; margin-bottom: 10px; font-weight: 700; }
        .mission-atmanirbhar .techvision-feature-card span { font-size: 15px; color: #666; line-height: 1.7; }
        .mission-atmanirbhar .techvision-btn {
          display: inline-block; margin-top: 40px; padding: 16px 35px; background: #00a3da; color: #fff;
          text-decoration: none; border-radius: 60px; font-weight: 600; transition: 0.4s;
          box-shadow: 0 15px 30px rgba(0,163,218,0.25);
        }
        .mission-atmanirbhar .techvision-btn:hover { background: #008dbd; transform: translateY(-5px); }

        .mission-atmanirbhar .sevak-donation {
          width: 100%; background: linear-gradient(to right, #009BD4 0%, #0285C3 25%, #046FB1 50%, #074D97 75%, #083D8B 100%);
          padding: 50px 4%; min-height: 120px; display: flex; align-items: center;
        }
        .mission-atmanirbhar .sevak-donation-content { width: 100%; display: flex; justify-content: space-between; align-items: center; min-height: 120px; }
        .mission-atmanirbhar .sevak-left { display: flex; flex-direction: column; gap: 4px; }
        .mission-atmanirbhar .sevak-tag { font-size: 20px; font-weight: 700; color: #fff; }
        .mission-atmanirbhar .sevak-title { font-size: 41px; margin: 0; line-height: 1.2; color: #fff; }
        .mission-atmanirbhar .sevak-desc { font-size: 15px; margin: 0; color: #fff; }
        .mission-atmanirbhar .sevak-btn {
          display: inline-block; padding: 15px 36px; background: #00a3da; color: #fff; text-decoration: none;
          border-radius: 6px; font-weight: 700; font-size: 16px; white-space: nowrap; transition: 0.3s;
        }
        .mission-atmanirbhar .sevak-btn:hover { transform: translateY(-2px); }

        .mission-atmanirbhar .testimonial-section { padding: 50px 5%; }
        .mission-atmanirbhar .section-header { text-align: center; margin-bottom: 40px; }
        .mission-atmanirbhar .section-header h2 { font-size: 42px; margin: 18px 0; }
        .mission-atmanirbhar .testimonial-grid {
          width: 100%; max-width: 1200px; margin: auto; display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; align-items: stretch;
        }
        .mission-atmanirbhar .testimonial-card {
          width: 100%; background: #fff; padding: 30px; border-radius: 28px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.07); transition: 0.4s; overflow: hidden; position: relative;
        }
        .mission-atmanirbhar .testimonial-card:hover { transform: translateY(-10px); }
        .mission-atmanirbhar .testimonial-card p { line-height: 2; color: #6c7d8e; margin-bottom: 25px; }
        .mission-atmanirbhar .testimonial-card h4 { color: #00a3da; }
        .mission-atmanirbhar .testimonial-card h4, .mission-atmanirbhar .testimonial-card p { position: relative; z-index: 3; transition: 0.4s ease; }
        .mission-atmanirbhar .testimonial-card:hover h4, .mission-atmanirbhar .testimonial-card:hover p { color: #fff !important; }
        .mission-atmanirbhar .testimonial-card::before {
          content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 0%;
          background: #00a3da; transition: 0.4s ease; z-index: 1; border-radius: 28px;
        }
        .mission-atmanirbhar .testimonial-card:hover::before { height: 100%; }
        .mission-atmanirbhar .testimonial-card > * { position: relative; z-index: 2; }

        @media (max-width: 991px) {
          .mission-atmanirbhar .hero-section, .mission-atmanirbhar .about-section { flex-direction: column; text-align: center; }
          .mission-atmanirbhar .hero-left, .mission-atmanirbhar .about-content { max-width: 100%; }
          .mission-atmanirbhar .hero-buttons { justify-content: center; }
          .mission-atmanirbhar .hero-left h1 { font-size: 46px; }
          .mission-atmanirbhar .about-content h2, .mission-atmanirbhar .section-heading h2, .mission-atmanirbhar .techvision-content-side h3 { font-size: 34px; }
          .mission-atmanirbhar .impact-grid { grid-template-columns: repeat(2,1fr); }
          .mission-atmanirbhar .feature-boxes { flex-direction: column; }
          .mission-atmanirbhar .techvision-container { flex-direction: column; }
          .mission-atmanirbhar .techvision-image-box img { height: 500px; }
          .mission-atmanirbhar .sevak-donation-content { flex-direction: column; text-align: center; gap: 20px; min-height: auto; }
          .mission-atmanirbhar .sevak-title { font-size: 34px; }
          .mission-atmanirbhar .testimonial-grid { grid-template-columns: 1fr; }
          .mission-atmanirbhar .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; padding: 0 5%; }
          .mission-atmanirbhar .gallery-title h2 { font-size: 34px; }
          .mission-atmanirbhar .about-image img { box-shadow: none; }
        }
        @media (max-width: 600px) {
          .mission-atmanirbhar .hero-left h1 { font-size: 38px; }
          .mission-atmanirbhar .hero-buttons { flex-direction: column; }
          .mission-atmanirbhar .hero-right { min-height: auto; padding-bottom: 40px; }
          .mission-atmanirbhar .main-image-card { max-width: 100%; }
          .mission-atmanirbhar .floating-card { position: absolute; padding: 5px 8px; }
          .mission-atmanirbhar .floating-card h3 { font-size: 14px; line-height: 1.1; }
          .mission-atmanirbhar .floating-card p { font-size: 10px; margin: 0; }
          .mission-atmanirbhar .techvision-wrap { padding: 50px 5%; }
          .mission-atmanirbhar .techvision-content-side h3 { font-size: 28px; }
          .mission-atmanirbhar .techvision-image-box img { height: 350px; }
          .mission-atmanirbhar .sevak-title { font-size: 28px; }
          .mission-atmanirbhar .about-section { margin-top: 50px; }
          .mission-atmanirbhar #donate { margin-bottom: 30px; }
          .mission-atmanirbhar .gallery-section { padding: 50px 5%; }
          .mission-atmanirbhar .gallery-grid { grid-template-columns: 1fr; grid-auto-rows: auto; gap: 12px; }
          .mission-atmanirbhar .gallery-item, .mission-atmanirbhar .gallery-item.large { grid-column: span 1; grid-row: span 1; height: 280px; }
        }
        @media (max-width: 360px) {
          .mission-atmanirbhar .about-section { margin-top: 60px; }
          .mission-atmanirbhar #donate { margin-bottom: 40px; }
        }
      `}</style>

      <div className="mission-atmanirbhar">
        <section className="tax-box">
          <h1>Mission AtmaNirbhar</h1>
        </section>

        <section className="hero-section">
          <div className="hero-left">
            <span className="tag">Mission Atma Nirbhar</span>
            <h1>Building Self Reliant &amp; Empowered Communities</h1>
            <p>Atma Nirbhar initiative by Being Sevak focuses on empowering individuals through skills, education, and sustainable livelihood opportunities.</p>
            <div className="hero-buttons">
              <a href="#donate" className="primary-btn">Support The Mission</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="main-image-card">
              <img src="/images/at7.jpeg" alt="Atmanirbhar" />
            </div>
          </div>
        </section>

<div id="donate" style={{ width: '100%', background: '#f4f7fb', padding: '0', overflow: 'hidden', marginBottom: '0', position: 'relative', zIndex: 10, isolation: 'isolate' }}>
  <iframe
    ref={iframeRef}
    src="/donations/donation-inline-atmanirbhar.html"
    style={{ width: '100%', height: '650px', border: 'none', display: 'block' }}
    title="Donate to Mission Atmanirbhar"
  />
</div>

        <section className="about-section" id="about">
          <div className="about-image">
            <img src="/images/at6.jpg" alt="Atmanirbhar" />
          </div>
          <div className="about-content">
            <span className="mini-title">About Initiative</span>
            <h2>Empowering People For A Better Future</h2>
            <p>We support skill development, self employment training and awareness programs that help individuals become financially independent.</p>
            <div className="feature-boxes">
              <div className="feature-card">
                <h4>Skill Development</h4>
                <p>Training programs for practical skills.</p>
              </div>
              <div className="feature-card">
                <h4>Employment Support</h4>
                <p>Helping people find sustainable jobs.</p>
              </div>
              <div className="feature-card">
                <h4>Entrepreneurship</h4>
                <p>Encouraging small business creation.</p>
              </div>
              <div className="feature-card">
                <h4>Awareness</h4>
                <p>Spreading financial literacy.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-section" id="impact">
          <div className="section-heading">
            <span>Our Impact</span>
            <h2>Making A Difference</h2>
          </div>
          <div className="impact-grid">
            <div className="impact-card">
              <h3>200+</h3>
              <p>Training Programs</p>
            </div>
            <div className="impact-card">
              <h3>50+</h3>
              <p>Communities</p>
            </div>
            <div className="impact-card">
              <h3>5K+</h3>
              <p>Lives Improved</p>
            </div>
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="gallery-title">
            <span>Program Highlights</span>
            <h2>Moments Of Empowerment</h2>
            <p>Empowering women with opportunity, confidence, and hope - Mission Atmanirbhar</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item large"><img src="/images/at1.jpg" alt="" /></div>
            <div className="gallery-item"><img src="/images/wheelchairman.jpg" alt="" /></div>
            <div className="gallery-item"><img src="/images/at3.jpeg" alt="" /></div>
            <div className="gallery-item"><img src="/images/at8.jpeg" alt="" /></div>
            <div className="gallery-item"><img src="/images/at5.jpg" alt="" /></div>
          </div>
        </section>

        <section className="sevak-donation">
          <div className="sevak-donation-content">
            <div className="sevak-left">
              <span className="sevak-tag">Support The Cause</span>
              <h2 className="sevak-title">Every Contribution Matters</h2>
              <p className="sevak-desc">Your donation helps us empower more communities across India.</p>
            </div>
            <a href="#donate" className="sevak-btn">Donate Now</a>
          </div>
        </section>

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

export default MissionAtmanirbhar;
