import { Button } from '@aiherrera/ui'

export default function Home() {
  return (
    <>
      <main className='text-white'>
        <h1 className=' ml-4 h-20 pt-5 text-center text-3xl'>Documentation</h1>
        <section className='flex h-screen w-full items-center justify-center bg-slate-800'>
          <Button text='Test button' />
        </section>
      </main>
    </>
  )
}
