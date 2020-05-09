import fs from "fs";
import path from "path";

const FILE_NAME = "file_data.csv";
const FILE_PATH = path.join("./files/", FILE_NAME);
const LINE_NUMBER = 1000;

const COMA = ",";
const DEFAULT_VALUES = {
  NAMES: [
    "Anastasia",
    "Beau",
    "In",
    "Kassandra",
    "Halina",
    "Asha",
    "Glynda",
    "Ross",
    "Noma",
    "Juanita",
    "Shin",
    "Debora",
    "Priscila",
    "Ann",
    "Lois",
    "Katheryn",
    "Jules",
    "Nicole",
    "Aileen",
    "Bruno",
    "Abraham",
    "Alyson",
    "Deirdre",
    "Major",
    "Mora",
    "Venita",
    "Terri",
    "Reid",
    "Camilla",
    "Etta",
  ],
  SURNAMES: [
    "Toto",
    "Bartolo",
    "Tighe",
    "Mcdonnell",
    "Falconer",
    "Turlington",
    "Bowling",
    "Clover",
    "Veloz",
    "Stamps",
    "Hora",
    "Buttner",
    "Deere",
    "Tookes",
    "Beckler",
    "Drucker",
    "Basquez",
    "Mynatt",
    "Bumgardner",
    "Hardee",
    "Aho",
    "Bonenfant",
    "Schnur",
    "Tiffany",
    "Twedt",
    "Vanduzer",
    "Holts",
    "Russo",
    "Engelbrec",
    "Wycoff",
  ],

  PHONE_NUMBER: [

  "380934398765",
  "380934398765",
  "384532322365",
  "386598998765",
  "380543398765",
  "380934354765",
  "380934398732",
  "380934767654",
  "380934398765",
  "380876398765",
  "380765438765",
  "380934398732",
  "385432457654",
  "380934765435",
  "380934098765",
  "380976541265",
  "380934398732",
  "380934767643",
  "343334398765",
  "343354818765",
  "381111111165",
  "380222222232",
  "380934733354",
  "380666698765",
  "380934999965",
  "380933333335",
  "380888898732",
  "380934799654",
  "380934666555",
  "380959598765",
],

  EMAILS: [
    "staffelb@yahoo.ca",
    "boein@msn.com",
    "miyop@comcast.net",
    "pkplex@comcast.net",
    "ninenine@hotmail.com",
    "janneh@gmail.com",
    "murty@optonline.net",
    "lamky@att.net",
    "gommix@msn.com",
    "ozawa@icloud.com",
    "dhwon@att.net",
    "drolsky@outlook.com",
    "north@outlook.com",
    "smallpaul@msn.com",
    "esbeck@yahoo.ca",
    "parksh@me.com",
    "shawnce@gmail.com",
    "retoh@yahoo.com",
    "steveli@yahoo.com",
    "ivoibs@icloud.com",
    "sakusha@icloud.com",
    "chronos@att.net",
    "fangorn@mac.com",
    "guialbu@me.com",
    "jonathan@mac.com",
    "formis@verizon.net",
    "geeber@comcast.net",
    "subir@sbcglobal.net",
    "rgarcia@yahoo.ca",
    "martink@me.com",
  ],

  PASSWORD: [
    "password1",
    "password2",
    "password3",
    "password4",
    "password5",
    "password6",
    "password7",
    "password8",
    "password9",
    "password10",
    "password11",
    "password12",
    "password13",
    "password14",
    "password15",
    "password16",
    "password17",
    "password18",
    "password19",
    "password20",
    "password21",
    "password22",
    "password23",
    "password24",
    "password25",
    "password26",
    "password27",
    "password28",
    "password29",
    "password30",
    
  ],
};



const getItemFromArray = (array, index) => array[index % array.length];

const data = [];
for (let i = 0; i < LINE_NUMBER; i++) {
  const line =
    getItemFromArray(DEFAULT_VALUES.NAMES, i) +
    COMA +
    getItemFromArray(DEFAULT_VALUES.SURNAMES, i) +
    COMA +
    getItemFromArray(DEFAULT_VALUES.PHONE_NUMBER, i) +
    COMA +
    getItemFromArray(DEFAULT_VALUES.EMAILS, i) +
    COMA +
    getItemFromArray(DEFAULT_VALUES.PASSWORD, i);

  data.push(line);
}

fs.writeFile(FILE_PATH, data.join("\n"), (err) => {
  if (err) throw err;

  console.log("File was created successfully.");
  console.log(`Path to file is: ${FILE_PATH}`);
});
