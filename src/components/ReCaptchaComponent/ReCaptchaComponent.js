import ReCAPTCHA from 'react-google-recaptcha'

import './css/recaptcha_compoenent.scss';

const ReCaptchaComponent = ({onChange, lang}) => {
    const SITE_KEY = '6LdRaVwpAAAAAIsKaYJZgRkAILbWY9yg0G1UMnmb';
   
    const handleVerify = () => {
        onChange(true);
    };
    const handleExpiration = () => {
        onChange(false);
    }
    console.log(lang)
    return (
        <div className="captcha_container">
            <ReCAPTCHA
                sitekey={SITE_KEY} // Replace with your actual reCAPTCHA site key
                onChange={handleVerify}
                onExpired={handleExpiration}
                hl={lang}
            />
        </div>

    );
};

export default ReCaptchaComponent;
