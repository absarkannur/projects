import type { Schema, Attribute } from '@strapi/strapi';

export interface AccordionBrandMetrix extends Schema.Component {
  collectionName: 'components_accordion_brand_metrixes';
  info: {
    displayName: 'brand_metrix';
  };
  attributes: {
    label: Attribute.String;
    content: Attribute.Blocks;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'accordion.brand-metrix': AccordionBrandMetrix;
    }
  }
}
