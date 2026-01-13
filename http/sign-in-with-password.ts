import { api } from "./api-client";

interface signInWithPasswordRequest {
  email: string;
  password: string;
}

interface signInWithPasswordResponse {
  access_token: string;
}

export async function signInWithPassword({
  email,
  password,
}: signInWithPasswordRequest) {
  const result = await api
    .post("auth/signin", {
      json: {
        email,
        password,
      },
    })
    .json<signInWithPasswordResponse>();

  return result;
}
