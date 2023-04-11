import { reactive } from "vue";
import { useRouter } from "vue-router";
import * as myFetch from "./myFetch";


// the user is null at first, but then it will be a User object
const session = reactive({
    user: null as User | null,
    isLoading: false,
    messages: [] as {
        msg: string,
<<<<<<< HEAD
        type: "success" | "danger" | "warning" | "info",
    }[],
    redirectUrl: null as string | null,
})
=======
        type: "success" | "error" | "warning" | "info" | "danger"
    }[] 
});
>>>>>>> parent of d51e616 (Full Catchup Push)

// ? makes things optional in typescript
interface User {
    id?: number;
    name: string;
    email?: string;
    photo?: string;
    token?: string;
}


export function useSession() {
    session.messages.push({
        msg: "Welcome to the app!",
        type: "success",
    })
    session.messages.push({
        msg: "You're not logged in yet",
        type: "warning",
    })
    session.messages.push({
        msg: "Please log in",
        type: "danger",
    })
    return session;
}

export function api(url: string, data?: any, method?: string, headers?: any){
    session.isLoading = true;
    return myFetch.api(url, data, method, headers)
        .catch(err => {
            console.error(err);
            session.messages.push({
                msg: err.message ?? JSON.stringify(err),
                type: "danger"

        })
    })
    .finally(() => {
        session.isLoading = false;
    })

}

<<<<<<< HEAD
export function useLogin() {
    const router = useRouter();

    return function() {
        session.user = {
            name: "John Doe",
        }

        router.push(session.redirectUrl ?? "/");
        session.redirectUrl = null;
    }
=======
export function login() {
    session.user = {
        name: "John Doe",
    };
>>>>>>> parent of d51e616 (Full Catchup Push)
}

export function useLogout() {
    const router = useRouter();
    
    return function(){
        // console.log({router})
        session.user = null;
        router.push("/login")
    }
    
}

export function addMessage(msg: string, type: "success" | "error" | "warning" | "info" | "danger") {
    console.log({msg, type})
    session.messages.push({
        msg,
        type
    })
}

export function deleteMessage(index: number) {
    session.messages.splice(index, 1);
}


