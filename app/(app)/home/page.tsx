import { auth } from "@/auth/auth";

export default async function Home() {
  const { user } = await auth();

  return (
    <div className="w-full h-full">
      <p>id: {user.id}</p>
      <p>email: {user.email}</p>
      <p>nome: {user.name}</p>
      <p>avatarUrl: {user.avatarUrl ?? "No Avatar"}</p>
    </div>
  );
}
