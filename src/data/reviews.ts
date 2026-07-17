export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: 'google';
  date?: string;
}

export const reviews: Review[] = [
  {
    id: 'review-1',
    author: 'Bjorn Weiss',
    rating: 5,
    text: 'Ervaren vakman, Melvin heeft bij ons de hele boel gesaust en geschilderd binnen en wij zijn erg tevreden met het resultaat. De lijnen zijn kort en afspraken worden nagekomen.',
    source: 'google',
  },
  {
    id: 'review-2',
    author: 'Ruud van Meegen',
    rating: 5,
    text: 'Vakman. Zegt wat hij doet en doet wat hij zegt. Uitstekende herstelwerkzaamheden buiten het schilderwerk om. Houtrot prima opgelost. Een goede eerlijke prijs met top dienstverlening. Aanrader.',
    source: 'google',
  },
  {
    id: 'review-3',
    author: 'D Jansen',
    rating: 5,
    text: 'Levert fantastisch werk. Een fijne jonge vakman, meedenkend, ondernemend, aanpakken en supervriendelijk. Snel en zorgvuldig schilderwerk. Zeker een aanrader.',
    source: 'google',
  },
  {
    id: 'review-4',
    author: 'Hans Rottiers',
    rating: 5,
    text: 'Bij de renovatie van mijn badkamer had Melvin mij al heel goed geholpen. Erg tevreden over het strakke resultaat van de schuine wand en de schimmelwerende verfbehandeling. De badkamer is nu een plaatje om te zien en erg mooi geworden.\n\nDaarnaast heeft Melvin alle dubbele beglazing van onze woning vervangen door HR++ glas. Ook hier is weer superstrak werk afgeleverd. Het verschil in comfort is echt te merken.\n\nMelvin is niet alleen vakbekwaam, maar ook erg toegankelijk en klantgericht. Prima.',
    source: 'google',
  },
  {
    id: 'review-5',
    author: 'AR',
    rating: 5,
    text: 'Ik ben zeer tevreden over het schilderwerk en behangwerk dat Melvin bij ons heeft uitgevoerd. Hij werkt netjes, zorgvuldig en levert een strak eindresultaat. Daarnaast communiceert hij duidelijk en komt hij zijn afspraken na. Een betrouwbare vakman die ik zeker kan aanbevelen.',
    source: 'google',
  },
];
