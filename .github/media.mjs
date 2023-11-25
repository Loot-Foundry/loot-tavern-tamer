"use strict";
import { readFileSync, readdirSync, writeFileSync } from "fs";

// Read module.json
const module = JSON.parse(readFileSync("module.json"));

// Check if we have a host present
if (module?.flags?.host) {
  // Check if we have a media array in the module, if not, create it.
  if (!module.media) module.media = [];

  module.media = module.media.filter((x) => x.auto !== true);

  // Read the media folder and add all files to the media array.
  readdirSync("media").forEach((file) => {
    const object = { auto: true };
    // Search for any keywords in the file name and based on that set the type.
    object.type = file.match(/setup|screenshot|cover|video|icon/)[0];

    // If it's a setup file, use the local file. If not, use the remote URL.
    object.url =
      object.type === "setup"
        ? `modules/${module.id}/media/${file}`
        : `${module.flags.host}/${module.flags.path}/${file}`;

    // Add the object to the media array.
    module.media.push(object);
  });
}

// Add the module manifest and zip links to the module json.
module.manifest = `${module.flags.host}/${module.flags.path}/module.json`;
module.download = `${module.flags.host}/${module.flags.path}/module.zip`;

writeFileSync("module.json", JSON.stringify(module, null, "\t"));
