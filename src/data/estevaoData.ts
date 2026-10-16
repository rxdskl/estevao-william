import { BioChapter, MatchStat, SeasonStats, GalleryItem, ComparisonPlayer, TacticalSkill, SignatureMove, QuizQuestion } from '../types';

import heroWideImg from '../assets/images/hero_estevao_wide_1792165882507.jpg';
import portraitHdImg from '../assets/images/estevao_portrait_hd_1792165882690.jpg';
import celebrationImg from '../assets/images/gallery_estevao_celebration_1791795349794.jpg';
import selecaoImg from '../assets/images/gallery_estevao_selecao_1791795362187.jpg';
import dribbleImg from '../assets/images/gallery_estevao_dribble_1791795373778.jpg';

export const PLAYER_INFO = {
  fullName: "Estêvão Willian Almeida de Oliveira Gonçalves",
  commonName: "Estêvão Willian",
  nickname: "Messinho",
  birthDate: "24 avril 2007",
  age: 17,
  birthPlace: "Franca, São Paulo, Brésil",
  nationality: "Brésilienne",
  height: "1,76 m",
  weight: "68 kg",
  preferredFoot: "Gaucher",
  primaryPosition: "Ailier droit (Attaquant intérieur)",
  secondaryPosition: "Meneur de jeu / Milieu offensif",
  currentClub: "SE Palmeiras",
  jerseyNumberClub: 41,
  jerseyNumberSelecao: 20,
  nextClub: "Chelsea Football Club (Premier League)",
  transferFee: "Jusqu'à 61,5 M€ (34 M€ fixes + 27,5 M€ de bonus)",
  agent: "André Cury",
  proDebut: "6 décembre 2023 (16 ans et 226 jours)",
  selecaoDebut: "6 septembre 2024 (17 ans et 135 jours)",
  heroImages: {
    action: heroWideImg,
    portrait: portraitHdImg,
    celebration: celebrationImg,
    selecao: selecaoImg,
    dribble: dribbleImg,
  }
};

