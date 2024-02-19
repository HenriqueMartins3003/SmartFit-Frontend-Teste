/* eslint-disable @typescript-eslint/no-unused-vars */
interface LabelImage {
  url: string;
  alt: string;
  description: string;
}

export interface Label {
  description: string;
  images: LabelImage[];
}

export const LABELS: Label[] = [
  {
    description: "Máscara",
    images: [
      {
        url: "./required-mask.png",
        alt: "uso de mascara obrigatório",
        description: "Obrigatório",
      },
      {
        url: "./recommended-mask.png",
        alt: "uso de mascara recomendado",
        description: "Recomendado",
      },
    ],
  },
  {
    description: "Toalha",
    images: [
      {
        url: "./required-towel.png",
        alt: "uso de toalhas obrigatório",
        description: "Obrigatório",
      },
      {
        url: "./recommended-towel.png",
        alt: "uso de toalhas recomendado",
        description: "Recomendado",
      },
    ],
  },
  {
    description: "Bebedouro",
    images: [
      {
        url: "./partial-fountain.png",
        alt: "obrigatório",
        description: "Obrigatório",
      },
      {
        url: "./forbidden-fountain.png",
        alt: "Proibído",
        description: "Proibído",
      },
    ],
  },
  {
    description: "Vestiários",
    images: [
      {
        url: "./required-lockerroom.png",
        alt: "Liberado",
        description: "Liberado",
      },
      {
        url: "./partial-lockerroom.png",
        alt: "Parcial",
        description: "Parcial",
      },
      {
        url: "./forbidden-lockerroom.png",
        alt: "Fechado",
        description: "Fechado",
      },
    ],
  },
];
