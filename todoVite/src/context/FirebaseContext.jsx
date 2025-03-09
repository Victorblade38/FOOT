import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase"; // Import Firebase
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { useAuth } from "./AuthContext"; // Import AuthContext

const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const { currentUser } = useAuth(); // Get user from AuthContext

  useEffect(() => {
    console.log("Todos after setting", todos);
  }, [todos]);
  // 🔹 Fetch Todos when user logs in
  useEffect(() => {
    if (currentUser) {
      fetchUserTodos(currentUser.uid);
    } else {
      setTodos([]); // Clear todos on logout
    }
  }, [currentUser]);

  // 🔹 Fetch Todos for the Logged-in User
  const fetchUserTodos = async (userId) => {
    if (!userId) {
      console.log("User not found");
      return;
    }

    try {
      const q = query(collection(db, "todos"), where("userId", "==", userId));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("1 No todos found for user:", userId); // ✅ Debugging
      } else {
        console.log(
          "1 Fetched todos:",
          querySnapshot.docs.map((doc) => doc.data())
        ); // ✅ Debugging
      }

      const todosArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      //console.log("2 checking querySnapshot", todosArray);

      setTodos(todosArray);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
  // 🔹 Add a Todo
  const addTodo = async (task) => {
    if (!currentUser || !currentUser.uid) {
      console.error("Error: User is not logged in or user ID is missing.");
      return; // Prevent adding a todo without a user ID
    } // Ensure user is logged in

    const { title, priority } = task;
    console.log(task);

    try {
      const docRef = await addDoc(collection(db, "todos"), {
        userId: currentUser.uid,
        title: title,
        priority: priority,
        completed: false,
        createdAt: Date.now(),
      });

      const newTodo = { id: docRef.id, title, priority, completed: false };
      setTodos((prevTodos) => [...prevTodos, newTodo]); // ✅ Update UI immediately
      console.log("success added todo", todos);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // 🔹 Toggle Complete
  const toggleCompleteTodo = async (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );

    try {
      await updateDoc(doc(db, "todos", todoId), {
        completed: !todos.find((todo) => todo.id === todoId)?.completed,
      });
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  // 🔹 Remove a Todo
  const removeTodo = async (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));

    try {
      await deleteDoc(doc(db, "todos", todoId));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{ todos, addTodo, removeTodo, toggleCompleteTodo }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

// Custom Hook to Use FirebaseContext
export const useFirebase = () => useContext(FirebaseContext);
