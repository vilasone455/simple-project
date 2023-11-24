import { authOptions } from "@/lib/provider/auth/authOption";
import NextAuth from "next-auth";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
