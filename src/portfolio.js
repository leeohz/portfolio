const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://leopold-rolland.github.io/portfolio',
  title: 'LR.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Léopold Rolland',
  role: 'Support technique',
  description:
    'Je suis étudiant en cursus expert en systèmes d\'information à l\'ESIEA. Depuis deux ans, j\'occupe le poste de support technique chez Cybelangel, une entreprise spécialisée en EASM et DRPS. Curieux et touche-à-tout par nature, j\'apprécie particulièrement mon travail actuel. Je suis également une personne sociable qui aime travailler en équipe et partager avec son entourage. Mes perspectives d\'avenir visent à acquérir des compétences aussi bien techniques que managériales pour évoluer vers un poste de manager ou de chef de projet. En dehors du travail, je maintiens mon intérêt pour l\'informatique en général, tout en cultivant ma curiosité à travers divers hobbies comme la peinture, la lecture, la musique et les jeux.',
  social: {
    linkedin: 'https://linkedin.com'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Maintenance Scripts et Elastic',
    description: 'Scripts, support et Elastic : quand la maintenance sauve l\'automatisation',
    article: {
      sections: [
        {
          title: 'Pourquoi automatiser ? Le quotidien d\'un support technique agile',
          content: 'Dans mon travail de support, j\'interviens à la fois sur des demandes internes et externes. Et j\'ai pu observer très souvent des cas récurrents, ainsi j\'ai rapidement vu l\'intérêt des scripts pour automatiser certaines tâches, gagner du temps et surtout éviter les erreurs humaines.\n\nCes scripts sont devenus essentiels dans nos tâches de tous les jours nous faisant économiser beaucoup de temps, notamment lorsqu\'il s\'agit de gérer des changements au sein de notre infrastructure ElasticSearch, qui centralise les données utilisées par notre plateforme.'
        },
        {
          title: 'Un changement d\'index qui casse tout (ou presque)',
          content: 'L\'élément déclencheur de cette réalisation a été un changement de structure d\'index dans notre base Elastic. Ce changement, nécessaire pour des raisons de performance et d\'organisation, a eu un impact immédiat sur nos scripts existants.\n\nCertaines automatisations ne fonctionnaient plus : les scripts ne retrouvaient plus les données attendues, car l\'indexation avait changé, brisant nos filtres et nos points d\'entrée.'
        },
        {
          title: 'Ce que je voulais accomplir',
          content: 'Face à cette situation, mes objectifs étaient clairs. Je devais d\'abord identifier les scripts affectés par le changement d\'index. Ensuite, il fallait adapter leur logique pour prendre en compte la nouvelle structure Elastic. Enfin, je voulais profiter de cette maintenance pour améliorer leur robustesse et leur modularité.\n\nCes objectifs répondaient à la fois à un besoin immédiat de continuité de service, et à un objectif de fond : renforcer la résilience de nos outils internes.'
        },
        {
          title: 'Ce que j\'ai fait, concrètement',
          content: 'J\'ai procédé étape par étape, de manière méthodique. J\'ai d\'abord réalisé un audit rapide des scripts automatisés pour identifier lesquels interrogeaient Elastic, comment, et à quelle fréquence. J\'ai ensuite comparé l\'ancienne structure d\'index à la nouvelle, pour comprendre où se situaient les ruptures (noms de champs, chemins d\'accès, types de documents). Puis, j\'ai modifié les scripts Python concernés pour adapter les requêtes (ex : match, term, range, etc.) et éviter les erreurs silencieuses.\n\nJ\'en ai profité pour modulariser certains blocs de code : extraction des appels Elastic dans des fonctions réutilisables, centralisation des paramètres, ajout de logs détaillés pour le debug. Enfin, j\'ai testé les scripts mis à jour sur des environnements de staging, en simulant des cas réels, avant de les redéployer en production.'
        },
        {
          title: 'Les défis en coulisses',
          content: 'Ce projet a soulevé plusieurs enjeux techniques et humains. Il fallait identifier rapidement l\'origine des erreurs, souvent silencieuses ou indirectes, et travailler dans l\'urgence sans impacter les utilisateurs.\n\nMais ce sont précisément ces défis qui m\'ont poussé à structurer mes approches, à documenter mes changements et à anticiper les cas futurs.'
        },
        {
          title: 'Ce que ça a changé',
          content: 'Les scripts sont désormais à jour, plus lisibles et plus faciles à maintenir. Les erreurs liées aux anciens indexes ont été éliminées. Mon travail a permis de réduire les interruptions de service côté support, tout en renforçant la confiance dans les outils internes.'
        },
        {
          title: 'Et maintenant ? Vers une automatisation plus solide',
          content: 'Cette intervention m\'a fait prendre conscience de l\'importance de plusieurs aspects essentiels. Il est crucial de documenter la structure des indexes et la logique des scripts. Il faut créer des tests automatiques ou alertes sur les changements critiques. Et il est nécessaire de mieux centraliser les appels Elastic dans un module unique réutilisable.\n\nCes axes me permettront d\'anticiper d\'autres changements similaires sans repartir de zéro.'
        },
        {
          title: 'Ce que j\'ai appris (et ce que je ferai autrement)',
          content: 'Ce projet m\'a appris à réagir vite à une rupture imprévue sans perdre en qualité, à travailler avec méthode même en situation d\'urgence, et à faire de la maintenance une opportunité d\'optimisation plutôt qu\'une contrainte.\n\nÀ l\'avenir, je chercherai à mieux formaliser mes audits de dépendances, et à mettre en place des garde-fous automatiques pour détecter plus tôt les risques de rupture.'
        },
        {
          title: 'Mon regard aujourd\'hui : fier et prêt pour la suite',
          content: 'Je suis fier de cette intervention car elle mêle plusieurs compétences : technique, méthodologie, rigueur et anticipation. Elle montre que je suis capable d\'intervenir là où ça casse, et de rendre un système plus robuste qu\'il ne l\'était avant.\n\nC\'est exactement ce que j\'aime dans mon métier : résoudre des problèmes concrets, améliorer les outils, et apprendre au passage.'
        }
      ]
    },
    stack: ['Python', 'Elasticsearch', 'Scripting', 'Automation', 'Documentation'],
  },
  {
    name: 'Bot Discord IA',
    description: 'Un bot, des tickets et moi : apprendre à coder pour mieux collaborer',
    article: {
      sections: [
        {
          title: 'Pourquoi un bot ? Le déclic personnel derrière le projet',
          content: 'En tant que passionné de technologie, d\'automatisation et de jeu de rôle, je consacre une partie de mon temps libre à explorer des projets personnels mêlant apprentissage et plaisir. Ce contexte personnel m\'a naturellement amené à créer un système de ticketing sur Discord, outil qui s\'est révélé utile dans le cadre de ma participation active à un serveur Roleplay.\n\nCe projet m\'a offert l\'opportunité de me former de manière autonome aux logiques du support client, tout en expérimentant l\'usage de l\'intelligence artificielle dans un cadre communautaire.'
        },
        {
          title: 'De l\'idée à l\'action : bâtir un système de ticketing intelligent',
          content: 'Le projet consistait à concevoir un système hybride de gestion de tickets sur Discord, combinant un outil existant, « Ticket Tool », avec un bot personnalisé que j\'ai développé moi-même en Python. Ce bot devait permettre aux responsables RP du serveur d\'accéder facilement à des informations échangées via les tickets, en interrogeant une IA formée à partir de ces données.\n\nCette idée m\'est venue d\'un besoin concret : permettre aux joueurs de soumettre facilement des demandes (missions, partages d\'infos, etc.) tout en rendant leur contenu consultable de manière synthétique. Plutôt que de devoir relire des dizaines de conversations, les responsables peuvent désormais poser une question au bot comme « que sait-on sur Mazaru ? » et obtenir un résumé pertinent.'
        },
        {
          title: 'Les défis derrière les lignes de code',
          content: 'Ce projet soulevait des enjeux à la fois personnels et collectifs. D\'un côté, il m\'a permis de développer mes compétences techniques en bots Discord, gestion de données JSON et intégration d\'API. De l\'autre, il répondait à un besoin communautaire clair : fluidifier la gestion des demandes tout en conservant un historique exploitable. Cette double dimension m\'a permis de rester motivé tout au long du processus.'
        },
        {
          title: 'Ce qui aurait pu coincer (et comment je l\'ai anticipé)',
          content: 'Plusieurs difficultés potentielles se sont présentées : filtrer les bons messages à retenir, structurer efficacement la base de données, garantir la pertinence des réponses générées par l\'IA. Pour les surmonter, j\'ai appris en pratiquant, testé différentes approches, corrigé, ajusté... Le tout en totale autonomie, ce qui m\'a poussé à être encore plus rigoureux.'
        },
        {
          title: 'Ce que je visais (et pourquoi c\'était important pour moi)',
          content: 'Je voulais avant tout concevoir un outil simple et automatisé pour centraliser les tickets Discord. Je souhaitais également exploiter les capacités de l\'IA d\'OpenAI pour créer un assistant vraiment utile. Enfin, je tenais à mener ce projet de bout en bout, depuis l\'idée initiale jusqu\'à l\'intégration finale, pour tester mes capacités en autonomie.'
        },
        {
          title: 'Mon plan d\'action, étape par étape',
          content: 'Le projet s\'est articulé autour de plusieurs étapes. J\'ai commencé par installer et configurer Ticket Tool pour gérer les tickets. Ensuite, j\'ai développé un bot personnel capable d\'isoler les messages des utilisateurs dans les tickets et de les stocker dans un fichier JSON. Ce fichier est ensuite interrogé via une IA grâce à l\'API d\'OpenAI. Enfin, j\'ai mis en place un canal Discord dédié, où les responsables peuvent poser leurs questions au bot et recevoir des résumés automatisés.\n\nChaque étape a été pensée pour s\'intégrer naturellement à l\'environnement Discord existant.'
        },
        {
          title: 'Ce que ça a donné, concrètement',
          content: 'Le système fonctionne parfaitement. Les messages pertinents sont centralisés, le bot fournit des réponses claires et adaptées au contexte, et les responsables RP gagnent en efficacité et en visibilité. Cette réussite confirme ma capacité à concevoir un outil complet et utile à une communauté active.'
        },
        {
          title: 'Ce que ce projet m\'a réellement appris',
          content: 'Au-delà de l\'aspect technique, ce projet m\'a appris à structurer une solution autour d\'un besoin réel, à intégrer l\'IA comme un outil d\'assistance contextuelle, et à en comprendre les forces comme les limites.'
        },
        {
          title: 'Ce que je referais autrement demain',
          content: 'Avec le recul, je vois déjà plusieurs pistes d\'amélioration. J\'aurais pu mieux documenter chaque étape du projet pour faciliter sa maintenance. Tester plus tôt avec des utilisateurs aurait également permis d\'optimiser l\'expérience. Enfin, j\'aurais pu anticiper davantage les questions de performance sur le long terme. Ces réflexions ne remettent pas en cause le succès du projet, elles montrent simplement que je suis prêt à aller encore plus loin.'
        }
      ]
    },
    stack: ['Python', 'Discord API', 'OpenAI API', 'JSON', 'Natural Language Processing'],
  },
  {
    name: 'Investigation Technique',
    description: 'Fausse détection ou vraie logique ? Plongée dans un ticket inattendu',
    article: {
      sections: [
        {
          title: 'Plongée dans la réalité du support niveau 2',
          content: 'Les tickets de fausse détection représentent une grande partie des sollicitations de niveau 2 au support technique. Leur résolution peut durer de 30 minutes à une journée, en fonction de leur complexité. Dans cette réalisation, je partage un cas concret qui, bien qu\'en apparence classique, a abouti à une conclusion inattendue.'
        },
        {
          title: 'Le contexte : un domaine suspect et un client exigeant',
          content: 'Pour illustrer ce cas, prenons un exemple fictif basé sur un client réel : Orange. L\'analyste en charge nous signale qu\'un domaine malveillant imitant leur site officiel n\'a pas été détecté, alors qu\'il aurait dû générer une alerte. Ce type de domaine est généralement utilisé pour des campagnes d\'hameçonnage visant à voler des identifiants utilisateurs.\n\nSelon notre méthode de collecte et de détection, un tel domaine n\'aurait pas dû passer entre les mailles du filet.'
        },
        {
          title: 'Lancement de l\'investigation : vérifications de base',
          content: 'La première chose que j\'ai faite a été de vérifier si la source DTD (Domain Threat Detection) était bien activée pour ce client. En effet, tous les clients ne souscrivent pas aux mêmes services, ce qui peut expliquer l\'absence d\'alerte. Dans ce cas, la source était bien active.\n\nJ\'ai ensuite vérifié la bonne configuration du mot-clé concerné, sur la bonne période et la bonne source. Je me suis orienté vers Kibana, dans l\'index "alerts", pour rechercher une trace d\'alerte liée à ce domaine, sans succès.'
        },
        {
          title: 'Approfondir pour comprendre : Kibana, puis BigQuery',
          content: 'N\'ayant trouvé aucune alerte dans "alerts", j\'ai poursuivi l\'analyse en examinant les observables dans l\'index "alert_read" de Kibana. Là encore, aucune donnée ne faisait mention du domaine suspect. Il était temps d\'aller plus loin.\n\nJe me suis tourné vers BigQuery, l\'une de nos bases de données les plus riches, notamment pour analyser les étapes de filtrage. Grâce à une requête ciblée, j\'ai enfin retrouvé une trace du domaine concerné.'
        },
        {
          title: 'La surprise dans le filtre : une détection... ignorée',
          content: 'Le champ "filter_reason" a été déterminant. Il m\'a permis de comprendre pourquoi l\'alerte avait été écartée. En réalité, le domaine avait bien été détecté, mais notre système l\'avait exclu automatiquement : il redirigeait les utilisateurs directement vers orange.fr. Le système l\'a donc considéré comme légitime, en accord avec les règles internes de filtrage.'
        },
        {
          title: 'Ce que cette situation m\'a appris',
          content: 'Ce cas m\'a appris à ne pas m\'arrêter aux apparences : une absence d\'alerte ne signifie pas forcément une absence de détection. J\'ai également renforcé mes réflexes d\'investigation multi-sources : Kibana, puis BigQuery, en passant par des index différents. Cette approche méthodique m\'a permis de tirer une conclusion logique… et de mieux comprendre les limites (et la finesse) de notre moteur de filtrage.'
        },
        {
          title: 'Un regard critique (et un peu fier)',
          content: 'Je suis fier de la rigueur avec laquelle j\'ai mené cette investigation. J\'ai réussi à prouver que notre système fonctionnait correctement, tout en découvrant un cas d\'usage qui mériterait peut-être d\'être ajusté côté détection.\n\nC\'est aussi un bon exemple de la complexité de notre travail : entre technique, logique métier et attentes des clients, chaque ticket est une enquête à part entière.'
        }
      ]
    },
    stack: ['Kibana', 'BigQuery', 'Elastic Search', 'Technical Investigation', 'Documentation'],
  },
]

