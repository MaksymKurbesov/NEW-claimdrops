import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../main.jsx";

export default class AuthService {
  constructor() {}

  async registerWithEmailAndPassword(email, password) {
    const trimmedEmail = email.trim();

    try {
      await createUserWithEmailAndPassword(auth, trimmedEmail, password);

      await setDoc(doc(db, "users", email), {
        email: trimmedEmail,
      });
    } catch (err) {
      console.error(err);

      if (err.code === "auth/email-already-in-use") {
        return `Извините, но этот email адрес уже занят. Пожалуйста, выберите другой email адрес для вашей учетной записи.`;
      }

      if (err.code === "auth/invalid-email") {
        return `Вы указали неверный email адрес.`;
      }

      if (err.code === "auth/weak-password") {
        return `Вы указали слишком легкий пароль.`;
      }

      if (
        err.code === "auth/operation-not-allowed" ||
        err.code === "auth/invalid-argument"
      ) {
        return `Вы указали неверные данные. Попробуйте снова.`;
      }

      return err.code;
    }
  }

  async logInWithEmailAndPassword(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err.code);

      if (err.code === "auth/wrong-password")
        return `Неверный email адрес или пароль`;
      if (err.code === "auth/user-not-found")
        return `Такого пользователя не существует`;
      if (err.code === "auth/too-many-requests")
        return `Слишком частые запросы. Подождите примерно 5 минут.`;

      alert(err.code);
    }
  }

  logout() {
    signOut(auth);
  }
}
