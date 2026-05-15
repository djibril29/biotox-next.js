import { type SchemaTypeDefinition } from 'sanity'
import { article } from './article'
import { contentImage } from './contentImage'
import { projet } from './projet'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projet, article, contentImage],
}
