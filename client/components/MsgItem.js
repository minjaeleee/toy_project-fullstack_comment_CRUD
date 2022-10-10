import MsgInput from "./MsgInput"

// MsgInput => Update
const MsgItem = ({
  id,
  userId,
  timestamp,
  text,
  onUpdate,
  onDelete,
  isEditing,
  startEdit,
  myId
}) => {

  return (
    <li className="messages__item">
      <h3>
        {userId}{' '}
        <sub>
          {/* {new Date(timestamp).toLocaleString('ko-KR', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          })} */}
        </sub>
      </h3>
      {
        isEditing
          ? <MsgInput mutate={onUpdate} id={id} text={text} />
          : text
      }

      {
        // 수정, 삭제 인증 권한
        myId === userId && <div className="messages_buttons">
          <button onClick={startEdit}>수정</button>
          <button onClick={() => onDelete(id)}>삭제</button>
        </div>
      }

    </li>
  )
}

export default MsgItem