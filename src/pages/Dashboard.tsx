import { useState } from "react";
import { CreateContentModel } from "../components/CreateContentModel";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import ProfileMenu from "../components/ProfileMenu";
import { ToggleShare } from "../components/ui/ToggleShare";
import { DisableIcon } from "../icons/DisableIcon";
import { useContents } from "../hooks/ContentContext";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refreshContents, setContents, setAllContents } =
    useContents();
  const username = localStorage.getItem("username") || "User";

  return (
    <>
      <div className="">
        <Sidebar />
        <div className=" ml-15 md:ml-36 lg:ml-72  p-4 min-h-screen bg-slate-100">
          <CreateContentModel
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            onSuccess={() => {
              refreshContents();
              setModalOpen(false);
            }}
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
          {contents && contents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 [@media(min-width:1220px)]:grid-cols-3 gap-4">
              {contents.map(({ type, title, link, _id }) => {
                return (
                  <Card
                    title={title}
                    link={link}
                    type={type}
                    cardId={_id}
                    setContents={setContents}
                    key={_id}
                    setAllContents={setAllContents}
                  />
                );
              })}
            </div>
          ) : (
            <div className="-mt-20 p-4 min-h-screen bg-slate-100 flex items-center justify-center">
              <div className="bg-white rounded-xl shadow-md p-8 max-w-md text-center">
                <div className="text-5xl mb-4">📭</div>
                <h2 className="text-xl font-semibold text-slate-800 mb-2">
                  No content yet
                </h2>
                <p className="text-slate-500 mb-6">
                  Your digital brain is empty. Start by adding your first link
                  or note.
                </p>
                <Button
                  varient="primary"
                  text="Add Content"
                  size="lg"
                  onClick={() => setModalOpen(true)}
                  startIcon={<PlusIcon size="md" />}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
