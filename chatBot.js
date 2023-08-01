let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatc = document.getElementById("chatContainer");
let inp = document.getElementById("userInput");

function msgFromChatBot() {
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * (chatbotMsgList.length)) - 1];
    let elem = document.createElement("div");
    elem.classList.add("msg=from-chatbot-container");
    chatc.appendChild(elem);

    let val = document.createElement("span");
    val.textContent = chatbotMsg;
    val.classList.add("msg-from-chatbot");
    elem.appendChild(val);
}

function MsgToChatBot() {
    let ele = document.createElement("div");
    ele.classList.add("msg-to-chatbot-container");
    chatc.appendChild(ele);

    let msg = document.createElement("span");
    msg.classList.add("msg-to-chatbot");
    msg.textContent = inp.value;
    ele.appendChild(msg);
    inp.value = "";
    msgFromChatBot();
}