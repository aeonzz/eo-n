import { Home, MessageSquare, User } from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs";

export default function TabsVertical() {
  return (
    <Tabs
      defaultValue="home"
      orientation="vertical"
      className="*:data-[slot=tabs-content]:text-muted-foreground *:data-[slot=tabs-content]:bg-card w-88 *:data-[slot=tabs-content]:grid *:data-[slot=tabs-content]:w-full *:data-[slot=tabs-content]:place-items-center *:data-[slot=tabs-content]:rounded-md *:data-[slot=tabs-content]:border *:data-[slot=tabs-content]:[&>svg]:size-10"
    >
      <TabsList className="*:data-[slot=tabs-trigger]:py-10">
        <TabsTrigger value="home">
          <Home />
        </TabsTrigger>
        <TabsTrigger value="profile">
          <User />
        </TabsTrigger>
        <TabsTrigger value="messages">
          <MessageSquare />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <Home />
      </TabsContent>
      <TabsContent value="profile">
        <User />
      </TabsContent>
      <TabsContent value="messages">
        <MessageSquare />
      </TabsContent>
    </Tabs>
  );
}
