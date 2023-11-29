import TopBar from "@/app/_components/navigation/topmenu"

export type linkTitle = {
  link: string,
  title: string
}

const testLinks: linkTitle[] = [
  {
    link: '/dashboard',
    title: 'Dashboard'
  },
  {
    link: '/dashboard/orders',
    title: 'Orders'
  },
  {
    link: '/dashboard/customers',
    title: 'Customers'
  },
  {
    link: '/dashboard/places',
    title: 'Places'
  },
  {
    link: '/dashboard/services',
    title: 'Services'
  }
]

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <TopBar links={testLinks}/>
        {children}
    </div>
  )
}
