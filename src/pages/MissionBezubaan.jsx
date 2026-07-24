import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const MissionBezubaan = () => {
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
        .mission-bezubaan * { margin: 0; padding: 0; box-sizing: border-box; }
        .mission-bezubaan { font-family: 'Montserrat', sans-serif; background: #f4f6f8; color: #1d2b36; overflow-x: hidden; }
        .mission-bezubaan img { width: 100%; display: block; }

        .mission-bezubaan .tax-box {
          width: 100%; height: 70px; display: flex; justify-content: center; align-items: center;
          text-align: center; background: linear-gradient(to right, #009BD4 0%, #0285C3 25%, #046FB1 50%, #074D97 75%, #083D8B 100%);
          color: #fff; margin: 10px 0; padding: 10px; position: relative; overflow: hidden; transition: 0.4s ease;
        }
        .mission-bezubaan .tax-box h1 { font-size: 28px; font-weight: 700; position: relative; z-index: 2; }
        .mission-bezubaan .tax-box p { font-size: 16px; line-height: 1.6; position: relative; z-index: 2; }
        .mission-bezubaan .tax-box::before {
          content: ""; position: absolute; width: 200%; height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.15), transparent);
          top: -50%; left: -50%; animation: bzShine 6s linear infinite;
        }
        .mission-bezubaan .tax-box:hover { transform: translateY(-5px) scale(1.01); box-shadow: 0 25px 60px rgba(0,163,218,0.35); }
        @keyframes bzShine { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        .mission-bezubaan .hero-section {
          width: 100%; min-height: 100vh; display: flex; align-items: center; justify-content: center;
          gap: 40px; padding: 50px 5%; overflow: hidden;
          background: radial-gradient(circle at top left, #dff6ff 0%, transparent 35%),
          radial-gradient(circle at bottom right, #c7ecff 0%, transparent 35%),
          linear-gradient(135deg, #ffffff, #eef8ff);
        }
        .mission-bezubaan .hero-left { flex: 1; max-width: 520px; }
        .mission-bezubaan .tag { color: #00a3da; display: inline-block; margin-bottom: 25px; font-weight: 800; font-size: 30px; letter-spacing: 1px; background: none; }
        .mission-bezubaan .hero-left h1 { font-size: 62px; line-height: 1.1; font-weight: 800; margin-bottom: 22px; color: #1c2b36; }
        .mission-bezubaan .hero-left h1 span { color: #00a3da; }
        .mission-bezubaan .hero-left p { font-size: 18px; line-height: 1.9; color: #51606d; margin-bottom: 30px; }
        .mission-bezubaan .hero-buttons { display: flex; gap: 15px; flex-wrap: wrap; }
        .mission-bezubaan .primary-btn {
          text-decoration: none; padding: 14px 26px; border-radius: 50px; font-size: 18px; font-weight: 700;
          transition: 0.3s; background: #00a3da; color: #fff; box-shadow: 0 15px 35px rgba(0,163,218,0.35);
        }
        .mission-bezubaan .primary-btn:hover { transform: translateY(-4px); }
        .mission-bezubaan .hero-right {
          flex: 1; display: flex; justify-content: center; align-items: center;
          position: relative; max-width: 500px; min-height: 500px;
        }
        .mission-bezubaan .main-image-card {
          width: 100%; max-width: 480px; position: relative; z-index: 2;
          transform: perspective(1000px) rotate(-3deg);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15), 0 10px 25px rgba(0,163,218,0.12);
          transition: 0.6s ease; animation: bzFloatCard 4s ease-in-out infinite;
        }
        .mission-bezubaan .main-image-card img { width: 100%; display: block; object-fit: cover; border-radius: 30px; transition: 0.6s ease; }
        .mission-bezubaan .main-image-card:hover { transform: perspective(1000px) rotate(0deg) scale(1.05); box-shadow: 0 40px 90px rgba(0,0,0,0.25); }
        @keyframes bzFloatCard {
          0% { transform: perspective(1000px) rotate(-3deg) translateY(0); }
          50% { transform: perspective(1000px) rotate(-3deg) translateY(-12px); }
          100% { transform: perspective(1000px) rotate(-3deg) translateY(0); }
        }
        .mission-bezubaan .floating-card {
          position: absolute; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px);
          padding: 15px 18px; border-radius: 20px; min-width: 160px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.10); z-index: 5; animation: bzFloat 3s ease-in-out infinite;
        }
        .mission-bezubaan .floating-card h3 { color: #00a3da; font-size: 34px; margin-bottom: 4px; }
        .mission-bezubaan .floating-card p { font-size: 12px; font-weight: 600; color: #51606d; }
        .mission-bezubaan .card1 { top: -10px; left: -10px; }
        .mission-bezubaan .card2 { bottom: -10px; right: -10px; }
        @keyframes bzFloat { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }

        .mission-bezubaan .donation-frame { width: 100%; min-height: 550px; border: none; display: block; }

        .mission-bezubaan .about-section { width: 100%; display: flex; align-items: center; justify-content: center; gap: 45px; padding: 45px 5%; background: #fff; position: relative; z-index: 1; overflow: hidden; isolation: isolate; }
        .mission-bezubaan .about-image { position: relative; overflow: hidden; isolation: isolate; }
        .mission-bezubaan .about-image img { border-radius: 35px; height: 450px; object-fit: cover; box-shadow: 0 25px 50px rgba(0,0,0,0.12); transition: 0.5s ease; }
        .mission-bezubaan .about-image img:hover { transform: scale(1.03); box-shadow: 0 40px 90px rgba(0,0,0,0.2); }
        .mission-bezubaan .about-image::before {
          content: ""; position: absolute; top: 20px; left: 20px; width: 100%; height: 100%;
          border-radius: 35px; background: linear-gradient(135deg, rgba(0,163,218,0.2), transparent);
          filter: blur(12px); z-index: -1;
        }
        .mission-bezubaan .about-content { flex: 1; max-width: 520px; }
        .mission-bezubaan .mini-title { color: #00a3da; font-weight: 700; font-size: 30px; margin-bottom: 18px; display: block; }
        .mission-bezubaan .about-content h2 { font-size: 42px; line-height: 1.2; margin-bottom: 22px; }
        .mission-bezubaan .about-content h2 span { color: #00a3da; }
        .mission-bezubaan .about-content p { font-size: 15px; line-height: 1.8; color: #51606d; }
        .mission-bezubaan .feature-boxes { display: flex; flex-wrap: wrap; gap: 15px; margin-top: 28px; }
        .mission-bezubaan .feature-card {
          background: #f7fcff; padding: 20px; border-radius: 22px; transition: 0.3s ease;
          cursor: pointer; flex: 1 1 calc(50% - 15px); min-width: 160px;
        }
        .mission-bezubaan .feature-card:hover { background: #00a3da; }
        .mission-bezubaan .feature-card:hover h4, .mission-bezubaan .feature-card:hover p, .mission-bezubaan .feature-card:hover .icon { color: #fff; }
        .mission-bezubaan .icon { font-size: 28px; margin-bottom: 12px; }
        .mission-bezubaan .feature-card h4 { font-size: 17px; margin-bottom: 8px; }
        .mission-bezubaan .feature-card p { font-size: 13px; }

        .mission-bezubaan .impact-section {
          width: 100%; padding: 60px 5%;
          background: radial-gradient(circle at top left, #dff6ff 0%, transparent 35%),
          linear-gradient(135deg, #f4f6f8, #eef8ff);
        }
        .mission-bezubaan .section-heading { text-align: center; margin-bottom: 35px; }
        .mission-bezubaan .section-heading span { color: #00a3da; font-weight: 800; font-size: 20px; }
        .mission-bezubaan .section-heading h2 { font-size: 40px; margin-top: 10px; }
        .mission-bezubaan .impact-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; }
        .mission-bezubaan .impact-card {
          background: #fff; padding: 28px 18px; text-align: center; border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06); transition: 0.3s ease; position: relative; overflow: hidden; cursor: pointer;
        }
        .mission-bezubaan .impact-card::before {
          content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 0%;
          background: #00a3da; transition: 0.4s ease; z-index: 1;
        }
        .mission-bezubaan .impact-card:hover::before { height: 100%; }
        .mission-bezubaan .impact-card h3, .mission-bezubaan .impact-card p { position: relative; z-index: 2; transition: 0.3s ease; }
        .mission-bezubaan .impact-card:hover h3, .mission-bezubaan .impact-card:hover p { color: #fff; }

        .mission-bezubaan .techvision-wrap { width: 100%; padding: 70px 7%; background: #fff; overflow: hidden; }
        .mission-bezubaan .techvision-container { display: flex; align-items: center; justify-content: space-between; gap: 70px; flex-wrap: wrap; }
        .mission-bezubaan .techvision-image-side { flex: 1; min-width: 320px; }
        .mission-bezubaan .techvision-image-box {
          position: relative; border-radius: 35px; overflow: hidden; background: #fff;
          box-shadow: 0 25px 60px rgba(0,0,0,0.12), 0 12px 30px rgba(0,163,218,0.18); transition: 0.5s;
        }
        .mission-bezubaan .techvision-image-box:hover { transform: translateY(-10px) rotate(-1deg); }
        .mission-bezubaan .techvision-image-box img { width: 100%; height: 620px; object-fit: cover; display: block; }
        .mission-bezubaan .techvision-content-side { flex: 1; min-width: 320px; }
        .mission-bezubaan .techvision-mini-title {
          display: inline-block; padding: 10px 22px; background: #00a3da; color: #fff; border-radius: 60px;
          font-size: 20px; font-weight: 700; margin-bottom: 20px; box-shadow: 0 10px 25px rgba(163,218,0,0.25);
        }
        .mission-bezubaan .techvision-content-side h3 { font-size: 38px; line-height: 1.1; color: #111; margin-bottom: 28px; font-weight: 800; }
        .mission-bezubaan .techvision-content-side p { font-size: 17px; line-height: 1.9; color: #555; margin-bottom: 18px; }
        .mission-bezubaan .techvision-feature-grid { display: flex; flex-wrap: wrap; gap: 18px; margin-top: 35px; }
        .mission-bezubaan .techvision-feature-card {
          flex: 1; min-width: 180px; background: #fff; border: 1px solid #e8f6fc; padding: 28px 22px;
          border-radius: 24px; transition: 0.4s;
          box-shadow: 0 12px 30px rgba(0,0,0,0.05), 0 8px 20px rgba(0,163,218,0.08);
        }
        .mission-bezubaan .techvision-feature-card:hover { transform: translateY(-8px); }
        .mission-bezubaan .techvision-feature-card h3 { font-size: 22px; color: #00a3da; margin-bottom: 10px; font-weight: 700; }
        .mission-bezubaan .techvision-feature-card span { font-size: 15px; color: #666; line-height: 1.7; }
        .mission-bezubaan .techvision-btn {
          display: inline-block; margin-top: 40px; padding: 16px 35px; background: #00a3da; color: #fff;
          text-decoration: none; border-radius: 60px; font-weight: 600; transition: 0.4s;
          box-shadow: 0 15px 30px rgba(0,163,218,0.25);
        }
        .mission-bezubaan .techvision-btn:hover { background: #008dbd; transform: translateY(-5px); }

        .mission-bezubaan .sevak-donation {
          width: 100%; background: linear-gradient(to right, #009BD4 0%, #0285C3 25%, #046FB1 50%, #074D97 75%, #083D8B 100%);
          padding: 50px 4%; min-height: 120px; display: flex; align-items: center;
        }
        .mission-bezubaan .sevak-donation-content { width: 100%; display: flex; justify-content: space-between; align-items: center; min-height: 120px; }
        .mission-bezubaan .sevak-left { display: flex; flex-direction: column; gap: 4px; }
        .mission-bezubaan .sevak-tag { font-size: 20px; font-weight: 700; color: #fff; }
        .mission-bezubaan .sevak-title { font-size: 41px; margin: 0; line-height: 1.2; color: #fff; }
        .mission-bezubaan .sevak-desc { font-size: 15px; margin: 0; color: #fff; }
        .mission-bezubaan .sevak-btn {
          display: inline-block; padding: 15px 36px; background: #00a3da; color: #fff; text-decoration: none;
          border-radius: 6px; font-weight: 700; font-size: 16px; white-space: nowrap; transition: 0.3s;
        }
        .mission-bezubaan .sevak-btn:hover { transform: translateY(-2px); }

        .mission-bezubaan .testimonial-section { padding: 50px 5%; }
        .mission-bezubaan .section-header { text-align: center; margin-bottom: 40px; }
        .mission-bezubaan .section-header h2 { font-size: 42px; margin: 18px 0; }
        .mission-bezubaan .testimonial-grid {
          width: 100%; max-width: 1200px; margin: auto; display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; align-items: stretch;
        }
        .mission-bezubaan .testimonial-card {
          width: 100%; background: #fff; padding: 30px; border-radius: 28px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.07); transition: 0.4s; overflow: hidden; position: relative;
        }
        .mission-bezubaan .testimonial-card:hover { transform: translateY(-10px); }
        .mission-bezubaan .testimonial-card p { line-height: 2; color: #6c7d8e; margin-bottom: 25px; }
        .mission-bezubaan .testimonial-card h4 { color: #00a3da; }
        .mission-bezubaan .testimonial-card h4, .mission-bezubaan .testimonial-card p { position: relative; z-index: 3; transition: 0.4s ease; }
        .mission-bezubaan .testimonial-card:hover h4, .mission-bezubaan .testimonial-card:hover p { color: #fff !important; }
        .mission-bezubaan .testimonial-card::before {
          content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 0%;
          background: #00a3da; transition: 0.4s ease; z-index: 1; border-radius: 28px;
        }
        .mission-bezubaan .testimonial-card:hover::before { height: 100%; }
        .mission-bezubaan .testimonial-card > * { position: relative; z-index: 2; }

        @media (max-width: 991px) {
          .mission-bezubaan .hero-section, .mission-bezubaan .about-section { flex-direction: column; text-align: center; }
          .mission-bezubaan .about-section { margin-top: 50px; clip-path: inset(0); }
          .mission-bezubaan #donate { margin-bottom: 30px; }
          .mission-bezubaan .hero-left, .mission-bezubaan .about-content { max-width: 100%; }
          .mission-bezubaan .hero-buttons { justify-content: center; }
          .mission-bezubaan .hero-left h1 { font-size: 46px; }
          .mission-bezubaan .about-content h2, .mission-bezubaan .section-heading h2, .mission-bezubaan .techvision-content-side h3 { font-size: 34px; }
          .mission-bezubaan .impact-grid { grid-template-columns: repeat(2,1fr); }
          .mission-bezubaan .feature-boxes { flex-direction: column; }
          .mission-bezubaan .techvision-container { flex-direction: column; }
          .mission-bezubaan .techvision-image-box img { height: 500px; }
          .mission-bezubaan .sevak-donation-content { flex-direction: column; text-align: center; gap: 20px; min-height: auto; }
          .mission-bezubaan .sevak-title { font-size: 34px; }
          .mission-bezubaan .testimonial-grid { grid-template-columns: 1fr; }
          .mission-bezubaan .about-image img { box-shadow: none; }
        }
        @media (max-width: 600px) {
          .mission-bezubaan .hero-left h1 { font-size: 38px; }
          .mission-bezubaan .hero-buttons { flex-direction: column; }
          .mission-bezubaan .hero-right { min-height: auto; padding-bottom: 40px; }
          .mission-bezubaan .main-image-card { max-width: 100%; }
          .mission-bezubaan .floating-card { position: absolute; padding: 5px 8px; }
          .mission-bezubaan .floating-card h3 { font-size: 14px; line-height: 1.1; }
          .mission-bezubaan .floating-card p { font-size: 10px; margin: 0; }
          .mission-bezubaan .techvision-wrap { padding: 50px 5%; }
          .mission-bezubaan .techvision-content-side h3 { font-size: 28px; }
          .mission-bezubaan .techvision-image-box img { height: 350px; }
          .mission-bezubaan .sevak-title { font-size: 28px; }
          .mission-bezubaan .about-section { margin-top: 50px; }
          .mission-bezubaan #donate { margin-bottom: 30px; }
        }
        @media (max-width: 360px) {
          .mission-bezubaan .about-section { margin-top: 60px; }
          .mission-bezubaan #donate { margin-bottom: 40px; }
        }
      `}</style>

      <div className="mission-bezubaan">
        <section className="tax-box">
          <h1>Mission Bezubaan</h1>
        </section>

        <section className="hero-section">
          <div className="hero-left">
            <span className="tag">Mission Bezubaan</span>
            <h1>
              Be Their <span>Voice</span><br />
              Feed & Protect Street Animals
            </h1>
            <p>
              Mission Bezubaan by Being Sevak Charitable Trust supports stray animals with food,
              care, shelter and compassion. Every paw deserves love, safety and a better tomorrow.
            </p>
            <div className="hero-buttons">
              <a href="#donate" className="primary-btn">Donate Now</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="main-image-card">
              <img src="/images/b1.png" alt="Dog" />
              <div className="floating-card card1">
                <h3>5000+</h3>
                <p>Animals Fed</p>
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
    src="/donations/donation-inline-bezubaan.html"
    style={{ width: '100%', height: '650px', border: 'none', display: 'block' }}
    title="Donate to Mission Bezubaan"
  />
</div>

        <section className="about-section" id="about">
          <div className="about-image">
            <img src="/images/b2.jpg" alt="Animals" />
          </div>
          <div className="about-content">
            <span className="mini-title">About Bezubaan</span>
            <h2>Compassion For Every <span>Silent Soul</span></h2>
            <p>
              Mission Bezubaan works to provide nutrition, safety and medical support for stray animals
              living on streets. Our goal is to create a kinder and more caring world for voiceless companions.
            </p>
            <div className="feature-boxes">
              <div className="feature-card">
                <div className="icon">🐾</div>
                <h4>Daily Feeding</h4>
                <p>Nutritious meals for hungry street animals.</p>
              </div>
              <div className="feature-card">
                <div className="icon">❤️</div>
                <h4>Medical Care</h4>
                <p>Emergency treatment and healthcare support.</p>
              </div>
              <div className="feature-card">
                <div className="icon">🚑</div>
                <h4>Rescue Support</h4>
                <p>Helping injured and abandoned animals.</p>
              </div>
              <div className="feature-card">
                <div className="icon">🏠</div>
                <h4>Safe Shelter</h4>
                <p>Providing warmth, care and protection.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-section" id="impact">
          <div className="section-heading">
            <span>Our Mission</span>
            <h2>How We Help Street Animals</h2>
          </div>
          <div className="impact-grid">
            <div className="impact-card"><h3>10K+</h3><p>Meals Served</p></div>
            <div className="impact-card"><h3>1000+</h3><p>Animals Helped</p></div>
            <div className="impact-card"><h3>50+</h3><p>Rescue Drives</p></div>
            <div className="impact-card"><h3>24/7</h3><p>Care Support</p></div>
          </div>
        </section>

        <section className="techvision-wrap">
          <div className="techvision-container">
            <div className="techvision-image-side">
              <div className="techvision-image-box">
                <img src="/images/dog1.jpeg" alt="Paw Care Center" />
              </div>
            </div>
            <div className="techvision-content-side">
              <span className="techvision-mini-title">Paw Care Center</span>
              <h3>We Have Opened A Dedicated Paw Care Center</h3>
              <p>
                We have opened a dedicated Paw Care Center in Goregaon to support and protect stray dogs in need.
                Our center provides safe shelter, food, and proper care for abandoned and homeless dogs.
              </p>
              <p>
                Through this initiative, we aim to create a compassionate space where every stray dog
                gets love, protection, and a second chance at life.
              </p>
              <div className="techvision-feature-grid">
                <div className="techvision-feature-card"><h3>Shelter Support</h3><span>Safe space for stray dogs</span></div>
                <div className="techvision-feature-card"><h3>Medical Care</h3><span>Treatment for injured dogs</span></div>
                <div className="techvision-feature-card"><h3>Daily Feeding</h3><span>Food & regular care support</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <span className="mini-title">Spreading Care Across The Streets</span>
            <h2>Helping Animals <span>With Love & Compassion</span></h2>
            <p>
              Through continuous feeding drives and rescue efforts, Mission Bezubaan is creating hope
              and comfort for thousands of stray animals across communities.
            </p>
            <div className="feature-boxes">
              <div className="feature-card">
                <div className="icon">🐕</div>
                <h4>Food Distribution</h4>
                <p>We regularly distribute food and water to hungry animals.</p>
              </div>
              <div className="feature-card">
                <div className="icon">🏥</div>
                <h4>Rescue Activities</h4>
                <p>Our team rescues injured and helpless animals.</p>
              </div>
              <div className="feature-card">
                <div className="icon">💕</div>
                <h4>Care & Awareness</h4>
                <p>We encourage kindness towards animals in communities.</p>
              </div>
              <div className="feature-card">
                <div className="icon">🏡</div>
                <h4>Shelter Support</h4>
                <p>Providing safe homes for abandoned animals.</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="/images/b7.jpeg" alt="Impact" />
          </div>
        </section>

        <section className="impact-section">
          <div className="section-heading">
            <span>Gallery</span>
            <h2>Moments Of Love & Care</h2>
          </div>
          <div className="impact-grid">
            <div className="impact-card"><h3>10K+</h3><p>Meals Served</p></div>
            <div className="impact-card"><h3>1000+</h3><p>Animals Helped</p></div>
            <div className="impact-card"><h3>50+</h3><p>Rescue Drives</p></div>
            <div className="impact-card"><h3>100%</h3><p>Compassion Driven</p></div>
          </div>
        </section>

        <section className="sevak-donation">
          <div className="sevak-donation-content">
            <div className="sevak-left">
              <span className="sevak-tag">Mission Bezubaan</span>
              <h2 className="sevak-title">Speak for Those Who Cannot Speak</h2>
              <p className="sevak-desc">
                Our mission is to protect and care for stray and voiceless animals by providing food,
                medical support, shelter, and love.
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

export default MissionBezubaan;
