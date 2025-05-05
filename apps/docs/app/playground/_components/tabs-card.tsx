import React from "react";
import {
  ChartArea,
  Codepen,
  Home,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";

import { ComponentCard } from "@/components/component-card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs";

export default function TabsCard() {
  return (
    <ComponentCard name="Tabs" column>
      <Tabs
        defaultValue="settings"
        variant="underline"
        className="*:data-[slot=tabs-content]:text-muted-foreground *:data-[slot=tabs-content]:bg-card w-[320px] *:data-[slot=tabs-content]:grid *:data-[slot=tabs-content]:h-64 *:data-[slot=tabs-content]:place-items-center *:data-[slot=tabs-content]:rounded-md *:data-[slot=tabs-content]:border *:data-[slot=tabs-content]:[&>svg]:size-10"
      >
        <TabsList>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="deloyments">Deployments</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="settings">
          <Settings />
        </TabsContent>
        <TabsContent value="deloyments">
          <Codepen />
        </TabsContent>
        <TabsContent value="analytics">
          <ChartArea />
        </TabsContent>
      </Tabs>
      <Tabs
        defaultValue="home"
        orientation="vertical"
        className="*:data-[slot=tabs-content]:text-muted-foreground *:data-[slot=tabs-content]:bg-card w-80 *:data-[slot=tabs-content]:grid *:data-[slot=tabs-content]:w-full *:data-[slot=tabs-content]:place-items-center *:data-[slot=tabs-content]:rounded-md *:data-[slot=tabs-content]:border *:data-[slot=tabs-content]:[&>svg]:size-10"
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
    </ComponentCard>
  );
}
