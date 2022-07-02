<script>
  import "../app.css";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { firebaseAuth, firestore } from "../firebase";
  import { goto } from "$app/navigation";
  import { doc, getDoc } from "firebase/firestore";
  import { userData } from "../data";

  if (typeof window !== 'undefined') {
      onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        const docRef = doc(firestore, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Document data:", data);

          if (typeof data.firstName == "string" && typeof data.lastName == "string" && typeof data.type == "string") {
            userData.set({firstName: data.firstName, lastName: data.lastName, type: data.type})
          }

        } else {
          console.log("No user data found!");
          firebaseAuth.signOut();
        }
      }
      else {
        goto('/auth')
      }
    });
  }

</script>
  
<slot />