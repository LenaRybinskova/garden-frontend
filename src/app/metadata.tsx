import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Garden - Ваш помощник в садоводстве',
  description:
    'Проект Garden создан для любителей садоводства. Здесь можно сохранять данные по дате посадки, всхожести семян, темпах роста и урожаях, добавлять фото. В дальнейшем будет добавлен функционал по рисованию макета участка.',
  keywords: 'садоводство, посадка, всхожесть семян, темпы роста, урожай, макет участка',
  /*   robots: 'index, follow', */
};

export default function MetadataComponent() {
  return null;
}
