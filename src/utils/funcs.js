export function escapeMarkdown(text) {
    return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&');
  }
  

  export function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
  