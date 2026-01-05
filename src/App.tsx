import "./App.css";
import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div className="flex gap-2 p-2">
      <Button
        varient="primary"
        text="Share Brain"
        size="lg"
        onclick={() => alert("hello,working hai...")}
        startIcon={<ShareIcon size="sm"/>}
      />
      <Button
        varient="secondary"
        text="Add Comment"
        size="lg"
        onclick={() => alert("hello,working hai...")}
        startIcon={<PlusIcon size="sm"/>}

      />
    </div>
  );
}

export default App;
