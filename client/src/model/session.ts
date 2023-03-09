import { reactive } from "vue";
import { useRouter } from "vue-router";


// the user is null at first, but then it will be a User object
const session = reactive({
    user: null as User | null,
});

// ? makes things optional in typescript
interface User {
    id?: number;
    name: string;
    email?: string;
    photo?: string;
    token?: string;
}

export function useSession() {
    return session;
}

export function login() {
    session.user = {
        name: "John Doe",
    };
}

export function useLogout() {
    const router = useRouter();
    
    return function(){
        // console.log({router})
        session.user = null;
        router.push("/login")
    }
    
}


