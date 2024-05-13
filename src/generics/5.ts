export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type RoleDescription = Record<UserRole, string>;

export const RoleDescription: RoleDescription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
