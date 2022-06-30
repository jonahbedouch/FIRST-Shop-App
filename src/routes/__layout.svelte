<script>
  import "../app.css";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { firebaseAuth } from "../firebase";
  import { goto } from "$app/navigation";

  if (typeof window !== 'undefined') {
      onAuthStateChanged(firebaseAuth, user => {
      if (user) {
  
      }
      else {
        goto('/auth')
      }
    });
  }

</script>
  
<slot />
  