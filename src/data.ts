import { writable, type Writable } from "svelte/store";

export interface userData {
    firstName: string,
    lastName: string,
    type: string
}

export let userData: Writable<userData> = writable({
    firstName: "",
    lastName: "",
    type: ""
})