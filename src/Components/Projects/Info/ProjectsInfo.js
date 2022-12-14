

const projects = [
    {
        id: 1,
        title: "Colombus music",
        info: "Colombus music is a ecommerce project where i created the Front & Back sides in differents repositories, giving me the chance to practice the conextion between Front and Back with Apis. It was a challenge just for the fact of creating all from 0, Front (styles, components), Back (Entry Point, MVC, HTTP request, Connection with Database), Database (Sequelize) and Deploying it in Heroku",
        front:"It was made with React Framework where i used Axios for Api Rest and JWT for a User Global context",
        back:"It was made with Express.js and i used Sequelize for database, it has a MVC model and JWT security",
        backDepends:["Cors","Bcrypt","Multer","Express","Body-parser","JsonWebToken","Express-session","Method-override"],
        frontDepends:["Axios","Jwt-decode","Fontawesome","React-router-dom"],
        color: "grey",
        img: "instrumentos-react-preview.png",
        github: "https://github.com/JuanSegundo7/instrumentos-front",
        demo: "https://colombus.vercel.app/"
    },
    {
        id: 2,
        title: "Rick and Morty Api",
        info: "Rick & Morty Api is a project where i practiced Api Fetch, using differents hooks like useEffect & useState, im very happy with the result because i did it in a few days only! Motivating myself to keep practicing React and all it structure",
        front:"It was made with React Framework and a few hooks like useEffect & useState",
        frontDepends:["React-router-dom"],
        color: "green",
        img: "rick-and-morty-preview.png",
        github: "https://github.com/JuanSegundo7/Rick-and-Morty",
        demo: "https://rick-and-morty-juanse.vercel.app/"
    },
    {
        id: 3,
        title: "PI DOGS - HENRY",
        info: "This is one of the final proyects that i made in Henry, in particular, this was a individual proyect in React with Redux and Postgresql, where they evaluated how were my skills in Front and Back with an Dogs Api - https://thedogapi.com/",
        front:"It was made with React Framework and Redux",
        back:"The back side is composed by Express and Postgresql",
        backDepends:["Express","Postgresql"],
        frontDepends:["React-router-dom", "Redux", "React"],
        color: "grey",
        img: "dogs-preview.png",
        github: "https://github.com/JuanSegundo7/PI-Dogs-Front",
        demo: "https://pi-dogs-jsm.vercel.app//"
    },
    {
        id: 4,
        title: "Tiger Coffee - HENRY",
        info: "Tiger Coffee is the final proyect that i made in Henry. Tiger Coffee is an ecommerce that we made in group, my responsability was the esthetic of the place and a lot of the front side, like html structure, dashboard, etc.",
        front:"It was made with React Framework, Redux and Material-UI for the dashboard",
        back:"The back side was made with Express and Mongo DB",
        backDepends:["Express","Mongo DB"],
        frontDepends:["React-router-dom", "Redux", "React", "Material-UI"],
        color: "green",
        img: "tiger_coffee_preview.png",
        github: "https://github.com/JuanSegundo7/Final_Proyect",
        demo: "https://tigercoffee.vercel.app/"
    }
]

export default projects