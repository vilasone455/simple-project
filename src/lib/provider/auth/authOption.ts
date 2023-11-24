import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { type Response, type User, type UserResponse } from "@/lib/provider/auth/interface";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      id: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.API_URL}/auth/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          // eslint-disable-next-line @typescript-eslint/naming-convention
          headers: { "Content-Type": "application/json" },
        });
        const data: Response = await res.json() as Response;
        const resUser = await fetch(`${process.env.API_URL}/user/${data.user?.pk}`, {
          method: "GET",
          // eslint-disable-next-line @typescript-eslint/naming-convention
          headers: { "Content-Type": "application/json" },
        });
        const dataUser: UserResponse = await resUser.json() as UserResponse;
        if (res.ok && resUser.ok && ((data?.access) !== "")) {
          const user: User = {
            name: data.user.username,
            email: data.user.email,
            id: data.user?.pk,
            groups: dataUser.groups,
          };

          return { ...user, accessToken: data.access };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET_KEY as string,
  callbacks: {
    session({ session, token }) {
      if (token?.user !== undefined) {
        session.user = token.user as User;
      }
      return { ...session, accessToken: token.accessToken };
    },
    jwt({ token, user, account, profile, isNewUser }) {
      if (user !== undefined) {
        token.user = user;
        token.accessToken = account?.accessToken;
      }
      return token;
    },
    signIn({ user }) {
      return user !== undefined;
    },
    redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
};
