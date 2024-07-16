import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { db, storage } from "../../firebase";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import {
  addDoc,
  collection,
  getDocs,
  query,
  doc,
  getDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

// Instances
const professionDocInstance = () => {
  const userId = JSON.parse(Cookies.get("userData"))?.uid;
  const profileRef = doc(db, "users", userId);
  return profileRef;
};
const targetCollectionInstance = () => {
  const userId = JSON.parse(Cookies.get("userData"))?.uid;
  const targetRef = collection(db, "users", userId, "targets");
  return targetRef;
};
// Image handlers
export const storeImage = async (file) => {
  const userId = JSON.parse(Cookies.get("userData"))?.uid;
  const storageRef = ref(storage, `users/${userId}/profile.jpg`);
  try {
    const response = await uploadBytes(storageRef, file);
    return response;
  } catch (error) {
    toast.error(error.message);
  }
};

export const removeImage = async () => {
  const userId = JSON.parse(Cookies.get("userData"))?.uid;
  const storageRef = ref(storage, `users/${userId}/profile.jpg`);
  try {
    await deleteObject(storageRef);
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getImage = async () => {
  const userId = JSON.parse(Cookies.get("userData"))?.uid;
  const storageRef = ref(storage, `users/${userId}/profile.jpg`);
  try {
    const response = await getDownloadURL(storageRef);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// Profession handlers
export const storeProfession = async (professionData) => {
  const instance = professionDocInstance();
  try {
    await setDoc(instance, professionData);
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getProfession = async () => {
  const instance = professionDocInstance();
  try {
    const response = await getDoc(instance);
    return response._document.data.value.mapValue.fields.profession.stringValue;
  } catch (error) {
    console.error(error);
  }
};

// Target handlers
export const storeTarget = async (targetData) => {
  const instance = targetCollectionInstance();
  try {
    const response = await addDoc(instance, targetData);
    return response;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getTarget = async () => {
  const instance = targetCollectionInstance();
  try {
    const q = query(instance);
    const snapshot = await getDocs(q);
    const response = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const removeTarget = async (targetId) => {
  const userId = JSON.parse(Cookies.get("userData"))?.uid;
  const targetRef = doc(db, "users", userId, "targets", targetId);
  try {
    await deleteDoc(targetRef);
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};
