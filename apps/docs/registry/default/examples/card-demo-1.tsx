import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";

export default function CardDemo1() {
  return (
    <Card className="max-w-md shadow-none">
      <CardHeader>
        <CardTitle>Aeonz</CardTitle>
        <CardDescription>Frontend Developer</CardDescription>
        <CardAction>
          <Avatar>
            <AvatarImage src="https://github.com/aeonzz.png" alt="@aeonz" />
            <AvatarFallback>AE</AvatarFallback>
          </Avatar>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Aeonz is a frontend developer who enjoys building cool things for the
          web.
        </p>
      </CardContent>
      <CardFooter className="flex-col justify-between gap-2 sm:flex-row [&_button]:w-full sm:[&_button]:w-fit">
        <Button variant="outline" size="sm">
          View Profile
        </Button>
        <Button size="sm">Connect</Button>
      </CardFooter>
    </Card>
  );
}
