import ReCAPTCHA from 'react-google-recaptcha'

import './css/recaptcha_compoenent.scss';

const ReCaptchaComponent = ({onChange, lang}) => {
    cosnt SITE_KEY = '6LcohVYrAAAAAPZudXnSE_Ao4EKBnw5vSLeYkIqI';
   
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
