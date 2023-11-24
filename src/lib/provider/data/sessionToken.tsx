import { type AxiosInstance, type AxiosResponse } from "axios";
import { type Session, type User } from "next-auth";
export interface ISession extends Session {
  user: User & { accessToken: string }
}
export const getSessionToken = async(httpClient: AxiosInstance): Promise<string> => {
  const session: AxiosResponse<ISession> = await httpClient.get(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/auth/session`);
  return session?.data.user?.accessToken ?? "";
};
