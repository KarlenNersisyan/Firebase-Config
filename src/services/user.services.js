import { db } from "../libs/firebase.libs";

export const addUser = ({ email, uid }) => {
  return db.ref(`/users/${uid}`).set({
    email,
    uid,
  });
};

export const updateProfile = (uid, { description }) => {
  return db.ref("/users/").child(uid).update({
    description,
  });
};
