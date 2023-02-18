const ARTWORK_SLIDES_PATH_PREFIX = "src/artwork-slides/";
const path = require("path");

exports.sourceNodes = ({
  actions,
  createNodeId,
  createContentDigest,
  getNodesByType,
}) => {
  const { createNode } = actions;

  const slides = getNodesByType("SlidesYaml");

  slides.forEach((slideNode, index) => {
    const { title, year, artForm, slideCaption, slideMedia } = slideNode;
    const data = {
      title,
      year,
      artForm: artForm || null,
      mediaFileName: slideMedia.fileName,
      caption: slideCaption || null,
    };

    createNode({
      id: createNodeId(`slide-${index}-${title}`),
      parent: null,
      children: [],
      internal: {
        type: "ArtworkSlide",
        contentDigest: createContentDigest(data),
      },
      ...data,
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = [
    `type ArtworkSlide implements Node {
      title: String!
      year: Int!
      artForm: String
      caption: String
      mediaFileName: String
      imageFile: File
    }`,
  ];

  createTypes(typeDefs);
};

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    ArtworkSlide: {
      imageFile: {
        resolve: async (source, __args, context) => {
          const { nodeModel } = context;
          const imageFileNode = await nodeModel.findOne({
            type: "File",
            query: {
              filter: {
                base: {
                  eq: source.mediaFileName,
                },
                sourceInstanceName: {
                  eq: "artworkImages",
                },
              },
            },
          });
          return imageFileNode;
        },
      },
    },
  });
};
