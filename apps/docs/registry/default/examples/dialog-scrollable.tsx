import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";
import { ScrollArea } from "@/registry/default/ui/scroll-area";

export default function DialogScrollable() {
  return (
    <Dialog>
      <DialogTrigger
        render={<Button variant="outline">Terms of Service</Button>}
      />
      <DialogContent className="sm:max-w-[415px]" flush>
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Read the terms and conditions carefully.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="my-2 mr-2 ml-4 flex-1">
          <p className="pb-4 text-sm font-semibold">1. Introduction</p>
          <p className="text-muted-foreground mb-4 text-sm leading-6">
            Welcome to our application. By accessing or using our service, you
            agree to be bound by these terms. If you do not agree to these
            terms, you may not use the service.
          </p>
          <p className="pb-4 text-sm font-semibold">2. User Accounts</p>
          <p className="text-muted-foreground mb-4 text-sm leading-6">
            You are responsible for maintaining the security of your account and
            password. The company cannot and will not be liable for any loss or
            damage from your failure to comply with this security obligation.
          </p>
          <p className="pb-4 text-sm font-semibold">3. Content</p>
          <p className="text-muted-foreground mb-4 text-sm leading-6">
            Our service allows you to post, link, store, share and otherwise
            make available certain information, text, graphics, videos, or other
            material. You are responsible for the content that you post to the
            service, including its legality, reliability, and appropriateness.
          </p>
          <p className="pb-4 text-sm font-semibold">4. Termination</p>
          <p className="text-muted-foreground mb-4 text-sm leading-6">
            We may terminate or suspend access to our service immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms.
          </p>
          <p className="pb-4 text-sm font-semibold">5. Changes</p>
          <p className="text-muted-foreground text-sm leading-6">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material we will try to
            provide at least 30 days notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion.
          </p>
        </ScrollArea>
        <DialogFooter>
          <Button type="submit">Accept terms</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
