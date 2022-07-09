import portfolio from '../../public/images/portfolio.png';
import noimage from '../../public/images/undefined.png';

export const PROJECTS = [
	{
		id: 1,
		title: {
			en: 'Old Portfolio',
			es: 'Primer Portfolio',
		},
		description: {
			en: ' My first personal portfolio, back when I was starting with web design. It was a simple portfolio created with HTML and CSS only. I decided to redevelop it to a modern version with more advanced technologies.',
			es: 'Mi primer portfolio personal, recien cuando estaba empezando con el diseño web. Fue un simple portfolio creado solo con HTML y CSS. Decidi re-desarrollarlo a una version mas moderna y con tecnologias mas avanzadas.',
		},
		image: portfolio,
		web: 'https://fcgd.github.io/portfolio/',
		github: 'https://github.com/fcgd/portfolio',
		tech: ['HTML5', 'CSS3'],
		color: '#b95134',
	},
	{
		id: 2,
		title: {
			en: 'Paintings Collection eCommerce [WIP]',
			es: 'Colección de pinturas eCommerce [WIP]',
		},
		description: {
			en: 'A eCommerce site for paintings collection. It was created with NextJS. It was a project that I undertook during my studies at the University.',
			es: 'Un sitio eCommerce para la colección de pinturas. Fue creado con NextJS. Fue un proyecto que realizé durante mis estudios en la Universidad.',
		},
		image: noimage,
		web: 'https://fcgd.github.io/portfolio/',
		github: 'https://github.com/fcgd/portfolio',
		tech: ['HTML5', 'CSS3'],
		color: 'none',
	},
	{
		id: 3,
		title: {
			en: 'Rick and Morty APP [WIP]',
			es: 'Rick and Morty APP [WIP]',
		},
		description: {
			en: 'A ReactJS app that shows the characters of the Rick and Morty series. It was created with ReactJS and Redux. It was a project that I undertook during my studies at the University.',
			es: 'Una aplicación ReactJS que muestra los personajes de la serie Rick y Morty. Fue creada con ReactJS y Redux. Fue un proyecto que realizé durante mis estudios en la Universidad.',
		},
		image: noimage,
		web: 'https://fcgd.github.io/portfolio/',
		github: 'https://github.com/fcgd/portfolio',
		tech: ['HTML5', 'CSS3'],
		color: 'none',
	},
	{
		id: 4,
		title: {
			en: 'League of Legends APP [WIP]',
			es: 'League of Legends APP [WIP]',
		},
		description: {
			en: 'A ReactJS app that shows the champions of the League of Legends. It was created with ReactJS and Redux. It was a project that I undertook during my studies at the University.',
			es: 'Una aplicación ReactJS que muestra los campeones de la League of Legends. Fue creada con ReactJS y Redux. Fue un proyecto que realizé durante mis estudios en la Universidad.',
		},
		image: noimage,
		web: 'https://fcgd.github.io/portfolio/',
		github: 'https://github.com/fcgd/portfolio',
		tech: ['HTML5', 'CSS3'],
		color: 'none',
	},
];