const skills = {
  technical: [
    {
      name: 'Investigation',
      description: 'L\'art de l\'investigation technique : comprendre avant de conclure',
      article: {
        sections: [
          {
            title: 'Ma définition personnelle de l\'investigation',
            content: 'L\'investigation technique, telle que je la conçois, ne consiste pas simplement à trouver une réponse rapide. C\'est une démarche rigoureuse et méthodique, qui repose sur la formulation d\'hypothèses, la vérification croisée de sources, et une interprétation argumentée. Elle requiert curiosité, esprit critique et une bonne maîtrise des outils, dans le but d\'éclaircir des situations techniques ambiguës. Chez CybelAngel, cette compétence ne se limite pas à la gestion des incidents : elle est essentielle pour garantir la fiabilité de nos détections, comprendre des comportements inattendus, et fournir des réponses solides aux équipes internes comme aux clients.'
          },
          {
            title: 'L\'investigation dans mon contexte professionnel',
            content: 'Je travaille en distanciel dans l\'équipe de support technique de niveau 2. Chaque jour, je traite des tickets où les réponses ne sont pas évidentes. Il faut consulter plusieurs outils comme Kibana, BigQuery, ou les logs produits par nos pipelines. L\'enjeu est souvent de comprendre pourquoi une alerte n\'a pas été générée, ou pourquoi un comportement technique semble incohérent. Ces investigations nécessitent une approche patiente et analytique, qui va au-delà de la simple recherche de solution.'
          },
          {
            title: 'Un exemple d\'investigation concrète',
            content: 'Dans l\'une de mes réalisations, j\'ai été confronté à un ticket de fausse détection impliquant un domaine suspect. Après avoir mené une analyse multi-outils, j\'ai pu démontrer que le domaine avait bien été détecté par le système, mais que celui-ci l\'avait filtré comme légitime en fonction des règles en place. Ce cas m\'a permis d\'articuler une explication claire, en reliant les résultats techniques aux attentes fonctionnelles, tout en mettant en évidence les mécanismes internes de nos filtres.'
          },
          {
            title: 'Bilan critique de ma pratique de l\'investigation',
            content: 'Je suis fier d\'avoir mené cette analyse de manière autonome, en mobilisant les bons outils et en gardant une logique structurée. J\'ai appris qu\'une absence d\'alerte ne signifie pas une absence de détection, et qu\'une bonne investigation repose toujours sur une combinaison de sources et une compréhension approfondie du système. Avec le recul, j\'identifie aussi une marge de progression : j\'aurais pu envisager plus tôt la piste du filtrage, ce qui aurait accéléré l\'analyse.'
          },
          {
            title: 'La place de l\'investigation dans mon avenir',
            content: 'L\'investigation fait partie intégrante de mon projet professionnel. Je souhaite continuer à l\'exercer dans des contextes plus avancés, comme la veille de sécurité ou l\'amélioration des moteurs de détection. Je me forme régulièrement aux outils d\'analyse, et je souhaite développer encore davantage mes compétences en requêtage, en corrélation de logs, et en utilisation d\'outils SIEM. À terme, j\'envisage de valider ce parcours par une certification spécialisée en threat analysis ou investigation numérique.'
          }
        ]
      },
      stack: ['Kibana', 'BigQuery', 'Analyse technique', 'Méthodologie', 'Documentation'],
    },
    {
      name: 'Documentation',
      description: 'Documenter pour ne pas réinventer la roue',
      article: {
        sections: [
          {
            title: 'Ma vision de la documentation technique',
            content: 'Pour moi, la documentation n\'est pas une tâche secondaire. C\'est une forme d\'ingénierie de la connaissance, qui permet de transformer une résolution ponctuelle en ressource durable. Elle ne consiste pas seulement à décrire ce qui a été fait, mais à structurer l\'information pour qu\'elle soit compréhensible, applicable et utile dans le temps.'
          },
          {
            title: 'Sur le terrain, chez CybelAngel',
            content: 'Dans mon rôle de support technique à distance, je m\'appuie quotidiennement sur la documentation existante, tout en contribuant à l\'enrichir. Dès qu\'un problème récurrent est identifié ou qu\'une zone grise apparaît, je m\'efforce d\'écrire un article clair qui lève l\'ambiguïté. Mon objectif est d\'apporter une aide concrète aux membres de l\'équipe, tout en construisant un référentiel de bonnes pratiques.'
          },
          {
            title: 'Un exemple parlant : la décompression d\'un fichier',
            content: 'Lors d\'un incident impliquant un client, j\'ai été amené à vérifier le comportement de nos fichiers sur différents navigateurs. L\'analyse a révélé une incompatibilité spécifique aux outils Windows. Plutôt que de me contenter d\'une réponse ponctuelle, j\'ai rédigé un article détaillant les tests à réaliser, les outils à utiliser et les bons réflexes à adopter. Ce document a ensuite été relu, enrichi et partagé avec les équipes de développement.'
          },
          {
            title: 'Pourquoi j\'y crois',
            content: 'Documenter me permet de gagner du temps, d\'éviter la répétition, et de capitaliser sur l\'expérience acquise. C\'est aussi une manière d\'aider les autres et de rendre visible le travail accompli. J\'y vois un acte de contribution invisible mais essentiel, qui renforce la résilience collective de l\'équipe.'
          }
        ]
      },
      stack: ['Rédaction technique', 'Organisation', 'Pédagogie', 'Analyse', 'Partage'],
    },
    {
      name: 'Scripting',
      description: 'Scripting : écrire pour automatiser, comprendre pour résoudre',
      article: {
        sections: [
          {
            title: 'Ma vision du scripting',
            content: 'Le scripting, pour moi, ne se limite pas à écrire du code pour exécuter une tâche. C\'est une manière de penser en logique, de modéliser un besoin, puis de le traduire dans un langage clair, efficace et maintenable. Cela permet d\'automatiser des actions, de réduire les erreurs humaines, et surtout de mieux comprendre le fonctionnement interne des systèmes.'
          },
          {
            title: 'Mon contexte professionnel',
            content: 'Chez CybelAngel, je travaille à 100 % en distanciel dans une équipe de support technique de niveau 2. Je traite des tickets variés, parfois complexes, qui impliquent une analyse approfondie de notre infrastructure Elastic. Je suis régulièrement amené à lire, modifier ou créer des scripts pour adapter nos outils aux évolutions techniques.\n\nLe scripting me permet de traiter des volumes importants de données via BigQuery ou Kibana, d\'adapter nos scripts d\'alerting à des structures d\'index changeantes, et de concevoir des outils internes pour automatiser des vérifications ou des exports.'
          },
          {
            title: 'Des cas concrets de scripting',
            content: 'Dans le cadre de mon travail, je mène régulièrement de petits projets où je mobilise mes compétences en scripting. Cela va de l\'analyse d\'un script produit par une autre équipe à la réécriture complète d\'un outil interne devenu obsolète. Ce type d\'exercice me pousse à adopter une approche rigoureuse, à penser à la lisibilité du code, et à anticiper les usages futurs.'
          },
          {
            title: 'Ce que j\'ai appris',
            content: 'Le scripting m\'a rendu plus autonome dans la résolution des tickets. Il m\'a permis d\'accélérer certains traitements répétitifs, d\'être plus précis dans mes analyses, et de mieux comprendre le code produit par d\'autres équipes. Il a aussi transformé ma façon de raisonner : même en tant que support, je pense comme un développeur quand j\'analyse un comportement système.'
          },
          {
            title: 'Et maintenant ?',
            content: 'Je considère le scripting comme un pilier de ma pratique professionnelle. Je souhaite continuer à progresser sur cette compétence en écrivant des scripts plus modulaires, en découvrant de nouveaux outils ou langages comme Jinja ou Pandas, et en m\'appropriant les bonnes pratiques du développement, notamment en matière de tests, de documentation et d\'intégration. Mon objectif est que mes scripts ne soient pas seulement fonctionnels, mais aussi utiles aux autres, intégrés dans des workflows communs, et conçus pour durer.'
          }
        ]
      },
      stack: ['Python', 'Automatisation', 'Elastic', 'BigQuery', 'Développement'],
    }
  ],
  soft: [
    {
      name: 'Autonomie',
      description: 'Être autonome à distance : ma boussole au quotidien',
      article: {
        sections: [
          {
            title: 'Ma définition personnelle de l\'autonomie',
            content: 'L\'autonomie, ce n\'est pas simplement savoir travailler seul. C\'est faire preuve de discernement, agir de manière responsable, savoir demander de l\'aide quand il le faut, et s\'adapter aux imprévus. C\'est aussi organiser son travail, prendre des décisions sans supervision immédiate, et anticiper. Dans un environnement à distance, cette compétence devient indispensable.'
          },
          {
            title: 'L\'autonomie dans mon quotidien chez CybelAngel',
            content: 'Mon poste de support technique à distance implique une grande autonomie. Je traite des tickets techniques complexes, j\'interagis avec différents métiers (analystes, développeurs, produit), et je dois organiser mon travail de façon proactive. Sans présence physique d\'équipe autour de moi, je dois hiérarchiser les urgences, documenter mes actions et résoudre des incidents avec efficacité.'
          },
          {
            title: 'Des preuves concrètes d\'autonomie',
            content: 'Un jour, j\'ai reçu un ticket signalant qu\'un domaine potentiellement malveillant n\'avait pas été détecté. Sans attendre de directive, j\'ai enclenché une série d\'analyses techniques. J\'ai identifié que le domaine était bien détecté mais avait été filtré en raison d\'une redirection vers un site légitime.\n\nDans un autre cas, un changement dans notre base Elastic a rendu plusieurs scripts inopérants. J\'ai localisé les erreurs, modifié les requêtes et remis les scripts en service sans encadrement.\n\nEnfin, dans un projet personnel, j\'ai conçu un bot Discord interrogeant une base de données JSON via l\'API d\'OpenAI, pour automatiser la gestion des tickets d\'un serveur RP. Ce projet illustre ma capacité à apprendre seul, à structurer un projet technique complet et à trouver des solutions par moi-même.'
          },
          {
            title: 'Mon bilan critique sur cette compétence',
            content: 'Je considère aujourd\'hui l\'autonomie comme l\'un de mes atouts professionnels. Elle me permet de rester performant en télétravail, de réagir rapidement, et de m\'adapter aux imprévus. Mais j\'ai aussi conscience que l\'autonomie doit s\'accompagner de transparence. Je m\'efforce donc de documenter davantage mes actions et de partager mes méthodes pour que cette autonomie bénéficie à l\'équipe.'
          },
          {
            title: 'Et maintenant ?',
            content: 'L\'autonomie est une dimension essentielle de mon projet professionnel. Je souhaite continuer à évoluer dans des environnements qui valorisent la confiance, la flexibilité et l\'initiative. Je poursuis ma formation personnelle à travers des lectures techniques, des expérimentations, et des projets. À moyen terme, je veux utiliser cette autonomie pour mener des projets transverses à distance et transmettre mes bonnes pratiques à mes futurs collaborateurs.'
          }
        ]
      },
      stack: ['Organisation', 'Prise d\'initiative', 'Adaptabilité', 'Auto-formation', 'Documentation'],
    },
    {
      name: 'Communication',
      description: 'Communiquer avec clarté, créer de la confiance',
      article: {
        sections: [
          {
            title: 'Ma vision personnelle de la communication',
            content: 'La communication ne se limite pas à transmettre une information. Elle permet de créer une compréhension partagée, de faciliter la collaboration, et d\'établir une relation de confiance. Pour moi, c\'est une compétence à part entière, qui nécessite écoute, clarté et adaptation à chaque interlocuteur.\n\nDans un environnement technique et à distance, cette compétence devient essentielle. Une formulation imprécise peut ralentir une investigation, une explication floue peut faire perdre du temps à un collègue, et une réponse mal structurée peut laisser un client dans l\'incertitude.'
          },
          {
            title: 'La communication dans mon quotidien',
            content: 'En tant que support technique chez CybelAngel, je suis en contact régulier avec des clients, des développeurs, des équipes produit et d\'autres collègues du support. Je dois expliquer clairement des problèmes techniques, alerter sur des incidents, ou transmettre des solutions. Le télétravail me pousse à structurer mes messages, à aller à l\'essentiel, et à documenter ce que je fais pour assurer la continuité.'
          },
          {
            title: 'Une communication multiforme',
            content: 'J\'utilise plusieurs formes de communication selon le contexte. L\'écrit me sert à formuler des réponses précises dans les tickets, à rédiger des articles techniques, ou à échanger sur nos canaux internes. L\'oral me permet de clarifier mes démarches en réunion ou de poser mes questions. J\'adopte aussi une posture proactive : si une information me semble utile à d\'autres, je la partage sans attendre.'
          },
          {
            title: 'Ce que cette compétence m\'apporte',
            content: 'Communiquer efficacement me fait gagner du temps et en fait gagner aux autres. Cela renforce la transparence sur mon travail, notamment à distance, et me permet d\'avancer plus rapidement sur des tickets complexes. C\'est aussi un facteur de sérénité : je sais que je peux m\'exprimer librement, car je le fais de manière claire et respectueuse.'
          },
          {
            title: 'Ce que je souhaite développer',
            content: 'Je souhaite continuer à améliorer la pédagogie de mes écrits techniques, à affiner mon discours selon les profils de mes interlocuteurs, et, à terme, pourquoi pas animer une session de partage d\'expérience ou participer à la rédaction d\'un guide à destination des nouveaux arrivants.'
          }
        ]
      },
      stack: ['Communication écrite', 'Communication orale', 'Pédagogie', 'Adaptabilité', 'Documentation'],
    },
    {
      name: 'Partage de connaissance',
      description: 'Partager pour faire grandir les autres (et moi avec)',
      article: {
        sections: [
          {
            title: 'Ma définition personnelle',
            content: 'Partager la connaissance, ce n\'est pas seulement répondre à une question. C\'est organiser une information pour qu\'elle soit comprise, applicable et utile aux autres. C\'est un acte collaboratif qui renforce l\'intelligence collective. C\'est aussi, pour moi, un engagement professionnel : ce que je découvre aujourd\'hui peut faire gagner du temps à un collègue demain.'
          },
          {
            title: 'Dans mon quotidien de télétravailleur',
            content: 'Travaillant à distance, je veille à laisser des traces utiles et accessibles. Je rédige des documents clairs à propos de tickets complexes, et j\'interviens également oralement lors de réunions quotidiennes pour expliquer mes avancées techniques, mes blocages ou des cas pertinents. Cela crée un lien entre nos contextes individuels et alimente une compréhension commune.'
          },
          {
            title: 'Multiplier les formats de transmission',
            content: 'Pour moi, la transmission ne se limite pas à écrire de la documentation. Je partage aussi en binôme lors de la résolution de tickets, j\'explique mes apprentissages lors de réunions, et je propose parfois de courtes présentations techniques. Chaque format a sa valeur : les écrits restent et se relisent, les échanges directs facilitent la transmission, et les présentations suscitent la curiosité. Je choisis la méthode en fonction du contenu à transmettre et de l\'audience.'
          },
          {
            title: 'L\'effet domino d\'un article bien écrit',
            content: 'Un exemple concret : un article que j\'ai rédigé sur un bug de décompression a été repris en réunion, utilisé dans des réponses clients, puis partagé avec l\'équipe produit. Il a permis d\'enrichir notre compréhension collective et d\'améliorer le produit.'
          },
          {
            title: 'Ce que j\'en retire',
            content: 'Partager m\'aide à structurer ma pensée, à me sentir utile à l\'équipe et à aborder les problèmes complexes avec plus de recul. J\'y vois un levier d\'impact durable : un bon partage peut aider plusieurs personnes sans que je sois présent. J\'entretiens cette compétence avec enthousiasme, en écrivant, en discutant, et en restant ouvert. À l\'avenir, je souhaite mettre en place des formats courts de partage réguliers pour favoriser la circulation des connaissances.'
          }
        ]
      },
      stack: ['Documentation', 'Formation', 'Communication', 'Pédagogie', 'Collaboration'],
    }
  ]
};

const contact = {
  email: 'leopold.rolland@hotmail.fr',
}

export { header, about, projects, skills, contact }
