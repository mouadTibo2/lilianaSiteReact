import image1 from "../../../images/Slide-1.jpg"

interface formationData {
  idFormation: number,
  audience: number,
  dureFormation: String,
  titreformation: string,
  imageFormation:  string,
  descriptionFormation: string,
}
/* 1 = Formation chercheur d'emploi 
  2 = Formation des salariés
  3 = Formation des Jeune
  4 = tout
*/

export const  formationData = [
  {
    idFormation: 1,
    audience: 1,
    dureFormation:"Bac + 3",
    titreformation:"Bureautique",
    imageFormation: image1,
    descriptionFormation: "Word - Execel - PowerPoint (2016)"
  },
  {
    idFormation:2,
    audience: 1,
    dureFormation: "Bac + 3",
    titreformation:"Base informatique",
    imageFormation: image1 ,
    descriptionFormation: "Word - Execel - PowerPoint (2016)"
  },
  {
    idFormation:3,
    audience: 1,
    dureFormation: "Bac + 3",
    titreformation:"Dévloppement Web - FrontEnd",
    imageFormation: image1,
    descriptionFormation: "HTML - CSS - Jvascript - BootStrap 5"
  },
  {
    idFormation: 4,
    audience: 2,
    dureFormation:"Bac + 3",
    titreformation:"Bureautique",
    imageFormation: image1,
    descriptionFormation: "Word - Execel - PowerPoint (2016)"
  },
  {
    idFormation: 5,
    audience: 2,
    dureFormation: "Bac + 3",
    titreformation:"Base informatique",
    imageFormation: image1  ,
    descriptionFormation: "Word - Execel - PowerPoint (2016)"
  },
  {
    idFormation: 6,
    audience: 2,
    dureFormation: "Bac + 3",
    titreformation:"Dévloppement Web - FrontEnd",
    imageFormation: image1,
    descriptionFormation: "HTML - CSS - Jvascript - BootStrap 5"
  },
  {
    idFormation:7,
    audience: 3,
    dureFormation: "Bac + 3",
    titreformation:"Base informatique",
    imageFormation: image1 ,
    descriptionFormation: "Word - Execel - PowerPoint (2016)"
  },
  {
    idFormation:8,
    audience: 3,
    dureFormation: "Bac + 3",
    titreformation:"Dévloppement Web - FrontEnd",
    imageFormation: image1,
    descriptionFormation: "HTML - CSS - Jvascript - BootStrap 5"
  },
  {
    idFormation:8,
    audience: 3,
    dureFormation: "Bac + 3",
    titreformation:"Dévloppement Web - FrontEnd",
    imageFormation: image1,
    descriptionFormation: "HTML - CSS - Jvascript - BootStrap 5"
  },
  {
    idFormation: 9,
    audience: 4,
    dureFormation: "6 Mois",
    titreformation:"Langue - Francais",
    imageFormation: image1,
    descriptionFormation: "Basic - verbe - ortograph"
  },
  {
    idFormation: 10,
    audience: 4,
    dureFormation: "6 Mois",
    titreformation:"Langue - Englais",
    imageFormation: image1,
    descriptionFormation: "Basic - verbes - ortograph"
  },
  {
    idFormation: 11,
    audience: 4,
    dureFormation: "6 Mois",
    titreformation:"Langue - Espagnol",
    imageFormation: image1,
    descriptionFormation: "Basic - verbes - ortograph"
  }
];