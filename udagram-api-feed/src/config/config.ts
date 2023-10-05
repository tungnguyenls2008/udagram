export const config = {
  username: 'master',
  password: '12345678',
  database: 'postgres',
  host: 'rds2.cucyeuo9oyib.us-east-1.rds.amazonaws.com',
  dialect: "postgres",
  aws_region: 'us-east-1',
  aws_profile: 'default',
  aws_media_bucket: 'uda-project-3-tungnd32',
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
