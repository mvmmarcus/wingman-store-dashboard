"use client";

import { ChartPieSlice, ChatText, Tag } from "@phosphor-icons/react";
import { Nav } from "src/app/_components/nav";

export function Header() {
  return (
    <Nav.Root>
      <Nav.Item
        variant="active"
        title="Summary"
        path="summary"
        icon={<ChartPieSlice size={20} weight="fill" />}
      />
      <Nav.Item
        title="Sales"
        path="sales"
        icon={<Tag size={20} weight="fill" />}
      />
      <Nav.Item
        title="Chats"
        path="chats"
        icon={<ChatText size={20} weight="fill" />}
      />
    </Nav.Root>
  );
}
