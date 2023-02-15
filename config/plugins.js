module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: "provider-upload-qiniu-cloud", // full package name is required
      providerOptions: {
        accessKey: env("QINIU_ACCESS_KEY", ""),
        secretKey: env("QINIU_SECRET_KEY", ""),
        prefix: env("QINIU_PREFIX", ""),
        zone: env("QINIU_ZONE", "Zone_z0"),
        bucket: env("QINIU_BUCKET", ""),
        publicBucketDomain: env(
          "QINIU_PUBLIC_BUCKET_DOMAIN",
          "http://if-pbl.qiniudn.com"
        ),
        https: env("QINIU_HTTPS", true),
        cdn: env("QINIU_CDN", false),
      },
    },
  },
  upload0: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
