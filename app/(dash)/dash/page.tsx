import { Button } from "@nextui-org/react";
import { createNewProject } from "./actions";

export default function test() {
  return (
    <div>
      <form
        action={createNewProject}
      >
        <Button type="submit">Test Create Record </Button>
      </form>
    </div>
  );
}
