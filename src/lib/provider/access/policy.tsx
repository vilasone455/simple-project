import { StringAdapter } from "casbin";

export const adapter = new StringAdapter(`
p, admin, user, (list)|(create)
p, admin, user, (edit)|(show)|(delete)
`);
