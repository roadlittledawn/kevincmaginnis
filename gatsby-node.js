const ARTWORK_SLIDES_PATH_PREFIX = "src/artwork-slides/";
const path = require("path");

exports.sourceNodes = ({
  actions,
  createNodeId,
  createContentDigest,
  getNodesByType,
}) => {
  const { createNode } = actions;

  const slides = getNodesByType("MarkdownRemark");

  slides
    .filter((slideNode) =>
      // Ensure this works in other file dirs like on netlify
      slideNode.fileAbsolutePath.startsWith(
        path.join(`${process.cwd()}/${ARTWORK_SLIDES_PATH_PREFIX}`)
      )
    )
    .forEach((slideNode, index) => {
      const { frontmatter, fileAbsolutePath } = slideNode;
      const data = {
        title: frontmatter.title,
        year: frontmatter.year,
        artForm: frontmatter.artForm || null,
        image: frontmatter.image,
        caption: frontmatter.caption || null,
      };
      const filename = fileAbsolutePath.substring(
        fileAbsolutePath.lastIndexOf("/") + 1
      );

      createNode({
        id: createNodeId(`slide-${index}-${filename}`),
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
          const filePathRegEx = `/\/artwork-images/${source.image}/`;
          const imageFileNode = await nodeModel.findOne({
            type: "File",
            query: {
              filter: {
                absolutePath: {
                  regex: filePathRegEx,
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
