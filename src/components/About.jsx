
import {
  GraduationCap,
  Briefcase,
  Code2,
  MapPin,
} from "lucide-react";

function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      subtitle: "BCA – Data Science & AI",
      detail: "Babu Banarasi Das University",
      date: "2024 – 2027",
    },
    {
      icon: Briefcase,
      title: "Internship",
      subtitle: "Eduversity EduTech",
      detail: "PHP, Laravel & Job Portal Development",
      date: "Feb – Apr 2026",
    },
    {
      icon: Code2,
      title: "Apprenticeship",
      subtitle: "Hindtech IT Solutions",
      detail: "React, JavaScript, HTML, CSS & Tailwind",
      date: "Jun 2025 – Feb 2026",
    },
  ];

  return (
    <>
      <style>{`
        .about-section {
          background: #0b1020;
          color: #fff;
          padding-top: 100px;
          padding-bottom: 100px;
          position: relative;
          overflow: hidden;
        }

        .about-container {
          max-width: 1200px;
          margin: auto;
        }

        .about-heading {
          text-align: center;
          margin-bottom: 55px;
        }

        .about-label {
          color: #a78bfa;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .about-heading h2 {
          font-size: clamp(32px, 5vw, 46px);
          font-weight: 700;
          margin: 0;
        }

        .about-heading h2 span,
        .about-intro h3 span {
          color: #a78bfa;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 55px;
          align-items: center;
        }

        .about-intro h3 {
          font-size: 27px;
          line-height: 1.4;
          margin-bottom: 22px;
          font-weight: 650;
        }

        .about-intro p {
          color: #a1a1aa;
          font-size: 15px;
          line-height: 1.9;
          margin-bottom: 17px;
        }

        .about-location {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #c4b5fd;
          font-size: 14px;
          margin-top: 25px;
        }

        .about-cards {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .about-card {
          display: flex;
          align-items: flex-start;
          gap: 17px;
          padding: 22px;
          background: #111a30;
          border: 1px solid #27314b;
          border-radius: 16px;
          transition: 0.3s ease;
        }

        .about-card:hover {
          transform: translateY(-4px);
          border-color: #8b5cf6;
          background: #151f39;
        }

        .about-icon {
          width: 48px;
          height: 48px;
          min-width: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #292044;
          color: #c4b5fd;
          border-radius: 12px;
        }

        .about-card-content {
          flex: 1;
          min-width: 0;
        }

        .about-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          flex-wrap: wrap;
        }

        .about-card h4 {
          font-size: 17px;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .about-card h5 {
          color: #c4b5fd;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 7px;
        }

        .about-card p {
          color: #9ca3af;
          font-size: 13px;
          line-height: 1.6;
        }

        .about-date {
          color: #c4b5fd;
          background: #292044;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 11px;
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .about-section {
            padding-top: 70px;
            padding-bottom: 70px;
          }

          .about-heading {
            margin-bottom: 38px;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .about-intro h3 {
            font-size: 23px;
          }
        }

        @media (max-width: 480px) {
          .about-card {
            padding: 17px;
            gap: 12px;
          }

          .about-icon {
            width: 42px;
            height: 42px;
            min-width: 42px;
          }

          .about-date {
            font-size: 10px;
          }
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="about-container">

          <div className="about-heading">
            <p className="about-label">Get to know me</p>
            <h2>
              About <span>Me</span>
            </h2>
          </div>

          <div className="about-content">

            <div className="about-intro">
              <h3>
                Building digital experiences
                <br />
                with <span>creativity & code.</span>
              </h3>

              <p>
                Hi! I'm Deepanjali Pal, a BCA student specializing in Data Science
                and Artificial Intelligence, with a strong interest
                in web development and building meaningful digital
                experiences.
              </p>

              <p>
                I enjoy working with React, JavaScript, PHP, Laravel
                and modern frontend technologies. Through my
                internship and apprenticeship experiences, I've
                developed practical skills and worked on real-world
                development tasks.
              </p>

              <p>
                I'm continuously learning, improving my technical
                skills and exploring new technologies to create
                useful and user-friendly applications.
                I'm looking forward to collaborating with businesses and clients from around the world.
              </p>

              <div className="about-location">
                <MapPin size={18} />
                <span>Uttar Pradesh, India</span>
              </div>
            </div>

            <div className="about-cards">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div className="about-card" key={index}>
                    <div className="about-icon">
                      <Icon size={23} />
                    </div>

                    <div className="about-card-content">
                      <div className="about-card-top">
                        <div>
                          <h4>{item.title}</h4>
                          <h5>{item.subtitle}</h5>
                        </div>

                        <span className="about-date">
                          {item.date}
                        </span>
                      </div>

                      <p>{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default About;
