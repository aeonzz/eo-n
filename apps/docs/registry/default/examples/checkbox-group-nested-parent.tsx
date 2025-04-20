import * as React from "react";

import { Checkbox } from "@/registry/default/ui/checkbox";
import { CheckboxGroup } from "@/registry/default/ui/checkbox-group";
import { Label } from "@/registry/default/ui/label";

const mainPermissions = [
  {
    label: "View Dashboard",
    value: "view-dashboard",
  },
  {
    label: "Access Reports",
    value: "access-reports",
  },
  {
    label: "Manage Users",
    value: "manage-users",
  },
] as const;

const userManagementPermissions = [
  {
    label: "Create User",
    value: "create-user",
  },
  {
    label: "Edit User",
    value: "edit-user",
  },
  {
    label: "Delete User",
    value: "delete-user",
  },
  {
    label: "assign Roles",
    value: "assign-roles",
  },
];

export default function CheckboxGroupNestedParent() {
  const [mainValue, setMainValue] = React.useState<string[]>([
    "view-dashboard",
  ]);
  const [managementValue, setManagementValue] = React.useState<string[]>([
    "create-user",
  ]);

  return (
    <CheckboxGroup
      aria-labelledby="permissions"
      value={mainValue}
      onValueChange={(value) => {
        if (value.includes("manage-users")) {
          setManagementValue(userManagementPermissions.map((p) => p.value));
        } else if (
          managementValue.length === userManagementPermissions.length
        ) {
          setManagementValue([]);
        }
        setMainValue(value);
      }}
      allValues={mainPermissions.map((p) => p.value)}
    >
      <Label id="permissions" className="flex items-center space-x-2">
        <Checkbox name="permissions" parent />
        User Permissions
      </Label>
      {mainPermissions
        .filter((permission) => permission.value !== "manage-users")
        .map((permission, i) => (
          <Label
            key={i}
            id={permission.value}
            className="flex items-center space-x-2"
          >
            <Checkbox name={permission.value} />
            {permission.label}
          </Label>
        ))}
      <CheckboxGroup
        aria-labelledby="manage-users"
        value={managementValue}
        onValueChange={(value) => {
          if (value.length === userManagementPermissions.length) {
            setMainValue((prev) =>
              Array.from(new Set([...prev, "manage-users"]))
            );
          } else {
            setMainValue((prev) => prev.filter((v) => v !== "manage-users"));
          }
          setManagementValue(value);
        }}
        allValues={userManagementPermissions.map((p) => p.value)}
      >
        <Label id="mangage-users" className="flex items-center space-x-2">
          <Checkbox name="mangage-users" parent />
          Manage Users
        </Label>
        {userManagementPermissions.map((permission, i) => (
          <Label
            key={i}
            id={permission.value}
            className="flex items-center space-x-2 capitalize"
          >
            <Checkbox name={permission.value} />
            {permission.label}
          </Label>
        ))}
      </CheckboxGroup>
    </CheckboxGroup>
  );
}
