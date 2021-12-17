import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import Auth from '../components/Auth'
import Account from '../components/Account'

export default function Home() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])


  useEffect(() => {
    getPosts()
  }, [])


  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState(['test','aaa'])
  const [body, setBody] = useState([null])
  async function getPosts() {
    try {
      setLoading(true)

      let { data, error } = await supabase
        .from('posts')
        .select('*')
        // .eq('id')

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setTitle(data.title)
        setBody(data.body)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  console.log(title)
  
  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
      {title.map((titles) => (
        <div key={titles}>
          { title }
        </div>
      ))}
    </div>
  )
}