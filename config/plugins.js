module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: "AKIAQMR5QMKEH6PWJGFK",
        secretAccessKey: "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",
        region: "eu-west-1",
        params: {
          Bucket: "ecommerce-strapi-smellgood",
        },
      },
    },
  },
});