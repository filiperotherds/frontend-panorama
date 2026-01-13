import { api } from "./api-client";

interface SignUpRequest {
  name: string;
  email: string;
  password: string;
  accountType: "INDIVIDUAL" | "BUSINESS";
}

type SignUpResponse = void;

export async function signUp({
  name,
  email,
  password,
  accountType,
}: SignUpRequest): Promise<SignUpResponse> {
  await api.post("auth/signup", {
    json: {
      name,
      email,
      password,
      accountType,
    },
  });
}
