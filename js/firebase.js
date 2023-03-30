$(document).ready(function () {
  $(document).mousemove(function (e) {
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    $(".lighting").css({
      left: mouseX + "px",
      top: mouseY + "px",
    });
  });
  $(".button").on("click", function () {
    var data = {
      name: $(".name").val(),
      reason: $(".reason").val(),
    };
    createData(data);
  });
});

// Read firebase data

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  set,
  get,
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlQihPXjAGR1gywH_P-bdSR5fvd6JNjM0",
  authDomain: "studio21-2023.firebaseapp.com",
  projectId: "studio21-2023",
  storageBucket: "studio21-2023.appspot.com",
  messagingSenderId: "1073435204151",
  appId: "1:1073435204151:web:cfdf1b0b4732be9c4dbdb2",
  measurementId: "G-14ZQ089G29",
};

var dataLength;

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const dbref = ref(db);

// snapshot.val() = Data

get(child(dbref, "/")).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    dataLength = snapshot.val().length;
  }
});

// create data

function createData(data) {
  console.log(data, dataLength);
  set(ref(db, "/" + dataLength + "/"), data)
    .then(() => {
      alert("Data upload complete");
    })
    .catch((error) => {
      alert("Failed");
    });
}
