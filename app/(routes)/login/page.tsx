'use client'
import LoginForm from "@/app/_components/forms/login-form"
import Layout from "./layout"

export default function Login() {
    return (
        <Layout>
            <tr className="justify-content-center">
            <td>
              <div>
                <div className="p-4">
                  <LoginForm/>
                </div>
              </div>
            </td>
          </tr>
        </Layout>
    )
}