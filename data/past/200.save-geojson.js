//saves a geojson file from the clipboard
// node ./hand/012.save-geojson -t judas-park

var srcDir = "../space/geojson/";
var batLoc = "./000.input.bat";

var FS = require("fs-extra");
var S = require("string");
var clipboardy = require("clipboardy");

var program = require("commander");
program.option("-t, --title <type>", "output title");
program.parse(process.argv);
const options = program.opts();

var title = "tech=noir";
if (options.title) title = options.title;

FS.ensureDirSync(srcDir);

var dex = FS.readdirSync(srcDir).length;
dex = String(dex).padStart(5, "0");
var file = srcDir + dex + "." + title + ".json";

var link = ["https://geoman.io/geojson-editor", "https://www.keene.edu/campus/maps/tool/"];

var Chance = require("chance");
var fate = new Chance();
var now = fate.pickone(link);

var launchSite = () => {
  var tmp = "start chrome " + now;
  FS.writeFileSync(batLoc, tmp);

  var child_process = require("child_process");
  child_process.exec("000.input.bat", function (error, stdout, stderr) {
    console.log(error);
    console.log(stdout);
  });
};

try {
  var geo = clipboardy.readSync();
} catch (e) {
  console.log("hmmm " + e);
  launchSite();
  return;
}

if (geo.includes("coordinates") == false) return launchSite();

if (geo.includes("type") == false) return launchSite();
var obj = JSON.parse(geo);
FS.writeJSON(file, obj, () => {
  console.log("write " + file);
});
