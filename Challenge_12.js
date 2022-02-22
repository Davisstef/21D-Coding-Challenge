const parseTranscripts = (messages) => {

  let parseMessage = []
   for (let i = 0; i < messages.length; i++){
  parseMessage.push(messages[i].origin + ": " + messages[i].message);
  }
  return (parseMessage)
  }