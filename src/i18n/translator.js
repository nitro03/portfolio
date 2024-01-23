import pl_dictionary from './dictionaries/pl.json';
import en_dictionary from './dictionaries/en.json';

const translator = (label, lang) => {
    let dictionary;
    if(!lang){
        console.warn("language not passed to translator");
    }
    switch (lang) {
        case "pl":
            dictionary = pl_dictionary;
            break;
        case "en":
            dictionary = en_dictionary;
            break;
        default:
            dictionary = pl_dictionary;
    }

    const translatedValue = dictionary[label?.toLowerCase()];

    if (translatedValue) {
        return translatedValue;
    }
    console.warn(`cannot translate: ${label} for: ${lang}`)
    return "";
}

export default translator;
