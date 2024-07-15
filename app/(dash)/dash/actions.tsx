"use server";
var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  process.env.AIRTABLE_BASE
);
import { auth } from "@/auth";

export async function createNewProject() {
  console.log("creating new project...");
  const session = await auth();

  console.log(session)
  base("Projects").create(
    [
      {
        fields: {
          OwnerID: session?.user?.id,
          Name: "New Project",
        },
      },
    ],
    function (err: any, records: any) {
      if (err) {
        console.error(err);
        return;
      }
      records?.forEach(function (record: any) {
        console.log(record.getId());
      });
    }
  );
}
