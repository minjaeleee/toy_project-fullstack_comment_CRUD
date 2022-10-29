import MsgList from "../components/MsgList"
import fetcher from "../fetcher"

const Home = ({ serverMsgs }) => {
  console.log(serverMsgs)
  return (
    <div>
      <MsgList serverMsgs={serverMsgs} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const serverMsgs = await fetcher('get', '/messages')

  return {
    props: { serverMsgs }
  }
}

export default Home