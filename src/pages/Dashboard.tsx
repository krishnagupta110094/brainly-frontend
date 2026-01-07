import { useState } from "react";
import { CreateContentModel } from "../components/CreateContentModel";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Sidebar />
      <div className="ml-72 p-4 min-h-screen bg-slate-100">
        <CreateContentModel
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
        <div className="flex gap-2 justify-end mb-4">
          <Button
            varient="primary"
            text="Share Brain"
            size="sm"
            onclick={() => alert("hello,working hai...")}
            startIcon={<ShareIcon size="sm" />}
          />
          <Button
            varient="secondary"
            text="Add Content"
            size="sm"
            onclick={() => setModalOpen(true)}
            startIcon={<PlusIcon size="sm" />}
          />
        </div>
        <div className="flex gap-4">
          <Card
            title="Inspiring Tweet"
            link="https://x.com/imVkohli/status/2002627640793125298"
            type="twitter"
          />
          <Card
            title="Project Ideas"
            link="https://www.youtube.com/watch?v=50s2YgjQgSw"
            type="youtube"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
