'use client'
import { authenticate } from "@/app/_lib/actions";
import { useFormState, useFormStatus } from "react-dom";

export default function LoginForm() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, dispatch] = useFormState(authenticate, undefined)

    return(
        <form action={dispatch}>
            <table>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                      <tr>
                        <input
                        id="email"
                        placeholder="Email"
                        autoComplete="email"
                        name="email"
                        required
                        />
                      </tr>
                      <tr>
                        <input
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          id="password"
                          name="password"
                          required
                          minLength={4}
                        />
                      </tr>
                    <tr>
                      <td >
                        <LoginButton/>
                        <div
                            className="flex h-8 items-end space-x-1"
                            aria-live="polite"
                            aria-atomic="true"
                            >
                            {state === 'CredentialsSignin' && (
                                <>
                                <p className="text-sm text-red-500">Invalid credentials</p>
                                </>
                            )}
                            </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button>
                          Forget password?
                        </button>
                      </td>
                    </tr>
                  </table>
        </form>
    )
}

function LoginButton() {
    const { pending } = useFormStatus();
   
    return (
      <button className="mt-4 w-full" aria-disabled={pending}>
        Log in
      </button>
    );
  }