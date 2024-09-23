import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Language translations
const translations = {
  en: {
    heading: "Contact Us",
    languageLabel: "Preferred Language",
    messageTypeLabel: "Message Type",
    messageLabel: "Message",
    firstNameLabel: "First Name",
    lastNameLabel: "Last Name",
    emailLabel: "Email Address",
    countryLabel: "Country",
    messagePlaceholder: "Your Message",
    firstNamePlaceholder: "First Name",
    lastNamePlaceholder: "Last Name",
    emailPlaceholder: "Your Email Address",
    submitButton: "Submit",
  },
  hi: {
    heading: "संपर्क करें",
    languageLabel: "पसंदीदा भाषा",
    messageTypeLabel: "संदेश प्रकार",
    messageLabel: "संदेश",
    firstNameLabel: "पहला नाम",
    lastNameLabel: "अंतिम नाम",
    emailLabel: "ईमेल पता",
    countryLabel: "देश",
    messagePlaceholder: "आपका संदेश",
    firstNamePlaceholder: "पहला नाम",
    lastNamePlaceholder: "अंतिम नाम",
    emailPlaceholder: "आपका ईमेल पता",
    submitButton: "जमा करें",
  },
  fr: {
    heading: "Contactez Nous",
    languageLabel: "Langue Préférée",
    messageTypeLabel: "Type de Message",
    messageLabel: "Message",
    firstNameLabel: "Prénom",
    lastNameLabel: "Nom de Famille",
    emailLabel: "Adresse Email",
    countryLabel: "Pays",
    messagePlaceholder: "Votre Message",
    firstNamePlaceholder: "Prénom",
    lastNamePlaceholder: "Nom de Famille",
    emailPlaceholder: "Votre Adresse Email",
    submitButton: "Envoyer",
  },
  es: {
    heading: "Contáctenos",
    languageLabel: "Idioma Preferido",
    messageTypeLabel: "Tipo de Mensaje",
    messageLabel: "Mensaje",
    firstNameLabel: "Nombre",
    lastNameLabel: "Apellido",
    emailLabel: "Dirección de Correo Electrónico",
    countryLabel: "País",
    messagePlaceholder: "Tu Mensaje",
    firstNamePlaceholder: "Nombre",
    lastNamePlaceholder: "Apellido",
    emailPlaceholder: "Tu Dirección de Correo Electrónico",
    submitButton: "Enviar",
  },
  it: {
    heading: "Contattaci",
    languageLabel: "Lingua Preferita",
    messageTypeLabel: "Tipo di Messaggio",
    messageLabel: "Messaggio",
    firstNameLabel: "Nome",
    lastNameLabel: "Cognome",
    emailLabel: "Indirizzo Email",
    countryLabel: "Paese",
    messagePlaceholder: "Il Tuo Messaggio",
    firstNamePlaceholder: "Nome",
    lastNamePlaceholder: "Cognome",
    emailPlaceholder: "Il Tuo Indirizzo Email",
    submitButton: "Invia",
  },
  de: {
    heading: "Kontaktieren Sie uns",
    languageLabel: "Bevorzugte Sprache",
    messageTypeLabel: "Nachrichtentyp",
    messageLabel: "Nachricht",
    firstNameLabel: "Vorname",
    lastNameLabel: "Nachname",
    emailLabel: "E-Mail-Adresse",
    countryLabel: "Land",
    messagePlaceholder: "Ihre Nachricht",
    firstNamePlaceholder: "Vorname",
    lastNamePlaceholder: "Nachname",
    emailPlaceholder: "Ihre E-Mail-Adresse",
    submitButton: "Senden",
  },
  ja: {
    heading: "お問い合わせ",
    languageLabel: "希望の言語",
    messageTypeLabel: "メッセージの種類",
    messageLabel: "メッセージ",
    firstNameLabel: "名",
    lastNameLabel: "姓",
    emailLabel: "メールアドレス",
    countryLabel: "国",
    messagePlaceholder: "あなたのメッセージ",
    firstNamePlaceholder: "名",
    lastNamePlaceholder: "姓",
    emailPlaceholder: "あなたのメールアドレス",
    submitButton: "送信",
  },
};

