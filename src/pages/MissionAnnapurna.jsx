import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const MissionAnnapurna = () => {
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
        .mission-annapurna * { margin: 0; padding: 0; box-sizing: border-box; }
        .mission-annapurna { font-family: 'Montserrat', sans-serif; background: #f4f6f8; color: #1d2b36; overflow-x: hidden; position: relative; }
        .mission-annapurna img { width: 100%; display: block; }

        .mission-annapurna .tax-box {
          width: 100%; height: 70px; display: flex; justify-content: center; align-items: center;
          text-align: center; background: linear-gradient(to right, #009BD4 0%, #0285C3 25%, #046FB1 50%, #074D97 75%, #083D8B 100%);
          color: #fff; margin: 10px 0; padding: 10px; position: relative; overflow: hidden; transition: 0.4s ease;
        }
        .mission-annapurna .tax-box h1 { font-size: 28px; font-weight: 700; position: relative; z-index: 2; }
        .mission-annapurna .tax-box p { font-size: 16px; line-height: 1.6; position: relative; z-index: 2; }
        .mission-annapurna .tax-box::before {
          content: ""; position: absolute; width: 200%; height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.15), transparent);
          top: -50%; left: -50%; animation: anShine 6s linear infinite;
        }
        .mission-annapurna .tax-box:hover { transform: translateY(-5px) scale(1.01); box-shadow: 0 25px 60px rgba(0,163,218,0.35); }
        @keyframes anShine { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        .mission-annapurna .hero-section {
          width: 100%; min-height: 100vh; display: flex; align-items: center; justify-content: center;
          gap: 40px; padding: 50px 5%; overflow: hidden;
          background: radial-gradient(circle at top left, #dff6ff 0%, transparent 35%),
          radial-gradient(circle at bottom right, #c7ecff 0%, transparent 35%),
          linear-gradient(135deg, #ffffff, #eef8ff);
        }
        .mission-annapurna .hero-left { flex: 1; max-width: 520px; }
        .mission-annapurna .tag { color: #00a3da; display: inline-block; margin-bottom: 25px; font-weight: 800; font-size: 30px; letter-spacing: 1px; background: none; }
        .mission-annapurna .hero-left h1 { font-size: 62px; line-height: 1.1; font-weight: 800; margin-bottom: 22px; color: #1c2b36; }
        .mission-annapurna .hero-left h1 span { color: #00a3da; }
        .mission-annapurna .hero-left p { font-size: 18px; line-height: 1.9; color: #51606d; margin-bottom: 30px; }
        .mission-annapurna .hero-buttons { display: flex; gap: 15px; flex-wrap: wrap; }
        .mission-annapurna .primary-btn {
          text-decoration: none; padding: 14px 26px; border-radius: 50px; font-size: 18px; font-weight: 700;
          transition: 0.3s; background: #00a3da; color: #fff; box-shadow: 0 15px 35px rgba(0,163,218,0.35);
        }
        .mission-annapurna .primary-btn:hover { transform: translateY(-4px); }
        .mission-annapurna .hero-right {
          flex: 1; display: flex; justify-content: center; align-items: center;
          position: relative; max-width: 500px; min-height: 500px;
        }
        .mission-annapurna .main-image-card {
          width: 100%; max-width: 480px; position: relative; z-index: 2;
          transform: perspective(1000px) rotate(-3deg);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15), 0 10px 25px rgba(0,163,218,0.12);
          transition: 0.6s ease; animation: anFloatCard 4s ease-in-out infinite;
        }
        .mission-annapurna .main-image-card img { width: 100%; display: block; object-fit: cover; border-radius: 30px; transition: 0.6s ease; }
        .mission-annapurna .main-image-card:hover { transform: perspective(1000px) rotate(0deg) scale(1.05); box-shadow: 0 40px 90px rgba(0,0,0,0.25); }
        @keyframes anFloatCard {
          0% { transform: perspective(1000px) rotate(-3deg) translateY(0); }
          50% { transform: perspective(1000px) rotate(-3deg) translateY(-12px); }
          100% { transform: perspective(1000px) rotate(-3deg) translateY(0); }
        }
        .mission-annapurna .floating-card {
          position: absolute; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px);
          padding: 15px 18px; border-radius: 20px; min-width: 160px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.10); z-index: 5; animation: anFloat 3s ease-in-out infinite;
        }
        .mission-annapurna .floating-card h3 { color: #00a3da; font-size: 34px; margin-bottom: 4px; }
        .mission-annapurna .floating-card p { font-size: 12px; font-weight: 600; color: #51606d; }
        .mission-annapurna .card1 { top: -10px; left: -10px; }
        .mission-annapurna .card2 { bottom: -10px; right: -10px; }
        @keyframes anFloat { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }

        .mission-annapurna .about-section { width: 100%; display: flex; align-items: center; justify-content: center; gap: 20px; padding: 20px 5%; background: #fff; position: relative; z-index: 1; overflow: hidden; isolation: isolate; }
        .mission-annapurna .about-image { position: relative; overflow: hidden; isolation: isolate; }
        .mission-annapurna .about-image img { border-radius: 35px; height: 450px; object-fit: cover; box-shadow: 0 25px 50px rgba(0,0,0,0.12); transition: 0.5s ease; }
        .mission-annapurna .about-image img:hover { transform: scale(1.03); box-shadow: 0 40px 90px rgba(0,0,0,0.2); }
        .mission-annapurna .about-image::before {
          content: ""; position: absolute; top: 20px; left: 20px; width: 100%; height: 100%;
          border-radius: 35px; background: linear-gradient(135deg, rgba(0,163,218,0.2), transparent);
          filter: blur(12px); z-index: -1;
        }
        .mission-annapurna .about-content { flex: 1; max-width: 520px; }
        .mission-annapurna .mini-title { color: #00a3da; font-weight: 700; font-size: 30px; margin-bottom: 18px; display: block; }
        .mission-annapurna .about-content h2 { font-size: 42px; line-height: 1.2; margin-bottom: 22px; }
        .mission-annapurna .about-content h2 span { color: #00a3da; }
        .mission-annapurna .about-content p { font-size: 15px; line-height: 1.8; color: #51606d; }
        .mission-annapurna .feature-boxes { display: flex; flex-wrap: wrap; gap: 15px; margin-top: 28px; }
        .mission-annapurna .feature-card {
          background: #f7fcff; padding: 20px; border-radius: 22px; transition: 0.3s ease;
          cursor: pointer; flex: 1 1 calc(50% - 15px); min-width: 160px;
        }
        .mission-annapurna .feature-card:hover { background: #00a3da; }
        .mission-annapurna .feature-card:hover h4, .mission-annapurna .feature-card:hover p { color: #fff; }
        .mission-annapurna .feature-card h4 { font-size: 17px; margin-bottom: 8px; }
        .mission-annapurna .feature-card p { font-size: 13px; }

        .mission-annapurna .impact-section {
          width: 100%; padding: 60px 5%;
          background: radial-gradient(circle at top left, #dff6ff 0%, transparent 35%),
          linear-gradient(135deg, #f4f6f8, #eef8ff);
        }
        .mission-annapurna .section-heading { text-align: center; margin-bottom: 35px; }
        .mission-annapurna .section-heading span { color: #00a3da; font-weight: 800; font-size: 20px; }
        .mission-annapurna .section-heading h2 { font-size: 40px; margin-top: 10px; }
        .mission-annapurna .impact-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; }
        .mission-annapurna .impact-card {
          background: #fff; padding: 28px 18px; text-align: center; border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06); transition: 0.3s ease; position: relative; overflow: hidden; cursor: pointer;
        }
        .mission-annapurna .impact-card::before {
          content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 0%;
          background: #00a3da; transition: 0.4s ease; z-index: 1;
        }
        .mission-annapurna .impact-card:hover::before { height: 100%; }
        .mission-annapurna .impact-card h3, .mission-annapurna .impact-card p { position: relative; z-index: 2; transition: 0.3s ease; }
        .mission-annapurna .impact-card:hover h3, .mission-annapurna .impact-card:hover p { color: #fff; }

        .mission-annapurna .gallery-section { width: 100%; padding: 50px 5%; }
        .mission-annapurna .gallery-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; }
        .mission-annapurna .gallery-card {
          overflow: hidden; border-radius: 24px; height: 420px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06); transition: 0.3s ease;
        }
        .mission-annapurna .gallery-card img { height: 100%; object-fit: cover; transition: 0.6s; }
        .mission-annapurna .gallery-card:hover img { transform: scale(1.12); }

        .mission-annapurna .sevak-donation {
          width: 100%; background: linear-gradient(to right, #009BD4 0%, #0285C3 25%, #046FB1 50%, #074D97 75%, #083D8B 100%);
          padding: 50px 4%; min-height: 120px; display: flex; align-items: center;
        }
        .mission-annapurna .sevak-donation-content { width: 100%; display: flex; justify-content: space-between; align-items: center; min-height: 120px; }
        .mission-annapurna .sevak-left { display: flex; flex-direction: column; gap: 4px; }
        .mission-annapurna .sevak-tag { font-size: 20px; font-weight: 700; color: #fff; }
        .mission-annapurna .sevak-title { font-size: 41px; margin: 0; line-height: 1.2; color: #fff; }
        .mission-annapurna .sevak-desc { font-size: 15px; margin: 0; color: #fff; }
        .mission-annapurna .sevak-btn {
          display: inline-block; padding: 15px 36px; background: #00a3da; color: #fff; text-decoration: none;
          border-radius: 6px; font-weight: 700; font-size: 16px; white-space: nowrap; transition: 0.3s;
        }
        .mission-annapurna .sevak-btn:hover { transform: translateY(-2px); }

        .mission-annapurna .testimonial-section { padding: 50px 5%; }
        .mission-annapurna .section-header { text-align: center; margin-bottom: 40px; }
        .mission-annapurna .section-header h2 { font-size: 42px; margin: 18px 0; }
        .mission-annapurna .testimonial-grid {
          width: 100%; max-width: 1200px; margin: auto; display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; align-items: stretch;
        }
        .mission-annapurna .testimonial-card {
          width: 100%; background: #fff; padding: 30px; border-radius: 28px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.07); transition: 0.4s; overflow: hidden; position: relative;
        }
        .mission-annapurna .testimonial-card:hover { transform: translateY(-10px); }
        .mission-annapurna .testimonial-card p { line-height: 2; color: #6c7d8e; margin-bottom: 25px; }
        .mission-annapurna .testimonial-card h4 { color: #00a3da; }
        .mission-annapurna .testimonial-card h4, .mission-annapurna .testimonial-card p { position: relative; z-index: 3; transition: 0.4s ease; }
        .mission-annapurna .testimonial-card:hover h4, .mission-annapurna .testimonial-card:hover p { color: #fff !important; }
        .mission-annapurna .testimonial-card::before {
          content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 0%;
          background: #00a3da; transition: 0.4s ease; z-index: 1; border-radius: 28px;
        }
        .mission-annapurna .testimonial-card:hover::before { height: 100%; }
        .mission-annapurna .testimonial-card > * { position: relative; z-index: 2; }

        @media (max-width: 991px) {
          .mission-annapurna .hero-section, .mission-annapurna .about-section { flex-direction: column; text-align: center; }
          .mission-annapurna .about-section { margin-top: 50px; clip-path: inset(0); }
          .mission-annapurna #donate { margin-bottom: 30px; }
          .mission-annapurna .about-image img { box-shadow: none; }
          .mission-annapurna .hero-left, .mission-annapurna .about-content { max-width: 100%; }
          .mission-annapurna .hero-buttons { justify-content: center; }
          .mission-annapurna .hero-left h1 { font-size: 46px; }
          .mission-annapurna .about-content h2, .mission-annapurna .section-heading h2 { font-size: 34px; }
          .mission-annapurna .impact-grid { grid-template-columns: repeat(2,1fr); }
          .mission-annapurna .gallery-grid { grid-template-columns: repeat(2,1fr); }
          .mission-annapurna .gallery-card { height: 300px; }
          .mission-annapurna .feature-boxes { flex-direction: column; }
          .mission-annapurna .sevak-donation-content { flex-direction: column; text-align: center; gap: 20px; min-height: auto; }
          .mission-annapurna .sevak-title { font-size: 34px; }
          .mission-annapurna .testimonial-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .mission-annapurna .hero-left h1 { font-size: 38px; }
          .mission-annapurna .hero-buttons { flex-direction: column; }
          .mission-annapurna .hero-right { min-height: auto; padding-bottom: 40px; }
          .mission-annapurna .main-image-card { max-width: 100%; }
          .mission-annapurna .floating-card { position: absolute; padding: 5px 8px; }
          .mission-annapurna .floating-card h3 { font-size: 14px; line-height: 1.1; }
          .mission-annapurna .floating-card p { font-size: 10px; margin: 0; }
          .mission-annapurna .gallery-grid { grid-template-columns: 1fr; }
          .mission-annapurna .gallery-card { height: 250px; border-radius: 18px; }
          .mission-annapurna .about-section { margin-top: 50px; }
          .mission-annapurna #donate { margin-bottom: 30px; }
          .mission-annapurna .sevak-title { font-size: 28px; }
        }
        @media (max-width: 360px) {
          .mission-annapurna .about-section { margin-top: 60px; }
          .mission-annapurna #donate { margin-bottom: 40px; }
        }
      `}</style>

      <div className="mission-annapurna">
        <section className="tax-box">
          <h1>Mission Annapurna</h1>
        </section>

        <section className="hero-section">
          <div className="hero-left">
            <span className="tag">Fight Against Hunger</span>
            <h1>
              Nourishing Lives <br />With <span>Hope & Humanity</span>
            </h1>
            <p>
              Being Sevak Charitable Trust presents the Annapurna Mission: Fight against Hunger, a humanitarian initiative dedicated to addressing hunger and malnutrition among underprivileged children, visually impaired individuals, and low-income families across India.
            </p>
            <div className="hero-buttons">
              <a href="#donate" className="primary-btn">Support The Mission</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="main-image-card">
              <img src="/images/a1.jpeg" alt="ngo" />
              <div className="floating-card card1">
                <h3>102K+</h3>
                <p>Annapurna Kits</p>
              </div>
              <div className="floating-card card2">
                <h3>12K+</h3>
                <p>Meals Distributed</p>
              </div>
            </div>
          </div>
        </section>

        <div id="donate" style={{ width: '100%', background: '#f4f7fb', padding: '0', overflow: 'hidden', marginBottom: '0', position: 'relative', zIndex: 10, isolation: 'isolate' }}>
          <iframe
            ref={iframeRef}
            src="/donations/donation-inline.html"
            style={{ width: '100%', height: '650px', border: 'none', display: 'block' }}
            title="Donate to Mission Annapurna"
          />
        </div>

        <section className="about-section" id="about">
          <div className="about-image">
            <img src="/images/a2.jpg" alt="food distribution" />
          </div>
          <div className="about-content">
            <span className="mini-title">ABOUT THE MISSION</span>
            <h2>Feeding Families. Empowering Communities.</h2>
            <div className="feature-boxes">
              <div className="feature-card">
                <h4>Annapurna Kit Distribution</h4>
                <p>Helping families with essential ration kits for survival.</p>
              </div>
              <div className="feature-card">
                <h4>Snack Distribution for Underprivileged Children</h4>
                <p>Bringing smiles through snacks for needy children.</p>
              </div>
              <div className="feature-card">
                <h4>Meals for Persons with Disabilities</h4>
                <p>Serving fresh meals to fight hunger every day.</p>
              </div>
              <div className="feature-card">
                <h4>Roti Drive for all Underprivileged Children</h4>
                <p>No one sleeps hungry, sharing fresh rotis daily.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-section" id="highlights">
          <div className="section-heading">
            <span>OUR PROGRAMS</span>
            <h2>Mission Annapurna - Fight Against Hunger</h2>
          </div>
          <div className="impact-grid">
            <div className="impact-card">
              <h3>01</h3>
              <p>Cooked Meal Distribution — Providing freshly cooked nutritious meals to underprivileged children to support healthy growth, education, and overall well-being.</p>
            </div>
            <div className="impact-card">
              <h3>02</h3>
              <p>Dry Ration Kits — Distributing easy-to-use ration kits to visually impaired individuals to ensure dignity, independence, and food security.</p>
            </div>
            <div className="impact-card">
              <h3>03</h3>
              <p>Nutrition Meal Support — Serving balanced and hygienic meals to children and vulnerable individuals to fight malnutrition and improve health outcomes.</p>
            </div>
            <div className="impact-card">
              <h3>04</h3>
              <p>Family Food-Grain Kits — Providing essential food-grain kits in small, medium, and large sizes to support struggling families based on their needs.</p>
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <div className="gallery-grid">
            <div className="gallery-card"><img src="/images/a3.jpg" alt="gallery" /></div>
            <div className="gallery-card"><img src="/images/a6.jpg" alt="gallery" /></div>
            <div className="gallery-card"><img src="/images/snackKit.jpeg" alt="gallery" /></div>
            <div className="gallery-card"><img src="/images/rotidrive.jpeg" alt="gallery" /></div>
          </div>
        </section>

        <section className="sevak-donation">
          <div className="sevak-donation-content">
            <div className="sevak-left">
              <span className="sevak-tag">Mission Annapurna</span>
              <h2 className="sevak-title">Nourishing Lives, Spreading Hope</h2>
              <p className="sevak-desc">Support food distribution initiatives to ensure that no family sleeps hungry and everyone receives nutritious meals.</p>
            </div>
            <div className="sevak-right">
              <a href="#" className="sevak-btn">Donate Now</a>
            </div>
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

export default MissionAnnapurna;
