import ChatBot from "react-simple-chatbot";
import {steps} from "./chatbot/steps"

const App = () => {

  return (
    <div>
      <ChatBot
        floating={true}
        headerTitle="Chatbot Demo"
        steps={steps}
        userAvatar="https://img.hoidap247.com/picture/question/20210116/large_1610807966202.jpg"
        botAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxzrXjzP8toG5bsrvgjTjDlgT3WHG0yRr4A&usqp=CAU"
      />
    </div>
  );
}

export default App;
