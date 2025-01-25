const personalPerfil = {
	name: "José Alexandre Cordeiro Souza",
	yo: `${new Date().getFullYear() - 1998}`,
};

export const professionalPerfil = {
	description: `Oi, meu nome é ${personalPerfil.name}, tenho ${personalPerfil.yo} anos e sou formado em Engenharia de Controle e Automação. Tive uma breve passagem nessa área, mas acabei me encontrando mesmo no mundo da programação. Hoje, me dedico a criar soluções e projetos inovadores no universo digital.\n\nAlém de programar, sou apaixonado por RPG, tanto de mesa quanto eletrônico. Esse hobby me inspira a pensar em formas criativas de contar histórias e resolver adversidades, algo que também influencia meu trabalho no dia a dia.\n\nEstou sempre em busca de novos desafios e oportunidades para crescer, aprender e me divertir com o que faço.`,
	contact: {
		email: 'alexandrecordeiro15@outlook.com',
		github: 'JoseACSouza',
		linkedin: 'joseacs',
	},
	formations: [
		{
			name: "Bacharel em Engenharia de Controle e Automação",
			institute: "Faculdade Pitágoras de Betim",
			period: [2016, 2020]
		},
		{
			name: "Desenvolvimento Web FullStack",
			institute: "Trybe",
			period: [2021, 2023],
		},
		{
			name: "BootCamp FullStack + Mobile COM3",
			institute: "Trybe",
			period: [2023],
		},
		{
			name: "BootCamp IA Generativa",
			institute: "Trybe",
			period: [2024],
		}
	],
};