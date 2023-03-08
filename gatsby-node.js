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
    },
  });
};