export const BIO_CHAPTERS: BioChapter[] = [
  {
    id: "origines",
    period: "2007 - 2017",
    title: "L'Étincelle de Franca & Les Origines",
    subtitle: "Du futsal des rues paulistes aux premiers exploits d'un surdoué",
    location: "Franca, État de São Paulo",
    content: [
      "Né le 24 avril 2007 à Franca dans l'État de São Paulo, Estêvão Willian grandit avec un ballon collé à ses pieds. Initié au futsal dès l'âge de quatre ans au club local de Franca, le jeune prodige attire immédiatement les regards par une vitesse d'exécution stupéfiante et un centre de gravité bas qui rappelle les grands ailiers brésiliens.",
      "Sur les parquets, son toucher de balle soyeux et sa faculté à éliminer deux à trois adversaires dans une cabine téléphonique lui valent rapidement le surnom affectueux mais lourd à porter de 'Messinho'. Bien qu'il admire Lionel Messi, Estêvão et sa famille ont toujours tenu à rappeler qu'il souhaitait bâtir sa propre légende : 'Je veux qu'on se rappelle de moi comme Estêvão'.",
      "À seulement dix ans, les observateurs nationaux sont unanimes : la virtuosité technique et la lucidité dans le dernier geste du garçon sont sans commune mesure avec sa classe d'âge."
    ],
    milestones: [
      "Débuts en futsal à Franca à 4 ans",
      "Surclassement systématique de 2 à 3 catégories d'âge",
      "Attribution du surnom 'Messinho' pour sa conduite de balle pied gauche"
    ],
    keyStats: [
      { label: "Âge début futsal", value: "4 ans" },
      { label: "Surclassement moyen", value: "+3 ans" }
    ],
    keyQuote: {
      text: "Dès qu'il touchait le ballon, on savait tous qu'il n'appartenait pas au même monde que les autres enfants de son âge.",
      author: "Ivo Secchi",
      role: "Premier éducateur à Franca"
    }
  },
  {
    id: "cruzeiro-nike",
    period: "2017 - 2021",
    title: "Le Prodige de Cruzeiro & Le Contrat Historique",
    subtitle: "Plus jeune athlète brésilien de l'histoire signé par Nike à 10 ans",
    location: "Belo Horizonte, Minas Gerais",
    content: [
      "En 2017, la famille déménage à Belo Horizonte lorsqu'Estêvão rejoint le centre de formation de Cruzeiro. C'est là que le phénomène médiatique s'emballe : en 2018, à l'âge de 10 ans seulement, il signe un contrat de sponsoring exclusif avec l'équipementier américain Nike.",
      "Ce contrat pulvérise les précédents records nationaux de précocité détenus par Neymar Jr (signé à 13 ans) et Rodrygo (signé à 11 ans). L'Amérique du Sud entière découvre les compilations de ses crochets foudroyants et de ses coups francs en lucarne.",
      "Malgré les turbulences administratives que traverse alors Cruzeiro, Estêvão empile les titres régionaux de jeunes et confirme un professionnalisme et une éthique de travail exceptionnels pour son jeune âge."
    ],
    milestones: [
      "Arrivée au centre de formation de Cruzeiro (2017)",
      "Signature historique avec Nike à 10 ans (record brésilien)",
      "Vainqueur et meilleur buteur de plusieurs tournois de jeunes au Brésil"
    ],
    keyStats: [
      { label: "Contrat Nike", value: "À 10 ans" },
      { label: "Record battu", value: "Neymar (13 ans)" }
    ],
    keyQuote: {
      text: "Sa trajectoire rappelle celle des plus grands. Sa coordination pied gauche et sa vitesse mentale sont innées.",
      author: "Observateurs de la base de Belo Horizonte",
      role: "Scouts fédéraux brésiliens"
    }
  },
  {
    id: "palmeiras-academie",
    period: "2021 - 2023",
    title: "L'Académie Dorée de Palmeiras & La Copinha",
    subtitle: "Razzia de trophées avec Endrick et Luis Guilherme sous la houlette de João Paulo Sampaio",
    location: "São Paulo, Academia de Futebol",
    content: [
      "En mai 2021, Estêvão s'engage avec la prestigieuse Sociedade Esportiva Palmeiras, dont le centre de formation est dirigé par le visionnaire João Paulo Sampaio. Il y intègre une génération dorée sans équivalent comprenant Endrick et Luis Guilherme.",
      "Avec les U-17 et U-20 de Palmeiras, il réalise un grand chelem historique : Paulistão U-17, Copa do Brasil U-17, Campeonato Brasileiro U-17 et la mythique Copa São Paulo de Futebol Júnior (Copinha) en 2023. Lors de la finale de la Copa do Brasil U-17 2023 contre São Paulo, il inscrit un triplé retentissant.",
      "À la Coupe du Monde FIFA U-17 en Indonésie à l'automne 2023 avec le Brésil, il est le maître à jouer de la Seleçãozinha : 3 buts et 3 passes décisives en 5 matchs, mystifiant les défenses d'Angleterre, d'Argentine et de Nouvelle-Calédonie."
    ],
    milestones: [
      "Signature à la Sociedade Esportiva Palmeiras (mai 2021)",
      "Champion de la Copinha 2023 avec Palmeiras",
      "Triplé décisif en finale de Coupe du Brésil U-17",
      "Étoile de la Coupe du Monde U-17 (3 buts, 3 passes décisives)"
    ],
    keyStats: [
      { label: "Copinha", value: "Vainqueur 2023" },
      { label: "Mondial U17", value: "3 Buts / 3 Passes" }
    ],
    keyQuote: {
      text: "Estêvão n'est pas seulement un joueur talentueux, il est un joueur différentiel. Quand le niveau s'élève, il s'élève encore plus haut.",
      author: "João Paulo Sampaio",
      role: "Directeur du centre de formation de Palmeiras"
    }
  },
  {
    id: "debuts-pros-records",
    period: "2023 - 2024",
    title: "L'Ascension Fulgurante & Le Record de Neymar Pulvérisé",
    subtitle: "Meilleur jeune de l'histoire du Brasileirão et leader d'attaque à 17 ans",
    location: "Allianz Parque, São Paulo",
    content: [
      "Le 6 décembre 2023, lors de la dernière journée du Brasileirão, l'entraîneur portugais Abel Ferreira offre à Estêvão ses débuts en équipe première face à Coritiba (1-0), à seulement 16 ans et 226 jours. Palmeiras valide ce soir-là son 12e sacre de champion du Brésil.",
      "L'année 2024 est celle de l'explosion planétaire. Positionné sur l'aile droite, Estêvão devient le titulaire indiscutable et le chef d'orchestre de l'attaque du Verdão. En Copa Libertadores, il devient le troisième plus jeune buteur de l'histoire du tournoi en marquant contre Liverpool de Montevideo.",
      "Le 20 octobre 2024 face à Juventude (victoire 5-3), avec un but splendide et une passe décisive, Estêvão atteint 18 contributions de buts (G+A) en une seule édition du Brasileirão. Il bat ainsi le record historique absolu détenu depuis 2009 par Neymar Jr (16 contributions à 17 ans avec Santos), s'imposant comme le joueur U-18 le plus décisif de l'histoire moderne du championnat brésilien."
    ],
    milestones: [
      "Débuts professionnels le 6 décembre 2023 contre Coritiba",
      "Premier but professionnel en Copa Libertadores à 16 ans",
      "Nouveau record historique du Brasileirão U-18 : 20 G+A (12 buts, 8 passes) devant Neymar",
      "Nommé Révélation de l'année et Meilleur Ailier Droit du championnat"
    ],
    keyStats: [
      { label: "G+A Brasileirão 2024", value: "20 (Record)" },
      { label: "Record Neymar 2009", value: "16 (Dépassé)" }
    ],
    keyQuote: {
      text: "Je n'ai jamais vu un gamin de 17 ans prendre des décisions aussi justes sous la pression. Il joue avec la maturité d'un vétéran de 30 ans.",
      author: "Abel Ferreira",
      role: "Entraîneur du SE Palmeiras"
    }
  },
  {
    id: "selecao-chelsea",
    period: "2024 - Futur",
    title: "La Seleção Majeure & L'Appel de Chelsea FC",
    subtitle: "Transfert record de 61,5 M€ vers la Premier League et maillot auriverde",
    location: "Curitiba / Stamford Bridge, Londres",
    content: [
      "En juin 2024, Chelsea FC conclut un accord colossal avec Palmeiras pour un montant pouvant atteindre 61,5 millions d'euros. Le contrat prévoit qu'Estêvão rejoindra Londres au cours de l'été 2025/2026, après avoir disputé la Coupe du Monde des Clubs de la FIFA 2025 avec Palmeiras.",
      "Le 6 septembre 2024, le sélectionneur national Dorival Júnior lui offre sa première cape avec la Seleção brésilienne face à l'Équateur (1-0) lors des éliminatoires du Mondial 2026 au stade Couto Pereira. À 17 ans et 135 jours, il devient le cinquième plus jeune joueur de l'histoire moderne à porter le prestigieux maillot jaune, derrière Pelé, Edu, Coutinho et Endrick.",
      "Avec sa créativité imprévisible, sa vista et son pied gauche soyeux, Estêvão Willian est déjà désigné par la presse internationale comme le fer de lance de la prochaine ère du football brésilien et mondial."
    ],
    milestones: [
      "Signature officielle de l'accord avec Chelsea FC (juin 2024)",
      "Première sélection avec le Brésil A le 6 septembre 2024 (17 ans)",
      "Participation confirmée au Mondial des Clubs FIFA 2025 avant de rallier l'Europe"
    ],
    keyStats: [
      { label: "Montant transfert", value: "Jusqu'à 61,5 M€" },
      { label: "Âge 1ère sélection A", value: "17 ans et 135 j" }
    ],
    keyQuote: {
      text: "Félicitations à Estêvão pour avoir battu mon record ! C'est un génie en devenir. Continue de faire rêver le Brésil.",
      author: "Neymar Jr",
      role: "Légende de la Seleção Brasileira"
    }
  }
];

