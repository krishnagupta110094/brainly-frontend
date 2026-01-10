import { useEffect, useState } from "react";
import { CreateContentModel } from "../components/CreateContentModel";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContents } from "../hooks/useContent";
import ProfileMenu from "../components/ProfileMenu";
import { ToggleShare } from "../components/ui/ToggleShare";
import { DisableIcon } from "../icons/DisableIcon";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refreshContents, setContents } = useContents();
  const username = localStorage.getItem("username") || "User";

  useEffect(() => {
    refreshContents();
  }, [modalOpen]);

  return (
    <>
      {!contents && (
        <div className="ml-72 p-4 min-h-screen bg-slate-400">
          No contents available
        </div>
      )}
      {(contents && (
        <div className="">
          <Sidebar />
          <div className=" ml-15 md:ml-36 lg:ml-72  p-4 min-h-screen bg-slate-100">
            <CreateContentModel
              open={modalOpen}
              onClose={() => setModalOpen(false)}
            />
            <div className="flex gap-2 justify-end mb-4">
              <Button
                varient="primary"
                size="sm"
                text={
                  <>
                    <span className="hidden lg:inline">Share Brain</span>
                  </>
                }
                onClick={() => ToggleShare(true)}
                startIcon={<ShareIcon size="sm" />}
              />

              <Button
                varient="secondary"
                size="sm"
                text={
                  <>
                    <span className="hidden lg:inline">Disable Share</span>
                  </>
                }
                onClick={() => ToggleShare(false)}
                startIcon={<DisableIcon size="sm" />}
              />

              <Button
                varient="primary"
                text="Add Content"
                size="sm"
                onClick={() => setModalOpen(true)}
                startIcon={<PlusIcon size="sm" />}
              />
              <ProfileMenu username={username} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {contents.map(({ type, title, link, _id }) => {
                return (
                  <Card
                    title={title}
                    link={link}
                    type={type}
                    cardId={_id}
                    setContents={setContents}
                  />
                );
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
