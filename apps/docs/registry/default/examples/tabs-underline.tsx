import { ChartArea, Codepen, Settings } from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs";

export default function TabsUnderline() {
  return (
    <Tabs
      defaultValue="settings"
      variant="underline"
      className="*:data-[slot=tabs-content]:text-muted-foreground w-88 *:data-[slot=tabs-content]:grid *:data-[slot=tabs-content]:h-64 *:data-[slot=tabs-content]:place-items-center *:data-[slot=tabs-content]:rounded-md *:data-[slot=tabs-content]:border *:data-[slot=tabs-content]:[&>svg]:size-10"
    >
      <TabsList>
        <TabsTrigger value="settings">
          <Settings />
          Settings
        </TabsTrigger>
        <TabsTrigger value="deloyments">
          <Codepen />
          Deployments
        </TabsTrigger>
        <TabsTrigger value="analytics">
          <ChartArea />
          Analytics
        </TabsTrigger>
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
  );
}
