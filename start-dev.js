process.chdir(__dirname);
require("child_process").execSync("node node_modules/next/dist/bin/next dev --port 3000", { stdio: "inherit" });
