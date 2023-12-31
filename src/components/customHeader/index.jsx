import {ChatBubbleLeftRightIcon,PhoneIcon} from "@heroicons/react/24/solid"
const CustomHeader = ({chat}) => {
  return (
    <div className="chat-header">
      <div className="flexbetween">
        <ChatBubbleLeftRightIcon className="icon-chat"/>
        <h3 className="header-text">{chat.title}</h3>
      </div>
      <div className="flexbetween">
        <PhoneIcon className="icon-phone"/>
        <p className="chat-header">{chat.description}</p>
      </div>
    </div>
  )
}

export default CustomHeader