import TopBar from "../_components/navigation/topmenu"

export type linkTitle = {
  link: string,
  title: string
}

const testLinks: linkTitle[] = [
  {
    link: 'google.com',
    title: 'Google'
  },
  {
    link: 'youtube.com',
    title: 'Youtube'
  }
]

export default function Home() {
  return (
    <main>
      <div>
        <TopBar links={testLinks}/>
      </div>
    </main>
  )
}
