exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type ArtworkSlide implements Node {
      title: String!
      year: Int!
      artForm: String
      imageFileName: String!
      caption: String
    }

  `);
};
