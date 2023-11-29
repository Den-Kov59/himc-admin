import { linkTitle } from "../../(routes)/page"
//import '../_styles/Navigation.scss'
import { signOut } from "../../auth"
import NavLinks from "./content/navLinks"

type topBarArgs = {
    links: linkTitle[]
}
export default function TopBar({links}: topBarArgs) {
    return(
        <div className="top-bar">
          <NavLinks links={links} />

          <form
          action={async () => {
            'use server';
            await signOut();
          }}
          >
            <button>
              <div>Sign Out</div>
            </button>
          </form>
        </div>
    )
}