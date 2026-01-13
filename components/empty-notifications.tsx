import { Inbox } from "lucide-react";
import {
  Empty, EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "./ui/empty";

export default function EmptyNotifications() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Inbox className="text-muted-foreground" size={16} />
          </EmptyMedia>
          <EmptyTitle className="text-sm text-muted-foreground">
            Você não tem novas notificações.
          </EmptyTitle>
        </EmptyHeader>
      </Empty>
    </div>
  );
}
