(function attachChatbot(global) {
  const LOCAL_SERVER_ERROR = "Assistant unavailable. Please start the local server.";
  const OLLAMA_ERROR = "Ollama is not running. Start it with: ollama run qwen2.5:3b";

  function escapeHtml(text) {
    return text
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function formatMessage(text) {
    return escapeHtml(text).replaceAll("\n", "<br>");
  }

  function createChatbot({
    getLanguage,
    scrollToChatbot,
  } = {}) {
    const elements = {};
    const chatHistory = [];
    const chatEndpoint = resolveChatEndpoint();
    let isSending = false;

    function cacheElements() {
      elements.input = document.getElementById("chat-input");
      elements.messages = document.getElementById("chat-messages");
      elements.sendButton = document.getElementById("chat-send");
      elements.suggestedList = document.getElementById("suggested-list");
    }

    function getUserLabel() {
      return getLanguage?.() === "es" ? "TÚ" : "YOU";
    }

    function resolveChatEndpoint() {
      if (window.location.protocol === "file:") {
        return "http://127.0.0.1:8000/chat";
      }

      return `${window.location.origin}/chat`;
    }

    function setPendingState(pending) {
      isSending = pending;

      if (elements.sendButton) {
        elements.sendButton.disabled = pending;
      }

      if (elements.input) {
        elements.input.disabled = pending;
      }
    }

    function addMessage(role, text) {
      if (!elements.messages) {
        return;
      }

      const item = document.createElement("div");
      const isUser = role === "user";

      item.className = `msg ${role}`;
      item.innerHTML = `
        <div class="msg-avatar ${isUser ? "user-av" : ""}">${isUser ? getUserLabel() : "AI"}</div>
        <div class="msg-bubble">${formatMessage(text)}</div>
      `;

      elements.messages.appendChild(item);
      elements.messages.scrollTo({
        top: elements.messages.scrollHeight,
        behavior: "smooth",
      });
    }

    function addTyping() {
      if (!elements.messages) {
        return;
      }

      const item = document.createElement("div");

      item.className = "msg assistant";
      item.id = "typing-indicator";
      item.innerHTML = `
        <div class="msg-avatar">AI</div>
        <div class="msg-bubble msg-typing">
          <div class="dot-typing"></div>
          <div class="dot-typing"></div>
          <div class="dot-typing"></div>
        </div>
      `;

      elements.messages.appendChild(item);
      elements.messages.scrollTo({
        top: elements.messages.scrollHeight,
        behavior: "smooth",
      });
    }

    function removeTyping() {
      const indicator = document.getElementById("typing-indicator");

      if (indicator) {
        indicator.remove();
      }
    }

    function autoResize(textarea = elements.input) {
      if (!textarea) {
        return;
      }

      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }

    async function requestAssistantReply(message, history) {
      const response = await fetch(chatEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          history,
        }),
      });

      let payload = {};

      try {
        payload = await response.json();
      } catch (error) {
        payload = {};
      }

      if (!response.ok) {
        const errorMessage = payload.message || LOCAL_SERVER_ERROR;
        throw new Error(errorMessage);
      }

      return payload.reply;
    }

    async function sendMessage(overrideText = "") {
      if (!elements.input || isSending) {
        return;
      }

      const message = overrideText || elements.input.value.trim();

      if (!message) {
        return;
      }

      elements.input.value = "";
      elements.input.style.height = "auto";

      const historySnapshot = chatHistory.slice();

      addMessage("user", message);
      chatHistory.push({ role: "user", content: message });
      addTyping();
      setPendingState(true);

      try {
        const reply = await requestAssistantReply(message, historySnapshot);
        removeTyping();
        addMessage("assistant", reply);
        chatHistory.push({ role: "assistant", content: reply });
      } catch (error) {
        removeTyping();
        chatHistory.pop();
        const errorMessage = formatErrorMessage(error);
        addMessage("assistant", errorMessage);
      } finally {
        setPendingState(false);
        elements.input?.focus();
      }
    }

    function formatErrorMessage(error) {
      const message = error instanceof Error ? error.message : "";

      if (error instanceof TypeError) {
        return LOCAL_SERVER_ERROR;
      }

      if (!message) {
        return LOCAL_SERVER_ERROR;
      }

      if (
        message.includes("Failed to fetch") ||
        message.includes("NetworkError") ||
        message.includes("Load failed")
      ) {
        return LOCAL_SERVER_ERROR;
      }

      if (message === OLLAMA_ERROR) {
        return OLLAMA_ERROR;
      }

      return message;
    }

    function askSuggested(question) {
      if (!elements.input) {
        return;
      }

      elements.input.value = question;
      autoResize(elements.input);
      void sendMessage(question);

      if (typeof scrollToChatbot === "function") {
        scrollToChatbot();
      }
    }

    function handleSuggestedClick(event) {
      const button = event.target.closest("[data-suggested-question]");

      if (!button) {
        return;
      }

      askSuggested(button.dataset.suggestedQuestion || button.textContent.trim());
    }

    function handleInputKeydown(event) {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        void sendMessage();
      }
    }

    function bindEvents() {
      if (elements.sendButton) {
        elements.sendButton.addEventListener("click", () => {
          void sendMessage();
        });
      }

      if (elements.input) {
        elements.input.addEventListener("keydown", handleInputKeydown);
        elements.input.addEventListener("input", (event) => {
          autoResize(event.target);
        });
      }

      if (elements.suggestedList) {
        elements.suggestedList.addEventListener("click", handleSuggestedClick);
      }
    }

    function init() {
      cacheElements();
      bindEvents();
    }

    return {
      addMessage,
      init,
      sendMessage,
    };
  }

  global.AvailChatbot = {
    createChatbot,
  };
})(window);
