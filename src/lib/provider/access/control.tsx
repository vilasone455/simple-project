
import { type AccessControlProvider } from "@refinedev/core/src/interfaces";
import { newEnforcer } from "casbin";
import { model } from "./model";
import { adapter } from "./policy";

export interface Response {
  user: {
    groups: string[]
  }
}

export const accessControlProvider: AccessControlProvider = {
  can: async({ action, params, resource },
  ) => {
    const enforcer = await newEnforcer(model, adapter);
    const role = await getRoles();

    if (
      action === "delete" || action === "edit" || action === "show"
    ) {
      return {
        can: await enforcer.enforce(
          role,
          `${resource}/${params?.id}`,
          action,
        ),
      };
    }
    if (action === "field") {
      return {
        can: await enforcer.enforce(
          role,
          `${resource}/${params?.field}`,
          action,
        ),
      };
    }
    return {
      can: await enforcer.enforce(
        role,
        resource,
        action,
      ),
    };
  },
};

async function getRoles(): Promise<string[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/auth/session`, {
    method: "GET",
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: { "Content-Type": "application/json" },
  });
  const data: Response = await res.json() as Response;

  if (Object.keys(data).length === 0) {
    return [];
  }
  return data.user.groups;
}
