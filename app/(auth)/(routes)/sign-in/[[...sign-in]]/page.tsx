import { SignIn } from "@clerk/nextjs";

export default function Page() {
    console.log('Page from sign in')

    return (<SignIn />);
};