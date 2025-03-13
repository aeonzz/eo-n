import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/aeonzz.png" alt="@aeonz" />
      <AvatarFallback>AE</AvatarFallback>
    </Avatar>
  );
}