export const MATCH_STATS: MatchStat[] = [
  {
    id: "m-01",
    date: "2024-11-20",
    competition: "Brasileirão",
    opponent: "EC Bahia",
    score: "2 - 1",
    result: "win",
    isHome: false,
    minutes: 90,
    goals: 0,
    assists: 1,
    dribbles: { completed: 6, attempted: 8 },
    rating: 8.6,
    notes: "Passe décisive somptueuse à la 89e minute pour arracher les 3 points à Salvador.",
    specialRecord: "Passe décisive décisive dans le sprint final"
  },
  {
    id: "m-02",
    date: "2024-11-08",
    competition: "Brasileirão",
    opponent: "Grêmio FBPA",
    score: "1 - 0",
    result: "win",
    isHome: true,
    minutes: 88,
    goals: 1,
    assists: 0,
    dribbles: { completed: 7, attempted: 9 },
    rating: 9.1,
    notes: "But d'anthologie à la 73e minute après avoir enrhumé deux défenseurs sur l'aile droite. Élu Homme du Match.",
    specialRecord: "But victorieux à l'Allianz Parque"
  },
  {
    id: "m-03",
    date: "2024-10-26",
    competition: "Brasileirão",
    opponent: "Fortaleza EC",
    score: "2 - 2",
    result: "draw",
    isHome: true,
    minutes: 90,
    goals: 1,
    assists: 1,
    dribbles: { completed: 5, attempted: 7 },
    rating: 8.8,
    notes: "Transforme un penalty avec un sang-froid glacial et délivre un centre chirurgical pour Raphael Veiga.",
  },
  {
    id: "m-04",
    date: "2024-10-20",
    competition: "Brasileirão",
    opponent: "EC Juventude",
    score: "5 - 3",
    result: "win",
    isHome: false,
    minutes: 81,
    goals: 1,
    assists: 1,
    dribbles: { completed: 8, attempted: 10 },
    rating: 9.4,
    notes: "Prestation historique ! Bat officiellement le record de Neymar de 2009 avec 18 contributions directes en une saison U-18.",
    specialRecord: "★ Record Historique du Brasileirão U-18 battu (18 G+A)"
  },
  {
    id: "m-05",
    date: "2024-10-05",
    competition: "Brasileirão",
    opponent: "Red Bull Bragantino",
    score: "0 - 0",
    result: "draw",
    isHome: false,
    minutes: 90,
    goals: 0,
    assists: 0,
    dribbles: { completed: 6, attempted: 9 },
    rating: 7.7,
    notes: "Constamment ciblé par la défense adverse (6 fautes subies). Deux tirs cadrés repoussés de peu.",
  },
  {
    id: "m-06",
    date: "2024-09-28",
    competition: "Brasileirão",
    opponent: "Atlético Mineiro",
    score: "2 - 1",
    result: "win",
    isHome: true,
    minutes: 84,
    goals: 0,
    assists: 2,
    dribbles: { completed: 9, attempted: 11 },
    rating: 9.3,
    notes: "Double passe décisive magistrale face au Galo. Masterclass de créativité et vista entre les lignes.",
    specialRecord: "Double passe décisive dans un choc du sommet"
  },
  {
    id: "m-07",
    date: "2024-09-22",
    competition: "Brasileirão",
    opponent: "CR Vasco da Gama",
    score: "1 - 0",
    result: "win",
    isHome: false,
    minutes: 90,
    goals: 0,
    assists: 1,
    dribbles: { completed: 5, attempted: 6 },
    rating: 8.2,
    notes: "Caviar délivré pour Flaco López au stade Mané Garrincha à Brasilia.",
  },
  {
    id: "m-08",
    date: "2024-09-10",
    competition: "Seleção",
    opponent: "Paraguay",
    score: "0 - 1",
    result: "loss",
    isHome: false,
    minutes: 25,
    goals: 0,
    assists: 0,
    dribbles: { completed: 3, attempted: 4 },
    rating: 7.2,
    notes: "Deuxième cape internationale à Asunción. Apporte de la folie et dynamise l'attaque du Brésil en fin de match.",
  },
  {
    id: "m-09",
    date: "2024-09-06",
    competition: "Seleção",
    opponent: "Équateur",
    score: "1 - 0",
    result: "win",
    isHome: true,
    minutes: 28,
    goals: 0,
    assists: 0,
    dribbles: { completed: 4, attempted: 5 },
    rating: 7.8,
    notes: "DÉBUTS OFFICIELS AVEC LE BRÉSIL A ! Entre en jeu à la 62e minute à Curitiba. Acclamation géante du public.",
    specialRecord: "★ 1ère sélection senior Brésil (17 ans et 135 jours)"
  },
  {
    id: "m-10",
    date: "2024-08-24",
    competition: "Brasileirão",
    opponent: "Cuiabá EC",
    score: "5 - 0",
    result: "win",
    isHome: true,
    minutes: 77,
    goals: 2,
    assists: 1,
    dribbles: { completed: 8, attempted: 9 },
    rating: 9.8,
    notes: "Double buteur et passeur ! Un festival technique grandiose à l'Estádio Brinco de Ouro.",
    specialRecord: "Premier doublé en championnat professionnel"
  },
  {
    id: "m-11",
    date: "2024-08-21",
    competition: "Copa Libertadores",
    opponent: "Botafogo FR",
    score: "2 - 2",
    result: "draw",
    isHome: true,
    minutes: 90,
    goals: 0,
    assists: 1,
    dribbles: { completed: 7, attempted: 10 },
    rating: 8.5,
    notes: "8e de finale retour étouffant. Délivre une passe clé et touche la barre transversale d'un enroulé limpide.",
  },
  {
    id: "m-12",
    date: "2024-07-20",
    competition: "Brasileirão",
    opponent: "Cruzeiro EC",
    score: "2 - 0",
    result: "win",
    isHome: true,
    minutes: 86,
    goals: 1,
    assists: 0,
    dribbles: { completed: 6, attempted: 7 },
    rating: 8.9,
    notes: "Face à son club formateur, inscrit un but sensationnel pied gauche dans le petit filet opposé.",
  },
  {
    id: "m-13",
    date: "2024-06-23",
    competition: "Brasileirão",
    opponent: "Juventude",
    score: "3 - 1",
    result: "win",
    isHome: true,
    minutes: 75,
    goals: 1,
    assists: 0,
    dribbles: { completed: 5, attempted: 6 },
    rating: 8.4,
    notes: "Frappe soudaine et puissante des 20 mètres après un crochet intérieur dévastateur.",
  },
  {
    id: "m-14",
    date: "2024-05-15",
    competition: "Copa Libertadores",
    opponent: "Independiente del Valle",
    score: "2 - 1",
    result: "win",
    isHome: true,
    minutes: 73,
    goals: 0,
    assists: 1,
    dribbles: { completed: 4, attempted: 5 },
    rating: 8.1,
    notes: "Phase de poules de Libertadores. Qualifie virtuellement Palmeiras pour la phase finale.",
  },
  {
    id: "m-15",
    date: "2024-04-11",
    competition: "Copa Libertadores",
    opponent: "Liverpool Montevideo",
    score: "3 - 1",
    result: "win",
    isHome: true,
    minutes: 68,
    goals: 1,
    assists: 0,
    dribbles: { completed: 7, attempted: 8 },
    rating: 9.0,
    notes: "Premier but en Copa Libertadores à 16 ans et 11 mois ! Troisième plus jeune buteur de l'histoire du tournoi.",
    specialRecord: "★ 1er But en Copa Libertadores (16 ans)"
  },
  {
    id: "m-16",
    date: "2024-03-03",
    competition: "Paulistão",
    opponent: "São Paulo FC",
    score: "1 - 1",
    result: "draw",
    isHome: false,
    minutes: 60,
    goals: 0,
    assists: 0,
    dribbles: { completed: 5, attempted: 6 },
    rating: 7.6,
    notes: "Premier grand Choque-Rei professionnel au Morumbi. Impressionne par sa sérénité balle au pied.",
  },
  {
    id: "m-17",
    date: "2023-12-06",
    competition: "Brasileirão",
    opponent: "Cruzeiro EC",
    score: "1 - 1",
    result: "draw",
    isHome: false,
    minutes: 15,
    goals: 0,
    assists: 0,
    dribbles: { completed: 2, attempted: 2 },
    rating: 7.1,
    notes: "DÉBUTS PROFESSIONNELS OFFICIELS à 16 ans et 226 jours ! Palmeiras célèbre le titre de champion du Brésil.",
    specialRecord: "★ Débuts professionnels en Série A"
  }
];

