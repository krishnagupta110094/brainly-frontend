import { useEffect, useState } from "react";
import { CreateContentModel } from "../components/CreateContentModel";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContents } from "../hooks/useContent";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents,refreshContents} = useContents();

  useEffect(()=>{
    refreshContents();
  },[modalOpen])
  
  return (
    <>
      {!contents && (
        <div className="ml-72 p-4 min-h-screen bg-slate-100">
          No contents available
        </div>
      )}
      {(contents && (
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
                onClick={() => alert("hello,working hai...")}
                startIcon={<ShareIcon size="sm" />}
              />
              <Button
                varient="secondary"
                text="Add Content"
                size="sm"
                onClick={() => setModalOpen(true)}
                startIcon={<PlusIcon size="sm" />}
              />
            </div>
            <div className="flex gap-4 flex-wrap">
              {contents.map(({ type, title, link }) => {
                return <Card title={title} link={link} type={type} />;
              })}
            </div>
          </div>
        </div>
      )) || (
        <div className="ml-72 p-4 min-h-screen bg-slate-100">Loading...</div>
      )}
    </>
  );
}

export default Dashboard;
