/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Aura Harmony',
    tagline: 'Écoutez naturellement.',
    description: 'Un son qui évoque le grand air. Fabriqué en tissu acoustique chaleureux et composite de grès recyclé.',
    longDescription: 'Découvrez le son tel qu\'il devait être entendu—libre et organique. Le casque Aura Harmony intègre notre technologie de transducteur à air libre, enveloppé dans un tissu acoustique respirant qui s\'adapte à votre température. L\'arceau est fabriqué à partir d\'un composite de grès recyclé, offrant une texture unique et fraîche au toucher qui vous ancre dans l\'instant présent.',
    price: 429,
    category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1524678606372-565ae0f98944?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Réduction de bruit organique', 'Batterie 50h', 'Scène sonore naturelle']
  },
  {
    id: 'p2',
    name: 'Aura Epoch',
    tagline: 'Des moments, pas des minutes.',
    description: 'Une montre conçue pour le bien-être. Boîtier en céramique avec bracelet en cuir végétal durable.',
    longDescription: 'Le temps n\'est pas une séquence de chiffres, mais un flux de moments. L\'Aura Epoch repense l\'interface de la montre connectée, utilisant un écran hybride E-Ink apaisant qui imite le papier. Elle suit le stress grâce à la température de la peau et à la variabilité de la fréquence cardiaque, vibrant doucement pour vous rappeler de respirer. Le boîtier en céramique est hypoallergénique et lisse, poli à la main pendant 48 heures.',
    price: 349,
    category: 'Wearable',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Surveillance du stress', 'Écran hybride E-Ink', 'Batterie 7 jours']
  },
  {
    id: 'p3',
    name: 'Aura Canvas',
    tagline: 'Capturez la chaleur.',
    description: 'Un écran qui imite les propriétés du papier. Doux pour les yeux, aux couleurs vives et texturé au toucher.',
    longDescription: 'Les écrans ne devraient pas donner l\'impression de regarder dans une ampoule. Aura Canvas utilise un panneau OLED mat à gravure nanométrique qui diffuse la lumière ambiante, créant un écran qui ressemble et se sent comme du papier magazine de haute qualité. Parfait pour lire, dessiner ou afficher de l\'art, il apporte une chaleur tactile à votre vie numérique.',
    price: 1099,
    category: 'Mobile',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['OLED effet papier', 'Objectif portrait', 'Texture grès']
  },
  {
    id: 'p4',
    name: 'Aura Essence',
    tagline: 'Retour à la nature.',
    description: 'Un purificateur d\'air qui fait office de sculpture. Silencieux, diffusant de subtils parfums naturels tout en purifiant votre espace.',
    longDescription: 'L\'air pur est le fondement d\'un esprit clair. Aura Essence utilise un biofiltre à base de mousse combiné à la technologie HEPA pour éliminer les polluants de votre maison. Il diffuse doucement des huiles essentielles naturelles—cèdre, bergamote et pluie—orchestrées pour correspondre au moment de la journée.',
    price: 599,
    category: 'Home',
    imageUrl: 'https://images.pexels.com/photos/8092420/pexels-photo-8092420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
        'https://images.pexels.com/photos/8092420/pexels-photo-8092420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Filtre Bio-HEPA', 'Aromathérapie', 'Mode nuit silencieux']
  },
  {
    id: 'p5',
    name: 'Aura Beam',
    tagline: 'Une lumière qui respire.',
    description: 'Éclairage circadien intelligent qui suit le soleil. Diffuse une lueur chaleureuse, comme une bougie, le soir.',
    longDescription: 'La lumière artificielle perturbe nos rythmes naturels. Aura Beam se synchronise avec votre lever et coucher de soleil local, fournissant une lumière fraîche et énergisante pendant la journée et passant à une lueur chaude et ambrée sans lumière bleue le soir. Les contrôles sont sans contact ; un simple geste de la main ajuste la luminosité.',
    price: 249,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1540932296235-d84931b6370b?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Synchronisation rythme circadien', 'Gradation chaleureuse', 'Contrôle sans contact']
  },
  {
    id: 'p6',
    name: 'Aura Scribe',
    tagline: 'La pensée en mouvement.',
    description: 'Un stylet numérique avec la friction du graphite. Se charge sans fil lorsqu\'il est attaché magnétiquement à Aura Canvas.',
    longDescription: 'Le lien entre la main et le cerveau est sacré. Aura Scribe dispose d\'une pointe en élastomère personnalisée qui reproduit la friction microscopique du graphite sur le papier. Parfaitement équilibré, il disparaît dans votre main, ne laissant que vos pensées.',
    price: 129,
    category: 'Mobile',
    imageUrl: 'https://images.pexels.com/photos/2647376/pexels-photo-2647376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
        'https://images.pexels.com/photos/2647376/pexels-photo-2647376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.unsplash.com/photo-1517260487576-8977430081d3?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Latence zéro', 'Pointe texturée', 'Charge sans fil']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "La Psychologie de la Texture",
        date: "12 avril 2025",
        excerpt: "Pourquoi nos doigts désirent des surfaces naturelles dans un monde de verre et de plastique.",
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53]" },
                "Nous vivons dans un monde sans friction. Nos téléphones sont en verre lisse, nos ordinateurs portables en aluminium poli, nos comptoirs en quartz d'ingénierie. Il n'y a ni résistance, ni grain, ni texture. Et pourtant, notre biologie en a besoin."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "Le bout des doigts est l'une des parties les plus densément innervées du corps humain. Ils sont conçus pour lire l'histoire d'un objet—son âge, son origine, sa température. Lorsque nous leur refusons cette information, nous vivons une forme subtile de privation sensorielle."
            ),
            React.createElement("blockquote", { className: "border-l-2 border-[#2C2A26] pl-6 italic text-xl text-[#2C2A26] my-10 font-serif" },
                "\"Toucher, c'est connaître. Sentir, c'est être ancré.\""
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Chez Aura, nous concevons pour la main autant que pour l'œil. Nous choisissons des matériaux qui ont une voix. Du grès qui se réchauffe sous votre paume. Du tissu dont vous pouvez suivre la trame. Du bois qui se souvient de la forêt."
            )
        )
    },
    {
        id: 2,
        title: "Vivre avec Moins",
        date: "28 mars 2025",
        excerpt: "Une conversation avec l'architecte Hiroshi Nakamura sur l'art de l'espace vide.",
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Le vide n'est pas rien. Dans l'architecture japonaise, le concept de ",
                React.createElement("em", null, "Ma"),
                " fait référence à l'espace entre les choses—la pause qui donne forme à l'ensemble."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "\"Nous avons tendance à remplir nos vies de bruit,\" dit Nakamura, sirotant du thé dans son studio surplombant les rues de Kyoto luisantes de pluie. \"Nous achetons plus d'appareils pour gagner du temps, mais nous finissons par avoir moins de temps que jamais. Le vrai luxe est l'absence d'intrusion.\""
            ),
            React.createElement("div", { className: "my-12 p-8 bg-[#EBE7DE] font-serif text-[#2C2A26] italic text-center" },
                React.createElement("p", null, "La pièce est vide"),
                React.createElement("p", null, "Mais pleine de lumière."),
                React.createElement("p", null, "L'esprit est calme"),
                React.createElement("p", null, "Mais plein de pensées."),
                React.createElement("p", null, "C'est le poids"),
                React.createElement("p", null, "De vivre avec moins.")
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Cette philosophie guide chaque courbe de notre nouvelle collection. Nous nous sommes demandés : que pouvons-nous enlever ? Combien pouvons-nous retirer jusqu'à ce qu'il ne reste que l'essentiel ?"
            )
        )
    },
    {
        id: 3,
        title: "Planche d'Inspiration Printemps",
        date: "15 mars 2025",
        excerpt: "Notes du studio de design : brume matinale, pierre humide et lin pâle.",
        image: "https://images.unsplash.com/photo-1516834474-48c0abc2a902?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Le printemps dans le studio est un temps d'éveil. La lumière passe des angles durs et bas de l'hiver à une lueur plus douce et diffuse. Nous nous trouvons attirés par des tons plus pâles—le gris du trottoir mouillé, la crème du lin écru, le vert poussiéreux de la sauge."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "Notre planche d'inspiration ce mois-ci est une étude de la douceur. Il s'agit de l'état de transition—ni froid ni chaud, ni sombre ni lumineux. C'est l'aube de l'année."
            ),
             React.createElement("div", { className: "my-12 p-8 bg-[#2C2A26] text-[#F5F2EB] font-serif italic text-center" },
                React.createElement("p", null, "Pousse verte perçant à travers"),
                React.createElement("p", null, "Pierre grise froide contre la peau"),
                React.createElement("p", null, "Le soleil réchauffe l'air.")
            )
        )
    }
];

export const BRAND_NAME = 'Aura';
export const PRIMARY_COLOR = 'stone-900'; 
export const ACCENT_COLOR = 'stone-500';