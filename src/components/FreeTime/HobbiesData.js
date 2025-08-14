import dyiImg from '../FreeTime/img/dyi.jpg';
import modellingImg from '../FreeTime/img/f-14-grummann.jpg';
import horusImg from '../FreeTime/img/horus.jpg';
import gaming from '../FreeTime/img/gaming_ai.jpg';
import soccerPlayerImg from '../FreeTime/img/soccer-player.jpg';

const hobbiesData = [];

hobbiesData.push({imgSrc: gaming, title: 'gaming_title', descriptionLabel: 'gaming_desc', alt: "alt__gaming"});
hobbiesData.push({imgSrc: soccerPlayerImg, title: 'sport_title', descriptionLabel: 'sport_desc', alt: "alt__sport"});
hobbiesData.push({
    imgSrc: horusImg,
    title: 'horus_title',
    descriptionLabel: 'horus_desc',
    link: 'https://pl.wikipedia.org/wiki/Kot_bengalski',
    alt: "alt__horus"
});
hobbiesData.push({
    imgSrc: modellingImg,
    title: 'modelling_title',
    descriptionLabel: 'modelling_desc',
    alt: "alt__modelling"
});
hobbiesData.push({imgSrc: dyiImg, title: 'dyi_title', descriptionLabel: 'dyi_desc', alt: "alt__dyi"});
export default hobbiesData;