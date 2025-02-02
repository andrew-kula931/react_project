import Link from "next/link";

import { Canvas, ToolBar, docStyle } from "./canvas";

export default function DocumentPage() {
  return (
    <div>
      <div className="navBar">
        <textarea
          className="textareaDefault text-2xl"
          rows={1}
          cols={30}
          maxLength={30}
          defaultValue="Doc Name"
        />
        <Link href="/">Click here to go back</Link>
      </div>
      <ToolBar />
      <Canvas />
    </div>
  );
}
