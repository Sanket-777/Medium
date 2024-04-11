import { SignInbox } from "../components/SignInBox"
import { Quote } from "../components/Quote"
import { Spinner } from "../components/Spinner"
export const Signin = () => {

    return <>
        <div className="lg:grid grid-cols-2 ">
            <SignInbox />
            <div className="hidden lg:block">
             <Quote />
            </div>
        </div>

    </>
}