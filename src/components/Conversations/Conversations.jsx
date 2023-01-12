
import style from './Conversations.module.css'

function Conversations ({ conversation, currentUser, currentChat }) {
  const friend = conversation.users.find(u => u.id !== currentUser.id)

  return (
    <div className={currentChat?.id === conversation.id ? style.conversationActive : style.conversation}>
      <img className={style.conversationImage} src={friend?.image ? friend.image : 'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png'} alt='' />
      <span className={style.conversationName}>{friend?.username}</span>
    </div>
  )
}

export default Conversations
