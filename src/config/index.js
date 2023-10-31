const { ADMIN_EMAIL, ADMIN_PASS, SECRET_KEY, PORT, DB_URL, TYPE } =
  process?.env;

export const config = {
  db_url: DB_URL,
  credential: { email: ADMIN_EMAIL, pass: ADMIN_PASS, userType: TYPE },
  secret_key: SECRET_KEY,
  port: PORT,
};
