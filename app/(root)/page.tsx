"use client";

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
      <Modal title="test" description="test description" isOpen={true} onClose={() => {}}>
        Children testt
      </Modal>
    </div>
  );
}

export default SetupPage;