const ContactForm = () => {
  const [language, setLanguage] = useState('en'); 
  const darkMode = useSelector((state) => state.auth.darkMode);
  const [isSubmitted, setIsSubmitted]= useState(false);
  const [showSecondGif, setShowSecondGif] = useState(false);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value); // Update selected language
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get form values
    const firstName = e.target['first-name'].value;
    const lastName = e.target['last-name'].value;
    const email = e.target['email'].value;
    const message = e.target['inquiry'].value;
    
    // Validate form fields
    const errors = [];
    if (!firstName) errors.push(t.firstNameLabel);
    if (!lastName) errors.push(t.lastNameLabel);
    if (!email) errors.push(t.emailLabel);
    if (!message) errors.push(t.messageLabel);
  
    if (errors.length > 0) {
      // Show toast for empty fields
      toast.error(`Please fill out: ${errors.join(', ')}`);
      return; // Stop submission
    }
  
    setIsSubmitted(true);
  
    setTimeout(() => {
      setShowSecondGif(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setShowSecondGif(false); 
      }, 2400); // for 2nd gif
    }, 5000); // Duration to show first GIF
  }
  

  const t = translations[language]; // Get translations for the selected language

  return  (
    <div className={`flex justify-center items-center py-10 `}>
      <div className={`p-8 rounded-2xl shadow-xl w-[80%] h-[53.5rem] ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <h2 className='text-2xl font-bold text-center mb-4'>{t.heading}</h2>

            <div className='mb-4'>
              <label className='block mb-2' htmlFor='language'>{t.languageLabel}</label>
              <select
                id='language'
                className={`border rounded w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'}`}
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="en">English-US</option>
                <option value="hi">Hindi</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                <option value="it">Italian</option>
                <option value="de">German</option>
                <option value="ja">Japanese</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block mb-2' htmlFor='inquiry-type'>{t.messageTypeLabel}</label>
              <select
                id='inquiry-type'
                className={`border rounded w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'}`}
              >
                <option>Please select</option>
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Feedback</option>
                <option>Complaint</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block mb-2' htmlFor='inquiry'>{t.messageLabel}</label>
              <textarea
                id='inquiry'
                className={`border rounded w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'}`}
                placeholder={t.messagePlaceholder}
                rows='4'
              ></textarea>
            </div>

            <div className='mb-4'>
              <label className='block mb-2' htmlFor='first-name'>{t.firstNameLabel}</label>
              <input
                type='text'
                id='first-name'
                className={`border rounded w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'}`}
                placeholder={t.firstNamePlaceholder}
              />
            </div>

            <div className='mb-4'>
              <label className='block mb-2' htmlFor='last-name'>{t.lastNameLabel}</label>
              <input
                type='text'
                id='last-name'
                className={`border rounded w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'}`}
                placeholder={t.lastNamePlaceholder}
              />
            </div>

            <div className='mb-4'>
              <label className='block mb-2' htmlFor='email'>{t.emailLabel}</label>
              <input
                type='email'
                id='email'
                className={`border rounded w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'}`}
                placeholder={t.emailPlaceholder}
              />
            </div>

            <div className='mb-4'>
              <label className='block mb-2' htmlFor='country'>{t.countryLabel}</label>
              <select
                id='country'
                className={`border rounded w-full py-2 px-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'}`}
              >
                <option>Please select</option>
                <option>USA</option>
                <option>India</option>
                <option>Japan</option>
                <option>France</option>
                <option>Italy</option>
                <option>Germany</option>
                <option>Spain</option>
                <option>Other</option>
              </select>
            </div>

            <div className='flex justify-center'>
              <button
                type='submit'
                className='bg-blue-500 text-white py-2 px-9 mt-3 hover:bg-blue-700'
              >
                {t.submitButton}
              </button>
            </div>
          </form>
        ) : showSecondGif ? (
          <div className='flex flex-col justify-center items-center h-full'>
            <img 
              src="output-onlinegiftools.gif" 
              alt="Thank You!" 
              style={{ height: "24rem", width: "28rem", borderRadius: "1rem" }} 
            />
            <p className='text-green-500 mt-4 text-3xl'>Submitted, Thank You!</p>
          </div>
        ) : (
          <div className='flex flex-col justify-center items-center h-full'>
            <img 
              src="post-letter.gif" 
              alt="Submitting..." 
              style={{ height: "24rem", width: "24rem", borderRadius: "1rem" }} 
            />
            <p className='text-green-500 mt-4 text-3xl'>Posting...</p>
          </div>
        )}

        <ToastContainer theme='colored'                  
          position='top-right'
          autoClose={1600}
        />
      </div>
    </div>
  );
};

export default ContactForm;
