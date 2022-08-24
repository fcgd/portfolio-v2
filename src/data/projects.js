import portfolio from '../../public/images/portfolio.png';
import portfolio2 from '../../public/images/portfolio-2.png';
import qrApp from '../../public/images/qr-app.png';

export const PROJECTS = [
	{
		id: 1,
		title: {
			en: 'Old Portfolio',
			es: 'Primer Portfolio',
		},
		description: {
			en: ' My first personal portfolio, back when I was starting with web design. It was created with HTML and CSS only. I decided to redevelop it to a modern version with more advanced technologies.',
			es: 'Mi primer portfolio personal, cuando recién estaba empezando con el diseño web. Fue creado solo con HTML y CSS. Decidí re-desarrollarlo a una versión mas moderna y con tecnologías mas avanzadas.',
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
			en: 'Portfolio',
			es: 'Portfolio',
		},
		description: {
			en: 'My personal portfolio, the site you are curretly on. It was created with ReactJS using ViteJS and Framer Motion to create a more dynamic and interactive experience.',
			es: 'Mi portfolio personal, el sitio que estás viendo ahora mismo. Fue creado con ReactJS usando ViteJS y Framer Motion para crear una experiencia de usuario mas dinamica.',
		},
		image: portfolio2,
		web: 'https://www.fabriciocesaretti.com/',
		github: 'https://github.com/fcgd/portfolio-v2',
		tech: ['HTML5', 'CSS3', 'ReactJS', 'JavaScript', 'Vite', 'Framer Motion'],
		color: '#214761',
	},
	{
		id: 3,
		title: {
			en: 'QR Code APP',
			es: 'QR Code APP',
		},
		description: {
			en: 'A simple QR code generator that allows you to generate QR codes with a URL. It was created with HTML, Javascript and Tailwind.',
			es: 'Un generador de códigos QR simple que te permite generar códigos QR con una URL. Fue creado con HTML, Javascript y Tailwind.',
		},
		image: qrApp,
		web: 'https://fcgd.github.io/qr-app/',
		github: 'https://github.com/fcgd/qr-app',
		tech: ['HTML5', 'JavaScript', 'Tailwind'],
		color: '#BB3F3F',
	},
	// {
	// 	id: 4,
	// 	title: {
	// 		en: 'League of Legends APP [WIP]',
	// 		es: 'League of Legends APP [WIP]',
	// 	},
	// 	description: {
	// 		en: 'A ReactJS app that shows the champions of the League of Legends. It was created with ReactJS and Redux. It was a project that I undertook during my studies at the University.',
	// 		es: 'Una aplicación ReactJS que muestra los campeones de la League of Legends. Fue creada con ReactJS y Redux. Fue un proyecto que realizé durante mis estudios en la Universidad.',
	// 	},
	// 	image: noimage,
	// 	web: 'https://fcgd.github.io/portfolio/',
	// 	github: 'https://github.com/fcgd/portfolio',
	// 	tech: ['HTML5', 'CSS3'],
	// 	color: '#78386f',
	// },
	// {
	// 	id: 5,
	// 	title: {
	// 		en: 'Rick and Morty APP [WIP]',
	// 		es: 'Rick and Morty APP [WIP]',
	// 	},
	// 	description: {
	// 		en: 'A ReactJS app that shows the characters of the Rick and Morty series. It was created with ReactJS and Redux. It was a project that I undertook during my studies at the University.',
	// 		es: 'Una aplicación ReactJS que muestra los personajes de la serie Rick y Morty. Fue creada con ReactJS y Redux. Fue un proyecto que realizé durante mis estudios en la Universidad.',
	// 	},
	// 	image: noimage,
	// 	web: 'https://fcgd.github.io/portfolio/',
	// 	github: 'https://github.com/fcgd/portfolio',
	// 	tech: ['HTML5', 'CSS3'],
	// 	color: '#b9b11c',
	// },
];
