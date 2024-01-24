import comarchOssImg from './img/comarch_oss.png';
import snowPlowImg from './img/SnowPlow.png';
import roomPlanner from './img/roomPlanner.png';
import androidTodoImg from './img/androidTodo.png';

const getProjectsData = () => {
    const projects = [];

    projects.push({
        imgSrc: comarchOssImg,
        title: 'comarch_oss_project_title',
        descriptionLabel: 'comarch_oss_project_label',
        link: 'https://www.comarch.com/telecommunications/oss-solutions/'
    });
    projects.push({imgSrc: snowPlowImg, title: 'snow_plow_project_title', descriptionLabel: 'snow_plow_project_label'});
    projects.push({imgSrc: roomPlanner, title: 'room_planner_project_title', descriptionLabel: 'room_planner_project_label'});
    projects.push({imgSrc: androidTodoImg, title: 'android_todo_project_title', descriptionLabel: 'android_todo_project_label'});

    return projects;
}
export default getProjectsData;