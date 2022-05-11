// NPM packages
import { getStorage, ref } from "firebase/storage";

// Project files
import { firebaseApp } from "../firebase";

const storage = getStorage(firebaseApp);
const imagesRef = ref(storage, "images");

export { imagesRef };
