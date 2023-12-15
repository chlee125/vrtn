import { Outlet } from 'react-router-dom'
import ExampleList from '@components/ExampleList.tsx'

export default function Home() {
  return (
    <main className={'container'}>
      <div>
        <ExampleList />
      </div>
      <div className="md:ml-[19rem]">
        <Outlet />
      </div>
    </main>
  )
}
