import { Section } from "lucide-react"
import { Link } from "react-router-dom"


const Topbar = () => {
  return (
    <Section className='topbar'>
        <div className='flex-between py-4 px-5'>
            <Link to="/" className='flex gap-3 items-center'>
                <img src="/assets/images/logo.svg" width={130} height={325} />
            </Link>
        </div>
        </Section>
  )
}

export default Topbar