export const SEASON_TOTALS_2024: SeasonStats = {
  season: "2024",
  club: "SE Palmeiras & Seleção",
  matches: 45,
  goals: 18,
  assists: 10,
  minutes: 3260,
  shotsOnTarget: 48,
  keyPasses: 62,
  dribblesCompleted: 142,
  dribbleSuccessRate: 74.8,
  yellowCards: 4,
  trophies: [
    "Champion du Paulistão 2024",
    "Record Historique du Brasileirão U-18 (20 G+A)",
    "Révélation de l'année du Brasileirão"
  ]
};

export const COMPARISONS_AT_17: ComparisonPlayer[] = [
  {
    name: "Estêvão Willian",
    clubAt17: "SE Palmeiras (2024)",
    matches: 28,
    goals: 12,
    assists: 8,
    goalContributions: 20,
    minsPerContribution: 104,
    year: "2024",
    highlight: "Recordman historique du Brasileirão U-18"
  },
  {
    name: "Neymar Jr",
    clubAt17: "Santos FC (2009)",
    matches: 33,
    goals: 10,
    assists: 6,
    goalContributions: 16,
    minsPerContribution: 147,
    year: "2009",
    highlight: "Précédent record absolu détenu 15 ans"
  },
  {
    name: "Endrick",
    clubAt17: "SE Palmeiras (2023)",
    matches: 31,
    goals: 11,
    assists: 1,
    goalContributions: 12,
    minsPerContribution: 132,
    year: "2023",
    highlight: "Parti au Real Madrid pour 60 M€"
  },
  {
    name: "Rodrygo Goes",
    clubAt17: "Santos FC (2018)",
    matches: 35,
    goals: 8,
    assists: 3,
    goalContributions: 11,
    minsPerContribution: 242,
    year: "2018",
    highlight: "Titulaire et buteur décisif au Real Madrid"
  },
  {
    name: "Vinícius Júnior",
    clubAt17: "CR Flamengo (2017)",
    matches: 25,
    goals: 4,
    assists: 4,
    goalContributions: 8,
    minsPerContribution: 215,
    year: "2017",
    highlight: "Ballon d'Or prétendant & star du Real Madrid"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Le Dribble Électrique sous les Projecteurs",
    category: "action",
    imageSrc: heroWideImg,
    date: "Novembre 2024",
    location: "Allianz Parque, São Paulo",
    context: "Accélération tranchante d'Estêvão éliminant le latéral adverse lors du choc de Serie A. Le ballon colle à son pied gauche.",
    aspectRatio: "16:9",
    statsHighlight: "7 dribbles réussis dans le match"
  },
  {
    id: "gal-2",
    title: "La Joie Pure : Hommage au Ciel",
    category: "celebration",
    imageSrc: celebrationImg,
    date: "Octobre 2024",
    location: "São Paulo, Brésil",
    context: "Célébration emblématique les deux mains tendues vers le ciel après son but historique battant le record de Neymar.",
    aspectRatio: "4:3",
    statsHighlight: "Record historique U-18 battu"
  },
  {
    id: "gal-3",
    title: "Le Prodige sous le Maillot Auriverde",
    category: "selecao",
    imageSrc: selecaoImg,
    date: "Septembre 2024",
    location: "Estádio Couto Pereira, Curitiba",
    context: "En plein rush avec l'équipe nationale senior du Brésil lors des éliminatoires de la Coupe du Monde FIFA 2026.",
    aspectRatio: "4:3",
    statsHighlight: "5e plus jeune joueur de l'histoire de la Seleção"
  },
  {
    id: "gal-4",
    title: "L'Art du Crochet : Agilité et Centre de Gravité",
    category: "action",
    imageSrc: dribbleImg,
    date: "Août 2024",
    location: "Brésil",
    context: "Prise d'appui basse et changement de direction dévastateur. Une signature gestuelle qui désarçonne les défenses.",
    aspectRatio: "4:3",
    statsHighlight: "74.8% d'efficacité en un-contre-un"
  },
  {
    id: "gal-5",
    title: "Le Regard Tourné Vers les Sommets",
    category: "portrait",
    imageSrc: portraitHdImg,
    date: "Saison 2024/2025",
    location: "São Paulo",
    context: "Portrait officiel du phénomène de 17 ans, sourire radieux et détermination sans faille avant son envol pour Stamford Bridge.",
    aspectRatio: "3:4",
    statsHighlight: "Contrat Chelsea jusqu'en 2033"
  }
];

