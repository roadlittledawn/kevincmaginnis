exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    SlidesYaml: {
      imageFile: {
        type: "File",
        resolve: async (source, __args, context) => {
          const { nodeModel } = context;
          const imageFileNode = await nodeModel.findOne({
            type: "File",
            query: {
              filter: {
                base: {
                  eq: source.slideMedia.fileName,
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
      slideMedia: {
        videoPlatform: {
          resolve: (source) =>
            hasOwnProperty(source, "videoPlatform")
              ? source.videoPlatform
              : null,
        },
        videoId: {
          resolve: (source) =>
            hasOwnProperty(source, "videoId") ? source.videoId : null,
        },
      },
    },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
  type SlidesYaml implements Node @dontInfer {
    slideMedia: SlideMedia
    artForm: String
    slideCaption: String
    title: String
    year: Int
  }
  type SlideMedia {
    videoPlatform: String
    videoId: String
    type: String
  }`;
  createTypes(typeDefs);
};
