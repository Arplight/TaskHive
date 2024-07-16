import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

// Constants
const taskCollectionInstance = () => {
  const userId = JSON.parse(Cookies.get("userData"))?.uid;
  const taskRef = collection(db, "users", userId, "tasks");
  return taskRef;
};

const taskDocInstance = (taskId) => {
  const userId = JSON.parse(Cookies.get("userData"))?.uid;
  const taskRef = doc(db, "users", userId, "tasks", taskId);
  return taskRef;
};

// Creating a new task
export const addTask = async (task) => {
  const instance = taskCollectionInstance();
  try {
    const response = await addDoc(instance, task);
    return response;
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
};

// Getting all tasks
export const getTasks = async () => {
  const instance = taskCollectionInstance();
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

// Updating task
export const updateTask = async ({ taskId, taskData }) => {
  const instance = taskDocInstance(taskId);
  try {
    await updateDoc(instance, taskData);
    return { response: true };
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
};

// Removing task
export const removeTask = async (taskId) => {
  const instance = taskDocInstance(taskId);
  try {
    await deleteDoc(instance);
    return { response: true };
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
};
