import { reactive } from "vue";
import { useRouter } from "vue-router";
import * as myFetch from "./myFetch";


// the user is null at first, but then it will be a User object
const session = reactive({
    user: null as User | null,
    isLoading: false,
    messages: [] as {
        msg: string,
        type: "success" | "error" | "warning" | "info"
    }[] 
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

export function api(url: string){
    session.isLoading = true;
    return myFetch.api(url)
        .catch(err => {
            console.error(err);
            session.messages.push({
                msg: err.message ?? JSON.stringify(err),
                type: "error"

        })
    })
    // .finally(() => {
    //     session.isLoading = false;
    // })

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


