import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import background from '../images/footer.png';

function Footer() {
  const formMobile = useRef();
  const formDesktop = useRef();
  const [sentMessage, setSentMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = (e, formRef) => {
    e.preventDefault();
    setSentMessage(false);
    setErrorMessage('');
    setLoading(true); // Start loading

    emailjs
      .sendForm(
        'service_uv01rdk',
        'template_tlp7iz6',
        formRef.current,
        '3h4btcpmSEYESUypl'
      )
      .then(
        (result) => {
          console.log('Email sent', result.text);
          setSentMessage(true);
          formRef.current.reset();
          setLoading(false); // Stop loading
        },
        (error) => {
          console.error('Email failed:', error.text);
          setErrorMessage('Failed to send email. Please try again later.');
          setLoading(false); // Stop loading
        }
      );
  };

  // Simple spinner CSS inline styles
  const spinnerStyle = {
    border: '3px solid #f3f3f3',
    borderTop: '3px solid #4E3B2C',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div className="relative w-full">
      {/* Mobile View */}
      <form
        ref={formMobile}
        onSubmit={(e) => sendEmail(e, formMobile)}
        className="md:hidden relative z-10 px-4 py-8 space-y-6"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <p className="text-[8vw] text-center text-[#FAEDCD] font-josefin font-light">
          For additional <br />
          information, feel <br />
          free to contact us<br />
          at any time
        </p>

        <div className="w-full border-t-2 border-[#FAEDCD]" />

        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full bg-transparent text-[4vw] text-[#FAEDCD] border-b-2 border-[#FAEDCD] outline-none placeholder:text-[#999797] pb-2 font-josefin"
          disabled={loading}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full bg-transparent text-[4vw] text-[#FAEDCD] border-b-2 border-[#FAEDCD] outline-none placeholder:text-[#999797] pb-2 font-josefin"
          disabled={loading}
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="w-full bg-transparent text-[4vw] text-[#FAEDCD] border-b-2 border-[#FAEDCD] outline-none placeholder:text-[#999797] pb-2 resize-none font-josefin"
          rows={4}
          disabled={loading}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#FAEDCD] py-3 rounded-[1rem] text-[#4E3B2C] text-[4vw] font-josefin font-light flex justify-center items-center"
        >
          {loading ? (
            <div style={spinnerStyle} />
          ) : (
            'Send'
          )}
        </button>

        {sentMessage && (
          <p className="text-center text-[#FAEDCD] mt-4 font-josefin font-light text-[4vw]">
            📧 Email sent! Thank you for contacting us.
          </p>
        )}

        {errorMessage && (
          <p className="text-center text-red-500 mt-4 font-josefin font-light text-[4vw]">
            {errorMessage}
          </p>
        )}

        <div className="w-full border-t-2 border-[#FAEDCD]" />
        <p className="text-[4vw] text-white font-titillium">
          Designed and built by <span className="font-bold font-martel">Cryparion</span>
        </p>
      </form>

      {/* Desktop View */}
      <form
        ref={formDesktop}
        onSubmit={(e) => sendEmail(e, formDesktop)}
        className="hidden md:block relative"
      >
        <img className="w-full h-auto top-0" src={background} alt="footer background" />
        <p className="absolute top-[25vh] left-[8vw] text-[4vw] font-josefin font-light text-[#FAEDCD]">
          For additional <br /> information, Feel <br /> free to contact us<br /> at any time
        </p>

        <div className="absolute top-[40vh] right-[25vw] h-[1px] w-[15vw] border-[#FAEDCD] border-t-2" />
        <div className="absolute top-[40vh] right-[7vw] h-[1px] w-[15vw] border-[#FAEDCD] border-t-2" />
        <div className="absolute top-[51vh] right-[7vw] h-[1px] w-[33vw] border-[#FAEDCD] border-t-2" />

        <button
          type="submit"
          disabled={loading}
          className="absolute top-[54vh] right-[7vw] h-[5vh] w-[33vw] bg-[#FAEDCD] flex items-center justify-center text-[#4E3B2C] text-3xl font-josefin cursor-pointer"
        >
          {loading ? <div style={spinnerStyle} /> : 'Send'}
        </button>

        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          className="absolute top-[36vh] right-[24vw] bg-transparent text-2xl text-[#FAEDCD] border-0 outline-none placeholder:text-[#999797] font-josefin"
          disabled={loading}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="absolute top-[36vh] right-[6vw] bg-transparent text-2xl text-[#FAEDCD] border-0 outline-none placeholder:text-[#999797] font-josefin"
          disabled={loading}
        />
        <textarea
          name="message"
          required
          placeholder="Message"
          className="absolute top-[44vh] right-[7vw] bg-transparent text-2xl text-[#FAEDCD] border-0 outline-none placeholder:text-[#999797] w-[33vw] pl-8 font-josefin"
          disabled={loading}
        />

        <div className="absolute h-[1px] w-full bottom-[100px] border-[#FAEDCD] border-t-2" />
        <p className="absolute text-xl bottom-[30px] pl-[40%] text-white font-titillium">
          Designed and built by
        </p>
        <p className="absolute text-xl bottom-[30px] pl-[50%] font-bold font-martel text-white">
          Cryparion
        </p>

        {sentMessage && (
          <p className="absolute top-[60vh] right-[7vw] text-[#FAEDCD] font-josefin font-light text-xl">
            📧 Email sent! Thank you for contacting us.
          </p>
        )}

        {errorMessage && (
          <p className="absolute top-[60vh] right-[7vw] text-red-500 font-josefin font-light text-xl">
            {errorMessage}
          </p>
        )}
      </form>

      {/* Spinner keyframes */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
}

export default Footer;
