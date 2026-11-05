import artMaterials from '../assets/photos/illustrative-art-materials.jpg'
import creativeHands from '../assets/photos/illustrative-creative-hands.jpg'
import toysAndBooks from '../assets/photos/illustrative-toys-and-books.jpg'
import woodenBlocks from '../assets/photos/illustrative-wooden-blocks.jpg'

const articleImages = {
  creativeHands: { src: creativeHands, width: 1600, height: 2399, position: 'center 56%' },
  toysAndBooks: { src: toysAndBooks, width: 1600, height: 2400, position: 'center 72%' },
  woodenBlocks: { src: woodenBlocks, width: 1600, height: 1200, position: 'center center' },
  artMaterials: { src: artMaterials, width: 1600, height: 1067, position: '35% center' },
}

export function getArticleImage(key) {
  return articleImages[key] || articleImages.artMaterials
}