export const TACTICAL_SKILLS: TacticalSkill[] = [
  { name: "Dribble & Un-contre-un", score: 96, description: "Capacité d'élimination hors du commun grâce à un toucher ultra-précis du pied gauche et un centre de gravité bas." },
  { name: "Agilité & Changement de rythme", score: 97, description: "Explosivité sur les trois premiers mètres et feintes de corps qui déstabilisent l'orientation des défenseurs." },
  { name: "Vision & Passes clés", score: 88, description: "Rare lucidité pour un ailier dribbleur : délivre régulièrement des caviars coupés et passes en profondeur millimétrées." },
  { name: "Finition & Frappe enroulée", score: 86, description: "Spécialiste de la frappe brossée du gauche dans le petit filet opposé après avoir repiqué dans l'axe." },
  { name: "Sang-froid & Prise de décision", score: 91, description: "Calme olympien dans la surface adverse, remarquable taux de réussite sur penalty et dans les temps additionnels." },
  { name: "Vitesse de pointe", score: 93, description: "Capacité à déposer les latéraux en transition rapide sur 30 à 40 mètres sans jamais perdre le contrôle du cuir." },
];

export const SIGNATURE_MOVES: SignatureMove[] = [
  {
    id: "move-1",
    name: "Le Repiquage Intérieur & Enroulé Magique",
    subname: "La Signature 'Messinho'",
    description: "Parti de la ligne de touche droite, il fixe le latéral, feinte le débordement sur son pied droit avant de crocheter brusquement vers l'axe pour décocher un enroulé pied gauche dans la lucarne opposée.",
    howItWorks: "1. Fixation à l'arrêt sur l'aile droite. 2. Feinte de centre pied droit. 3. Crochet intérieur explosif. 4. Frappe brossée du cou-de-pied gauche.",
    effectiveness: "Inarrêtable quand le gardien anticipe le centre.",
    pitchCoordinates: {
      start: { x: 82, y: 18 },
      mid: { x: 74, y: 35 },
      finish: { x: 68, y: 46 },
      target: { x: 98, y: 48 }
    }
  },
  {
    id: "move-2",
    name: "L'Élastico & Accélération Ligne de Fond",
    subname: "Le Dribble Brésilien Pur",
    description: "Dribble hérité de Rivelino et Ronaldinho : une impulsion extérieure du pied gauche suivie instantanément d'un rabat intérieur qui déstabilise les appuis du défenseur pour jaillir vers la ligne de fond.",
    howItWorks: "1. Conduite chaloupée. 2. Coup d'extérieur vers la droite. 3. Claque instantanée de l'intérieur vers la gauche. 4. Dépassement le long de la ligne de but.",
    effectiveness: "Provoque régulièrement penalties ou cartons jaunes.",
    pitchCoordinates: {
      start: { x: 75, y: 15 },
      mid: { x: 85, y: 16 },
      finish: { x: 92, y: 22 },
      target: { x: 94, y: 42 }
    }
  },
  {
    id: "move-3",
    name: "La Passe Piquée 'Trivela' / Clé d'Or",
    subname: "L'Offrande Millimétrée",
    description: "Attirant deux défenseurs à lui sur le flanc, il lève la tête et dépose une passe brossée ou piquée au-dessus du bloc adverse pour l'attaquant lancé dans le dos des axiaux.",
    howItWorks: "1. Création du surnombre en aspirant le latéral et le milieu. 2. Feinte de frappe. 3. Délicate louche ou extérieur brossé par-dessus la charnière.",
    effectiveness: "8 passes décisives en Brasileirão 2024 créées sur ce modèle.",
    pitchCoordinates: {
      start: { x: 70, y: 24 },
      mid: { x: 72, y: 30 },
      finish: { x: 75, y: 32 },
      target: { x: 92, y: 50 }
    }
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "En quelle année et dans quelle ville Estêvão Willian est-il né ?",
    options: ["2007 à Franca", "2006 à Rio de Janeiro", "2008 à Santos", "2005 à Belo Horizonte"],
    correctIndex: 0,
    explanation: "Estêvão est né le 24 avril 2007 à Franca, dans l'État de São Paulo."
  },
  {
    id: 2,
    question: "Quel exploit historique a-t-il accompli à l'âge de 10 ans avec Nike ?",
    options: [
      "Il a été signé par Nike, devenant le plus jeune Brésilien sous contrat devant Neymar",
      "Il a tourné une publicité avec Ronaldinho",
      "Il a conçu sa propre paire de crampons",
      "Il a disputé un match amical au siège de Nike à Beaverton"
    ],
    correctIndex: 0,
    explanation: "À 10 ans chez Cruzeiro, il est devenu le plus jeune athlète brésilien signé par Nike, devançant Neymar (13 ans) et Rodrygo (11 ans)."
  },
  {
    id: 3,
    question: "Quel record légendaire de Neymar Jr Estêvão a-t-il battu en octobre 2024 ?",
    options: [
      "Le record de buts et passes (G+A) pour un joueur de moins de 18 ans en Serie A brésilienne",
      "Le record de hat-tricks avant 18 ans",
      "Le record de sélections avec les U-20",
      "Le record de vitesse enregistrée en match officiel"
    ],
    correctIndex: 0,
    explanation: "Avec 20 contributions de buts (12 buts, 8 passes) en 2024, il a effacé le record de Neymar de 2009 (16 contributions) avec Santos."
  },
  {
    id: 4,
    question: "Quel grand club européen a conclu son transfert pour plus de 60 M€ ?",
    options: ["Chelsea FC", "Real Madrid", "Manchester City", "Paris Saint-Germain"],
    correctIndex: 0,
    explanation: "Chelsea FC a conclu l'accord en juin 2024 pour un montant pouvant atteindre 61,5 M€, avec une arrivée programmée après le Mondial des Clubs 2025."
  },
  {
    id: 5,
    question: "Face à quelle nation Estêvão a-t-il fêté sa première sélection avec le Brésil A ?",
    options: ["L'Équateur", "L'Argentine", "Le Chili", "L'Angleterre"],
    correctIndex: 0,
    explanation: "Le 6 septembre 2024, il a débuté avec la Seleção face à l'Équateur (victoire 1-0) lors des qualifications au Mondial 2026, à 17 ans et 135 jours."
  }
];

export const QUOTES = [
  {
    quote: "Félicitations pour le record ! Continue de voler haut, mon garçon. Tu as le football dans le sang et le Brésil est fier de toi.",
    author: "Neymar Jr",
    role: "Légende du Brésil & Meilleur buteur de l'histoire de la Seleção"
  },
  {
    quote: "Estêvão a quelque chose que l'on ne peut pas enseigner à l'entraînement : la pure magie brésilienne et le courage d'oser sans trembler.",
    author: "Abel Ferreira",
    role: "Entraîneur double vainqueur de Copa Libertadores avec Palmeiras"
  },
  {
    quote: "Nous parlons d'un gamin de 17 ans qui joue avec une maturité incroyable. Son potentiel n'a pas de plafond.",
    author: "Dorival Júnior",
    role: "Sélectionneur de l'équipe nationale du Brésil"
  },
  {
    quote: "Quand il part sur son pied gauche avec cette intensité, les défenseurs ne peuvent que reculer. C'est le futur du football mondial.",
    author: "Cafu",
    role: "Capitaine champion du monde 2002 avec le Brésil"
  }
];
