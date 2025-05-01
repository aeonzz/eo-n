import * as React from "react";

import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
} from "@/registry/default/ui/alert-dialog";
import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";
import { Textarea } from "@/registry/default/ui/textarea";

export default function AlertDialogConfirmation() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [confirmationOpen, setConfirmationOpen] = React.useState(false);
  const [textareaValue, setTextareaValue] = React.useState("");

  function handleOpenChange(open: boolean) {
    if (!open && textareaValue) {
      setConfirmationOpen(true);
    } else {
      setTextareaValue("");
      setDialogOpen(open);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDialogOpen(false);
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger render={<Button variant="outline">Feedback</Button>} />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Submit Feedback</DialogTitle>
          <DialogDescription>
            We’d love to hear your thoughts about the seminar. Your feedback
            helps us improve future events.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Textarea
            required
            placeholder="What did you like or suggest improving?"
            value={textareaValue}
            onChange={(event) => setTextareaValue(event.target.value)}
            className="text-sm sm:text-base"
          />
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Submit Feedback</Button>
          </DialogFooter>
        </form>
      </DialogContent>
      <AlertDialog open={confirmationOpen} onOpenChange={setConfirmationOpen}>
        <AlertDialogContent className="flex w-[360px] flex-col items-center">
          <AlertDialogTitle>Discard Feedback?</AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            You’ve started writing feedback. If you close now, your message will
            be lost. Are you sure you want to discard it?
          </AlertDialogDescription>
          <AlertDialogFooter className="w-full">
            <AlertDialogClose className="flex-1">
              Continue Editing
            </AlertDialogClose>
            <Button
              variant="destructive"
              className="flex-1"
              onClick={() => {
                setConfirmationOpen(false);
                setDialogOpen(false);
                setTextareaValue("");
              }}
            >
              Discard Feedback
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Dialog>
  );
}
