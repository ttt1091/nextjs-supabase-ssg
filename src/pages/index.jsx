import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import Auth from '../components/Auth'
import Account from '../components/Account'
import Link from 'next/link'


export default function Home() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <>
      <div>
        {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
      </div>
      <div>
        <Link href="/products">
          <a>GoToPRODUCTS</a>
        </Link>
      </div>
    </>
  )
} 